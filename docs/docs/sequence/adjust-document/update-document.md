# Sequence Update Document

```plantuml
@startuml
autonumber

actor Admin as A
boundary DocumentManagementView as DMV
boundary DocumentInformationView as DIV
control DocumentController as DC
entity DOCUMENT as D

activate A
A -> DMV: Select document to update
activate DMV
DMV -> DC: Get document details
activate DC
DC -> D: Fetch document data
activate D
DC <-- D: Return document data
deactivate D
DIV <-- DC: Return document data
deactivate DC
activate DIV
DIV -> DIV: Display document details in form
activate DIV
deactivate DIV
A -> DIV: Modify document details
DIV -> DIV: Validate input
activate DIV
deactivate DIV
alt Input invalid
    DIV -> DIV: Display validation errors
    activate DIV
    deactivate DIV
    A -> DIV: Correct input details
    DIV -> DIV: Re-validate input
    activate DIV
    deactivate DIV
else Input valid
    A -> DIV: Click "Submit"
    deactivate A
    DIV -> DC: Submit updated document request
    deactivate A
    activate DC
    DC -> D: Update document
    activate D
    D -> D: Validate document data
    activate D
    deactivate D
    alt Invalid document data
        DC <-- D: Error notification
        DIV <-- DC: Error notification
        DIV -> DIV: Display error notification
        activate DIV
        deactivate DIV
    else Valid document data
        D -> D: Save updated document to database
        activate D
        deactivate D
        DC <-- D: Success notification
        deactivate D
        DIV <-- DC: Success notification
        deactivate DC
        DIV -> DIV: Display success notification & close form
        activate DIV
        deactivate DIV
        DIV -> DMV: Refresh document list
    end
end

@enduml
```

<!-- diagram id="sequence-adjust-document-update-document" -->
