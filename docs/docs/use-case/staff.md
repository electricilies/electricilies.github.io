# Use Case Staff

```plantuml
@startuml
left to right direction
actor Staff

rectangle "Application" {
  usecase UC01 as "Manage Product"
  usecase UC02 as "Search Product"
  usecase UC03 as "Add Product"
  usecase UC04 as "Change Product's Detail"
  usecase UC05 as "Remove Product"
  usecase UC06 as "Manage Review"
  usecase UC07 as "Remove Review"
  usecase UC08 as "Manage User"
  usecase UC09 as "Search User"
  usecase UC10 as "Remove Customer"
  usecase UC11 as "View Customer Report"
  usecase UC12 as "View Staff Report"
}

Staff -- UC01
Staff -- UC08
Staff -- UC12

UC01 <.. UC02 : <<extend>>
UC01 <.. UC03 : <<extend>>
UC01 <.. UC04 : <<extend>>
UC01 <.. UC05 : <<extend>>
UC01 <.. UC06 : <<extend>>
UC03 ..> UC02 : <<include>>
UC04 ..> UC02 : <<include>>
UC05 ..> UC02 : <<include>>
UC06 ..> UC02 : <<include>>
UC06 <.. UC07 : <<extend>>
UC08 <.. UC09 : <<extend>>
UC08 <.. UC10 : <<extend>>
UC08 <.. UC11 : <<extend>>
UC10 ..> UC09 : <<include>>
UC11 ..> UC09 : <<include>>

@enduml
```

<!-- diagram id="use-case-staff" -->
