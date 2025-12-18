# Activity Sign In

```plantuml
@startuml
|U|User
|S|System

|U|
start
:(1) Click button "Sign In" in menu;
|S|
:(2) Generate code verifier and code challenge;
:(3) Redirect with code challenge;
:(4) Display SignInView;
repeat
  |U|
  :(5) Enter credential;
  |S|
  :(6) Validate data format;
backward: (6.1) Display error notification;
repeat while () is (Invalid) not (Valid)
|U|
:(7) Click button "Continue to Sign In";
|S|
:(8) Validate user credential;
if () then (Invalid)
  :(8.1) Display error notification;
  |U|
  :(9.1) Confirm error notification;
  end
else (Valid)
  :(8.2) Send authorization code;
endif
:(9.2) Validate code and verifier;
if () then (Invalid)
  :(9.3) Display error notification;
  |U|
  :(10.1) Confirm error notification;
  end
else (Valid)
  :(9.4) Return JWT Token;
endif
:(10.2) Verify JWT signature;
if () then (Invalid)
  :(10.3) Display error notification;
  |U|
  :(11.1) Confirm error notification;
  end
else (Valid)
  :(10.4) Extract user role from JWT;
  :(11.2) Validate role;
  if () then (Invalid)
    :(11.3) Display error notification;
    |U|
    :(12.1) Confirm error notification;
    end
  else (Valid)
    |S|
    :(11.4) Redirect to HomeView;
    :(12.2) Display HomeView;
    |U|
    :(13) Confirm notification;
    stop
  endif
endif
@enduml
```

<!-- diagram id="activity-manage-account-sign-in" -->
