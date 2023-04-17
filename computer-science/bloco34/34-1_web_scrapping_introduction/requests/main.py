# requests - web scraping - introduction

import requests  # import requests module

# get the response
# response = requests.get("https://www.google.com")
'''
requests.get(url) - get the response from the url
requests.post(url) - post the response to the url
requests.put(url) - put the response to the url
requests.delete(url) - delete the response from the url

requests.get(url, params) - get the response from the url with params
params can be:
  - headers={"User-Agent": "Mozilla/5.0"}
  - params={"q": "python"}
requests.post(url, data) - post the response to the url with data
  - data={"q": "python"}
requests.put(url, data) - put the response to the url with data
requests.delete(url, data) - delete the response from the url with data
'''
# print the response
'''
response is a response object
response.status_code - 200
response.text - html code
response.headers - headers
'''
# print(response)  # <Response [200]> - because the response is ok
# print(response.status_code)  # 200
# print(response.text)  # html code
# print(response.headers)  # headers

# response = requests.get("https://www.httpbin.org/get")
# print(response.json())  # get json from response

response = requests.get("https://www.httpbin.org/status/404")
response.raise_for_status()  # raise an exception if the response is not ok
