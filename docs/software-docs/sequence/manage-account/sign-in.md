# Sequence Sign In

```plantuml
@startuml
autonumber

actor User as U
boundary HomeView as HV
boundary SignInView as SIV
boundary AuthenticationManagerSignInView as AMSIV
entity ACCOUNT as A
control UserController as UC
entity USER as US

U -> HV: Click button "Sign In"
activate U
activate HV
deactivate U
HV -> SIV: Navigate to SignInView
deactivate HV
activate SIV
SIV -> SIV: Display SignInView
activate SIV
deactivate SIV
note left of SIV: Generate code verifier(random)\nand hash it -> code challenge
U -> SIV: Click button "Continue to Sign In"
activate U
deactivate U
SIV -> AMSIV: Redirect with code challenge
deactivate SIV
activate AMSIV

AMSIV -> AMSIV: Display AuthenticationManagerSignInView
activate AMSIV
deactivate AMSIV

loop invalid data format
  AMSIV -> AMSIV: Display "Invalid data format" error
  activate AMSIV
  deactivate AMSIV
  U -> AMSIV: Enter user credential
  deactivate U
  AMSIV -> AMSIV: Validate data format
  activate AMSIV
  deactivate AMSIV
end

AMSIV -> AMSIV: Data OK
activate AMSIV
deactivate AMSIV

AMSIV -> A: Send user credential
activate A

A -> A: Validate user credential
activate A
deactivate A

break invalid credential
  AMSIV <-- A: Error
  AMSIV -> AMSIV: Display error
  activate AMSIV
  deactivate AMSIV
  deactivate U
end

AMSIV <-- A: Authorization code
deactivate A

AMSIV -> A: Send authorization code + verifier
activate A
A -> A: Validate code + verifier + challenge
activate A
deactivate A

break invalid code + verifier
  AMSIV <-- A: Error
  AMSIV -> AMSIV: Display error
  activate AMSIV
  deactivate AMSIV
end

AMSIV <-- A: JWT Token
deactivate A

AMSIV -> UC: Send JWT Token
activate UC

UC -> US: Validate JWT
activate US
A <- US: Send and verify JWT
activate A


break invalid JWT Token
  A --> US: Error
  AMSIV <-- UC: Error
  AMSIV -> AMSIV: Display error
  activate AMSIV
  deactivate AMSIV
end

A --> US: JWT valid
US -> US: Sign to get User role from JWT
activate US
deactivate US
A <- US: Get actual user role
A --> US: user role
US -> US: Check role by comparing user role from jwt and actual user role
activate US
deactivate US
break invalid role
  US --> UC: Error
  AMSIV <-- UC: Error
  AMSIV -> AMSIV: Display error
  activate AMSIV
  deactivate AMSIV
end
deactivate US
AMSIV <-- UC: Success
deactivate UC
HV <- AMSIV: redirect to HomeView
deactivate AMSIV
activate HV
deactivate HV
HV -> HV: Display HomeView
@enduml
```

<!-- diagram id="sequence-manage-account-sign-in" -->
