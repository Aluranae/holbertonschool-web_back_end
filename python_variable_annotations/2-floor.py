#!/usr/bin/env python3
"""
Module 2-floor
Ce module contient une fonction qui retourne
la partie entière inférieure d'un nombre flottant.
"""
import math


def floor(n: float) -> int:
    """
    Compute the floor of a floating-point number.

    Args:
        n (float): The number to compute the floor of.

    Returns:
        int: The greatest integer less than or equal to `n`.
    """
    return math.floor(n)
