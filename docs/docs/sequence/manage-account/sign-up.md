# Sequence Sign Up

```plantuml
@startuml
autonumber

actor User as U
boundary SignUpView as SUV
boundary HomeView as HV
boundary AuthenticationManagerSignUpView as AMSUV

entity ACCOUNT as A
control BackendUserController as BUC
entity USER as US

SUV -> SUV: Display SignUpView
activate SUV
note left of SUV: Generate code verifier(random)\nand hash it -> code challenge
U -> SUV: Click Sign Up
activate U
SUV -> AMSUV: Redirect with code challenge
deactivate SUV
activate AMSUV
AMSUV -> AMSUV: Display AuthenticationManagerSignUpView
activate AMSUV
deactivate AMSUV

loop invalid data format
  AMSUV -> AMSUV: Display "Invalid data format" error
  activate AMSUV
  deactivate AMSUV
  U -> AMSUV: Re-enter User data
  deactivate U
  AMSUV -> AMSUV: Validate data format
  activate AMSUV
  deactivate AMSUV
end

AMSUV -> AMSUV: Data OK
activate AMSUV
deactivate AMSUV

AMSUV -> A: User data
activate A
A -> A: Check if user/email exists
activate A
deactivate A

break already exists
    AMSUV <-- A: Error
    AMSUV -> AMSUV: Display error
    activate AMSUV
    deactivate AMSUV
end

A -> A: Create new user + hash password
activate A
deactivate A
AMSUV <-- A: Authorization code
deactivate A

AMSUV -> A: Send authorization code + verifier
activate A
A -> A: Validate code + verifier + challenge
activate A
deactivate A

break invalid code + verifier
  AMSUV <-- A: Error
  AMSUV -> AMSUV: Display error
  activate AMSUV
  deactivate AMSUV
end

AMSUV <-- A: JWT Token
deactivate A

AMSUV -> BUC: Send JWT Token
activate BUC

BUC -> US: Validate JWT
activate US
US -> US: Verify JWT & Write data
activate US
deactivate US

break invalid JWT Token
  BUC <-- US: Error
  AMSUV <-- BUC: Error
  AMSUV -> AMSUV: Display error
  activate AMSUV
  deactivate AMSUV
end

BUC <-- US: Success
deactivate US
AMSUV <-- BUC: Success
deactivate BUC
deactivate AMSUV
HV <- AMSUV: redirect to HomeView
deactivate AMSUV
activate HV
deactivate HV
HV -> HV: Display HomeView
@enduml
```

<!-- diagram id="sequence-manage-account-sign-up" -->
