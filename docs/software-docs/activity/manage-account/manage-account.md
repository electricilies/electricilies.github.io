# Activity Manage Account

```plantuml
@startuml
|U|User
|S|System

|U|
start
:(1) Select function manage account;
|S|
:(2) Display account management view;
|U|
:(3) Choose options;
if () then (Delete Account)
  :(3.1) Activity Delete Account;
elseif () then (Edit Profile)
  :(3.2) Activity Edit Profile;
elseif () then (Link Account With Third Party)
  :(3.3) Activity Link Account With Third Party;
elseif () then (Recover Account)
  :(3.4) Activity Recover Account;
elseif () then (Reset Password)
  :(3.5) Activity Reset Password;
elseif () then (Sign In)
  :(3.6) Activity Sign In;
elseif () then (Sign Out)
  :(3.7) Activity Sign Out;
else (Sign Up)
  :(3.8) Activity Sign Up;
endif
|U|
stop
@enduml
```

<!-- diagram id="activity-manage-account-manage-account" -->