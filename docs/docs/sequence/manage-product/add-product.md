# Sequence Add Product

```plantuml
@startuml
autonumber

actor Staff as S
boundary ProductManagementView as PMV
control ProductController as PC
entity PRODUCT as P

S -> PMV: Enter product information
activate S
activate PMV
deactivate S
PMV -> PC: Add product
activate PC
PC -> P: Add product
activate P
P -> P: Save product
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

<!-- diagram id="sequence-manage-product-add-product" -->