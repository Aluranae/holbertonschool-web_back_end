# ES6 Classes Project

## Project Presentation
This project introduces and practices the fundamental and advanced features of **ES6 Classes** in JavaScript.  
It is designed to help you understand object-oriented programming (OOP) concepts using the modern ES6 syntax,  
with a strong emphasis on inheritance, encapsulation, getters/setters, static methods, Symbols, and abstract class simulation.

By the end of this project, you will be able to design and implement class-based structures in JavaScript,  
handle inheritance hierarchies, override methods, and understand how JavaScript handles class hoisting  
and primitive conversions through custom `toString`, `valueOf`, and `Symbol.species` usage.

---

## Learning Objectives
At the end of this project, you should be able to explain, without external help:
- How to define a class in ES6
- How to add methods to a class
- How to use getters and setters
- How to implement static methods
- How to override methods in a child class
- How to use `extends` for inheritance
- How to enforce abstract methods in ES6
- How to override `toString()` and `valueOf()` for primitive conversion
- How to use `Symbol.species` to control object cloning
- How hoisting behaves with classes compared to functions

---

## Tasks

### Task 0: You used to attend a place like this at some point
Implement a class `ClassRoom` that accepts one attribute `maxStudentsSize` and stores it internally as `_maxStudentsSize`.

### Task 1: Let's make some classrooms
Import `ClassRoom` and implement a function `initializeRooms` that returns an array of 3 `ClassRoom` objects with sizes `19`, `20`, and `34`.

### Task 2: A Course, Getters, and Setters
Implement a class `HolbertonCourse` with attributes `name` (String), `length` (Number), and `students` (Array of Strings).  
Use underscore attributes and implement type checking via getters and setters.

### Task 3: Methods, static methods, computed methods names... MONEY
Implement a class `Currency` with attributes `code` and `name`.  
Add getters and setters with type checking, and a method `displayFullCurrency` returning `name (code)`.

### Task 4: Pricing
Import `Currency` and implement a class `Pricing` with attributes `amount` (Number) and `currency` (Currency).  
Add a method `displayFullPrice` returning `amount currency_name (currency_code)` and a static method `convertPrice`.

### Task 5: A Building
Implement a class `Building` with attribute `sqft` (Number).  
This class should act as an **abstract class**: any subclass must override the method `evacuationWarningMessage`,  
otherwise an error should be thrown.

### Task 6: Inheritance
Implement a class `SkyHighBuilding` that extends `Building`.  
It should have an additional attribute `floors` and override `evacuationWarningMessage` to return  
`Evacuate slowly the NUMBER_OF_FLOORS floors.`

### Task 7: Airport
Implement a class `Airport` with attributes `name` and `code`.  
Override its default string conversion to return `[object CODE]` using `toString` and `Symbol.toStringTag`.

### Task 8: Primitive - Holberton Class
Implement a class `HolbertonClass` with attributes `size` and `location`.  
Override primitive conversions so that `Number(HolbertonClass)` returns `size` and `String(HolbertonClass)` returns `location`.

### Task 9: Hoisting
Fix the given code by correctly ordering the definitions of `HolbertonClass` and `StudentHolberton`.  
Ensure that students are properly linked to their class and implement getters for their description.

### Task 10: Vroom
Implement a class `Car` with attributes `brand`, `motor`, and `color`.  
Add a method `cloneCar` that returns a new object of the class using `Symbol.species`.

### Task 11: EVCar
Implement a class `EVCar` that extends `Car`.  
Override `Symbol.species` so that `cloneCar()` returns an instance of `Car` instead of `EVCar`.

### Task 12: Let's make some reports
Implement a function `createReportObject` that takes an employees object and returns  
an object with `allEmployees` and a method `getNumberOfDepartments`.

---

## Summary
This project is a comprehensive training on **ES6 Classes** and object-oriented programming in JavaScript.  
It covers the basics of defining classes and constructors, moving on to more advanced topics such as inheritance,  
abstract class simulation, cloning with `Symbol.species`, and primitive type conversions.  
By completing the 13 tasks, you will gain solid skills in designing robust, class-based structures in JavaScript.
