# Activity Purchase

```plantuml
@startuml
|C|Customer
|S|System

|C|
start
:(1) Click button "Purchase";
|S|
:(2) Validate cart items;
if () then (Invalid)
  :(2.1) Display error notification;
  |C|
  :(3.1) Confirm error notification;
  end
else (Valid)
  |S|
  :(2.2) Validate products;
  if () then (Invalid)
    :(2.3) Display error notification;
    |C|
    :(3.2) Confirm error notification;
    end
  else (Valid)
    |S|
    :(2.4) Redirect to checkout;
    :(3.3) Display checkout view;
    |C|
    :(4) Confirm notification;
    stop
  endif
endif
@enduml
```

<!-- diagram id="activity-manage-cart-purchase" -->
