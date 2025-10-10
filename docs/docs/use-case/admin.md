# Use Case Admin

```plantuml
@startuml
left to right direction
actor Admin

rectangle "Application" {
  usecase UC01 as "Manage User"
  usecase UC02 as "Search User"
  usecase UC03 as "Delete User"
  usecase UC04 as "View Staff Report"
  usecase UC05 as "View Shop Report"
  usecase UC06 as "View System Monitoring"
  usecase UC07 as "Adjust Document"
  usecase UC08 as "Search Document"
  usecase UC09 as "Create Document"
  usecase UC10 as "Update Document"
  usecase UC11 as "Delete Document"
}

Admin -- UC01
Admin -- UC05
Admin -- UC06
Admin -- UC07

UC01 <.. UC02 : <<extend>>
UC01 <.. UC03 : <<extend>>
UC01 <.. UC04 : <<extend>>
UC03 ..> UC02 : <<include>>
UC04 ..> UC02 : <<include>>
UC07 <.. UC08 : <<extend>>
UC07 <.. UC09 : <<extend>>
UC07 <.. UC10 : <<extend>>
UC07 <.. UC11 : <<extend>>
UC09 ..> UC08 : <<include>>
UC10 ..> UC08 : <<include>>
UC11 ..> UC08 : <<include>>

@enduml
```

<!-- diagram id="use-case-admin" -->
