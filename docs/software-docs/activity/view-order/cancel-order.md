# Activity Cancel Order

```plantuml
@startuml
|C|Customer
|S|System

|C|
start
:(1) Select order to cancel;
|S|
:(2) Display confirmation message box;
|C|
if () then (Cancel)
  :(2.1) Click "Cancel" button;
  end
else (Confirm)
  :(2.2) Click "Confirm" button;
  |S|
  :(3) Validate data;
  if () then (Invalid)
    :(3.1) Display error notification;
    |C|
    :(4.1) Confirm error notification;
    end
  else (Valid)
    |S|
    :(3.2) Update order status;
    :(4.2) Display success notification 
and update order;
    |C|
    :(5) Confirm notification;
    stop
  endif
endif
@enduml
```

<!-- diagram id="activity-view-order-cancel-order" -->