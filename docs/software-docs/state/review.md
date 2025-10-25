# State Review

```plantuml
hide empty description

[*] --> Published : create
Published --> Published : update
Published --> Deleted : delete
Deleted --> [*]

@enduml
```

<!-- diagram id="state-review" -->
