# Sequence Add Comment to Review

```plantuml
@startuml
autonumber

actor Customer as C
boundary ProductDetailView as PDV
control CommentController as CC
entity COMMENT as Co

ref over C, PDV: Sequence View Product Detail
C -> PDV: Enter comment to review
activate C
activate PDV
deactivate C
PDV -> CC: Post comment
activate CC
CC -> Co: Post comment
activate Co
Co -> Co: Save comment
activate Co
deactivate Co
CC <-- Co: Success notification
deactivate Co
PDV <-- CC: Success notification
deactivate CC
PDV -> PDV: Display success notification
deactivate PDV

@enduml
```

<!-- diagram id="sequence-view-product-add-comment-to-review" -->
