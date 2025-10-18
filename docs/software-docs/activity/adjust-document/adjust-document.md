# Activity Adjust Document

```plantuml
@startuml
|A|Admin
|S|System
|D|Database

|S|
start
:(1) Display document management view;

|A|
:(2) Choose options;
if () then (Create)
  :(2.1) Activity Create Document;
elseif () then (Delete)
  :(2.2) Activity Delete Document;
elseif () then (Search)
  :(2.3) Activity Search Document;
else (Update)
  :(2.4) Activity Update Document;
endif

|S|
stop
@enduml
```

<!-- diagram id="activity-adjust-document-adjust-document" -->
