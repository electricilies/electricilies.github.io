# Activity Update Product

```plantuml
@startuml
|St|Staff
|S|System

|St|
start
:(1) Select product to update;
|S|
:(2) Query product detail;
:(3) Display product detail;
repeat
  |St|
  :(4) Enter new product detail;
  |S|
  :(5) Validate data;
backward: (5.1) Display error notification;
repeat while () is (Invalid) not (Valid)
|St|
:(6) Click button "Save" to confirm;
|S|
:(7) Validate data;
if () then (Invalid)
  :(7.1) Display error notification;
  |St|
  :(8.1) Confirm error notification;
  end
else (Valid)
  |S|
  :(7.2) Update data;
  :(8.2) Display success notification 
and list of products;
  |St|
  :(9) Confirm notification;
  stop
endif
@enduml
```

<!-- diagram id="activity-manage-product-update-product" -->