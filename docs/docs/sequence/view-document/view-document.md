# Sequence View Document

```plantuml
@startuml
autonumber

actor Customer as C
boundary DocumentManagementView as DMV
boundary DocumentInformationView as DIV
control DocumentController as DC
entity DOCUMENT as D

DC -> D: Get lists of documents
activate DC
activate D
D -> D: Query data
activate D
deactivate D
DC <-- D: List of documents
deactivate D
DMV <-- DC: List of documents
activate DMV
deactivate DC
DMV -> DMV: Display list of documents
activate DMV
deactivate DMV
opt Search
  C -> DMV: Enter the search criteria in the search box
  activate C
  DMV -> DC: Send searching documents information request
  activate DC
  DC -> D: Search document base on given keywords
  activate D
  D -> D: Query data
  activate D
  deactivate D
  DC <-- D: Query result
  deactivate D
  DMV <-- DC: Query result
  deactivate DC
  DMV -> DMV: Display list of documents
  activate DMV
  deactivate DMV
end
C -> DMV: Select to document want to view
deactivate C
DMV -> DC: Get selected document information
deactivate DMV
activate DC
DC -> D: Get selected document information
activate D
DC <-- D: Query result
deactivate D
DIV <-- DC: Query result
deactivate DC
activate DIV
deactivate DC
DIV -> DIV: Display view with selected document information
activate DIV
deactivate DIV
deactivate DIV

@enduml
```

<!-- diagram id="sequence-view-document-view-document" -->
