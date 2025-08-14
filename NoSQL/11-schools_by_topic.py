#!/usr/bin/env python3
"""
This script defines a function that retrieves
all schools having a specific topic from a MongoDB collection.
"""


def schools_by_topic(mongo_collection, topic):
    """
    Retrieve the list of schools that have a specific topic.
    """
    return list(mongo_collection.find({"topics": topic}))
