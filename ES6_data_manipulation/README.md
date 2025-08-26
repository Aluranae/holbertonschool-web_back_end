# ES6 Data Manipulation

## 📚 Project Overview

This project focuses on practicing and mastering ES6+ features in JavaScript related to **data manipulation**. You'll learn to work efficiently with arrays, sets, maps, and typed arrays. It is a foundational project to better understand functional programming patterns and modern JavaScript data structures.

---

## 🎯 Learning Objectives

- Understand and use **Array methods**: `map()`, `filter()`, `reduce()`
- Work with **Typed Arrays** and `DataView`
- Understand and use **Set** and **Map** data structures
- Handle **data transformation** using functional programming paradigms
- Improve your **code clarity** and **robustness** with proper type checks
- Write concise and idiomatic **ES6+ JavaScript**

---

## ✅ Tasks Breakdown

### 0. Basic list of objects
Create a function that returns a list of student objects with properties `id`, `firstName`, and `location`.

---

### 1. More mapping
Create a function that returns an array of student IDs using `map()`.

---

### 2. Filter
Create a function that filters students by their `location` using `filter()`.

---

### 3. Reduce
Create a function that returns the sum of all student `id` values using `reduce()`.

---

### 4. Combine
Create a function that filters students by `location` and adds `grade` info to each one using both `filter()` and `map()`.

---

### 5. Typed Arrays
Create a function that creates an `ArrayBuffer` and writes an `Int8` value at a specific position using `DataView`.

---

### 6. Set data structure
Create a function that returns a `Set` from an array (removes duplicates).

---

### 7. More set data structure
Create a function that checks if **all** values from an array exist in a `Set` (returns boolean).

---

### 8. Clean set
Create a function that returns a hyphen-separated string of all values in a `Set` that start with a given prefix.

---

### 9. Map data structure
Create a function that returns a `Map` with specific grocery items and their quantities.

---

### 10. More map data structure
Create a function that updates all entries in a `Map` where the value is `1`, setting them to `100`. If the argument is not a Map, throw an error.

---

## 🧪 Testing & Linting

All tasks are tested using **Jest** and must pass **ESLint** verification.

```bash
$ npm run test        # run tests
$ npm run full-test   # run tests + lint
```

---

## ⚙️ Environment

- Node.js 20.x.x
- npm 9.x.x
- Jest, Babel, ESLint
- Ubuntu 20.04 LTS

---

## 🧠 Author Notes

This project is part of the **Holberton School curriculum** and helps build a strong foundation in manipulating data structures using modern JavaScript.
