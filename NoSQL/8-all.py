#!/usr/bin/env python3

"""
This script defines a function that lists all documents
from a MongoDB collection using pymongo.
"""


def list_all(mongo_collection):
    """
    This function lists all documents in a given MongoDB collection.
    If the collection is empty, it returns an empty list.
    """
    documents = []
    for document in mongo_collection.find():
        documents.append(document)
    return documents
