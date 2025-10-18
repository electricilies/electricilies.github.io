# Sequence Delete User

```plantuml
@startuml
autonumber

actor Admin as A
boundary UserManagementView as UMV
control UserController as UC
entity USER as U

opt Search
  ref over A, U: Sequence Search User
end
A -> UMV: Select user to delete
activate A
activate UMV
UMV -> UMV: Display confirmation message box
activate UMV
deactivate UMV
break Cancel
  A -> UMV: Click "Cancel" Button
  UMV -> UMV: Close confirmation message box
  activate UMV
  deactivate UMV
end
A -> UMV: Click "Confirm" button
deactivate A
UMV -> UC: Send deleting user request
activate UC
UC -> U: Delete selected user account
activate U
U -> U: Validate data
activate U
deactivate U
break Invalid data
  UC <-- U: Error notification
  UMV <-- UC: Error notification
  UMV -> UMV: Display error notification
  activate UMV
  deactivate UMV
end
U -> U: Delete user
activate U
deactivate U
UC <-- U: Success notification
deactivate U
UMV <-- UC: Success notification
deactivate UC
UMV -> UMV: Display success notification & update list
deactivate UMV
deactivate A

@enduml
```

<!-- diagram id="sequence-manage-user-delete-user" -->
