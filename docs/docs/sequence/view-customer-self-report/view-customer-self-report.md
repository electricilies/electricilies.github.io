# Sequence View Customer Self Report

```plantuml
@startuml
autonumber

actor Customer as C
boundary ReportView as RV
control CustomerReportController as CRC
entity CUSTOMER_REPORT as CR

C -> RV: View self report
activate C
deactivate C
activate RV
RV -> CRC: Get customer self report
activate CRC
CRC -> CR: Query customer self report
activate CR
CR -> CR: Query data
activate CR
deactivate CR
CRC <-- CR: Customer report data
deactivate CR
RV <-- CRC: Display customer report
deactivate CRC
RV -> RV: Display report result
deactivate RV

@enduml
```

<!-- diagram id="sequence-view-customer-self-report-view-customer-self-report" -->
