# View Product

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

opt Detail
  ref over C, P : View Product Detail
end

opt Preview
  ref over C, P : View Product Preview
end

opt Price
  ref over C, P : View Product Price
end

opt Rate
  ref over C, P : View Product Rate
end

opt Reviews & Comments
  ref over C, P : View Product Reviews Comments
end

opt Variants
  ref over C, P : View Product Variants
end
deactivate PMV
deactivate C

@enduml
```

<!-- diagram id="sequence-view-product-view-product" -->
