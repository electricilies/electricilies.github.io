# Activity Recover Account

```plantuml
@startuml
|U|User
|S|System

|U|
start
:(1) Click "Forgot Password" link;
|S|
:(2) Display password recovery form;
repeat
  |U|
  :(3) Enter email address;
  |S|
  :(4) Validate email format;
backward: (4.1) Display error notification;
repeat while () is (Invalid) not (Valid)
|U|
:(5) Click button "Send Reset Email";
|S|
:(6) Validate account exists;
if () then (Not found)
  :(6.1) Display error notification;
  |U|
  :(7.1) Confirm error notification;
  end
else (Found)
  |S|
  :(6.2) Generate reset token and send email;
  :(7.2) Display success notification;
  |U|
  :(8) Confirm notification;
  stop
endif
@enduml
```

<!-- diagram id="activity-manage-account-recover-account" -->