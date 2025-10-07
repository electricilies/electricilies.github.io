# Activity View Customer Self Report

```plantuml
@startuml
|C|Customer
|S|System
|D|Database

|S|
start
:(1) Display customer report view;
|C|
:(2) Choose which type of report;
:(3) Choose timestamps;
|S|
:(4) Process report request;
|D|
:(5) Query data base on given option;
|S|
:(6) Display report data;
stop

@enduml
```

<!-- diagram id="activity-view-customer-self-report-view-customer-self-report" -->
