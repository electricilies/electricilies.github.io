# Staff

```plantuml
@startuml
left to right direction
actor Staff

rectangle "Application" {
  usecase UC01 as "Manage Product"
  usecase UC02 as "Search Product"
  usecase UC03 as "Add Product"
  usecase UC04 as "Change Product's Preview"
  usecase UC05 as "Change Product's Price"
  usecase UC07 as "Change Product's Detail"
  usecase UC09 as "Manage Review and Comment"
  usecase UC11 as "Add Comment to Review or Comment"
  usecase UC13 as "Remove Review or Comment"
  usecase UC15 as "Manage User"
  usecase UC17 as "Search User"
  usecase UC19 as "Remove Customer"
  usecase UC21 as "View Customer Report"
  usecase UC23 as "View Staff Report"
}

Staff -- UC01
Staff -- UC10
Staff -- UC14

UC01 <.. UC02 : <<extend>>
UC01 <.. UC03 : <<extend>>
UC01 <.. UC04 : <<extend>>
UC01 <.. UC05 : <<extend>>
UC01 <.. UC06 : <<extend>>
UC01 <.. UC07 : <<extend>>
UC03 ..> UC03 : <<include>>
UC04 ..> UC03 : <<include>>
UC05 ..> UC03 : <<include>>
UC06 ..> UC03 : <<include>>
UC07 ..> UC03 : <<include>>
UC07 <.. UC08 : <<extend>>
UC07 <.. UC09 : <<extend>>
UC10 <.. UC11 : <<extend>>
UC10 <.. UC12 : <<extend>>
UC10 <.. UC13 : <<extend>>
UC12 ..> UC11 : <<include>>
UC13 ..> UC11 : <<include>>

@enduml
```

<!-- diagram id="usecase-staff" -->
