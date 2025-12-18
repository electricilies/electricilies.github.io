# Activity View Suggested Product

```plantuml
@startuml
|C|Customer
|S|System

|C|
start
:(1) View suggested products section;
|S|
:(2) Query suggested products;
:(3) Display suggested products;
if () then (Select)
  |C|
  :(3.1) Click on suggested product;
  |S|
  :(3.2) Activity View Product Detail;
endif
|C|
stop
@enduml
```

<!-- diagram id="activity-view-product-view-suggested-product" -->