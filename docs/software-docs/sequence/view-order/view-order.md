# Sequence View Orders

```plantuml
@startuml
autonumber

actor Customer as C
boundary OrderView as OV
control OrderController as OC
entity ORDER as O

C -> OV: Navigate to View Orders
activate C
activate OV
deactivate C
OV -> OC: Request list of orders
activate OC
OC -> O: Get list of orders
activate O
OC <-- O: List of orders
deactivate O
OV <-- OC: List of orders
deactivate OC
OV -> OV: Display list of orders
activate OV
deactivate OV

C -> OV: Choose function
activate C

opt Search Order
  ref over C, O: Sequence Search Order
end

opt View Order Detail
  ref over C, O: Sequence View Order Detail
end

opt Cancel Order
  ref over C, O: Sequence Cancel Order
end

opt Return Product
  ref over C, O: Sequence Return Product
end

opt Review Product
  ref over C, O: Sequence Review Product
end

deactivate OV
deactivate C
@enduml
```

<!-- diagram id="sequence-view-order-view-order" -->
