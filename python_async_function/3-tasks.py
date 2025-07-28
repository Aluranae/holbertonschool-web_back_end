#!/usr/bin/env python3
"""
Module 3-tasks

This module defines a regular function that returns
an asyncio.Task object for a coroutine that waits a random delay.
"""

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Function"""
    task = asyncio.create_task(wait_random(max_delay))
    return task
