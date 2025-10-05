# Sequence View Customer Report

```plantuml
@startuml
autonumber

actor "Staff/Admin" as SA
boundary UserManagementView as UMV
control UserController as UC
entity USER as U

opt Search
  ref over SA, U: Sequence Search User
end
SA -> UMV: Select customer to view report
activate SA
activate UMV
deactivate SA
UMV -> UC: Get customer report request
activate UC
UC -> U: Get customer report data
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
UC <-- U: Customer report data
deactivate U
UMV <-- UC: Customer report data
deactivate UC
UMV -> UMV: Display customer report
deactivate UMV

@enduml
```

<!-- diagram id="sequence-manage-user-view-customer-report" -->
