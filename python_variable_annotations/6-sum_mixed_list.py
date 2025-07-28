#!/usr/bin/env python3
"""
Module 6-sum_mixed_list
Ce module contient une fonction qui retourne
la somme d'une liste contenant des entiers et des flottants.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Compute the sum of a list containing integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]):
        A list containing integers and/or float numbers.

    Returns:
        float: The sum of all values in the list, as a float.
    """
    return sum(mxd_lst)
