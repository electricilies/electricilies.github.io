# Sequence View Order Detail

```plantuml
@startuml
autonumber

actor Customer as C
boundary OrderView as OV
boundary OrderDetailView as ODV
control OrderController as OC
entity ORDER as O

opt Search
  ref over C, O: Sequence Search Order
end
C -> OV: Select order to view detail
activate C
activate OV
deactivate C
OV -> OC: Get selected order detail
activate OC
OC -> O: Get selected order detail
activate O
OC <-- O: Selected order detail
deactivate O
ODV <-- OC: Selected order detail
deactivate OC
activate ODV
ODV -> ODV: Display order detail
activate ODV
deactivate ODV

@enduml
```

<!-- diagram id="sequence-view-order-view-order-detail" -->
