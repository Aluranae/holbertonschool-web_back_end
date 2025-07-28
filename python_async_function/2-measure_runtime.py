#!/usr/bin/env python3
"""
Module 2-measure_runtime

This module defines a function that calculates the average runtime
of the wait_n coroutine by measuring total elapsed time.
"""

import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """"Function"""
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    total = end - start
    return total / n
