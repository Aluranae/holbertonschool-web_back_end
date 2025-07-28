# Python - Variable Annotations

This project is part of the second trimester at Holberton School and serves as an introduction to type hinting and variable annotations in Python 3. It demonstrates how to write clean, readable, and type-safe code using Python’s typing system.

---

## 📚 Learning Objectives

By completing this project, you will be able to:

- Understand what type annotations are and why they are useful.
- Annotate variables with primitive types (`int`, `float`, `str`, `bool`, etc.).
- Annotate function parameters and return values.
- Use complex types from the `typing` module, such as:
  - `List`, `Tuple`, `Dict`, `Union`, `Optional`, `Callable`, `Iterable`, and `Sequence`.
- Work with higher-order functions and closures with proper typing.
- Understand and apply duck typing principles using `Sequence` and `Iterable`.
- Use static type checkers like `mypy`.

---

## ⚙️ Project Requirements

- Python 3.9 on Ubuntu 20.04 LTS
- Files must follow `pycodestyle` (PEP 8) style guidelines
- Each file must be executable and end with a new line
- All functions, classes, and modules must be documented
- Proper use of type annotations is mandatory

---

## 🧩 Tasks Overview

### 0. Basic annotations - add
Write a function that takes two `float` arguments and returns their sum as a `float`.

### 1. Basic annotations - concat
Write a function that takes two `str` arguments and returns their concatenation.

### 2. Basic annotations - floor
Write a function that takes a `float` and returns the floor (integer part) of that float.

### 3. Basic annotations - to string
Write a function that takes a `float` and returns its string representation.

### 4. Define variables
Declare and annotate four variables of types `int`, `float`, `bool`, and `str`.

### 5. Complex types - list of floats
Write a function that takes a list of `float`s and returns their sum as a `float`.

### 6. Complex types - mixed list
Write a function that takes a list of `int`s and `float`s and returns their sum as a `float`.

### 7. Complex types - string and int/float to tuple
Write a function that takes a `str` and an `int` or `float` and returns a `Tuple[str, float]`.

### 8. Complex types - functions
Write a function that takes a `float` and returns a function that multiplies a `float` by that value.

### 9. Let’s duck type an iterable object
Annotate a function that takes an `Iterable` of `Sequence` and returns a `List` of `Tuple`s containing the element and its length.

---

## ✅ Final Notes

This project is an essential step in learning how to write better, safer, and more maintainable Python code using type annotations. It prepares you for working on larger projects where static typing and type checking tools such as `mypy` become increasingly useful.
