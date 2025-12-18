# Activity Change User Roles

```plantuml
@startuml
|A|Admin
|S|System

|A|
start
:(1) Select user to change roles;
|S|
:(2) Query user detail;
:(3) Display user detail;
repeat
  |A|
  :(4) Update user roles;
  |S|
  :(5) Validate data;
backward: (5.1) Display error notification;
repeat while () is (Invalid) not (Valid)
|A|
:(6) Click button "Change Roles" to confirm;
|S|
:(7) Validate roles;
if () then (Invalid)
  :(7.1) Display error notification;
  |A|
  :(8.1) Confirm error notification;
  end
else (Valid)
  |S|
  :(7.2) Update roles;
  :(8.2) Display success notification 
and list of users;
  |A|
  :(9) Confirm notification;
  stop
endif
@enduml
```

<!-- diagram id="activity-manage-user-change-user-roles" -->
