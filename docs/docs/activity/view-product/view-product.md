# Activity View Product

```plantuml
@startuml
|Customer|

|System|
:(1)Display product info (Product View);

|Database|

|Customer|
:(2)Choose options;
if () then (Comment)
  :(2.1) Add Comment to Review;
elseif () then (Cart)
  :(2.2) Add Product to Card;
elseif () then (Detail)
  :(2.3) View Product Detail;
elseif () then (Preview and Comments)
  :(2.4) View Product Reviews and Comments;
else (Suggested Products)
  :(2.5) View Suggested Product;
endif

|System|
stop
@enduml
```

<!-- diagram id="activity-view-product-view-product" -->
