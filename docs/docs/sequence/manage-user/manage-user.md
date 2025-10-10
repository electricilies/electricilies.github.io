# Sequence Manage User

```plantuml
@startuml
autonumber

actor "Admin/Staff" as AS
boundary UserManagementView as UMV
control UserController as UC
entity USER as U

UC -> U: Get list of users
activate UC
activate U
UC <-- U: List of users
deactivate U
deactivate UC
UMV <-- UC: List of users
activate UMV
UMV -> UMV: Display list of users
activate UMV
deactivate UMV
AS -> UMV: Choose function
activate AS

opt Change User Roles - Admin only
  ref over AS, U: Sequence Change User Roles
end

opt Delete Customer
  ref over AS, U: Sequence Remove Customer
end

opt Delete Staff - Admin only
  ref over AS, U: Sequence Remove Staff
end

opt Search User
  ref over AS, U: Sequence Search User
end

opt View Customer Report
  ref over AS, U: Sequence View Customer Report
end

opt View Staff Report - Admin only
  ref over AS, U: Sequence View Staff Report
end

deactivate UMV
deactivate AS

@enduml
```

<!-- diagram id="sequence-manage-user-manage-user" -->
