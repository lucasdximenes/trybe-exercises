# web scraping - introduction - analyzing response

'''
We use `parcel` library to analyze the response. It is a library that
provides a set of tools to use in the process of web scraping. For example,
we can use `Selector()` to get the HTML content of the response and then navigate
through the HTML tree to find the desired information.
'''

import requests
from parsel import Selector
# `Selector()` is a class that allows us to navigate through the HTML tree
URL = 'http://books.toscrape.com/'
# get the response
response = requests.get(URL)
selector = Selector(text=response.text)
# text is the HTML content of the response

# get the title of the page
title = selector.css('title::text').get()  # get() returns the first element
# `title::text` is a CSS selector that selects the text of the element with the
# tag `title`
print(title)

# get all books titles
thumbnail_url_selector = "div.image_container a::attr(href)"
# a::attr(href) is a CSS selector that selects the value of the attribute `href`
# of the element with the tag `a`
thumbnail_urls = selector.css(thumbnail_url_selector).getall()
# getall() returns all elements that match the CSS selector
# `thumbnail_url` is a list of strings
for thumb_url in thumbnail_urls:
    # request the URL of the thumbnail
    thumbnail_request = requests.get(URL + thumb_url)
    # URL is the base URL of the website
    # thumb_url is the URL of the thumbnail of the book which is relative to the
    # base URL
    thumbnail_selector = Selector(text=thumbnail_request.text)
    # get the title of the book
    book_title_selector = "div.product_main h1::text"
    # h1::text css to get only the text
    book_title = thumbnail_selector.css(book_title_selector).get()
    print(book_title)
