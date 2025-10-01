# Sequence Search Order

```plantuml
@startuml
autonumber

actor Customer as C
boundary OrderView as OV
control OrderController as OC
entity ORDER as O

C -> OV: Enter search criteria
activate OV
OV -> OC: Send search request
activate OC
OC -> O: Query orders by criteria
activate O
O -> O: Query data
activate O
deactivate O
OC <-- O: Query result
deactivate O
OV <-- OC: Query result
deactivate OC
OV -> OV: Show query result
activate OV
deactivate OV

@enduml
```

<!-- diagram id="sequence-view-order-search-order" -->
