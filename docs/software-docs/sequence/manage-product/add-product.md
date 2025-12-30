# Sequence Add Product

```plantuml
@startuml
autonumber

actor Staff as S
boundary ProductManagementView as PMV
boundary AddProductView as APV
control ProductController as PC
entity PRODUCT as P

S -> PMV: Click button "Create Product"
activate S
activate PMV
deactivate S
PMV -> APV: Navigate to AddProductView
deactivate PMV
activate APV
APV -> APV: Display with empty form
activate APV
deactivate APV
S -> APV: Enter product detail
activate S
deactivate S
S -> APV: Click button "Save" to confirm
activate S
deactivate S
APV -> APV: Validate data
activate APV
deactivate APV
break Invalid data
  APV -> APV: Display error notification
  activate APV
  deactivate APV
end
APV -> PC: Send creating product request
activate PC
PC -> P: Send detail
activate P
P -> P: Validate data
activate P
deactivate P
break Invalid data
  PC <-- P: Error notification
  APV <-- PC: Error notification
  APV -> APV: Display error notification
  activate APV
  deactivate APV
end
P -> P: Store data
activate P
deactivate P
PC <-- P: Success notification
deactivate P
APV <-- PC: Success notification
APV -> APV: Close view
deactivate APV
PMV <- PC: Display success notification and list of products
activate PMV
deactivate PC

@enduml
```

<!-- diagram id="sequence-manage-product-add-product" -->
