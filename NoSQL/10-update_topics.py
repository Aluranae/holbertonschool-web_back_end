#!/usr/bin/env python3
"""
This script defines a function that updates the topics
of a "school" document in a MongoDB collection based on the name.
"""


def update_topics(mongo_collection, name, topics):
    """
    Update all topics of a school document based on the name.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
