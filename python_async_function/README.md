# Python - Async

## 📚 Project Overview

This project introduces asynchronous programming in Python using the `async` and `await` syntax, along with the `asyncio` module. You'll learn how to build coroutines, execute them concurrently, manage execution timing, and create and orchestrate tasks.

Asynchronous programming is a powerful tool to handle concurrency and improve the performance of I/O-bound operations, especially useful when dealing with APIs, I/O, or task queues.

---

## 🎯 Learning Objectives

- Understand what `async` and `await` mean in Python
- Know how to define a coroutine using `async def`
- Pause execution asynchronously using `await`
- Use `asyncio.sleep()` to simulate non-blocking delays
- Launch multiple coroutines concurrently
- Measure the runtime of concurrent executions
- Use `asyncio.Task` to manage concurrent execution
- Use `asyncio.gather()` to run coroutines in parallel
- Use `asyncio.as_completed()` to collect results as tasks finish

---

## 📌 Tasks Breakdown

### ✅ Task 0: The basics of async
**File:** `0-basic_async_syntax.py`  
Write an async coroutine `wait_random` that takes an integer `max_delay` and waits for a random delay (between 0 and `max_delay` seconds) using `random.uniform()` and `asyncio.sleep()`. It returns the delay as a float.

### ✅ Task 1: Let's execute multiple coroutines at the same time with async
**File:** `1-concurrent_coroutines.py`  
Write an async routine `wait_n` that takes in `n` and `max_delay`, and calls `wait_random` `n` times concurrently using `asyncio.create_task()` and `asyncio.gather()` to return the list of delays.

### ✅ Task 2: Measure the runtime
**File:** `2-measure_runtime.py`  
Write a function `measure_time(n, max_delay)` that calculates the average time it takes to run `wait_n(n, max_delay)`, using the `time` module. Return the total runtime divided by `n`.

### ✅ Task 3: Tasks
**File:** `3-tasks.py`  
Write a regular function `task_wait_random(max_delay)` that returns an `asyncio.Task` created from calling `wait_random(max_delay)` using `asyncio.create_task()`.

### ✅ Task 4: Tasks
**File:** `4-tasks.py`  
Write an async function `task_wait_n(n, max_delay)` that behaves like `wait_n`, but uses `task_wait_random` instead of `wait_random`, and collects the results in the order they complete using `asyncio.as_completed()`.

---

## ✅ Requirements

- Python 3.9+
- Files must be executable and end with a new line
- Use `#!/usr/bin/env python3` at the top of each file
- Type annotations are mandatory
- Follow `pycodestyle` (PEP8) for code style
- Use proper module and function docstrings
