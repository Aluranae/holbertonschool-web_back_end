#!/usr/bin/env python3
"""
Module 1-concurrent_coroutines

This module defines an async function that spawns multiple
wait_random coroutines concurrently and returns their results
in ascending order (based on completion time).
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Function"""
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    results = await asyncio.gather(*tasks)
    return (results)
