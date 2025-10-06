# Sequence Return Product

```plantuml
@startuml
autonumber

actor Customer as C
boundary OrderDetailView as ODV
control OrderController as OC
entity ORDER as O

opt Search
  ref over C, O: Sequence Search Order
end
C -> ODV: Select product to return
activate C
activate ODV
ODV -> ODV: Display confirmation message box
activate ODV
deactivate ODV
break Cancel
  C -> ODV: Click "Cancel" Button
  ODV -> ODV: Close confirmation message box
  activate ODV
  deactivate ODV
end
C -> ODV: Click "Confirm" button
deactivate C
ODV -> OC: Send return product request
activate OC
OC -> O: Return selected product
activate O
O -> O: Validate data
activate O
deactivate O
break Invalid data
  OC <-- O: Error notification
  ODV <-- OC: Error notification
  ODV -> ODV: Display error notification
  activate ODV
  deactivate ODV
end
O -> O: Update product status
activate O
deactivate O
OC <-- O: Success notification
deactivate O
ODV <-- OC: Success notification
deactivate OC
ODV -> ODV: Display success notification & update order
deactivate ODV

@enduml
```

<!-- diagram id="sequence-view-order-return-product" -->
