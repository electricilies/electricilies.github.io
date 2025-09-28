# Activity Manage User

```plantuml
@startuml
|AS|Admin/Staff

|S|System
start
:(1) Display user management view;

|D|Database

|AS|
:(2) Choose function;
if (Admin) then ((2.1) Demote Admin)
  :Demote Admin;
elseif (Admin) then ((2.2) Demote Staff)
  :Demote Staff;
elseif (Admin) then ((2.3) Promote Customer)
  :Promote Customer;
elseif (Admin) then ((2.4) Promote Staff)
  :Promote Staff;
elseif () then ((2.5) Remove Customer)
  :Remove Customer;
elseif (Admin) then ((2.6) Remove Staff)
  :Remove Staff;
elseif () then ((2.6) Search User)
  :Search User;
elseif () then ((2.7) View Customer Report)
  :View Customer Report;
elseif (Admin) then ((2.8) View Staff Report)
  :View Staff Report;
endif

|S|
stop
@enduml
```

<!-- diagram id="activity-manage-user-manage-user" -->
