# Activity Link Account With Third Party

```plantuml
@startuml
|U|User
|S|System

|U|
start
:(1) Click link account with third party provider;
|S|
:(2) Display available third party providers;
|U|
:(3) Select third party provider;
|S|
:(4) Validate account linking;
if () then (Invalid)
  :(4.1) Display error notification;
  |U|
  :(5.1) Confirm error notification;
  end
else (Valid)
  :(4.2) Create third party account link;
  :(5.2) Display success notification 
and linked account status;
  |U|
  :(6) Confirm notification;
  stop
endif
@enduml
```

<!-- diagram id="activity-manage-account-link-account-with-third-party" -->