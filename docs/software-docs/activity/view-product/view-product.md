# Activity View Product

```plantuml
@startuml
|C|Customer
|S|System

|C|
start
:(1) Select function view product;
|S|
:(2) Display product view;
|C|
:(3) Choose options;
if () then (Add to Cart)
  :(3.1) Activity Add Product to Cart;
elseif () then (Detail)
  :(3.2) Activity View Product Detail;
elseif () then (Reviews)
  :(3.3) Activity View Product Reviews;
elseif () then (Search Product)
  :(3.4) Activity Search Product;
else (View Suggested Products)
  :(3.5) Activity View Suggested Product;
endif
|C|
stop
@enduml
```

<!-- diagram id="activity-view-product-view-product" -->
