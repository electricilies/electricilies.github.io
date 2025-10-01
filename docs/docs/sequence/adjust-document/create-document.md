# Sequence Create Document

```plantuml
@startuml
autonumber

actor Admin as A
boundary DocumentManagementView as DMV
control DocumentController as DC
entity DOCUMENT as D

A -> DMV: Enter new document details
activate A
activate DMV
deactivate A
DMV -> DC: Create document
activate DC
DC -> D: Create document
activate D
D -> D: Save document
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

<!-- diagram id="sequence-adjust-document-create-document" -->
