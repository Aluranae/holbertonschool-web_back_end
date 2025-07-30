# Python - Async Comprehension

## 📌 Project Overview

This project is a continuation of the **Python Async** project and focuses specifically on mastering asynchronous comprehensions and asynchronous generators in Python. Through three well-structured tasks, you'll explore how to combine asynchronous iteration with comprehension syntax, how to generate asynchronous values, and how to execute multiple asynchronous tasks concurrently.

It uses Python 3.9 and the asyncio library, and assumes familiarity with the basics of `async def`, `await`, and asynchronous execution.

---

## 🎯 Learning Objectives

By the end of this project, you should be able to:

- Understand what an **asynchronous generator** is and how to define one
- Use **async for** loops to iterate over asynchronous generators
- Apply **asynchronous comprehensions** to collect async results into a list
- Run **multiple coroutines in parallel** using `asyncio.gather`
- Measure execution time of asynchronous operations with `time.perf_counter`

---

## 🧩 Tasks

### ✅ Task 0: Async Generator – `0-async_generator.py`

- Define a coroutine called `async_generator()` that loops 10 times.
- Each loop:
  - Waits 1 second asynchronously (`await asyncio.sleep(1)`)
  - Yields a random float between 0 and 10 using the `random` module
- Returns an **asynchronous generator** consumed with `async for`.

### ✅ Task 1: Async Comprehension – `1-async_comprehension.py`

- Import `async_generator()` from the previous task.
- Define a coroutine `async_comprehension()` that:
  - Uses an **async comprehension** to collect all 10 floats from the generator
  - Returns a `List[float]` of these values
- Demonstrates the syntax: `[value async for value in async_generator()]`

### ✅ Task 2: Measure Runtime – `2-measure_runtime.py`

- Import `async_comprehension()` from task 1.
- Define a coroutine `measure_runtime()` that:
  - Executes `async_comprehension()` **four times in parallel**
  - Uses `asyncio.gather()` to run the four coroutines concurrently
  - Measures the total runtime using `time.perf_counter()`
  - Returns the elapsed time (around 10 seconds)

---

## ⚙️ Requirements

- Python version: **3.9**
- All code is tested under: **Ubuntu 20.04 LTS**
- Style: **pycodestyle** (v2.5)
- Each Python file:
  - Starts with `#!/usr/bin/env python3`
  - Ends with a newline
  - Includes proper docstrings for all modules and functions
  - Is type-annotated

---

## 🧠 Notes

- The key takeaway is that `asyncio.gather()` allows running multiple `async` functions in parallel. Even if each coroutine waits for 10 seconds in total, running 4 of them **in parallel** still takes only ~10 seconds, not 40.
- Use `time.perf_counter()` instead of `time.time()` when you need precise timing.

---

## 👨‍💻 Author

Project done as part of the second trimester at Holberton School.
