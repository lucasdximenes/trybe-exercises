'''
Given the following `books.json` in JSON format, read its contents and calculate
the percentage of books in each category in relation to the total number of
books. The result must be written in a file in CSV format like the example
below:

```csv
category,percentage
Python,0.23201856148491878
Java,0.23201856148491878
PHP,0.23201856148491878
```
'''

import json
import csv

with open("./books.json", "r") as file:
    books = json.load(file)

categories = {}  # dictionary
for book in books:
    for category in book["categories"]:
        if category not in categories:
            categories[category] = 0
        categories[category] += 1

with open("./books.csv", "w") as file:
    writer = csv.writer(file)
    writer.writerow(["category", "percentage"])
    # tuple unpacking since categories.items() is a list of tuples (category, count)
    for category, count in categories.items():  # dict_items // list of tuples
        percentage = count / len(books)  # percentage of books in each category
        # we are dividing the number of books in each category by the total
        # number of books
        writer.writerow([category, percentage])
