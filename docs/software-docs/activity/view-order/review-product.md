# Activity Review Product

```plantuml
@startuml
|C|Customer
|S|System

|C|
start
:(1) Select product to review;
|S|
:(2) Display empty review form;
repeat
  |C|
  :(3) Enter review content;
  |S|
  :(4) Validate data;
backward: (4.1) Display error notification;
repeat while () is (Invalid) not (Valid)
if () then (Attach image)
  |C|
  :(5) Upload review image;
endif
|C|
:(6) Click button "Submit" to confirm;
|S|
:(7) Validate data;
if () then (Invalid)
  :(7.1) Display error notification;
  |C|
  :(8.1) Confirm error notification;
  end
else (Valid)
  |S|
  :(7.2) Store data;
  :(8.2) Display success notification 
and list of orders;
  |C|
  :(9) Confirm notification;
  stop
endif
@enduml
```

<!-- diagram id="activity-view-order-review-product" -->