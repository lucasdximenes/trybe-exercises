# mongodb in python - web scraping - introduction

'''
pymongo is a Python distribution containing tools for working with MongoDB,
and is the recommended way to work with MongoDB from Python.
'''

from pymongo import MongoClient

# connection
client = MongoClient()  # default connection localhost:27017
'''
We can pass other parameters to the MongoClient constructor to connect to a
different host and port.
MongoClient(<host>, <port>)
'''

# database
db = client.catalogue  # database will be created if it does not exist
students = db.books  # collection will be created if it does not exist

# insert
book = {
    "title": "The Lord of the Rings",
}

result = students.insert_one(book)  # insert one document
# result is an object with the id of the inserted document
print(result.inserted_id)

# insert many
books = [
    {
        "title": "The Lord of the Rings",
    },
    {
        "title": "It",
    },
    {
        "title": "The Hobbit",
    }
]

result = students.insert_many(books)  # insert many documents
# result is an object with the ids of the inserted documents
print(result.inserted_ids)

# find
result = students.find_one()  # find one document
print(result)

result = students.find()  # find all documents
for book in result:
    print(book)

# find with filter
# find all documents
result = students.find({"title": "The Lord of the Rings"})
for book in result:
    print(book)


client.close()  # close connection
'''
this .close() method we can use `with` statement
with MongoClient() as client:
    <operations>

and the connection will be closed automatically
'''
