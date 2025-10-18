# Activity View Staff Report

```plantuml
@startuml
|A|Admin
|S|System
|D|Database

|A|
start
:(1) Select staff to view report;
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

<!-- diagram id="activity-manage-user-view-staff-report" -->