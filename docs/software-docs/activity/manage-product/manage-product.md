# Activity Manage Product

```plantuml
@startuml
|St|Staff
|S|System

|St|
start
:(1) Select function manage product;
|S|
:(2) Display product management view;
|St|
:(3) Choose options;
if () then (Add)
  :(3.1) Activity Add Product;
elseif () then (Delete Product)
  :(3.2) Activity Delete Product;
elseif () then (Delete Review)
  :(3.3) Activity Delete Review;
elseif () then (Search)
  :(3.4) Activity Search Product;
else (Update)
  :(3.5) Activity Update Product;
endif
|St|
stop
@enduml
```

<!-- diagram id="activity-manage-product-manage-product" -->