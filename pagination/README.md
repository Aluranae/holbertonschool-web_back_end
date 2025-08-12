# Pagination

## 📖 Project Overview
This project focuses on implementing **pagination techniques** in Python. Pagination is a fundamental concept in backend development, ensuring that large datasets can be retrieved and displayed efficiently without overloading the server or the client.  
The project progressively introduces simple pagination, hypermedia pagination, and deletion-resilient pagination to handle real-world use cases where datasets might change over time.

---

## 🎯 Learning Objectives
By the end of this project, you should be able to:
- Understand the concept of **pagination** and why it is necessary.
- Implement basic pagination logic in Python.
- Create hypermedia pagination, returning additional metadata beyond just the dataset slice.
- Handle **deletion-resilient pagination**, ensuring stable navigation even if data is removed from the dataset.
- Use type annotations in Python for clarity and maintainability.

---

## 📌 Tasks

### **Task 0. Simple helper function**
- Write a function `index_range(page, page_size)` that returns a tuple of size two containing a start index and an end index.
- The function should compute the range of indexes to return in a list for those particular pagination parameters.

---

### **Task 1. Simple pagination**
- Implement a class `Server` that loads a dataset (CSV file).
- Add a method `get_page(page: int = 1, page_size: int = 10) -> List[List]`.
- Use the `index_range` function to return the appropriate slice of the dataset.
- Validate input arguments (both must be positive integers).

---

### **Task 2. Hypermedia pagination**
- Add a method `get_hyper(page: int = 1, page_size: int = 10) -> Dict` to `Server`.
- The method should return a dictionary containing:
  - `"page_size"`: the length of the returned dataset page
  - `"page"`: the current page number
  - `"data"`: the actual page of the dataset
  - `"next_page"`: the number of the next page
  - `"prev_page"`: the number of the previous page
  - `"total_pages"`: the total number of pages in the dataset

---

### **Task 3. Deletion-resilient hypermedia pagination**
- Add a method `get_hyper_index(index: int = None, page_size: int = 10) -> Dict`.
- This method ensures that pagination is **resilient to deletions** from the dataset.
- The dictionary returned should contain:
  - `"index"`: the current start index of the return page
  - `"next_index"`: the index of the first item after the current page
  - `"page_size"`: the current page size
  - `"data"`: the actual page of the dataset

---

## ✅ Final Notes
This project teaches not only how to paginate data, but also how to handle **real-world constraints** such as missing or deleted records. By completing these tasks, you will gain a solid foundation for building robust APIs that serve large datasets efficiently.
