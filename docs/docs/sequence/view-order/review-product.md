# Sequence Review Product

```plantuml
@startuml
autonumber

actor Customer as C
boundary OrderDetailView as ODV
control OrderController as OC
entity ORDER as O

ref over C, O: Sequence View Order Detail
C -> ODV: Request to review product
activate C
activate ODV
C -> ODV: Enter review content
activate ODV
deactivate ODV
opt Attach review image
  C -> ODV: Upload review image (optional)
  activate ODV
  deactivate ODV
end
C -> ODV: Rate product
activate ODV
deactivate ODV
ODV -> OC: Submit review (content, image, rating)
activate OC
OC -> O: Save review
activate O
O -> O: Save review data
activate O
deactivate O
OC <-- O: Success notification
deactivate O
ODV <-- OC: Success notification
deactivate OC
ODV -> ODV: Display success notification
deactivate ODV
deactivate C

@enduml
```

<!-- diagram id="sequence-view-order-review-product" -->
