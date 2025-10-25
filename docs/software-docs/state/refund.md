# State Refund

```plantuml
hide empty description

[*] --> Pending : create
Pending --> Processing : process
Processing --> Completed : updateStatus
Processing --> Failed : updateStatus
Completed --> [*]
Failed --> [*]

@enduml
```

<!-- diagram id="state-refund" -->
