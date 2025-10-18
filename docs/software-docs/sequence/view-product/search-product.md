# Sequence Search Product

```plantuml
@startuml
autonumber

actor Customer as C
boundary HomeView as HV
boundary ProductSearchView as PSV
control ProductController as PC
entity PRODUCT as P

C -> HV: Enter the search criteria in search box
activate C
activate HV
deactivate C
HV -> PC: Send searching product (keyword/filters) request
activate PC
PC -> P: Query products by keyword/filters
activate P
P -> P: Query data
PC <-- P: query result
deactivate P
HV <-- PC: query result
deactivate PC
HV -> HV: Show query result

opt Enter
  HV -> HV: Close HomeView
  deactivate HV
  PSV -> PSV: Display ProductSearchView
  activate PSV
  PSV -> PSV: Display search results
  activate PSV
  deactivate PSV
  deactivate PSV
end

@enduml
```

<!-- diagram id="sequence-view-product-search-product" -->
