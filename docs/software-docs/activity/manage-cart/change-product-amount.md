# Activity Change Product Amount

```plantuml
@startuml
|C|Customer
|S|System

|C|
start
:(1) Change product amount;
|S|
:(2) Validate amount;
if () then (Invalid)
  :(2.1) Display error notification;
  |C|
  :(3.1) Confirm error notification;
  end
else (Valid)
  :(2.2) Update cart data;
  :(3.2) Display updated cart;
  |C|
  :(4) Confirm notification;
  stop
endif
@enduml
```

<!-- diagram id="activity-manage-cart-change-product-amount" -->