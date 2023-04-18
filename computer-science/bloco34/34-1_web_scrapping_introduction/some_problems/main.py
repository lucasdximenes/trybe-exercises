# web scraping - introduction - some problems

import requests
import time

# Rate limit - limit of requests per second or per minute
for _ in range(15):
    break  # comment this line to see the problem
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    '''
    Some websites have a limit of requests per second or per minute
    and if you exceed this limit, you will get a 429 error
    This is a mechanism to prevent bots from accessing the website and
    overloading the server with requests (DDoS attack)
    '''
    print(response.status_code)
    '''
    200
    200
    200
    200
    200
    200
    200
    200
    200
    200
    429 - because the limit of requests per second was exceeded
    200
    200
    429 - because the limit of requests per second was exceeded
    429 - because the limit of requests per second was exceeded
    '''
    # One way to solve this problem is to wait a few seconds between requests
    time.sleep(5)  # wait 5 seconds
    '''
    Now all requests will be ok
    '''


# Blocking - waiting for the response:
# response = requests.get("https://httpbin.org/delay/5")
# print(response.status_code)  # 200 - but it took 5 seconds to get the response

# One way to solve this problem is to throw a timeout error
try:
    response = requests.get("https://httpbin.org/delay/5", timeout=3)
except requests.ReadTimeout:
    print("Request timed out, trying again")
    response = requests.get("https://httpbin.org/delay/5", timeout=6)
finally:
    print("This code will always be executed")
    # 200 - but it took 5 seconds to get the response
    # print(response.status_code)
