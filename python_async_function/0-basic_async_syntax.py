#!/usr/bin/env python3
"""
Module 0-basic_async_syntax

This module contains a coroutine that waits for a random delay
between 0 and max_delay seconds and returns the delay.
"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """function"""
    delai = random.uniform(0, max_delay)
    await asyncio.sleep(delai)
    return (delai)
