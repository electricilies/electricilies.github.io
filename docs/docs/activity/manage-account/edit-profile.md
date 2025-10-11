# Activity Edit Profile

```plantuml
@startuml
|U|User
|S|System
|D|Database

|S|
start
:(1) Display profile view;
repeat
  |U|
  :(2) Enter new profile information;
  |S|
  :(3) Validate data;
backward: (3.1) Display error notification;
repeat while () is (Invalid input) not (Valid input)
|U|
:(3.2) Click button "Save Changes" to confirm;
|S|
:(4) Process update profile request;
|D|
:(5) Validate data;
if () then (Invalid data)
  |S|
  :(5.1) Display error notification;
else (Valid data)
  |D|
  :(5.2) Update profile data;
  |S|
  :(6) Display success notification and updated profile;
endif
|D|
stop

@enduml
```

<!-- diagram id="activity-manage-account-edit-profile" -->