# Sequence Delete Document

```plantuml
@startuml
autonumber

actor Admin as A
boundary DocumentManagementView as DMV
control DocumentController as DC
entity DOCUMENT as D

opt Search
  ref over A, D: Sequence Search Document
end
A -> DMV: Select document to delete
activate A
activate DMV
DMV -> DMV: Display confirmation message box
activate DMV
deactivate DMV
break Cancel
  A -> DMV: Click "Cancel" Button
  DMV -> DMV: Close confirmation message box
  activate DMV
  deactivate DMV
end
A -> DMV: Click "Confirm" button
deactivate A
DMV -> DC: Send deleting document request
activate DC
DC -> D: Delete selected document
activate D
D -> D: Validate data
activate D
deactivate D
break Invalid data
  DC <-- D: Error notification
  DMV <-- DC: Error notification
  DMV -> DMV: Display error notification
  activate DMV
  deactivate DMV
end
D -> D: Delete data
activate D
deactivate D
DC <-- D: Success notification
deactivate D
DMV <-- DC: Success notification
deactivate DC
DMV -> DMV: Display success notification & update list
deactivate DMV
deactivate A

@enduml
```

<!-- diagram id="sequence-adjust-document-delete-document" -->
