# Activity Refactoring Guide

## To Do List

- [ ] Some activity diagrams don't start from the user side, and end at user side (some end at system, some end at database), this includes
  - All of the generic use cases (need to fix to start with "user get list \_\_")
- [ ] All the diagrams have the third swimlane for database, need to remove that and only have two swimlanes (system and actor)

## Refactoring Process

### Step 1: Read Associated Sequence Diagrams

Before refactoring any activity diagram, **always read the corresponding sequence diagram** from the same folder structure:

- Activity: `docs/software-docs/activity/{folder}/*.md`
- Sequence: `docs/software-docs/sequence/{folder}/*.md`

The activity diagram must match the flow and logic of its associated sequence diagram.

### Step 2: Identify Diagram Type

- **Generic use case**: Folder has multiple files, and one file has the same name as the folder (e.g., `adjust-document/adjust-document.md`)
- **Individual use case**: All other files in the folder (e.g., `create-document.md`, `delete-document.md`)

### Step 3: Apply Refactoring Rules

#### For All Diagrams:

1. **Remove database swimlane** `|D|Database` - keep only `|A|Actor` and `|S|System`
2. **Move database operations to System swimlane**:
   - Query data → System
   - Store data → System
   - Update data → System
   - Delete data → System
   - Validate data → System
3. **Start node**: Must be in actor swimlane
4. **End nodes**: Must be in actor swimlane
5. **Add confirmation before all end nodes**:
   - Success path: `Confirm notification` → `stop`
   - Error path: `Confirm error notification` → `end`
   - Cancel path: Just `end` (no confirmation needed)

#### For Generic Use Cases:

1. First step: `Select function {name}` (actor)
2. Second step: `Display {name} view` (system)
3. Third step: `Choose options` (actor)
4. Use `elseif` for routing to other activities (this is allowed for generic use cases)
5. Reference other activities: `Activity {Name}`

#### For Individual Use Cases:

1. First step varies by type:
   - **Create**: `Select function create {entity}`
   - **Delete**: `Select {entity} to delete`
   - **Update**: `Select {entity} to update`
   - **Search**: `Enter search criteria`
2. **Only use `if-else`** (no `elseif` for individual use cases)
3. Follow CRUD patterns from sequence diagrams

### Step 4: Handle End Nodes

**Important: All step numbers must be unique across all paths in the diagram.**

**Use `stop` for success paths:**

```plantuml
|S|
:(X) Display success notification;
|A|
:(X+1) Confirm notification;
stop
```

**Use `end` for failure/cancel paths:**

```plantuml
|S|
:(X) Display error notification;
|A|
:(X+1) Confirm error notification;
end
```

**Cancel without error:**

```plantuml
|A|
:(X) Click "Cancel" button;
end
```

### Step 5: Validation Flow Pattern

For Create/Update operations:

```plantuml
repeat
  |A|
  :(X) Enter {entity} detail;
  |S|
  :(X+1) Validate data;
backward: (X+1.1) Display error notification;
repeat while () is (Invalid) not (Valid)
|A|
:(X+2) Click button "Save" to confirm;
|S|
:(X+3) Validate data;
if () then (Invalid)
  :(X+3.1) Display error notification;
  |A|
  :(X+4.1) Confirm error notification;  // Error path gets X+4.1
  end
else (Valid)
  |S|
  :(X+3.2) Store/Update data;
  :(X+4.2) Display success notification;  // Success path gets X+4.2
  |A|
  :(X+5) Confirm notification;
  stop
endif
```

**Note:** Step numbers must be unique. When branching:
- Use `.1` suffix for first branch (e.g., `4.1` for error path)
- Use `.2` suffix for second branch (e.g., `4.2` for success path)
- Continue with next whole number after branch merges

### Step 6: Match Sequence Diagram Logic

- Check sequence diagram for `break` statements → these become error paths with `end` in activity
- Check sequence diagram for successful flows → these become success paths with `stop` in activity
- Ensure all validation steps from sequence are reflected in activity
- Match the order of operations between sequence and activity

## Example

- This is from another project, just for reference for syntax
- Do not read the `/tms` folder

### Book a Trip

@./../../tms/docs/docs/activity/manage-personal-booking/book-a-trip.md

### Checkout Cart

@./../../tms/docs/docs/activity/manage-personal-booking/checkout-cart.md

### View and Filter Personal Bookings

@./../../tms/docs/docs/activity/manage-personal-booking/view-and-filter-personal-bookings.md
