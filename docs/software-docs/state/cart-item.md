# State Cart Item

```plantuml
hide empty description

[*] --> Active : create
Active --> Active : updateQuantity
Active --> Removed : remove
Removed --> [*]

@enduml
```

<!-- diagram id="state-cart-item" -->
