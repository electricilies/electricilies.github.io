# Convention

# Naming convention

- File in `docs/docs/activity/**/*.md` contains activity diagrams and they must have prefix markdown header with `Activity`
- File in `docs/docs/sequence/**/*.md` contains sequence diagrams and they must have prefix markdown header with `Sequence`
- File in `docs/docs/use-case/**/*.md` contains use-case diagrams and they must have prefix markdown header with `Use Case`
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
- With sequence and activity, if the markdown filename is the same as it's parent folder name, then it is generic "use case" of it belong to. So it should contains other diagrams in that parent folder.
