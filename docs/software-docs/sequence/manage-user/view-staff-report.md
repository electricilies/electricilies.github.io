# Sequence View Staff Report

```plantuml
@startuml
autonumber

actor Admin as A
boundary UserManagementView as UMV
control UserController as UC
entity STAFF_REPORT as SR

opt Search
  ref over A, SR: Sequence Search User
end
A -> UMV: Click button "View Staff Report"
activate A
activate UMV
deactivate A
UMV -> UMV: Display with empty information
activate UMV
deactivate UMV
A -> UMV: Select staff to view report
activate A
deactivate A
A -> UMV: Choose which type of report
activate A
deactivate A
A -> UMV: Choose timestamps
activate A
deactivate A
UMV -> UC: Send data and time of report
activate UC
UC -> SR: Send data and time of report
activate SR
SR -> SR: Query data base on given option
activate SR
deactivate SR
UC <-- SR: Query result
deactivate SR
UMV <-- UC: Report data
deactivate UC
UMV -> UMV: Display report data
deactivate UMV

@enduml
```

<!-- diagram id="sequence-manage-user-view-staff-report" -->
