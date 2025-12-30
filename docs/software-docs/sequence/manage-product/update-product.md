# Sequence Update Product

```plantuml
@startuml
autonumber

actor Staff as S
boundary ProductManagementView as PMV
boundary UpdateProductView as UPV
control ProductController as PC
entity PRODUCT as P

opt Search
  ref over S, P: Sequence Search Product
end
S -> PMV: Select product needs updating
activate S
activate PMV
PMV -> PC: Get selected product detail
activate PC
PC -> P: Get selected product detail
activate P
PC <-- P: Selected product detail
deactivate P
UPV <-- PC: Selected product detail
deactivate PC
activate UPV
UPV -> UPV: Display product detail
activate UPV
deactivate UPV
S -> UPV: Enter product detail
UPV -> UPV: Validate data
activate UPV
deactivate UPV
break Invalid data
  S <-- UPV: Error notification
  UPV -> UPV: Display error notification
  activate UPV
  deactivate UPV
end
S -> UPV: Click button "Save" to confirm
deactivate S
UPV -> PC: Send update product request
activate PC
PC -> P: Send detail
activate P
P -> P: Validate data
activate P
deactivate P
break Invalid data
  PC <-- P: Error notification
  UPV <-- PC: Error notification
  UPV -> UPV: Display error notification
  activate UPV
  deactivate UPV
end
P -> P: Store data
activate P
deactivate P
PC <-- P: Success notification
deactivate P
UPV <-- PC: Success notification
UPV -> UPV: Close view
deactivate UPV
PMV <- PC: Display success notification and list of products

@enduml
```

<!-- diagram id="sequence-manage-product-update-product" -->
