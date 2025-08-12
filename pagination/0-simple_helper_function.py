#!/usr/bin/env python3
"""
This module defines a helper function for pagination.
The function computes the start and end indexes for a given page and page size.
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    This function calculates the start and end indexes for pagination.
    It is based on the given page number (1-indexed) and the page size.
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
