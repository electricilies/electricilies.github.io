# Activity Remove Product from Cart

```plantuml
@startuml
|C|Customer
|S|System

|C|
start
:(1) Click remove product;
|S|
:(2) Validate product;
if () then (Invalid)
  :(2.1) Display error notification;
  |C|
  :(3.1) Confirm error notification;
  end
else (Valid)
  |S|
  :(2.2) Remove product data;
  :(3.2) Update cart view;
  |C|
  :(4) Confirm notification;
  stop
endif
@enduml
```

<!-- diagram id="activity-manage-cart-remove-product-from-cart" -->