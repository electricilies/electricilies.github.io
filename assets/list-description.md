## List 01-Parent Management Form

|     | Column Name  | Column Type         | Label        | Editable\n(Yes/No) | Mandatory\n(Yes/No) | Default Value | Description                                                           | Design Solution | Extracting UT\n(After migrate data) | Per-Processing UT\n(After migrate data) | Transforming UT\n(After migrate data) | Post-Processing UT\n(After migrate data) | Comment |
| --- | ------------ | ------------------- | ------------ | ------------------ | ------------------- | ------------- | --------------------------------------------------------------------- | --------------- | ----------------------------------- | --------------------------------------- | ------------------------------------- | ---------------------------------------- | ------- |
| 1   | Name         | Single line Of Text | Name         | No                 | Yes                 |               | This field describles name of the parent.                             |                 |                                     |                                         |                                       |                                          |         |
| 2   | Email        | Single line Of Text | Email        | No                 | Yes                 |               | This field describles email address of the parent to contact in need. |                 |                                     |                                         |                                       |                                          |         |
| 3   | Phone number | Number              | Phone number | No                 | Yes                 |               | This field describles phone number of the parent.                     |                 |                                     |                                         |                                       |                                          |         |
| 4   | Address      | Single line Of Text | Address      | No                 | Yes                 |               | This field describles address of the parent.                          |                 |                                     |                                         |                                       |                                          |         |
| 5   |              | Button              | Update       | No                 |                     |               | This button will open new form to update information                  |                 |                                     |                                         |                                       |                                          |         |
| 6   |              | Button              | Delete       | No                 |                     |               | This button will display confirmation message box for asking deletion |                 |                                     |                                         |                                       |                                          |         |

| #   | Rule Name        | Rule Description                                                        |
| --- | ---------------- | ----------------------------------------------------------------------- |
| 1   | Validation Rules | If any mandatory field is left blank, system shows error message MSG 1. |
| 2   | Creating Rule    | Only Administrator has permission to create "Parent Management" items.  |
| 3   | Updating Rule    | Only Administrator has permission to update "Parent Management" items.  |
| 4   | Deleting Rule    | Only Administrator has permission to delete "Parent Management" items.  |
| 5   | Reading Rule     | Only Administrator has permission to read "Parent Management" items.    |

## Note

- Column type: Label, Single line Of Text, Multi line of Text, Date Time, Number, Checkbox, Radio Button, Drop-Down List, Address Book, Rich Text, Button, Hyperlink, Attachment, Password, Color Picker, Section, Tab Control, Grid View, View Dialog, Image, Table
