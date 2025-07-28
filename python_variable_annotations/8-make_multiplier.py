#!/usr/bin/env python3
"""
Module 8-make_multiplier
Ce module contient une fonction qui retourne une autre fonction
permettant de multiplier un float par un coefficient donné.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Return a function that multiplies a float by a predefined multiplier.

    Args:
        multiplier (float): The value to multiply with.

    Returns:
        Callable[[float], float]: A function that takes a float
        and returns the product as float.
    """
    def multiply(value: float) -> float:
        return value * multiplier
    return multiply
