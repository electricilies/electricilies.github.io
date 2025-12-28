# Activity Provide Account

```plantuml
@startuml
|A|Admin
|S|System

|A|
start
:(1) Click button "Provide Account";
|S|
:(2) Generate code verifier and code challenge;
:(3) Redirect with code challenge;
:(4) Display ProvideAccountView;
repeat
  |A|
  :(5) Enter user data (username, password, email, full name, role);
  |S|
  :(6) Validate data format;
backward: (6.1) Display error notification;
repeat while () is (Invalid) not (Valid)
|A|
:(7) Click button "Continue to Provide Account";
|S|
:(8) Check if username or email exists;
if () then (Already exists)
  :(8.1) Display error notification;
  |A|
  :(9.1) Confirm error notification;
  end
else (Not exists)
  :(8.2) Create new user and hash password;
  :(9.2) Send authorization code;
endif
:(10) Validate code and verifier;
if () then (Invalid)
  :(10.1) Display error notification;
  |A|
  :(11.1) Confirm error notification;
  end
else (Valid)
  :(10.2) Return JWT Token;
endif
:(11.2) Verify JWT and write data;
if () then (Invalid)
  :(11.3) Display error notification;
  |A|
  :(12.1) Confirm error notification;
  end
else (Valid)
  |S|
  :(11.4) Redirect to UserManagementView;
  :(12.2) Display UserManagementView with success notification;
  |A|
  :(13) Confirm notification;
  stop
endif
@enduml
```

<!-- diagram id="activity-manage-account-provide-account" -->
