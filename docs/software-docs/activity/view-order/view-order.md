# Activity View Order

```plantuml
@startuml
|C|Customer
|S|System
|D|Database

|S|
start
:(1) Display order management view;

|C|
:(2) Choose options;
if () then (Cancel Order)
  :(2.1) Activity Cancel Order;
elseif () then (Return Product)
  :(2.2) Activity Return Product;
elseif () then (Review Product)
  :(2.3) Activity Review Product;
elseif () then (Search Order)
  :(2.4) Activity Search Order;
else (View Order Detail)
  :(2.5) Activity View Order Detail;
endif

stop
@enduml
```

<!-- diagram id="activity-view-order-view-order" -->