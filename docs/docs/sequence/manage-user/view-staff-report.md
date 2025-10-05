# Sequence View Staff Report

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
A -> UMV: Select staff to view report
activate A
activate UMV
deactivate A
UMV -> UC: Get staff report request
activate UC
UC -> U: Get staff report data
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
UC <-- U: Staff report data
deactivate U
UMV <-- UC: Staff report data
deactivate UC
UMV -> UMV: Display staff report
deactivate UMV

@enduml
```

<!-- diagram id="sequence-manage-user-view-staff-report" -->
