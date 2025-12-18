# Activity Manage User

```plantuml
@startuml
|AS|Admin/Staff
|S|System

|AS|
start
:(1) Select function manage user;
|S|
:(2) Display user management view;
|AS|
:(3) Choose options;
if () then (Change User Roles)
  :(3.1) Activity Change User Roles;
elseif () then (Delete User)
  :(3.2) Activity Delete User;
elseif () then (Search User)
  :(3.3) Activity Search User;
elseif () then (View Customer Report)
  :(3.4) Activity View Customer Report;
else (View Staff Report)
  :(3.5) Activity View Staff Report;
endif
|AS|
stop
@enduml
```

<!-- diagram id="activity-manage-user-manage-user" -->
