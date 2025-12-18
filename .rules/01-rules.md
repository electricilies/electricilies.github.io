# Rules

## Naming convention

- File in `docs/software-docs/activity/**/*.md` contains activity diagrams and they must have prefix markdown header with `Activity`
- File in `docs/software-docs/sequence/**/*.md` contains sequence diagrams and they must have prefix markdown header with `Sequence`
- File in `docs/software-docs/use-case/**/*.md` contains use-case diagrams and they must have prefix markdown header with `Use Case`
- Below each of diagram must have the following id
  - Syntax
    ```markdown
    <!-- diagram id="{type}-{sub folder name}-{markdown filename}" -->
    ```
  - Example
    ```markdown
    <!-- diagram id="sequence-manage-user-search-user" -->
    <!-- diagram id="sequence-manage-user-remove-user" -->
    <!-- diagram id="activity-view-product-view-suggested-product" -->
    ```
  - With sequence and activity, if the markdown filename is the same as it's parent folder name, and there are other use case in that folder (total file count > 1), then it is generic "use case" of it belong to. So it should contains other diagrams in that parent folder. Else if there is only 1 file, it is a single use case

## Diagrams

- Sequence diagrams contains actor, boundary (view, can be more than 1), controller (like the controller in backend), entity in UPPERCASE (database level)
- Activity diagrams contains 3 "swimlanes": actor, system, database

## Steps

Those use cases like create, update, delete/remove is CRUD use case. With each of their steps:

- Create:
  - Validate actor input (at boundary with sequence and system with activity), if there is error then send error notification back to actor
  - Then validate at the entity (with sequence) or database (with activity)
- Update:
  - With sequence, it should ref to the search sequence
  - Select the entity
  - Enter the new value to update
  - Rest is like the Create above
- Delete/Remove:
  - With sequence, it should ref to the search sequence
  - Select the entity
  - The boundary or system will ask for confirmation, if actor click cancel button then break, else click confirm
  - Validate data at the entity (with sequence) or database (with activity) before deleting data
