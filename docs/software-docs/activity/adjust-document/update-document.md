# Activity Update Document

```plantuml
@startuml
|A|Admin
|S|System

|A|
start
:(1) Select document to update;
|S|
:(2) Query document detail;
:(3) Display document detail;
repeat
  |A|
  :(4) Enter new document detail;
  |S|
  :(5) Validate data;
backward: (5.1) Display error notification;
repeat while () is (Invalid) not (Valid)
|A|
:(6) Click button "Save" to confirm;
|S|
:(7) Validate data;
if () then (Invalid)
  :(7.1) Display error notification;
  |A|
  :(8.1) Confirm error notification;
  end
else (Valid)
  |S|
  :(7.2) Update data;
  :(8.2) Display success notification;
  |A|
  :(9) Confirm notification;
  stop
endif
@enduml
```

<!-- diagram id="activity-adjust-document-update-document" -->
