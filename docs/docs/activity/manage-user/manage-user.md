# Activity Manage User

```plantuml
@startuml
|AS|Admin/Staff
|S|System
|D|Database

|S|
start
:(1) Display user management view;

|AS|
:(2) Choose options;
if () then (Demote Admin)
  :(2.1) Activity Demote Admin;
elseif () then (Demote Staff)
  :(2.2) Activity Demote Staff;
elseif () then (Promote Customer)
  :(2.3) Activity Promote Customer;
elseif () then (Promote Staff)
  :(2.4) Activity Promote Staff;
elseif () then (Remove Customer)
  :(2.5) Activity Remove Customer;
elseif () then (Remove Staff)
  :(2.6) Activity Remove Staff;
elseif () then (Search User)
  :(2.7) Activity Search User;
elseif () then (View Customer Report)
  :(2.8) Activity View Customer Report;
else (View Staff Report)
  :(2.9) Activity View Staff Report;
endif

stop
@enduml
@enduml
```

<!-- diagram id="activity-manage-user-manage-user" -->
