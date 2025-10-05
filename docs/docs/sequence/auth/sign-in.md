# Sign In

```plantuml
@startuml
autonumber

actor User as U
boundary SignInView as SIV
boundary HomeView as HV
boundary AuthenticationManagerSignInView as AMSIV
entity AuthenticationManagerUserManagement as AMUM
control BackendUserController as BUC
entity BackendUserManagement as BUM

SIV -> SIV: Display SignInView
activate SIV
note left of SIV: Generate code verifier(random)\nand hash it -> code challenge
U -> SIV: Click Sign In
activate U
SIV -> AMSIV: Redirect with code challenge
deactivate SIV
activate AMSIV

AMSIV -> AMSIV: Display SignInView
activate AMSIV
deactivate AMSIV
U -> AMSIV : Enter credential
deactivate U
AMSIV -> AMSIV: Validate data format
activate AMSIV
deactivate AMSIV

loop until valid data format
  U -> AMSIV : Enter credential
  deactivate U
  AMSIV -> AMSIV: Validate data format
  activate AMSIV
  deactivate AMSIV

  alt invalid data format
    AMSIV -> AMSIV: Display error
    activate AMSIV
    deactivate AMSIV
  else valid
    AMSIV -> AMSIV: Data OK

  end
end

loop until valid credential
  AMSIV -> AMUM: Send user credential
  activate AMUM

  AMUM -> AMUM: Validate user credential
  activate AMUM
  deactivate AMUM

  alt invalid credential
    AMSIV <-- AMUM: Error
    AMSIV -> AMSIV: Display error
    activate AMSIV
    deactivate AMSIV
    U -> AMSIV : Re-enter credential
    deactivate U
  else valid
    AMSIV <-- AMUM: Authorization code
  end
  deactivate AMUM
end

AMSIV -> AMUM: Send authorization code + verifier
activate AMUM
AMUM -> AMUM: Validate code + verifier + challenge
activate AMUM
deactivate AMUM

break invalid code + verifier
  AMSIV <-- AMUM: Error
  AMSIV -> AMSIV: Display error
  activate AMSIV
  deactivate AMSIV
end

AMSIV <-- AMUM: JWT Token
deactivate AMUM

AMSIV -> BUC: Send JWT Token

activate BUC

BUC -> BUM: Validate JWT
activate BUM
BUM -> BUM: Verify JWT
activate BUM
deactivate BUM

break invalid JWT Token
  BUC <-- BUM: Error
  AMSIV <-- BUC: Error
  AMSIV -> AMSIV: Display error
  activate AMSIV
  deactivate AMSIV
end

BUC <-- BUM: Success
deactivate BUM
AMSIV <-- BUC: Success
deactivate BUC
HV <- AMSIV: redirect to HomeView
deactivate AMSIV
activate HV
deactivate HV
HV -> HV: Display HomeView
@enduml
```

<!-- diagram id="sequence-auth-sign-in" -->
