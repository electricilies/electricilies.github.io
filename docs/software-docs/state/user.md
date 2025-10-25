# State User

```plantuml
hide empty description

[*] --> Guest : Initial State
Guest --> User: signUp
Guest --> User: signIn
User --> User: editProfile
User --> User: changePassword
User --> Guest: signOut

Guest --> Recovering: recoverAccount
Recovering --> Guest: changePassword

User --> Banned: ban
Banned --> User: unban

User --> Deleted: deleteAccount
Deleted --> [*]

@enduml
```

<!-- diagram id="state-user" -->
