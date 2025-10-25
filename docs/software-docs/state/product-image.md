# State Product Image

```plantuml
hide empty description

[*] --> Active : create
Active --> Active : update
Active --> Active : changeOrder
Active --> Deleted : delete
Deleted --> [*]

@enduml
```

<!-- diagram id="state-product-image" -->
