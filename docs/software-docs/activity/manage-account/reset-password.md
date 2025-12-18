# Activity Reset Password

```plantuml
@startuml
|U|User
|S|System

|U|
start
:(1) Click change password;
|S|
:(2) Display password change form;
repeat
  |U|
  :(3) Enter current password and new password;
  |S|
  :(4) Validate password format;
backward: (4.1) Display error notification;
repeat while () is (Invalid) not (Valid)
|U|
:(5) Click button "Update Password";
|S|
:(6) Validate current password and data;
if () then (Invalid)
  :(6.1) Display error notification;
  |U|
  :(7.1) Confirm error notification;
  end
else (Valid)
  |S|
  :(6.2) Update password;
  :(7.2) Display success notification;
  |U|
  :(8) Confirm notification;
  stop
endif
@enduml
```

<!-- diagram id="activity-manage-account-reset-password" -->