# Sequence Delete Document

```plantuml
@startuml
autonumber

actor Admin as A
boundary DocumentManagementView as DMV
control DocumentController as DC
entity DOCUMENT as D

A -> DMV: Select document to delete
activate A
activate DMV
DMV -> DMV: Display confirmation dialog
activate DMV
deactivate DMV
alt Cancel deletion
    A -> DMV: Click "Cancel"
    DMV -> DMV: Close confirmation dialog
    activate DMV
    deactivate DMV
else Confirm deletion
    A -> DMV: Click "Confirm"
    deactivate A
    DMV -> DC: Send delete document request
    activate DC
    DC -> D: Delete document
    activate D
    D -> D: Validate document existence
    activate D
    deactivate D
    alt Document not found
        DC <-- D: Error notification
        DMV <-- DC: Error notification
        DMV -> DMV: Display error notification
        activate DMV
        deactivate DMV
    else Document found
        D -> D: Remove document from database
        activate D
        deactivate D
        DC <-- D: Success notification
        deactivate D
        DMV <-- DC: Success notification
        deactivate DC
        activate DMV
        DMV -> DMV: Display success notification & update list
        deactivate DMV
    end
end

@enduml
```

<!-- diagram id="sequence-adjust-document-delete-document" -->
