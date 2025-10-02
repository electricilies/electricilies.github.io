# Sequence Create Document

```plantuml
@startuml
autonumber

actor Admin as A
boundary DocumentManagementView as DMV
control DocumentController as DC
entity DOCUMENT as D

DMV -> DMV: Display empty document form
activate DMV
A -> DMV: Enter new document details
activate A
DMV -> DMV: Validate input
activate DMV
deactivate DMV
alt Input invalid
    DMV -> DMV: Display validation errors
    deactivate DMV
    A -> DMV: Correct input details
    activate DMV
    DMV -> DMV: Re-validate input
    activate DMV
    deactivate DMV
else Input valid
    A -> DMV: Click "Submit"
    deactivate A
    DMV -> DC: Submit new document request
    deactivate A
    activate DC
    DC -> D: Create document
    activate D
    D -> D: Validate document data
    activate D
    deactivate D
    alt Invalid document data
        DC <-- D: Error notification
        deactivate D
        DMV <-- DC: Error notification
        deactivate DC
        activate DMV
        DMV -> DMV: Display error notification
        deactivate DMV
    else Valid document data
        D -> D: Save document to database
        activate D
        deactivate D
        DC <-- D: Success notification
        deactivate D
        DMV <-- DC: Success notification
        deactivate DC
        DMV -> DMV: Display success notification & close form
        deactivate DMV
    end
    end

@enduml
```

<!-- diagram id="sequence-adjust-document-create-document" -->
