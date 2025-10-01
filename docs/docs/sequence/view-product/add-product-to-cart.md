# Sequence Add Product to Cart

```plantuml
@startuml
autonumber

actor Customer as C
boundary ProductDetailView as PDV
control CartController as CC
entity CART as Ca

ref over C, PDV: Sequence View Product Detail
C -> PDV: Add product to cart
activate C
activate PDV
deactivate C
break Product is sold out
  PDV -> PDV: Display error
  activate PDV
  deactivate PDV
end
PDV -> CC: Add product to cart
activate CC
CC -> Ca: Add product to cart
activate Ca
Ca -> Ca: Add product to cart
activate Ca
deactivate Ca
break Product has been sold out
  CC <-- Ca: Error notification
  PDV <-- CC: Error notification
  PDV -> PDV: Display error notification
  activate PDV
  deactivate PDV
end
CC <-- Ca: Success notification
deactivate Ca
PDV <-- CC: Success notification
deactivate CC
PDV -> PDV: Display success notification
deactivate CC
deactivate PDV

@enduml
```

<!-- diagram id="sequence-view-product-add-product-to-cart" -->
