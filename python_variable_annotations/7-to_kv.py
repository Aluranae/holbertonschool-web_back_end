#!/usr/bin/env python3
"""
Module 7-to_kv
Ce module contient une fonction qui retourne
un tuple contenant une chaîne et le carré d'un nombre.
"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Return a tuple with a string and the square of a number (as float).

    Args:
        k (str): The key string.
        v (Union[int, float]): A value to square.

    Returns:
        Tuple[str, float]: A tuple containing
        the string and the square of the value.
    """
    return (k, v ** 2)
