# State Return Request

```plantuml
hide empty description

[*] --> Pending : create
Pending --> Approved : approve
Pending --> Rejected : reject
Pending --> Pending : updateStatus
Approved --> [*]
Rejected --> [*]

@enduml
```

<!-- diagram id="state-return-request" -->
