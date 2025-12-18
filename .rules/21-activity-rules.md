# Activity Rules

## Core Structure

- Write diagram in activity PlantUML syntax
- **Activity diagrams must match their associated sequence diagrams** in the same folder structure (replace `activity` with `sequence` in path)
- There are **only two swimlanes**: the first is the system swimlane `|S|`, and the second is the actor's swimlane (which can be `|C|Customer`, `|A|Admin`, or `|St|Staff`).
- The system swimlane `|S|` only represents the actions: **display**, **verify**, **validate**, **query**, **store**, **update**, **delete**, **notify**.
  - All database operations (query, store, update, delete, validate) are in the System swimlane
- The actions of the actor are usually: **select**, **enter information**, **submit information**, **click button "..."**, **confirm**, or represent real-world operations that are not computer behaviors.
  Always make sure that each action is placed in the correct swimlane to which it belongs.

## Flow Rules

- Every node in the diagram must be connected to another node and be connected from another node, except for the start node and the end/stop nodes.
- **All step numbers must be unique across the entire diagram.** When branching, use sub-numbers:
  - First branch: `.1` (e.g., `4.1`, `4.2` for actions within first branch, then `5.1` for error confirmation)
  - Second branch: `.2` (e.g., `4.3`, `5.2` for actions within second branch)
  - After branches: Continue with next whole number
- The names of action nodes should follow the structure: **verb + noun / noun phrase**. Condition nodes should also use verbs with meanings such as check, verify, etc.
- **Only use `if-else`** (not `if-elseif`) for individual use cases and `repeat-repeat while` statements.
  - **Exception**: Generic use cases (files with same name as folder) **can use `elseif`** for routing to other activities
- The branch labels should be written with an uppercase first letter, such as **Yes/No**, **Valid/Invalid**, **Cancel/Confirm**.
- **The start node must always be in the actor's swimlane.**
- **All end nodes (stop/end) must always be in the actor's swimlane.**

## Start and End Patterns

### Start Node
- Always in actor's swimlane
- **Generic use cases**: First action is `Select function {name}`
- **Individual use cases**: 
  - Create: `Select function create {entity}`
  - Update: `Select {entity} to update`
  - Delete: `Select {entity} to delete`
  - Search: `Enter search criteria`
  - View: `Click "{menu item}" in menu` or `View {something}`

### End Nodes - Two Types

**1. Success End - Use `stop`:**
```plantuml
|S|
:(X) Display success notification;
|A|
:(X+1) Confirm notification;
stop
```

**2. Failure/Cancel End - Use `end`:**
```plantuml
|S|
:(X) Display error notification;
|A|
:(X+1) Confirm error notification;
end
```

**3. Cancel (no error):**
```plantuml
|A|
:(X) Click "Cancel" button;
end
```

### Confirmation Before End
- **Success path**: Actor must confirm success notification before `stop`
- **Error path**: Actor must confirm error notification before `end`
- **Cancel path**: Just `end` immediately (no confirmation needed)
- There should be **only one `stop` node** (success) but can have **multiple `end` nodes** (failures/cancels)

## Diagram Types

### Generic Use Case
- **Definition**: Folder has multiple files, and one file has the same name as the folder
- **Example**: `adjust-document/adjust-document.md` (when folder has `create-document.md`, `delete-document.md`, etc.)
- **Pattern**:
  ```plantuml
  |A|
  start
  :(1) Select function {name};
  |S|
  :(2) Display {name} view;
  |A|
  :(3) Choose options;
  if () then (Option1)
    :(3.1) Activity {Name1};
  elseif () then (Option2)  // elseif allowed here
    :(3.2) Activity {Name2};
  else (Option3)
    :(3.3) Activity {Name3};
  endif
  |A|
  stop
  ```

### Single Use Case
- **Definition**: Folder has only 1 file with same name as folder
- **Example**: `view-document/view-document.md` (only file in folder)
- **Pattern**: Follow normal individual use case rules, but it's not a generic dispatcher

## Special Patterns

### CRUD Operations

**Create Pattern:**
```plantuml
|A|
start
:(1) Select function create {entity};
|S|
:(2) Display {entity} detail view;
repeat
  |A|
  :(3) Enter {entity} detail;
  |S|
  :(4) Validate data;
backward: (4.1) Display error notification;
repeat while () is (Invalid) not (Valid)
|A|
:(5) Click button "Save" to confirm;
|S|
:(6) Validate data;
if () then (Invalid)
  :(6.1) Display error notification;
  |A|
  :(7.1) Confirm error notification;  // Note: 7.1 for error path
  end
else (Valid)
  |S|
  :(6.2) Store data;
  :(7.2) Display success notification;  // Note: 7.2 for success path
  |A|
  :(8) Confirm notification;
  stop
endif
```

**Update Pattern:**
- Similar to Create, but starts with "Select {entity} to update"
- Add steps to query and display existing data
- Enter **new** {entity} detail
- Update data instead of Store data

**Delete Pattern:**
```plantuml
|A|
start
:(1) Select {entity} to delete;
|S|
:(2) Display confirmation message box;
|A|
if () then (Cancel)
  :(2.1) Click "Cancel" button;
  end
else (Confirm)
  :(2.2) Click "Confirm" button;
  |S|
  :(3) Validate data;
  if () then (Invalid)
    :(3.1) Display error notification;
    |A|
    :(4.1) Confirm error notification;  // Note: 4.1 for error path
    end
  else (Valid)
    |S|
    :(3.2) Delete data;
    :(4.2) Display success notification;  // Note: 4.2 for success path
    |A|
    :(5) Confirm notification;
    stop
  endif
endif
```

**Search Pattern:**
```plantuml
|A|
start
:(1) Enter search criteria;
|S|
:(2) Query data based on keywords;
:(3) Display search result;
|A|
:(4) Confirm notification;
stop
```

## Formatting Rules

- Do not use notes. Nodes should have more explicit content.
- Add `\n` to create a line break for nodes with content that is too long:
  - Example: `Display no bookings message with explore tours button;` → `Display no bookings message \n with explore tours button;`
- An activity should not exceed 15 lines (a line is counted when there is at least one node on that line).
- There should be no more than two nodes on the same line within the same swimlane.
- If there are more nodes, they should be grouped together to shorten the diagram, and the content of each node should not be too long.

## Matching with Sequence Diagrams

- **Always check the corresponding sequence diagram** before creating/refactoring activity diagram
- Sequence `break` statements → Activity error paths with `end`
- Sequence successful flow → Activity success path with `stop`
- Sequence `opt` (optional) → Activity `if-else` or separate flows
- Sequence validations → Activity validations in System swimlane
- Ensure the order and logic match between sequence and activity diagrams
