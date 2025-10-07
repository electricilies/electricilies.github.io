# Activity Manage Cart

```plantuml
@startuml
|C|Customer
|S|System
|D|Database

|S|
start
:(1) Display cart management view;

|C|
:(2) Choose options;
if () then (Change Amount)
  :(2.1) Activity Change Product Amount;
elseif () then (Purchase)
  :(2.2) Activity Purchase;
else (Remove from Cart)
  :(2.3) Activity Remove Product from Cart;
endif

stop
@enduml
```

<!-- diagram id="activity-manage-cart-manage-cart" -->