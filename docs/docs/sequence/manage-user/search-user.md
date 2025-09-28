# Sequence Search User

```plantuml
@startuml
autonumber

actor "Admin/Staff" as AS
boundary UserManagementView as UMV
control UserController as UC
entity USER as U

AS -> UMV: Enter the search criteria in the search box
activate AS
deactivate AS
activate UMV
UMV -> UC: Send searching user information request
activate UC
UC -> U: Search user base on given keywords
activate U
U -> U: Query data
activate U
deactivate U
UC <-- U: Query result
deactivate UC
UMV <-- UC: Query result
UMV -> UMV: Display list of users
deactivate UMV

```

<!-- diagram id="sequence-manage-user-search-user" -->
