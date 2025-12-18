# Activity Sign Out

```plantuml
@startuml
|U|User
|S|System

|U|
start
:(1) Click button "Sign Out";
|S|
:(2) Clear user session data;
:(3) Display sign out confirmation 
and redirect to sign in;
|U|
:(4) Confirm notification;
stop
@enduml
```

<!-- diagram id="activity-manage-account-sign-out" -->