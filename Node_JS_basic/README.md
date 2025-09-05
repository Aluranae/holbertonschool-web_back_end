# Node.js Basics Project

## Project Overview
The **Node.js Basics** project is an introduction to backend development using Node.js. It covers the fundamental concepts needed to build basic server-side applications, manipulate files, work with HTTP and Express, and manage asynchronous operations.

By completing this project, students will gain the skills to implement small-scale backend services, handle file I/O operations, and respond to HTTP requests.

---

## Learning Objectives
At the end of this project, you should be able to:
- Understand the basic concepts of Node.js and its runtime environment.
- Use CommonJS and ES6 module systems.
- Perform synchronous and asynchronous file operations.
- Create HTTP servers using the built-in `http` module.
- Build web applications using Express.js.
- Manage routes and handle GET requests.
- Use asynchronous JavaScript patterns such as callbacks, promises, and async/await.
- Parse command-line arguments in Node.js scripts.
- Modularize your application into reusable functions and classes.
- Follow best practices for writing clean, maintainable Node.js code.

---

## Tasks Breakdown

### **Task 0: Executing basic JavaScript with Node.js**
- Write a simple script that logs a message to the console.
- Objective: Ensure Node.js is correctly installed and running.

### **Task 1: Using process.stdin**
- Read user input from the terminal and display a greeting message.
- Objective: Learn how to handle standard input in Node.js.

### **Task 2: Reading a file synchronously**
- Implement a function that reads data from a CSV file synchronously and outputs student information.
- Objective: Understand synchronous file operations with `fs.readFileSync`.

### **Task 3: Reading a file asynchronously**
- Implement the same functionality as Task 2, but using asynchronous file reading.
- Objective: Use `fs.readFile` and work with callbacks or async/await.

### **Task 4: Create a basic HTTP server**
- Use the built-in `http` module to create a server that responds to GET requests.
- Objective: Understand basic HTTP server creation without frameworks.

### **Task 5: HTTP server with file data**
- Extend the server to display the list of students from a CSV file.
- Objective: Combine HTTP server handling with file reading.

### **Task 6: Simple Express server**
- Create a basic Express.js application with a root route returning "Hello Holberton School!".
- Objective: Learn the basics of Express.js.

### **Task 7: Express server with students route**
- Add a `/students` route to display student information read from a CSV file.
- Objective: Handle multiple routes and integrate file reading with Express.

### **Task 8: Organize the server with controllers and routes**
- Implement `AppController` and `StudentsController` classes to handle routes.
- Objective: Apply MVC-like architecture in Node.js.

---

## Requirements
- Node.js >= 12.x
- npm >= 6.x
- Use of ES6 features where possible
- Follow the ESLint configuration provided
- No hard-coded values — paths and parameters should be dynamic

---

## Running the Project
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Run ESLint checks:
   ```bash
   npm run lint
   ```
4. Run tests:
   ```bash
   npm test
   ```

---

## Author
Project completed as part of the Holberton School curriculum.
