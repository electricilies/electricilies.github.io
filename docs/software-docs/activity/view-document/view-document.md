# Activity View Document

```plantuml
@startuml
|C|Customer
|S|System
|D|Database

|S|
start
:(1) Get lists of documents;
|D|
:(2) Query data;
|S|
:(3) Display list of documents;
if () then (Search)
  |C|
  :(3.1) Enter the search criteria in the search box;
  |S|
  :(3.2) Process searching request;
  |D|
  :(3.3) Query data base on keywords;
  |S|
  :(3.4) Display list of documents;
endif
|C|
:(4) Select document want to view;
|S|
:(5) Get selected document detail;
|D|
:(6) Query data;
|S|
:(7) Display selected document detail;
stop

@enduml
```

<!-- diagram id="activity-view-document-view-document" -->