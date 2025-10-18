# Activity Create Document

```plantuml
@startuml
|A|Admin
|S|System
|D|Database

|S|
start
:(1) Display document detail view;
repeat
  |A|
  :(2) Enter document detail;
  |S|
  :(3) Validate data;
backward: (3.1) Display error notification;
repeat while () is (Invalid data) not (Valid data)
|A|
:(3.2) Click button "Save" to confirm;
|S|
:(4) Processing creating request;
|D|
:(5) Validate data;
if () then (Invalid data)
  |S|
  :(5.1) Display error notification;
else (Valid data)
  |D|
  :(5.2) Store data;
  |S|
  :(6) Display success notification and list of documents;
endif
|D|
stop

@enduml
```

<!-- diagram id="activity-adjust-document-create-document" -->
