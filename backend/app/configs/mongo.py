import os
from pymongo import MongoClient
from bson import ObjectId
from app.helpers.mock_data import quote_list


class Mongo():
    client = None

    def __init__(self):
        conn = MongoClient(os.getenv('MONGODB_URL', default='mongo'))
        self.client = conn.quote
        conn.quote['quote'].delete_many({})
        conn.quote['quote'].insert_many(quote_list)

    def find(self, collection):
        return self.client[collection].find()

    def save(self, collection, item):
        return self.client[collection].insert(item)

    def find_by_id(self, collection, id):
        return self.client[collection].find_one({"_id": ObjectId(id)})

    def remove(self, collection, id):
        self.client[collection].delete_one({"_id": ObjectId(id)})

    def update(self, collection, id, item):
        return self.client[collection].find_one_and_update({"_id": ObjectId(id)}, {
            "$set": item
        })
