# Customer

```plantuml
@startuml
left to right direction
actor Customer

rectangle "Shopping System" {
  usecase UC01 as "View homepage with latest, hottest products"
  usecase UC02 as "Search products with intelligent suggestion"
  usecase UC03 as "Search products filter by buys, rates"
  usecase UC04 as "Next suggestion product category after searching"
  usecase UC05 as "See product preview images"
  usecase UC06 as "See product preview description"
  usecase UC07 as "See product variants and prices"
  usecase UC08 as "See other customers' reviews and comments"
  usecase UC09 as "View order history"
  usecase UC10 as "Make purchase via different methods"
  usecase UC11 as "Contact customer support"
  usecase UC12 as "View order summary before confirming payment"
  usecase UC13 as "Return faulty or damaged product"
  usecase UC14 as "View shopping statistics dashboard"
  usecase UC15 as "Add amount of products at once"
  usecase UC16 as "Add multiple products into cart for later purchase"
  usecase UC17 as "Give a review with upload image and rate after buying"
  usecase UC18 as "Comment on another user's review"
  usecase UC19 as "See order status"
  usecase UC20 as "Delete account permanently"
  usecase UC21 as "Apply discount code during checkout"
  usecase UC22 as "Be notified about special discounts and promotions"
}

Customer -- UC01
Customer -- UC02
Customer -- UC03
Customer -- UC04
Customer -- UC05
Customer -- UC06
Customer -- UC07
Customer -- UC08
Customer -- UC09
Customer -- UC10
Customer -- UC11
Customer -- UC12
Customer -- UC13
Customer -- UC14
Customer -- UC15
Customer -- UC16
Customer -- UC17
Customer -- UC18
Customer -- UC19
Customer -- UC20
Customer -- UC21
Customer -- UC22

UC12 ..> UC10 : <<extend>>
UC17 ..> UC08 : <<extend>>
UC18 ..> UC08 : <<extend>>
UC21 ..> UC10 : <<extend>>

UC12 --> UC05 : <<include>>
UC12 --> UC06 : <<include>>
UC12 --> UC07 : <<include>>
UC10 --> UC16 : <<include>>
UC09 --> UC19 : <<include>>

@enduml
```

<!-- diagram id="usecase-customer" -->
