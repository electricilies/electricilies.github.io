# Sequence View Staff Self Report

```plantuml
@startuml
autonumber

actor Staff as S
boundary StaffReportView as SRV
control StaffReportController as SRC
entity STAFF_REPORT as SR

S -> SRV: Navigate to Staff Self Report
activate S
activate SRV
deactivate S
SRV -> SRV: Display with empty information
activate SRV
deactivate SRV
S -> SRV: Choose which type of report
activate S
deactivate S
S -> SRV: Choose timestamps
activate S
deactivate S
SRV -> SRC: Send data and time of report
activate SRC
SRC -> SR: Send data and time of report
activate SR
SR -> SR: Query data base on given option
activate SR
deactivate SR
SRC <-- SR: Query result
deactivate SR
SRV <-- SRC: Report data
deactivate SRC
SRV -> SRV: Display report data
deactivate SRV

@enduml
```

<!-- diagram id="sequence-view-staff-self-report-view-staff-self-report" -->
