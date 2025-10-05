# Use Case Admin

```plantuml
@startuml
left to right direction
actor Admin

rectangle "Application" {
  usecase UC01 as "Manage User"
  usecase UC02 as "Search User"
  usecase UC03 as "Promote Customer"
  usecase UC04 as "Demote Staff"
  usecase UC05 as "Promote Staff"
  usecase UC06 as "Demote Admin"
  usecase UC07 as "Delete Customer"
  usecase UC08 as "Delete Staff"
  usecase UC09 as "View Staff Report"
  usecase UC10 as "View Shop Report"
  usecase UC11 as "View System Monitoring"
  usecase UC12 as "Adjust Document"
  usecase UC13 as "Search Document"
  usecase UC14 as "Create Document"
  usecase UC15 as "Update Document"
  usecase UC16 as "Delete Document"
}

Admin -- UC01
Admin -- UC10
Admin -- UC11
Admin -- UC12

UC01 <.. UC02 : <<extend>>
UC01 <.. UC03 : <<extend>>
UC01 <.. UC04 : <<extend>>
UC01 <.. UC05 : <<extend>>
UC01 <.. UC06 : <<extend>>
UC01 <.. UC07 : <<extend>>
UC01 <.. UC08 : <<extend>>
UC01 <.. UC09 : <<extend>>
UC03 ..> UC02 : <<include>>
UC04 ..> UC02 : <<include>>
UC05 ..> UC02 : <<include>>
UC06 ..> UC02 : <<include>>
UC07 ..> UC02 : <<include>>
UC08 ..> UC02 : <<include>>
UC09 ..> UC02 : <<include>>
UC12 <.. UC13 : <<extend>>
UC12 <.. UC14 : <<extend>>
UC12 <.. UC15 : <<extend>>
UC12 <.. UC16 : <<extend>>
UC14 ..> UC13 : <<include>>
UC15 ..> UC13 : <<include>>
UC16 ..> UC13 : <<include>>

@enduml
```

<!-- diagram id="use-case-admin" -->
