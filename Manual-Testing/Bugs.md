# Bug Reports for To-Do Planner

## Bug 1: Empty Task Added
- **Summary**: Empty task added when clicking Add without input.
- **Steps to Reproduce**:
  1. Open the app.
  2. Leave the input field blank.
  3. Click the Add button.
- **Actual Result**: Empty task appears in the list.
- **Expected Result**: Error message displayed or no task added.
- **Severity**: Medium
- **Environment**: Chrome 129.0
- **Screenshot**: [/screenshots/empty-task-bug.png]

## Bug 2: Long Task Input Not Truncated
- **Summary**: 200-character task input added without truncation.
- **Steps to Reproduce**:
  1. Enter 200-character text in the input field.
  2. Click Add.
- **Actual Result**: Full text appears, breaking UI layout.
- **Expected Result**: Task truncated or error shown.
- **Severity**: Low
- **Environment**: Firefox 131.0
- **Screenshot**: [/screenshots/long-task-bug.png]

## Bug 3: Undo Button Misaligned
- **Summary**: Undo button misaligned after completing a task.
- **Steps to Reproduce**:
  1. Add a task.
  2. Click Complete.
  3. Observe Undo button.
- **Actual Result**: Undo button overlaps task text.
- **Expected Result**: Button aligned properly.
- **Severity**: Low
- **Environment**: Chrome 129.0
- **Screenshot**: [/screenshots/undo-button-bug.png]
