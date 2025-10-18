# Sequence Manage Account

```plantuml
@startuml
autonumber

actor User as U
boundary HomeView as HV
control UserController as UC
entity USER as Us

UC -> Us: Get user account information
activate UC
activate Us
UC <-- Us: User account information
deactivate Us
HV <-- UC: User account information
deactivate UC
activate HV
HV -> HV: Display account menu
activate HV
deactivate HV

U -> HV: Choose function
activate U

opt Delete Account
  ref over U, Us: Delete Account
end

opt Edit Profile
  ref over U, Us: Edit Profile
end

opt Link Account With Third Party
  ref over U, Us: Link Account With Third Party
end

opt Recover Account
  ref over U, Us: Recover Account
end

opt Reset Password
  ref over U, Us: Reset Password
end

opt Sign In
  ref over U, Us: Sign In
end

opt Sign Out
  ref over U, Us: Sign Out
end

opt Sign Up
  ref over U, Us: Sign Up
end

deactivate HV
deactivate U

@enduml
```

<!-- diagram id="sequence-manage-account-manage-account" -->