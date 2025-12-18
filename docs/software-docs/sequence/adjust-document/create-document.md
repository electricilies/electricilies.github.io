# Sequence Create Document

```plantuml
@startuml
autonumber

actor Admin as A
boundary DocumentManagementView as DMV
boundary DocumentDetailView as DDV
control DocumentController as DC
entity DOCUMENT as D

A -> DMV: Click button "Create Document"
activate A
activate DMV
deactivate A
DMV -> DDV: Navigate to DocumentDetailView
deactivate DMV
activate DDV
DDV -> DDV: Display with empty form
activate DDV
deactivate DDV
A -> DDV: Enter document detail
activate A
deactivate A
A -> DDV: Click button "Save" to confirm
activate A
deactivate A
DDV -> DDV: Validate data
activate DDV
deactivate DDV
break Invalid data
  DDV -> DDV: Display error notification
  activate DDV
  deactivate DDV
end
DDV -> DC: Send creating document request
activate DC
DC -> D: Send detail
activate D
D -> D: Validate data
activate D
deactivate D
break Invalid data
  DC <-- D: Error notification
  DDV <-- DC: Error notification
  DDV -> DDV: Display error notification
  activate DDV
  deactivate DDV
end
D -> D: Store data
activate D
deactivate D
DC <-- D: Success notification
deactivate D
DDV <-- DC: Success notification
DDV -> DDV: Close view
deactivate DDV
DMV <- DC: Display success notification and list of documents
activate DMV
deactivate DC

@enduml
```

<!-- diagram id="sequence-adjust-document-create-document" -->
