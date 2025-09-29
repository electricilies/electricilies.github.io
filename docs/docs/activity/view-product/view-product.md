# Activity View Product

```plantuml
@startuml
|Customer|

|System|
:(1)Display product info (Product View);

|Database|

|Customer|
:(2)Choose options;
if () then (Detail)
  :(2.1) View Product Detail;
elseif () then (Preview)
  :(2.2) View Product Preview;
elseif () then (Price)
  :(2.3) View Product Price;
elseif () then (Rate)
  :(2.4) View Product Rate;
elseif () then (Reviews & Comments)
  :(2.5) View Product Reviews & Comments;
else (Variants)
  :(2.6) View Product Variants;
endif

|System|
stop
@enduml
```

<!-- diagram id="activity-view-product-view-product" -->
