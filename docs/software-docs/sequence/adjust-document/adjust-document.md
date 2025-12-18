# Sequence Adjust Document

```plantuml
@startuml
autonumber

actor Admin as A
boundary DocumentManagementView as DMV
control DocumentController as DC
entity DOCUMENT as D

A -> DMV: Navigate to Document Management
activate A
activate DMV
deactivate A
DMV -> DC: Request list of documents
activate DC
DC -> D: Get list of documents
activate D
DC <-- D: List of documents
deactivate D
DMV <-- DC: List of documents
deactivate DC
DMV -> DMV: Display list of documents
activate DMV
deactivate DMV

A -> DMV: Choose function
activate A

opt Create Document
  ref over A, D: Sequence Create Document
end

opt Delete Document
  ref over A, D: Sequence Delete Document
end

opt Search Document
  ref over A, D: Sequence Search Document
end

opt Update Document
  ref over A, D: Sequence Update Document
end

deactivate DMV
deactivate A

@enduml
```

<!-- diagram id="sequence-adjust-document-adjust-document" -->
