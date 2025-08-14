#!/usr/bin/env python3
"""
This script connects to MongoDB and prints statistics
about Nginx logs stored in the 'logs.nginx' collection.
"""

from pymongo import MongoClient

if __name__ == "__main__":

    client = MongoClient("mongodb://127.0.0.1:27017")
    collection = client.logs.nginx

    print(collection.count_documents({}), "logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        print(f"\tmethod {method}: {collection.count_documents({'method': method})}")

    print(collection.count_documents({"method": "GET", "path": "/status"}), "status check")
