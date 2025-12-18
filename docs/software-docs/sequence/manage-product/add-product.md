# Sequence Add Product

```plantuml
@startuml
autonumber

actor Staff as S
boundary ProductManagementView as PMV
boundary ProductDetailView as PDV
control ProductController as PC
entity PRODUCT as P

S -> PMV: Click button "Create Product"
activate S
activate PMV
deactivate S
PMV -> PDV: Navigate to ProductDetailView
deactivate PMV
activate PDV
PDV -> PDV: Display with empty form
activate PDV
deactivate PDV
S -> PDV: Enter product detail
activate S
deactivate S
S -> PDV: Click button "Save" to confirm
activate S
deactivate S
PDV -> PDV: Validate data
activate PDV
deactivate PDV
break Invalid data
  PDV -> PDV: Display error notification
  activate PDV
  deactivate PDV
end
PDV -> PC: Send creating product request
activate PC
PC -> P: Send detail
activate P
P -> P: Validate data
activate P
deactivate P
break Invalid data
  PC <-- P: Error notification
  PDV <-- PC: Error notification
  PDV -> PDV: Display error notification
  activate PDV
  deactivate PDV
end
P -> P: Store data
activate P
deactivate P
PC <-- P: Success notification
deactivate P
PDV <-- PC: Success notification
PDV -> PDV: Close view
deactivate PDV
PMV <- PC: Display success notification and list of products
activate PMV
deactivate PC

@enduml
```

<!-- diagram id="sequence-manage-product-add-product" -->
