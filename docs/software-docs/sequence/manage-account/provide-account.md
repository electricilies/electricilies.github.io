# Sequence Provide Account

```plantuml
@startuml
autonumber

actor Admin as A
boundary UserManagementView as UMV
boundary ProvideAccountView as PAV
boundary AuthenticationManagerProvideAccountView as AMPAV
entity ACCOUNT as AC
control UserController as UC
entity USER as US

A -> UMV: Click button "Provide Account"
activate A
activate UMV
deactivate A
UMV -> PAV: Navigate to ProvideAccountView
deactivate UMV
activate PAV
PAV -> PAV: Display ProvideAccountView
activate PAV
deactivate PAV
note left of PAV: Generate code verifier(random)\nand hash it -> code challenge
A -> PAV: Click button "Continue to Provide Account"
activate A
deactivate A
PAV -> AMPAV: Redirect with code challenge
deactivate PAV
activate AMPAV
AMPAV -> AMPAV: Display AuthenticationManagerProvideAccountView
activate AMPAV
deactivate AMPAV

loop invalid data format
  AMPAV -> AMPAV: Display "Invalid data format" error
  activate AMPAV
  deactivate AMPAV
  A -> AMPAV: Enter user data (username, password, email, full name, role)
  deactivate A
  AMPAV -> AMPAV: Validate data format
  activate AMPAV
  deactivate AMPAV
end

AMPAV -> AMPAV: Data OK
activate AMPAV
deactivate AMPAV

AMPAV -> AC: Send user data
activate AC
AC -> AC: Check if username/email exists
activate AC
deactivate AC

break already exists
  AMPAV <-- AC: Error
  AMPAV -> AMPAV: Display error
  activate AMPAV
  deactivate AMPAV
end

AC -> AC: Create new user + hash password
activate AC
deactivate AC
AMPAV <-- AC: Authorization code
deactivate AC

AMPAV -> AC: Send authorization code + verifier
activate AC
AC -> AC: Validate code + verifier + challenge
activate AC
deactivate AC

break invalid code + verifier
  AMPAV <-- AC: Error
  AMPAV -> AMPAV: Display error
  activate AMPAV
  deactivate AMPAV
end

AMPAV <-- AC: JWT Token
deactivate AC

AMPAV -> UC: Send JWT Token
activate UC

UC -> US: Validate JWT
activate US
US -> US: Verify JWT & Write data
activate US
deactivate US

break invalid JWT Token
  UC <-- US: Error
  AMPAV <-- UC: Error
  AMPAV -> AMPAV: Display error
  activate AMPAV
  deactivate AMPAV
end

UC <-- US: Success
deactivate US
AMPAV <-- UC: Success
deactivate UC
UMV <- AMPAV: redirect to UserManagementView
deactivate AMPAV
activate UMV
deactivate UMV
UMV -> UMV: Display UserManagementView with success notification
@enduml
```

<!-- diagram id="sequence-manage-account-provide-account" -->
