# ES6 Promises

## 📚 Project Overview

This project is part of the Holberton School curriculum and focuses on mastering asynchronous programming using **ES6 Promises** in JavaScript. Promises are essential for handling operations that take time to complete, such as API requests, file loading, and database access. This module emphasizes creating, resolving, rejecting, and chaining promises, as well as handling errors cleanly.

---

## 🎯 Learning Objectives

By completing this project, you will be able to:

- Create and return JavaScript Promises.
- Handle asynchronous success and failure with `.then()`, `.catch()`, and `.finally()`.
- Use `Promise.all`, `Promise.allSettled`, and `Promise.race`.
- Throw and catch exceptions effectively.
- Understand error propagation in asynchronous contexts.
- Apply functional and defensive programming principles when designing promise-based logic.

---

## ✅ Tasks Breakdown

### 0. Keep every promise you make and only make promises you can keep
- Create a function that returns a resolved Promise.
- Test if it returns an instance of Promise.

### 1. Don't make a promise...if you know you can't keep it
- Write a function that returns a resolved or rejected Promise based on a boolean input.

### 2. Catch me if you can!
- Write a function that handles a promise and logs a message in all cases.
- Return a formatted object based on whether the promise resolves or rejects.

### 3. Handle multiple successful promises
- Use `Promise.all()` to wait for two promises.
- Log data from both results, or log an error message if one fails.

### 4. Simple promise
- Write a function that returns a Promise resolved with an object containing two attributes.

### 5. Reject the promises
- Write a function that returns a Promise rejected with a specific error message.

### 6. Handle multiple promises
- Use `Promise.allSettled()` to collect results of resolved and rejected promises.
- Return the list of results in a standardized format.

### 7. Load balancer
- Write a function that returns the value from the first promise to resolve using `Promise.race()`.

### 8. Throw an error
- Write a function that throws an exception when dividing by 0.

### 9. Throw error / try catch
- Write a function that executes another function and appends either the result or error message to an array.
- Always append a final message regardless of outcome.

---

## 🛠 Tech Stack

- JavaScript ES6
- Node.js v20.x
- Jest (for unit testing)
- ESLint (for linting)
- Babel (for ES6 transpiling)

---

## 🚀 Usage

Make sure you’ve run the setup correctly:

```bash
npm install
npm run test
```

To run any individual file using Node with Babel:

```bash
npm run dev <filename.js>
```

---

## 👨‍🏫 Author

Project developed as part of Holberton School curriculum.