# State Product Variant

```plantuml
hide empty description

[*] --> Active : create
Active --> Active : update
Active --> Deleted : delete
Deleted --> [*]

@enduml
```

<!-- diagram id="state-product-variant" -->
