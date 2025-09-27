# Search Product

```plantulm
@startuml
|Customer|
start
:Select "Search Product";
:Enter search keyword;

|System|
:Send search request (keyword, filters);

|Database|
:Search in database;
|System|
:Display query result;


|Customer|
:View product list;
|Customer|
:Activity View Product;

stop
@enduml
```
