# Sequence

## To Do List

- [ ] Some sequence diagrams don't start from the user side, this includes
  - [ ] All of the generic use cases (need to fix to start with "user get list \_\_")
  - [x] Adjust document:
    - [x] Create
  - Manage account:
    - [ ] Sign In
    - [ ] Sign Up
  - Manage Product
    - [ ] Add
  - Manage User
    - [ ] View Customer Report
    - [ ] View Staff Report

## NOTE

- Do not read the `/tms` folder

## General Refactoring Rules for CRUD Operations

### Create Operation Pattern

**Problem**: Sequence doesn't start from user/actor side - starts directly with view displaying form.

**Solution**: Always start with user action initiating the create operation.

**Pattern**:

```plantuml
A -> DMV: Click button "Create [Entity]"
activate A
activate DMV
deactivate A
DMV -> DDV: Navigate to [Entity]DetailView
deactivate DMV
activate DDV
DDV -> DDV: Display with empty form
activate DDV
deactivate DDV
A -> DDV: Enter [entity] detail
activate A
deactivate A
A -> DDV: Click button "Save" to confirm
activate A
deactivate A
DDV -> DDV: Validate data
activate DDV
deactivate DDV
break Invalid data
  DDV -> DDV: Display error notification
  activate DDV
  deactivate DDV
end
DDV -> DC: Send creating [entity] request
activate DC
DC -> D: Send detail
activate D
D -> D: Validate data
activate D
deactivate D
break Invalid data
  DC <-- D: Error notification
  DDV <-- DC: Error notification
  DDV -> DDV: Display error notification
  activate DDV
  deactivate DDV
end
D -> D: Store data
activate D
deactivate D
DC <-- D: Success notification
deactivate D
DDV <-- DC: Success notification
DDV -> DDV: Close view
deactivate DDV
DMV <- DC: Display success notification and list of [entities]
activate DMV
deactivate DC
```

**Key Points**:

1. Start with user clicking "Create [Entity]" button
2. Navigate from management view to detail view (not close)
3. Display empty form in detail view
4. User enters data
5. User clicks save
6. Validate at boundary (DDV) first - break if invalid
7. Send request to controller
8. Validate at entity (DOCUMENT) - break if invalid
9. Store data
10. Return success and navigate back to management view with updated list

### Update Operation Pattern

**Problem**: May not properly reference search operation or start from correct point.

**Solution**: Include optional search reference, then follow selection and update flow.

**Pattern**:

```plantuml
opt Search
  ref over A, D: Sequence Search [Entity]
end
A -> DMV: Select [entity] needs updating
activate A
activate DMV
DMV -> DC: Get selected [entity] detail
activate DC
DC -> D: Get selected [entity] detail
activate D
DC <-- D: Selected [entity] detail
deactivate D
DDV <-- DC: Selected [entity] detail
deactivate DC
activate DDV
DDV -> DDV: Display [entity] detail
activate DDV
deactivate DDV
A -> DDV: Enter [entity] detail
DDV -> DDV: Validate data
activate DDV
deactivate DDV
break Invalid data
  A <-- DDV: Error notification
  DDV -> DDV: Display error notification
  activate DDV
  deactivate DDV
end
A -> DDV: Click button "Save" to confirm
deactivate A
DDV -> DC: Send update [entity] request
activate DC
DC -> D: Send detail
activate D
D -> D: Validate data
activate D
deactivate D
break Invalid data
  DC <-- D: Error notification
  DDV <-- DC: Error notification
  DDV -> DDV: Display error notification
  activate DDV
  deactivate DDV
end
D -> D: Store data
activate D
deactivate D
DC <-- D: Success notification
deactivate D
DDV <-- DC: Success notification
DDV -> DDV: Close view
deactivate DDV
DMV <- DC: Display success notification and list of [entities]
```

**Key Points**:

1. Optional search reference at the start
2. User selects entity to update
3. Fetch and display existing data
4. User enters new data
5. Validate at boundary - break if invalid
6. User clicks save
7. Validate at entity - break if invalid
8. Store updated data
9. Return success and navigate back

### Delete/Remove Operation Pattern

**Problem**: May not include proper confirmation flow.

**Solution**: Include search reference, selection, confirmation dialog, and validation before deletion.

**Pattern**:

```plantuml
opt Search
  ref over A, D: Sequence Search [Entity]
end
A -> DMV: Select [entity] to delete
activate A
activate DMV
DMV -> DMV: Display confirmation message box
activate DMV
deactivate DMV
break Cancel
  A -> DMV: Click "Cancel" Button
  DMV -> DMV: Close confirmation message box
  activate DMV
  deactivate DMV
end
A -> DMV: Click "Confirm" button
deactivate A
DMV -> DC: Send deleting [entity] request
activate DC
DC -> D: Delete selected [entity]
activate D
D -> D: Validate data
activate D
deactivate D
break Invalid data
  DC <-- D: Error notification
  DMV <-- DC: Error notification
  DMV -> DMV: Display error notification
  activate DMV
  deactivate DMV
end
D -> D: Delete data
activate D
deactivate D
DC <-- D: Success notification
deactivate D
DMV <-- DC: Success notification
deactivate DC
DMV -> DMV: Display success notification & update list
deactivate DMV
```

**Key Points**:

1. Optional search reference
2. User selects entity to delete
3. Show confirmation dialog
4. Break if user cancels
5. Send delete request if confirmed
6. Validate at entity before deletion - break if invalid
7. Delete data
8. Return success and update list

### Search Operation Pattern

**Problem**: May not have proper flow from input to result display.

**Solution**: User enters criteria, system queries, displays results.

**Pattern**:

```plantuml
A -> DMV: Enter search criteria
activate A
activate DMV
deactivate A
DMV -> DC: Send searching [entity] request
activate DC
DC -> D: Query [entities] by criteria
activate D
D -> D: Query data
DC <-- D: Query result
deactivate D
DMV <-- DC: Query result
deactivate DC
DMV -> DMV: Show query result
deactivate DMV
```

**Key Points**:

1. User enters search criteria in the view
2. View sends search request to controller
3. Controller queries entity/database
4. Results return through controller to view
5. View displays results

### Generic Use Case Pattern (filename = folder name, multiple files in folder)

**Problem**: Doesn't start with user getting list of entities.

**Solution**: Start with fetching and displaying list, then show options.

**Pattern**:

```plantuml
DC -> D: Get list of [entities]
activate DC
activate D
DC <-- D: List of [entities]
deactivate D
DMV <-- DC: List of [entities]
deactivate DC
activate DMV
DMV -> DMV: Display list of [entities]
activate DMV
deactivate DMV

A -> DMV: Choose function
activate A

opt [Action 1]
  ref over A, D: [Action 1 Reference]
end

opt [Action 2]
  ref over A, D: [Action 2 Reference]
end

deactivate DMV
deactivate A
```

**Key Points**:

1. Controller fetches list from entity first
2. View receives and displays list
3. User chooses function
4. Multiple opt sections for different actions (alphabetically sorted)
5. Generic use case itself is NOT included in the opt sections

## Common Issues to Fix

### Issue 1: Sequence doesn't start from user side

- **Files affected**: Create operations, Sign In, Sign Up, Add Product, View Reports, Generic use cases
- **Fix**: Add user action or data fetching at the beginning

### Issue 2: Missing navigation between views

- **Fix**: Use `DMV -> DDV: Navigate to [View]` instead of closing views

### Issue 3: Validation order incorrect

- **Fix**: Always validate at boundary first, then at entity/database level

### Issue 4: Missing break statements

- **Fix**: Use `break Invalid data` after validation failures

### Issue 5: Improper activation/deactivation

- **Fix**: Ensure all activations have corresponding deactivations
- **Note**: Don't deactivate inside break/opt/alt blocks if the participant is still active outside

### Issue 6: Generic use case includes itself in opt

- **Fix**: Exclude the generic use case from opt sections, only include specific sub-operations

### Issue 7: Missing search reference in Update/Delete

- **Fix**: Add `opt Search` section with reference at the beginning

## Validation Rules

### Boundary Validation (View Level)

- Happens at the view/boundary component
- Validates user input format, required fields, basic constraints
- Uses `break Invalid data` to stop flow
- Shows error notification in the view

### Entity Validation (Database Level)

- Happens at the entity/database component
- Validates business rules, uniqueness, referential integrity
- Uses `break Invalid data` to stop flow
- Error propagates back through controller to view

## Activation/Deactivation Rules

1. Activate when a participant receives a message
2. Deactivate when the participant finishes its task
3. Self-calls (e.g., `DDV -> DDV: Display`) need internal activate/deactivate
4. Don't deactivate inside break/opt/alt if still needed outside
5. Ensure all activations are balanced with deactivations

## Reference Syntax

When referencing other diagrams:

```plantuml
ref over A, D: Sequence [Action Name]
```

Example:

```plantuml
ref over A, D: Sequence Search Document
```
