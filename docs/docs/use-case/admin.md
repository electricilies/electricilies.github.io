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
  usecase UC07 as "Remove Customer"
  usecase UC08 as "View Staff Report"
  usecase UC09 as "View Shop Report"
  usecase UC10 as "View System Monitoring"
  usecase UC11 as "Adjust Document"
  usecase UC12 as "Search Document"
  usecase UC13 as "Create Document"
  usecase UC14 as "Update Document"
  usecase UC15 as "Delete Document"
}

Admin -- UC01
Admin -- UC09
Admin -- UC10
Admin -- UC11

UC01 <.. UC02 : <<extend>>
UC01 <.. UC03 : <<extend>>
UC01 <.. UC04 : <<extend>>
UC01 <.. UC05 : <<extend>>
UC01 <.. UC06 : <<extend>>
UC01 <.. UC07 : <<extend>>
UC01 <.. UC08 : <<extend>>
UC03 ..> UC02 : <<include>>
UC04 ..> UC02 : <<include>>
UC05 ..> UC02 : <<include>>
UC06 ..> UC02 : <<include>>
UC07 ..> UC02 : <<include>>
UC08 ..> UC02 : <<include>>
UC11 <.. UC12 : <<extend>>
UC11 <.. UC13 : <<extend>>
UC11 <.. UC14 : <<extend>>
UC11 <.. UC15 : <<extend>>
UC13 ..> UC12 : <<include>>
UC14 ..> UC12 : <<include>>
UC15 ..> UC12 : <<include>>

@enduml
```

<!-- diagram id="use-case-admin" -->
