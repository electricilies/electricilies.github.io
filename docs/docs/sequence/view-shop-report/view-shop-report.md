# Sequence View Shop Report

```plantuml
@startuml
autonumber

actor Admin as A
boundary ReportView as RV
control ShopReportController as SRC
entity SHOP_REPORT as SR

A -> RV: View shop report
activate A
activate RV
RV -> SRC: Get shop report
activate SRC
SRC -> SR: Query shop report
activate SR
SR -> SR: Query data
activate SR
deactivate SR
SRC <-- SR: Shop report data
deactivate SR
RV <-- SRC: Display shop report
deactivate SRC
A <-- RV: View report result
deactivate RV
deactivate A

@enduml
```

<!-- diagram id="sequence-view-shop-report-view-shop-report" -->
