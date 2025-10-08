
# Test Cases for To-Do Planner

| ID  | Scenario                     | Steps                                              | Expected Result                        |
|-----|------------------------------|----------------------------------------------------|----------------------------------------|
| TC1 | Add valid task               | 1. Enter "Buy milk" 2. Click Add button            | Task "Buy milk" appears in list        |
| TC2 | Add empty task               | 1. Leave input blank 2. Click Add button           | No task added or error message shown   |
| TC3 | Add long task (200 chars)    | 1. Enter 200-char text 2. Click Add                | Error or truncated task in list        |
| TC4 | Complete task                | 1. Add task 2. Click Complete button               | Task marked as completed               |
| TC5 | Undo completed task          | 1. Complete task 2. Click Undo button              | Task unmarked as completed             |
| TC6 | Delete task                  | 1. Add task 2. Click Delete button                 | Task removed from list                 |
| TC7 | Add task with Enter key      | 1. Enter "Read book" 2. Press Enter                | Task "Read book" appears in list       |
| TC8 | Verify empty list message    | 1. Open app with no tasks                          | "No tasks" message displayed           |
| TC9 | Add multiple tasks (3)       | 1. Add 3 tasks consecutively                       | All 3 tasks appear in list             |
| TC10| Check task persistence       | 1. Add task 2. Reload page                         | Task remains in list                   |
| TC11| Verify UI title              | 1. Open app                                        | Title "My To-Do List" displayed        |
| TC12| Test button accessibility    | 1. Tab to Add button 2. Press Enter                | Button clickable via keyboard          |
| TC13| Cross-browser: Add task      | 1. In Firefox, chrome, safari add task                            | Task added successfully                |
| TC14| Cross-browser: Delete task   | 1. In Firefox,chrome, safari delete task                         | Task removed successfully              |
| TC15| Usability: Input field focus | 1. Open app                                        | Input field auto-focused for typing    |
