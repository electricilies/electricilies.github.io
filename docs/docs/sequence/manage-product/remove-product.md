# Sequence Remove Product

```plantuml
@startuml
autonumber

actor Staff as S
boundary ProductManagementView as PMV
control ProductController as PC
entity PRODUCT as P

S -> PMV: Select product to remove
activate S
activate PMV
deactivate S
PMV -> PC: Remove product
activate PC
PC -> P: Remove product
activate P
P -> P: Delete product
activate P
deactivate P
PC <-- P: Success notification
deactivate P
PMV <-- PC: Success notification
deactivate PC
PMV -> PMV: Display success notification
deactivate PMV

@enduml
```

<!-- diagram id="sequence-manage-product-remove-product" -->