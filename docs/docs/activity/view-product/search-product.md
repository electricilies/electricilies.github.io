# Search Product

```plantuml
@startuml
|C|Customer
start
:(1)Enter search keyword;

|S|System
:(2)Process search request (keyword, filters);

|D|Database
:(3)Search in database;

|S|
:(4)Display query result;

stop
@enduml
```

<!-- diagram id="activity-view-product-search-product" -->
