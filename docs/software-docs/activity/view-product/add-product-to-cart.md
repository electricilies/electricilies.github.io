# Activity Add Product to Cart

```plantuml
@startuml
|C|Customer
|S|System

|C|
start
repeat
  :(1) Enter product quantity;
  |S|
  :(2) Validate data;
backward: (2.1) Display error notification;
repeat while () is (Invalid) not (Valid)
|C|
:(3) Click button "Add to Cart" to confirm;
|S|
:(4) Validate data;
if () then (Invalid)
  :(4.1) Display error notification;
  |C|
  :(5.1) Confirm error notification;
  end
else (Valid)
  |S|
  :(4.2) Store data;
  :(5.2) Display success notification;
  |C|
  :(6) Confirm notification;
  stop
endif
@enduml
```

<!-- diagram id="activity-view-product-add-product-to-cart" -->