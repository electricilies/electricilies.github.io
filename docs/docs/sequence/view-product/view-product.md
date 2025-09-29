# Sequence View Product

```plantuml
@startuml
actor Customer as C
boundary ProductManagementView as PMV
control ProductController as PC
entity PRODUCT as P

PC -> P: Get list of products
activate PC
activate P
PC <-- P: List of products
deactivate P
deactivate PC

PMV <-- PC: List of products
activate PMV
PMV -> PMV: Display list of products
activate PMV
deactivate PMV

C -> PMV: choose function
activate C

opt Comment to Review
  ref over C, P : Add Comment to Review
end

opt Add to Cart
  ref over C, P : Add Product to Cart
end

opt Detail
  ref over C, P : View Product Detail
end

opt Reviews & Comments
  ref over C, P : View Product Reviews Comments
end

opt View Suggested Products
  ref over C, P : View Suggested Products
end

deactivate PMV
deactivate C

@enduml
```

<!-- diagram id="sequence-view-product-view-product" -->
