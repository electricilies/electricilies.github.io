# Sequence View Orders

```plantuml
@startuml
autonumber

actor Customer as C
boundary OrderView as OV
control OrderController as OC
entity ORDER as O

C -> OV: Request to view orders
activate C
activate OV
OV -> OC: Get list of orders
activate OC
OC -> O: Query orders for customer
activate O
O -> O: Query data
activate O
deactivate O
OC <-- O: List of orders
deactivate O
OV <-- OC: Display list of orders
deactivate OC
OV -> OV: Show list of orders
activate OV
deactivate OV
deactivate C

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

@enduml
```

<!-- diagram id="sequence-view-order-view-order" -->
