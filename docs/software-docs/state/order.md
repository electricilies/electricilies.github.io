# State Order

```plantuml
hide empty description

[*] --> Pending : create
Pending --> Processing : updateStatus
Processing --> Shipped : updateStatus
Shipped --> Delivered : updateStatus
Pending --> Cancelled : cancel
Processing --> Cancelled : cancel
Delivered --> Completed : updateStatus
Completed --> [*]
Cancelled --> [*]

@enduml
```

<!-- diagram id="state-order" -->
