# State Order Item

```plantuml
hide empty description

[*] --> Active : create
Active --> ReturnRequested : returnProduct
ReturnRequested --> [*]

@enduml
```

<!-- diagram id="state-order-item" -->
