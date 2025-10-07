# Sequence View Customer Report

```plantuml
@startuml
autonumber

actor "Staff/Admin" as SA
boundary UserManagementView as UMV
control UserController as UC
entity CUSTOMER_REPORT as CR

opt Search
  ref over SA, CR: Sequence Search User
end
UMV -> UMV: Display with empty information
activate UMV
SA -> UMV: Select customer to view report
activate SA
SA -> UMV: Choose which type of report
SA -> UMV: Choose timestamps
deactivate SA
UMV -> UC: Send data and time of report
activate UC
UC -> CR: Send data and time of report
activate CR
CR -> CR: Query data base on given option
activate CR
deactivate CR
UC <-- CR: Query result
deactivate CR
UMV <-- UC: Report data
deactivate UC
UMV -> UMV: Display report data
deactivate UMV

@enduml
```

<!-- diagram id="sequence-manage-user-view-customer-report" -->
