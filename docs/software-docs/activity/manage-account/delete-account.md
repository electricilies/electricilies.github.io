# Activity Delete Account

```plantuml
@startuml
|U|User
|S|System

|U|
start
:(1) Click delete account;
|S|
:(2) Display confirmation message box;
|U|
if () then (Cancel)
  :(2.1) Click "Cancel" button;
  end
else (Confirm)
  :(2.2) Click "Confirm" button;
  |S|
  :(3) Validate account data;
  if () then (Invalid)
    :(3.1) Display error notification;
    |U|
    :(4.1) Confirm error notification;
    end
  else (Valid)
    |S|
    :(3.2) Delete account data;
    :(4.2) Display success notification 
and redirect to sign in;
    |U|
    :(5) Confirm notification;
    stop
  endif
endif
@enduml
```

<!-- diagram id="activity-manage-account-delete-account" -->