#!/usr/bin/env python3
"""
This script defines a function that inserts a new document
into a MongoDB collection using pymongo and keyword arguments (**kwargs).
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in the given collection using keyword arguments.
    Returns the new document's _id.
    """

    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
