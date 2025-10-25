# State Cart

```plantuml
hide empty description

[*] --> Active : create
Active --> Active : addItem
Active --> Active : removeItem
Active --> Active : updateQuantity
Active --> Empty : clear
Empty --> Active : addItem
Active --> Deleted : delete
Deleted --> [*]

@enduml
```

<!-- diagram id="state-cart" -->
