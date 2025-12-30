# Sequence Search Product

```plantuml
@startuml
autonumber

actor Staff as S
boundary ProductManagementView as PMV
control ProductController as PC
entity PRODUCT as P

activate S
S -> PMV: Enter the search criteria in search box
activate PMV
deactivate S
PMV -> PC: Send searching product (keyword/filters) request
activate PC
PC -> P: Query products by keyword/filters
activate P
P -> P: Query data
PC <-- P: query result
deactivate P
PMV <-- PC: query result
deactivate PC
PMV -> PMV: Show query result
deactivate PMV

@enduml
```

<!-- diagram id="sequence-manage-product-search-product" -->
