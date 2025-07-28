#!/usr/bin/env python3
"""
Module 5-sum_list
Ce module contient une fonction qui retourne
la somme des éléments d'une liste de floats.
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Compute the sum of a list of floats.

    Args:
        input_list (List[float]): A list containing float numbers.

    Returns:
        float: The sum of all float numbers in the list.
    """
    return sum(input_list)
