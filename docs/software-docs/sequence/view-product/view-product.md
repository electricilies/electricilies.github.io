# Sequence View Product

```plantuml
@startuml
autonumber

actor Customer as C
boundary HomeView as HV
control ProductController as PC
entity PRODUCT as P

C -> HV: Navigate to View Products
activate C
activate HV
deactivate C
HV -> PC: Request list of products
activate PC
PC -> P: Get list of products
activate P
PC <-- P: List of products
deactivate P
HV <-- PC: List of products
deactivate PC
HV -> HV: Display list of products
activate HV
deactivate HV

C -> HV: Choose function
activate C

opt Add to Cart
  ref over C, P: Sequence Add Product to Cart
end

opt Search Product
  ref over C, P: Sequence Search Product
end

opt Detail
  ref over C, P: Sequence View Product Detail
end

opt Reviews
  ref over C, P: Sequence View Product Reviews
end

opt View Suggested Products
  ref over C, P: Sequence View Suggested Products
end

deactivate HV
deactivate C

@enduml
```

<!-- diagram id="sequence-view-product-view-product" -->
