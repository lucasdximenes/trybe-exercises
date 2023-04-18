# paginated resources - web scraping - introduction
'''
If we want to get all books of 'http://books.toscrape.com/', we need to
navigate through the pages of the website. We can do that by using the
`next` button of the website. The `next` button is a link that points to
the next page of the website. We can get the URL of the `next` button
using the `Selector` class.
'''


from parsel import Selector
import requests

BASE_URL = 'http://books.toscrape.com/catalogue/'
next_page_url = 'page-1.html'
while next_page_url:
    # get next page content
    response = requests.get(BASE_URL + next_page_url)
    selector = Selector(text=response.text)
    # get all books titles
    for book in selector.css('.product_pod'):
        title = book.css('h3 a::attr(title)').get()
        # price = book.css('.price_color::text').get()
        '''
        `price` have a problem because it has a `Â£` character at the beginning
        and we need to remove it. We can do that using the `re()` method of the
        `Selector` class. The `re()` method receives a regular expression and
        returns a list of strings that match the regular expression.
        '''
        price = book.css('.price_color::text').re(r"£\d+\.\d{2}")[0]
        # this is one way to clean up the price or some other data
        '''
        We can use the `strip()` method to remove the spaces at the beginning
        and at the end of the string.
        We can use substring to remove the `Â£` character. 
        '''
        print(title, price)
    # get next page url
    next_page_url = selector.css('.next a::attr(href)').get()
