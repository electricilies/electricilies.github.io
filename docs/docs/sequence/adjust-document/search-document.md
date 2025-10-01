# Sequence Search Document

```plantuml
@startuml
autonumber

actor Admin as A
boundary DocumentManagementView as DMV
control DocumentController as DC
entity DOCUMENT as D

A -> DMV: Enter search criteria
activate DMV
DMV -> DC: Send searching document request
activate DC
DC -> D: Query documents by criteria
activate D
D -> D: Query data
activate D
deactivate D
DC <-- D: Query result
deactivate D
DMV <-- DC: Query result
DMV -> DMV: Show query result
activate DMV
deactivate DMV

@enduml
```

<!-- diagram id="sequence-adjust-document-search-document" -->
