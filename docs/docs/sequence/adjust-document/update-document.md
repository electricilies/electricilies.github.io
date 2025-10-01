# Sequence Update Document

```plantuml
@startuml
autonumber

actor Admin as A
boundary DocumentManagementView as DMV
control DocumentController as DC
entity DOCUMENT as D

A -> DMV: Select document to update
activate A
activate DMV
deactivate A
DMV -> DC: Update document
activate DC
DC -> D: Update document
activate D
D -> D: Save updated document
activate D
deactivate D
DC <-- D: Success notification
deactivate D
DMV <-- DC: Success notification
deactivate DC
DMV -> DMV: Display success notification
deactivate DMV

@enduml
```

<!-- diagram id="sequence-adjust-document-update-document" -->
