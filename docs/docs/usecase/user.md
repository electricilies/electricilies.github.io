# User

## User and application

```plantuml
@startuml
actor User
actor Customer
actor Staff
actor Admin

User <|-- Customer
Customer <|-- Staff
Staff <|-- Admin

rectangle "Application" {
  usecase UC1 as "Use the application"
}

User -- UC1

@enduml
```

<!-- diagram id="usecase-user-application" -->

## User and account system

```plantuml
@startuml
left to right direction

actor User

rectangle "Account System" {
  usecase UC01 as "Register"
  usecase UC02 as "Login"
  usecase UC03 as "Logout"
  usecase UC04 as "Two-Step Verification"
  usecase UC05 as "Manage account"
  usecase UC06 as "Edit profile"
  usecase UC07 as "Link account with third party provider"
  usecase UC08 as "Delete account"
  usecase UC09 as "Reset Password"
  usecase UC10 as "View Account Activity"
  usecase UC11 as "Recover Account"
}

User -- UC01
User -- UC02
User -- UC03
User -- UC05
User -- UC09
User -- UC10
User -- UC11

UC01 <.. UC04 : <<extend>>
UC05 <.. UC04 : <<extend>>
UC05 <.. UC06 : <<extend>>
UC05 <.. UC07 : <<extend>>
UC05 <.. UC08 : <<extend>>

@enduml
```

<!-- diagram id="usecase-user-account-system" -->
