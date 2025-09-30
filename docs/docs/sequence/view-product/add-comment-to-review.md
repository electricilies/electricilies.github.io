# Sequence Add Comment to Review

```plantuml
@startuml
autonumber

actor Customer as C
boundary ProductDetailView as PDV
control ProductController as PC
entity PRODUCT as P

ref over C, P: Sequence View Product Detail


@enduml
```

<!-- diagram id="sequence-view-product-add-comment-to-review" -->
