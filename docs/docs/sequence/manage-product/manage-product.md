# Sequence Manage Product

```plantuml
@startuml
autonumber

actor Staff as S
boundary ProductManagementView as PMV
control ProductController as PC
entity PRODUCT as P

PC -> P: Get list of products
activate PC
activate P
PC <-- P: List of products
deactivate P
PMV <-- PC: List of products
deactivate PC
activate PMV
PMV -> PMV: Display list of products
activate PMV
deactivate PMV

S -> PMV: Choose function
activate S

opt Add Comment to Review
  ref over S, P: Add Comment to Review
end

opt Add Product
  ref over S, P: Add Product
end

opt Change Product Detail
  ref over S, P: Change Product Detail
end

opt Remove Product
  ref over S, P: Remove Product
end

opt Remove Review or Comment
  ref over S, P: Remove Review or Comment
end

opt Search Product
  ref over S, P: Search Product
end

deactivate PMV
deactivate S

@enduml
```

<!-- diagram id="sequence-manage-product-manage-product" -->