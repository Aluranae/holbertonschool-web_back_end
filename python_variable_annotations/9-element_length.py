#!/usr/bin/env python3
"""
Module 9-element_length
Ce module contient une fonction qui retourne,
pour chaque élément d'un itérable,
un tuple contenant cet élément et sa longueur.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Generate a list of tuples with elements and their length.

    Args:
        lst (Iterable[Sequence]): An iterable of sequence-like elements.

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples
        containing the element and its length.
    """
    return [(i, len(i)) for i in lst]
