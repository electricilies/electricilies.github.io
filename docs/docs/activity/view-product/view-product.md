# Activity View Product

```plantuml
@startuml
|C|Customer
|S|System
|D|Database

|S|
:(1) Display product info (Product View);

|C|
:(2) Choose options;
if () then (Cart)
  :(2.1) Add Product to Card;
elseif () then (Detail)
  :(2.2) View Product Detail;
elseif () then (Reviews)
  :(2.3) View Product Reviews;
else (Suggested Products)
  :(2.4) View Suggested Products;
endif

|S|
stop
@enduml
```

<!-- diagram id="activity-view-product-view-product" -->
