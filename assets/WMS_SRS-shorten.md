**SOFTWARE REQUIREMENTS SPECIFICATION**

Wedding Management System

## Revision and Signoff Sheet

### Change Record

### Reviewers

#

## 1\. Introduction {#1.-introduction}

### 1.1 Purpose {#1.1-purpose}


### 1.2 Scope {#1.2-scope}


### 1.3 Intended Audiences and Document Organization {#1.3-intended-audiences-and-document-organization}


### 1.4 References {#1.4-references}

##

## 2\. Functional Requirements {#2.-functional-requirements}

### 2.1 Use Case Description {#2.1-use-case-description}

#### 2.1.1 Authentication Use Case {#2.1.1-authentication-use-case}

##### 2.1.1.1 Login {#2.1.1.1-login}

###### *Use Case Description* {#use-case-description}

| Name | Login |
| :---- | :---- |
| **Description** | This use case allows users (Staff, Administrator) to authenticate and access the WMS system using their credentials (username and password). |
| **Actor** | Staff, Administrator |
| **Trigger** | When the user clicks on the "Login" button on the corresponding screen. |
| **Pre-condition** | User's device must be connected to the internet. User's account must have been in the system. |
| **Post-condition** | User is signed in the system and redirected to role-specific home page. |

######

###### *Activities Flow* {#activities-flow}

###### *![][image1]*

###### *Business Rules* {#business-rules}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR1* | **Displaying Rules:** The system displays a "LoginWindow" screen. (Refer to "LoginWindow" view in "View Description" file) |
| *(3), (4), (5), (5.1)* | *BR2* | **Validation Rules:** When user clicks button \[LoginButton\] on the screen, the system will use method `Login(Window window)` in `LoginViewModel` to check that the input is valid (empty or not). These fields include: \[UsernameTextBox\] and \[PasswordBox\]. If the input is not valid: System moves to step (5.1) to display an error message. IF (isValidationUserName(\[Username\]) \= TRUE, the system will display a message for requiring user to enter username. (Refer to MSG 1\) IF \[Password\].IsEmpty \= TRUE, the system will display a message for requiring user to enter password. (Refer to MSG 1\) |
| *(6), (6.1), (7), (8), (9), (10), (11)* | *BR3* | **Querying Rules:** The input data (username and password) will be checked by table "AppUser" in the database (Refer to "AppUser" table in "QuanLyTiecCuoi.sql" file) if it exists in the system. The system uses method \`MD5Hash(Base64Encode(Password))\` in \`PasswordHelper\` class to hash the password, then queries users by syntax " SELECT \* FROM AppUser  WHERE Username \= \[inputUsername\] AND PasswordHash \= \[hashedPassword\]". IF \[users\].Count \= 0, the system moves to step (6.1) and displays an error message for incorrect credentials. (Refer to MSG 2\) ELSE system moves to step (7)-(11): stores current user to session by method \`setCurrentUser(user)\`, creates new MainWindow with MainViewModel as DataContext, shows MainWindow and closes LoginWindow. System displays successful login notification. (Refer to MSG 3\) |

##### 2.1.1.2 Logout {#2.1.1.2-logout}

###### *Use Case Description* {#use-case-description-1}

| Name | Logout |
| :---- | :---- |
| **Description** | This use case allows authenticated users to log out from the WMS system and return to the login page. |
| **Actor** | Staff, Administrator |
| **Trigger** | When the user clicks on the "Logout" button from navigation menu. |
| **Pre-condition** | User must be authenticated and have an active session. |
| **Post-condition** | User session is cleared, and user is redirected to login page. |

###### *Activities Flow* {#activities-flow-1}

###### *![][image2]*

######

###### *Business Rules* {#business-rules-1}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4), (5), (6), (7), (8)* | *BR4* | **Processing Rules:** When user clicks \[LogoutButton\] on the navigation menu, the system will use `LogoutCommand` in `MainViewModel` to process the logout request. System creates new LoginWindow with LoginViewModel as DataContext by method \`getService(LoginViewModel)\`, reinitializes database context by method \`resetDatabaseContext()\`, shows LoginWindow, calls method \`LoadButtonVisibility()\` to reset button visibility states, calls method \`clearCurrentUser()\` to clear current session, and closes current MainWindow. |

##### 2.1.1.3 Manage Profile {#2.1.1.3-manage-profile}

###### *Use Case Description* {#use-case-description-2}

| Name | Manage Profile |
| :---- | :---- |
| **Description** | This use case allows authenticated users to view and update their personal profile information including username, full name, and email. |
| **Actor** | Staff, Administrator |
| **Trigger** | When the user clicks "Account" menu item from navigation bar. |
| **Pre-condition** | User must be authenticated with valid active session. |
| **Post-condition** | User's profile information is updated in system and changes are saved to database. |

######

###### *Activities Flow* {#activities-flow-2}

![][image3]

######

###### *Business Rules* {#business-rules-2}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR5* | **Displaying Rules:** When user selects function Manage Profile by clicking \[AccountCommand\], the system reinitializes database context by method `resetDatabaseContext()`, creates new AccountView with AccountViewModel as DataContext by method `getService(AccountViewModel)`. The AccountViewModel constructor loads current user data by method \`getCurrentUser()\` and displays "AccountView" screen with fields: \[Username\], \[FullName\], \[Email\], \[GroupName\]. (Refer to "AccountView" view in "View Description" file) |
| *(3), (4), (5), (5.1)* | *BR6* | **Validation Rules:** When user edits profile information and clicks \[SaveButton\], the system will use `SaveCommand` in `AccountViewModel` to validate data. IF \[Username\] \= \[currentUser.Username\] AND \[FullName\] \= \[currentUser.FullName\] AND \[Email\] \= \[currentUser.Email\], the system displays info message and returns false. (Refer to MSG 16\) IF \[Username\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 11\) IF isDuplicateUsername(\[Username\], \[currentUser.UserId\]) \= TRUE, the system displays validation message and returns false. (Refer to MSG 5\) IF \[FullName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 13\) IF isValidEmail(\[Email\]) \= FALSE (checked by method \`IsValidEmail(email)\` in \`EmailValidationHelper\` class), the system displays validation message and returns false. (Refer to MSG 4\) |
| *(6), (7), (7a), (8), (8a)* | *BR7* | **Processing Rules:** After validation passes, the system creates AppUserDTO object with updated values (UserId, Username, PasswordHash, FullName, Email, GroupId, UserGroup), calls method `Update(updateDto)` in `AppUserService` class to update AppUser record in database by syntax "UPDATE AppUser SET Username \= \[Username\], FullName \= \[FullName\], Email \= \[Email\] WHERE UserId \= \[UserId\]". System updates current user session with new values and displays success notification. (Refer to MSG 6\) IF exception occurs, system displays error message. (Refer to MSG 113\) |

##### 2.1.1.4 Change Password {#2.1.1.4-change-password}

###### *Use Case Description* {#use-case-description-3}

| Name | Change Password |
| :---- | :---- |
| **Description** | This use case allows authenticated users to change their password by providing current password and new password. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects function Change Password. |
| **Pre-condition** | User must be authenticated with valid active session. |
| **Post-condition** | User's password is updated in database and user is redirected to login page. |

######

###### *Activities Flow* {#activities-flow-3}

![][image4]

######

###### *Business Rules* {#business-rules-3}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR8* | **Displaying Rules:** The system displays a change password form within "AccountView" screen with fields: \[CurrentPassword\], \[NewPassword\], \[ConfirmNewPassword\]. The password fields use PasswordBox control and values are captured by method \`PasswordChangedCommand(PasswordBox)\` in \`AccountViewModel\`. (Refer to "AccountView" view in "View Description" file) |
| *(3), (4), (5), (5.1)* | *BR9* | **Validation Rules:** When user enters passwords and clicks \[ChangePasswordButton\], the system will use `ChangePasswordCommand` in `AccountViewModel` to validate inputs. IF \[CurrentPassword\].IsEmpty \= TRUE OR \[NewPassword\].IsEmpty \= TRUE OR \[ConfirmNewPassword\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 10\) IF \[NewPassword\] \!= \[ConfirmNewPassword\], the system displays validation message and returns false. (Refer to MSG 7\) |
| *(6), (7), (7a), (8), (8a), (9)* | *BR10* | **Processing Rules:** After validation passes, the system verifies current password by method `verifyPassword(CurrentPassword, storedHash)` which compares \[hashedCurrentPassword\] with \[user.PasswordHash\]. IF \[hashedCurrentPassword\] \!= \[user.PasswordHash\], system displays validation message and returns false. (Refer to MSG 8\) ELSE the system hashes new password by method \`MD5Hash(Base64Encode(NewPassword))\` in \`PasswordHelper\` class, calls method \`Update(updateDto)\` in \`AppUserService\` class to update in database by syntax "UPDATE AppUser SET PasswordHash \= \[newHash\] WHERE UserId \= \[UserId\]", calls method \`Reset()\` to clear password fields, and displays success notification. (Refer to MSG 9\) |

##### 2.1.1.5 Forgot Password {#2.1.1.5-forgot-password}

###### *Use Case Description* {#use-case-description-4}

| Name | Forgot Password |
| :---- | :---- |
| **Description** | This use case allows users to reset their password via registered email. |
| **Actor** | Customer, Staff, Administrator |
| **Trigger** | When user clicks "Forgot Password" link on login page. |
| **Pre-condition** | User is not logged in. User has a registered email in the system. |
| **Post-condition** | Password reset link is sent to user's email or password is reset. |

######

###### *Activities Flow* {#activities-flow-4}

![][image5]

###### ![][image6]

######

###### *Business Rules* {#business-rules-4}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR11A* | **Displaying Rules:** When user clicks "Quên mật khẩu" link on login page, the system displays forgot password form with field: \[Email\]. |
| *(3), (4), (5), (5.1)* | *BR11B* | **Validation Rules:** When user enters email and clicks \[SendResetButton\], the system validates data. IF \[Email\].IsEmpty \= TRUE, displays validation message. (Refer to MSG 4\) IF isValidEmailFormat(\[Email\]) \= FALSE, displays validation message. (Refer to MSG 4\) IF email not found in database, displays validation message. (Refer to MSG 99\) |
| *(6), (7), (8)* | *BR11C* | **Processing Rules:** After validation passes, the system generates password reset token, stores token with expiration time (24 hours) in database. System sends email with reset link to user's email address and displays success notification. (Refer to MSG 100\) |

#### 2.1.2 System Management Use Case {#2.1.2-system-management-use-case}

##### 2.1.2.1 View User Details {#2.1.2.1-view-user-details}

###### *Use Case Description* {#use-case-description-5}

| Name | View User Details |
| :---- | :---- |
| **Description** | This use case allows Administrator to view the list of all users and their details in the system. |
| **Actor** | Administrator |
| **Trigger** | When Admin selects view user details function. |
| **Pre-condition** | Admin must be authenticated with valid active session and have "User" permission. |
| **Post-condition** | User list is displayed with all user information. |

######

###### *Activities Flow* {#activities-flow-5}

![][image7]

######

###### *Business Rules* {#business-rules-5}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR11* | **Displaying Rules:** When admin clicks \[UserCommand\], the system reinitializes database context by method `resetDatabaseContext()`, creates new UserView with UserViewModel as DataContext by method `getService(UserViewModel)`. The UserViewModel constructor loads users from database by method \`GetAll()\` in \`AppUserService\` class with syntax "SELECT \* FROM AppUser WHERE GroupId \!= \[currentGroupId\] AND GroupId \!= 'ADMIN'", loads user types by method \`GetAll()\` in \`UserGroupService\` class with same filter, and displays "UserView" screen with DataGrid showing list of users. (Refer to "UserView" view in "View Description" file) |
| *(3), (4), (5), (6)* | *BR12* | **Searching Rules:** When admin enters search text in \[SearchText\] field, the system uses method `PerformSearch()` in `UserViewModel` to filter users. The method checks \[SelectedSearchProperty\] and filters \[OriginalList\] accordingly: IF \[SelectedSearchProperty\] \= "Username", filter by \[Username\] CONTAINS \[SearchText\]. IF \[SelectedSearchProperty\] \= "FullName", filter by \[FullName\] CONTAINS \[SearchText\]. IF \[SelectedSearchProperty\] \= "GroupId", filter by \[GroupId\] CONTAINS \[SearchText\]. IF \[SelectedSearchProperty\] \= "Email", filter by \[Email\] CONTAINS \[SearchText\]. |
| *(7), (8), (9), (10)* | *BR13* | **Selection Rules:** When admin selects user from DataGrid, the system triggers property setter `setSelectedItem(user)` in `UserViewModel`. The system populates form fields: \[Username\] \= \[SelectedItem.Username\], \[NewPassword\] \= empty, \[FullName\] \= \[SelectedItem.FullName\], \[Email\] \= \[SelectedItem.Email\], \[SelectedUserType\] \= getUserType(\[SelectedItem.GroupId\]). Admin views user information and can close dialog or proceed to edit/delete. |

##### 2.1.2.2 Add New User {#2.1.2.2-add-new-user}

###### *Use Case Description* {#use-case-description-6}

| Name | Add New User |
| :---- | :---- |
| **Description** | This use case allows Administrator to add a new user (staff) to the system. |
| **Actor** | Administrator |
| **Trigger** | When Admin selects function Add New User. |
| **Pre-condition** | Admin must be authenticated and have "User" permission. UserView is displayed. |
| **Post-condition** | New user is created in database and displayed in user list. |

######

###### *Activities Flow* {#activities-flow-6}

![][image8]

######

###### *Business Rules* {#business-rules-6}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR14* | **Displaying Rules:** When admin selects action "Add" from \[SelectedAction\], the system sets \[IsAdding\] \= TRUE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= FALSE and calls method `Reset()` to clear form fields. The system displays add user form with fields: \[Username\], \[NewPassword\], \[FullName\], \[Email\], \[SelectedUserType\] dropdown, and \[IsPasswordChangeEnabled\] checkbox. (Refer to "UserView" view in "View Description" file) |
| *(3), (4), (5), (6), (6.1)* | *BR15* | **Validation Rules:** When admin enters user information and clicks \[AddCommand\], the system will use `AddCommand` in `UserViewModel` to validate data. IF \[Username\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 11\) IF \[IsPasswordChangeEnabled\] \= FALSE OR \[NewPassword\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 12\) IF \[FullName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 13\) IF \[SelectedUserType\] \= NULL, the system displays validation message and returns false. (Refer to MSG 14\) IF isValidEmail(\[Email\]) \= FALSE (checked by method \`IsValidEmail(email)\` in \`EmailValidationHelper\` class), the system displays validation message and returns false. (Refer to MSG 4\) IF isDuplicateUsername(\[Username\]) \= TRUE (checked by syntax "SELECT COUNT(\*) FROM AppUser WHERE Username \= \[Username\]"), the system displays validation message and returns false. (Refer to MSG 5\) |
| *(7), (8), (9), (10)* | *BR16* | **Processing Rules:** After validation passes, the system creates new AppUserDTO object with: \[Username\], \[PasswordHash\] \= MD5Hash(Base64Encode(\[NewPassword\])) (using method `MD5Hash(Base64Encode(password))` in `PasswordHelper` class), \[FullName\], \[Email\], \[GroupId\] \= \[SelectedUserType.GroupId\]. System calls method \`Create(newUser)\` in \`AppUserService\` class to insert into database by syntax "INSERT INTO AppUser (Username, PasswordHash, FullName, Email, GroupId) VALUES (...)", adds to \[UserList\], calls method \`Reset()\` to clear form, and displays success notification. (Refer to MSG 15\) |

##### 2.1.2.3 Edit User {#2.1.2.3-edit-user}

###### *Use Case Description* {#use-case-description-7}

| Name | Edit User |
| :---- | :---- |
| **Description** | This use case allows Administrator to edit an existing user's information in the system. |
| **Actor** | Administrator |
| **Trigger** | When Admin selects function Edit User. |
| **Pre-condition** | Admin must be authenticated with "User" permission. A user must be selected. |
| **Post-condition** | User information is updated in database and reflected in user list. |

######

###### *Activities Flow* {#activities-flow-7}

![][image9]

###### *Business Rules* {#business-rules-7}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (2.1), (2.2), (3)* | *BR17* | **Displaying Rules:** When admin selects action "Edit" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= TRUE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= FALSE and calls method `Reset()`. When admin selects a user from DataGrid, the system triggers property setter \`setSelectedItem(user)\` to populate form with current data. (Refer to "UserView" view in "View Description" file) |
| *(4), (5), (6), (6.1)* | *BR18* | **Validation Rules:** When admin edits user information and clicks \[EditCommand\], the system will use `EditCommand` in `UserViewModel` to validate data. IF \[SelectedItem\] \= NULL, returns false. IF no changes detected, the system displays info message and returns false. (Refer to MSG 16\) IF \[Username\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 11\) IF isDuplicateUsername(\[Username\], \[SelectedItem.UserId\]) \= TRUE (checked by syntax "SELECT COUNT(\*) FROM AppUser WHERE Username \= \[Username\] AND UserId \!= \[SelectedItem.UserId\]"), the system displays validation message and returns false. (Refer to MSG 5\) IF \[FullName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 13\) IF isValidEmail(\[Email\]) \= FALSE (checked by method \`IsValidEmail(email)\` in \`EmailValidationHelper\` class), the system displays validation message and returns false. (Refer to MSG 4\) IF \[IsPasswordChangeEnabled\] \= TRUE AND \[NewPassword\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 12\) |
| *(7), (8), (9), (10)* | *BR19* | **Processing Rules:** After validation passes, the system creates AppUserDTO object with: \[UserId\] \= \[SelectedItem.UserId\], \[Username\], \[FullName\], \[Email\], \[GroupId\] \= \[SelectedUserType.GroupId\]. IF \[NewPassword\].IsEmpty \= FALSE, sets \[PasswordHash\] \= MD5Hash(Base64Encode(\[NewPassword\])) (using method \`MD5Hash(Base64Encode(password))\` in \`PasswordHelper\` class). ELSE keeps existing password by method \`GetById(UserId)\` in \`AppUserService\` class. System calls method \`Update(updateDto)\` in \`AppUserService\` class to update in database by syntax "UPDATE AppUser SET Username \= \[Username\], FullName \= \[FullName\], Email \= \[Email\], GroupId \= \[GroupId\], PasswordHash \= \[PasswordHash\] WHERE UserId \= \[UserId\]", updates \[UserList\] at selected index, calls method \`Reset()\`, and displays success notification. (Refer to MSG 17\) |

##### 2.1.2.4 Delete User {#2.1.2.4-delete-user}

###### *Use Case Description* {#use-case-description-8}

| Name | Delete User |
| :---- | :---- |
| **Description** | This use case allows Administrator to delete an existing user from the system. |
| **Actor** | Administrator |
| **Trigger** | When Admin selects delete user function. |
| **Pre-condition** | Admin must be authenticated with "User" permission. A user must be selected. |
| **Post-condition** | User is removed from database and no longer displayed in user list. |

###### *Activities Flow* {#activities-flow-8}

![][image10]

###### ![][image11]

######

###### *Business Rules* {#business-rules-8}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4)* | *BR20* | **Displaying Rules:** When admin selects action "Delete" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= TRUE, \[IsExporting\] \= FALSE and calls method `Reset()`. The system displays users list in DataGrid. Admin selects user to delete. (Refer to "UserView" view in "View Description" file) |
| *(5), (5.1), (5.2)* | *BR21* | **Validation Rules:** The `DeleteCommand` in `UserViewModel` checks if a user is selected. IF \[SelectedItem\] \= NULL, the command returns false and cannot execute. |
| *(6), (7), (7.1), (7.2)* | *BR22* | **Confirmation Rules:** When delete command is executed, the system displays confirmation dialog. IF user clicks "No" button, the operation is cancelled and no changes are made. |
| *(8), (9), (10)* | *BR23* | **Processing Rules:** IF admin clicks "Yes" button to confirm delete, the system calls method `Delete(UserId)` in `AppUserService` class to delete user from database by syntax "DELETE FROM AppUser WHERE UserId \= \[SelectedItem.UserId\]", removes user from \[UserList\], calls method `Reset()` to clear selection, and displays success notification. (Refer to MSG 18\) IF exception occurs, system displays error message. (Refer to MSG 113\) |

##### 2.1.2.5 View Permission Group Details {#2.1.2.5-view-permission-group-details}

###### *Use Case Description* {#use-case-description-9}

| Name | View Permission Group Details |
| :---- | :---- |
| **Description** | This use case allows Administrator to view the list of all permission groups and their permissions. |
| **Actor** | Administrator |
| **Trigger** | When Admin selects view permission groups function. |
| **Pre-condition** | Admin must be authenticated with valid active session and have "Permission" permission. |
| **Post-condition** | Permission group list is displayed with all group information and their associated permissions. |

######

###### *Activities Flow* {#activities-flow-9}

![][image12]

######

###### *Business Rules* {#business-rules-9}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR24* | **Displaying Rules:** When admin clicks \[PermissionCommand\], the system reinitializes database context by method `resetDatabaseContext()`, creates new PermissionView with PermissionViewModel as DataContext. The PermissionViewModel constructor loads permission groups from database by method \`GetAll()\` in \`UserGroupService\` class with syntax "SELECT \* FROM UserGroup WHERE GroupName \!= 'Administrator' AND GroupId \!= \[currentGroupId\]", initializes \[PermissionStates\] dictionary with permission checkboxes for each function (Home, HallType, Hall, Shift, Food, Service, Wedding, Report, Parameter, Permission, User), and displays "PermissionView" screen with DataGrid showing list of permission groups. (Refer to "PermissionView" view in "View Description" file) |
| *(3), (4), (5), (6)* | *BR25* | **Searching Rules:** When admin enters search text in \[SearchText\] field, the system uses method `PerformSearch()` in `PermissionViewModel` to filter groups. The method filters \[OriginalList\] by \[GroupName\] CONTAINS \[SearchText\]. IF \[SearchText\].IsEmpty \= TRUE OR \[SelectedSearchProperty\] \= NULL, the system resets \[GroupList\] \= \[OriginalList\]. |
| *(7), (8), (9), (10)* | *BR26* | **Selection Rules:** When admin selects permission group from DataGrid, the system triggers property setter `setSelectedItem(group)` in `PermissionViewModel`. The system sets \[GroupName\] \= \[SelectedItem.GroupName\], \[IsSelected\] \= TRUE, and calls method \`UpdatePermissionStates()\` to populate checkboxes. The \`UpdatePermissionStates()\` method queries permissions from database by syntax "SELECT PermissionId FROM Permission WHERE GroupId \= \[SelectedItem.GroupId\]" and sets \[IsChecked\] state for each PermissionState based on whether \[permissionIdSet\] CONTAINS \[state.PermissionId\]. Admin views permission group information with assigned functions. |

##### 2.1.2.6 Add New Permission Group {#2.1.2.6-add-new-permission-group}

###### *Use Case Description* {#use-case-description-10}

| Name | Add New Permission Group |
| :---- | :---- |
| **Description** | This use case allows Administrator to add a new permission group to the system. |
| **Actor** | Administrator |
| **Trigger** | When Admin selects function Add New Permission Group. |
| **Pre-condition** | Admin must be authenticated and have "Permission" permission. PermissionView is displayed. |
| **Post-condition** | New permission group is created in database and displayed in group list. |

######

###### *Activities Flow* {#activities-flow-10}

![][image13]

######

###### *Business Rules* {#business-rules-10}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR27* | **Displaying Rules:** When admin selects action "Add" from \[SelectedAction\], the system sets \[IsAdding\] \= TRUE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= FALSE and calls method `Reset()` to clear form. The system displays add permission group form with field \[GroupName\] and function checkboxes from \[PermissionStates\] dictionary (Home, HallType, Hall, Shift, Food, Service, Wedding, Report, Parameter, Permission, User). (Refer to "PermissionView" view in "View Description" file) |
| *(3), (4), (5), (6), (6.1)* | *BR28* | **Validation Rules:** When admin enters group name and clicks \[AddCommand\], the system will use `AddCommand` in `PermissionViewModel` to validate data. IF \[GroupName\].IsEmpty \= TRUE, the system displays error message and returns false. (Refer to MSG 20\) IF \[GroupName\] \= "Administrator" OR \[GroupName\].ToLower CONTAINS "administrator" OR \[GroupName\].ToLower CONTAINS "admin", the system displays error message and returns false. (Refer to MSG 21\) IF isDuplicateGroupName(\[GroupName\]) \= TRUE (checked by syntax "SELECT COUNT(\*) FROM UserGroup WHERE GroupName \= \[GroupName\]"), the system displays error message and returns false. (Refer to MSG 22\) |
| *(7), (8), (9), (10)* | *BR29* | **Processing Rules:** After validation passes, the system generates unique GroupId by method `generateGroupId()` which returns "GR" \+ random 8 characters and validates uniqueness by syntax "SELECT COUNT(\*) FROM UserGroup WHERE GroupId \= \[groupId\]". System creates new UserGroupDTO object with \[GroupName\] \= \[GroupName\].Trim and generated \[GroupId\], calls method \`Create(newGroup)\` in \`UserGroupService\` class to insert into database by syntax "INSERT INTO UserGroup (GroupId, GroupName) VALUES (...)", adds to \[GroupList\], calls method \`Reset()\`, and displays success notification. (Refer to MSG 23\) |

##### 2.1.2.7 Edit Permission Group {#2.1.2.7-edit-permission-group}

###### *Use Case Description* {#use-case-description-11}

| Name | Edit Permission Group |
| :---- | :---- |
| **Description** | This use case allows Administrator to edit an existing permission group's name and permissions. |
| **Actor** | Administrator |
| **Trigger** | When Admin selects function Edit Permission Group. |
| **Pre-condition** | Admin must be authenticated with "Permission" permission. A permission group must be selected. |
| **Post-condition** | Permission group is updated in database and reflected in group list. |

######

###### *Activities Flow* {#activities-flow-11}

![][image14]

######

###### *Business Rules* {#business-rules-11}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4), (5)* | *BR30* | **Displaying Rules:** When admin selects action "Edit" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= TRUE, \[IsDeleting\] \= FALSE and calls method `Reset()`. When admin selects a permission group from DataGrid, the system triggers property setter \`setSelectedItem(group)\` to populate form with current data. The system queries current permissions by syntax "SELECT PermissionId FROM Permission WHERE GroupId \= \[SelectedItem.GroupId\]" and populates checkboxes via method \`UpdatePermissionStates()\`. (Refer to "PermissionView" view in "View Description" file) |
| *(6), (7), (8), (8.1)* | *BR31* | **Validation Rules:** When admin edits group name and/or changes function assignments and clicks \[EditCommand\], the system will use `EditCommand` in `PermissionViewModel` to validate data. IF \[SelectedItem\] \= NULL, returns false. IF no changes detected, the system displays error message and returns false. (Refer to MSG 16\) IF \[GroupName\].IsEmpty \= TRUE, the system displays error message and returns false. (Refer to MSG 20\) IF \[GroupName\] \= "Administrator" OR \[GroupName\].ToLower CONTAINS "administrator" OR \[GroupName\].ToLower CONTAINS "admin", the system displays error message and returns false. (Refer to MSG 21\) IF isDuplicateGroupName(\[GroupName\], \[SelectedItem.GroupId\]) \= TRUE, the system displays error message and returns false. (Refer to MSG 22\) |
| *(9), (10), (11)* | *BR32* | **Processing Rules:** After validation passes, the system creates UserGroupDTO object with: \[GroupId\] \= \[SelectedItem.GroupId\], \[GroupName\] \= \[GroupName\].Trim. System calls method \`Update(updateDto)\` in \`UserGroupService\` class to update in database by syntax "UPDATE UserGroup SET GroupName \= \[GroupName\] WHERE GroupId \= \[GroupId\]". The permission assignments are automatically updated via method \`PermissionState\_UpdatePermission()\` which processes each checkbox change by adding/removing permission associations in Permission table. System updates \[GroupList\] at selected index, calls method \`Reset()\`, and displays success notification. (Refer to MSG 24\) |

##### 2.1.2.8 Delete Permission Group {#2.1.2.8-delete-permission-group}

###### *Use Case Description* {#use-case-description-12}

| Name | Delete Permission Group |
| :---- | :---- |
| **Description** | This use case allows Administrator to delete an existing permission group from the system. |
| **Actor** | Administrator |
| **Trigger** | When Admin selects delete permission group function. |
| **Pre-condition** | Admin must be authenticated with "Permission" permission. A permission group must be selected. |
| **Post-condition** | Permission group and its permission assignments are removed from database. |

######

###### *Activities Flow* {#activities-flow-12}

![][image15]

###### ![][image16]

######

###### *Business Rules* {#business-rules-12}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4)* | *BR33* | **Displaying Rules:** When admin selects action "Delete" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= TRUE and calls method `Reset()`. The system displays permission groups list in DataGrid. Admin selects permission group to delete. (Refer to "PermissionView" view in "View Description" file) |
| *(5), (5.1), (5.2)* | *BR34* | **Reference Check Rules:** The `DeleteCommand` in `PermissionViewModel` checks if the group has referenced data by method `hasReferences(GroupId)` which queries "SELECT COUNT(\*) FROM AppUser WHERE GroupId \= \[SelectedItem.GroupId\]". IF \[hasReferences\] \= TRUE (users exist in this group), the system displays warning message and returns false. Admin views referenced user count and confirms end. (Refer to MSG 25\) |
| *(6), (7), (7.1), (7.2)* | *BR35* | **Confirmation Rules:** IF no references exist, the system displays confirmation dialog. IF admin clicks "No" button, the operation is cancelled, dialog closes, and no changes are made. |
| *(8), (9), (10)* | *BR36* | **Processing Rules:** IF admin clicks "Yes" button to confirm delete, the system calls method `Delete(GroupId)` in `UserGroupService` class which deletes permission assignments and group in transaction by syntax "DELETE FROM Permission WHERE GroupId \= \[SelectedItem.GroupId\]; DELETE FROM UserGroup WHERE GroupId \= \[SelectedItem.GroupId\]". System removes group from \[GroupList\], calls method \`Reset()\` to clear selection, and displays success notification. (Refer to MSG 26\) |

##### 2.1.2.9 Manage System Parameters {#2.1.2.9-manage-system-parameters}

###### *Use Case Description* {#use-case-description-13}

| Name | Manage System Parameters |
| :---- | :---- |
| **Description** | This use case allows Administrator to view and update system-wide configuration parameters. |
| **Actor** | Administrator |
| **Trigger** | When Admin selects System Settings function. |
| **Pre-condition** | Admin must be authenticated with valid active session and have "Parameter" permission. |
| **Post-condition** | System parameters are updated in database and changes affect system-wide calculations. |

######

###### *Activities Flow* {#activities-flow-13}

![][image17]

######

###### *Business Rules* {#business-rules-13}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3)* | *BR37* | **Displaying Rules:** When admin clicks \[ParameterCommand\], the system reinitializes database context by method `resetDatabaseContext()`, creates new ParameterView with ParameterViewModel as DataContext. The ParameterViewModel constructor loads all system parameters from database by method \`GetAll()\` in \`ParameterService\` class with syntax "SELECT \* FROM Parameter". The system displays "ParameterView" screen with editable fields: \[EnablePenalty\] (checkbox: Có/Không), \[PenaltyRate\] (%), \[MinDepositRate\] (%), \[MinReserveTableRate\] (%). (Refer to "ParameterView" view in "View Description" file) |
| *(4), (5), (6), (7), (8), (8.1)* | *BR38* | **Validation Rules:** When admin edits parameter values and clicks \[EditCommand\], the system will use `EditCommand` in `ParameterViewModel` to validate data. IF \[PenaltyRate\].IsEmpty \= TRUE OR \[MinDepositRate\].IsEmpty \= TRUE OR \[MinReserveTableRate\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 10\) IF \[PenaltyRate\].IsNumeric \= FALSE OR \[MinDepositRate\].IsNumeric \= FALSE OR \[MinReserveTableRate\].IsNumeric \= FALSE, the system displays validation message and returns false. (Refer to MSG 30\) IF isInBounds(\[PenaltyRate\], 0, 1\) \= FALSE OR isInBounds(\[MinDepositRate\], 0, 1\) \= FALSE OR isInBounds(\[MinReserveTableRate\], 0, 1\) \= FALSE, the system displays validation message and returns false. (Refer to MSG 29\) |
| *(9), (10), (11), (12), (13)* | *BR39* | **Processing Rules:** After validation passes, the system updates each parameter in database by method `Update(parameterDto)` in `ParameterService` class: \- Updates EnablePenalty by syntax "UPDATE Parameter SET Value \= \[EnablePenalty\] WHERE ParameterName \= 'EnablePenalty'" \- Updates PenaltyRate by syntax "UPDATE Parameter SET Value \= \[PenaltyRate\] WHERE ParameterName \= 'PenaltyRate'" \- Updates MinDepositRate by syntax "UPDATE Parameter SET Value \= \[MinDepositRate\] WHERE ParameterName \= 'MinDepositRate'" \- Updates MinReserveTableRate by syntax "UPDATE Parameter SET Value \= \[MinReserveTableRate\] WHERE ParameterName \= 'MinReserveTableRate'" System displays success notification and reloads form with updated values. |
| *(10a), (11a), (12a)* | *BR40* | **Error Handling Rules:** IF update fails (exception occurs during database transaction), the system rolls back transaction, displays error notification "Failed to update parameters. Please try again", and admin confirms end. The parameter values remain unchanged in database. (Refer to MSG 28\) |

### Other continue here ...

But stripped for context saving

## 3\. Non-functional Requirements {#3.-non-functional-requirements}

### 3.1 User Access and Security {#3.1-user-access-and-security}

The system is designed based on a user group permission model, ensuring that each user can only access and operate on functions appropriate to their assigned role. The permission data structure includes four main tables: `Permission`, `UserGroup`, `AppUser`, and role-based access control.

**Current Implementation (Desktop Application):**

| Function / Data | Staff | Administrator |
| :---- | :---: | :---: |
| **Manage "Hall"** |  |  |
| Create, Update, Delete |  | X |
| Read | X | X |
| **Manage "Hall Type"** |  |  |
| Create, Update, Delete |  | X |
| Read | X | X |
| **Manage "Dish"** |  |  |
| Create, Update, Delete |  | X |
| Read | X | X |
| **Manage "Service"** |  |  |
| Create, Update, Delete |  | X |
| Read | X | X |
| **Manage "Shift"** |  |  |
| Create, Update, Delete |  | X |
| Read | X | X |
| **Manage "Booking"** |  |  |
| Create, Update, Delete | X | X |
| Read | X | X |
| **Manage "Invoice"** |  |  |
| Create, Update | X | X |
| Read | X | X |
| **Manage "User"** |  |  |
| Create, Update, Delete |  | X |
| Read |  | X |
| **Manage "Permission Group"** |  |  |
| Create, Update, Delete |  | X |
| Read |  | X |
| **Manage "Parameter"** |  |  |
| Update |  | X |
| Read | X | X |
| **Manage "Report"** |  |  |
| Read, Export |  | X |

**Planned Implementation (Customer Web Portal \- Future Phase):**

| Function / Data | Customer | Staff | Administrator |
| :---- | :---: | :---: | :---: |
| **Account Management** |  |  |  |
| Register Account | X |  |  |
| Login/Logout | X | X | X |
| Manage Own Profile | X(\*) | X | X |
| Change Password | X(\*) | X | X |
| Forgot Password | X | X | X |
| **Hall Browsing** |  |  |  |
| View Available Halls | X | X | X |
| Check Hall Availability | X | X | X |
| **Booking Operations** |  |  |  |
| Submit Wedding Reservation | X |  |  |
| View Own Bookings | X(\*) |  |  |
| Edit Own Pending Booking | X(\*) |  |  |
| Cancel Own Booking | X(\*) |  |  |
| View/Manage All Bookings |  | X | X |
| Create Booking for Customer |  | X | X |
| Delete Any Booking |  | X | X |
| **Invoice & Payment** |  |  |  |
| View Own Invoice | X(\*) |  |  |
| Pay Own Invoice (Online) | X(\*) |  |  |
| Export Own Invoice to PDF | X(\*) |  |  |
| View/Manage All Invoices |  | X | X |
| Confirm Payment |  | X | X |
| **Master Data Management** |  |  |  |
| Manage Halls/Types/Dishes/Services/Shifts |  |  | X |
| **System Administration** |  |  |  |
| Manage Users |  |  | X |
| Manage Permission Groups |  |  | X |
| Manage System Parameters |  |  | X |
| **Reports & Statistics** |  |  |  |
| View Revenue Reports |  |  | X |
| Export Reports |  |  | X |

**Legend:**

- **X**: User has full permission to do the action.
- **X(\*)**: User has permission to do the action on their own data only.

**Security Features:**

- **Password Encryption:** User passwords are encrypted using MD5 hash before storing in the database to prevent information leakage in case of data access incidents.
- **Role-Based Access Control:** Permission assignment can only be performed by users with the highest authority (system administrator), preventing misuse or uncontrolled permission changes.
- **Session Management:** User sessions are managed through the application lifecycle, with automatic logout on application close.
- **Customer Data Isolation (Planned):** Customer users can only access and modify their own booking and payment data.

### 3.2 Performance Requirements {#3.2-performance-requirements}

**Number of Users:**

- Number of concurrent users: 10-20 (Desktop), 100-500 (Web Portal \- Planned)
- Number of business users: 50-100

**Data Volume:**

- Number of documents: \~10,000 bookings/year
- Data growth rate: \~1,000 records/month

**Processing Speed:**

| Operation | Expected Time | Storage Size |
| :---- | :---- | :---- |
| Add/Update Hall | \< 1 second | \~1-2 KB/hall |
| Create Booking | \< 1 second | \~3-5 KB/booking |
| Search Booking | Instant | No additional |
| Generate Invoice | \< 1 second | \~1-2 KB/invoice |
| Generate Monthly Report | \< 5 seconds | \~10-50 KB/report |
| Update System Parameters | Instant | \~0.5-1 KB/change |

**Level of Availability:**

- 8x5 (Business hours, Monday to Friday)
- System should be available during peak booking hours (9 AM \- 6 PM)

**Usage Frequency:**

- Booking operations: Daily
- Report generation: Monthly
- Parameter changes: Ad hoc

### 3.3 Implementation Requirements {#3.3-implementation-requirements}

**Location:**

- Desktop application deployed on local workstations
- Database server: Local SQL Server or network SQL Server

**Hardware Requirements:**

| Component | Minimum Requirement |
| :---- | :---- |
| Processor | Intel Core i3 or equivalent |
| RAM | 4 GB |
| Display | 1366x768 resolution |
| Storage | 500 MB free space for application |
| Network | LAN connection to database server |

**Software Requirements:**

| Component | Requirement |
| :---- | :---- |
| Operating System | Windows 10 or later |
| .NET Framework | .NET 6.0 or later |
| Database | SQL Server 2019 or later |
| Runtime | Windows Presentation Foundation (WPF) |

**Read-only Duration:**

- 1 day preferred for maintenance windows

**Maintenance Window:**

- Weekly (Sunday night for updates if needed)

## 4\. Other Requirements {#4.-other-requirements}

### 4.1 Archive Function {#4.1-archive-function}

The system supports archival function for the following data:

| List/Table | Actor | Condition |
| :---- | :---- | :---- |
| Booking | Administrator | Administrator can archive bookings older than 2 years based on wedding date. |
| RevenueReport | Administrator | Administrator can archive reports older than 5 years based on report month/year. |
| Invoice | Administrator | Administrator can archive paid invoices older than 2 years based on payment date. |

**Archive Process:**

1. Administrator selects the data range to archive
2. System validates that data is eligible for archival (no pending operations)
3. System exports data to archive storage (Excel/Backup database)
4. System removes data from active database after successful archive
5. System logs archive operation for audit trail

### 4.2 Security Audit Function {#4.2-security-audit-function}

The system enables Security Audit Function for Administrator to track any modification on user's permission and critical data changes.

**Audit Trail Captures:**

| Event Type | Data Logged |
| :---- | :---- |
| User Login/Logout | Username, Timestamp, IP Address |
| Permission Changes | User modified, Old permission, New permission, Modifier |
| Booking Creation | Booking ID, Creator, Timestamp |
| Booking Modification | Booking ID, Changes made, Modifier, Timestamp |
| Invoice Payment | Invoice ID, Amount, Payment date, Recorder |
| Parameter Changes | Parameter name, Old value, New value, Modifier |

### 4.3 System Design {#4.3-system-design}

#### 4.3.1 Architecture Layers {#4.3.1-architecture-layers}

The system follows a 3-layer architecture with MVVM pattern:

**Presentation Layer (View):**

- XAML files defining user interface
- MaterialDesign components for modern UI
- Data binding to ViewModels

**Business Logic Layer (ViewModel \+ Service):**

- ViewModels handling UI logic and commands
- Services implementing business rules
- DTOs for data transfer between layers

**Data Access Layer (Repository):**

- Entity Framework for database operations
- Repository pattern for data access abstraction
- Model classes mapping to database tables

#### 4.3.2 Database Tables {#4.3.2-database-tables}

| No. | Table Name | Description |
| :---- | :---- | :---- |
| 1 | HallType | Stores hall type information and minimum table price |
| 2 | Hall | Stores hall information for wedding venues |
| 3 | Shift | Manages wedding shifts (start time, end time) |
| 4 | Booking | Stores wedding booking information |
| 5 | Dish | Catalog of available dishes |
| 6 | Menu | Menu items for each booking |
| 7 | Service | Catalog of available services |
| 8 | ServiceDetail | Service details for each booking |
| 9 | RevenueReport | Monthly revenue report headers |
| 10 | RevenueReportDetail | Daily revenue details within monthly reports |
| 11 | Parameter | System parameters (penalty rate, deposit rate, etc.) |
| 12 | Permission | List of system functions/screens |
| 13 | UserGroup | User group definitions |
| 14 | AppUser | System user accounts |

#### 4.3.3 Technical Stack {#4.3.3-technical-stack}

| Component | Technology |
| :---- | :---- |
| Frontend Framework | Windows Presentation Foundation (WPF) |
| Programming Language | C\# (.NET 6.0+) |
| Database | Microsoft SQL Server 2019 |
| ORM | Entity Framework 6 |
| UI Library | MaterialDesignInXamlToolkit |
| Excel Export | ClosedXML |
| PDF Export | iText 9 |
| Charts | LiveCharts |
| Architecture Pattern | MVVM (Model-View-ViewModel) |

## 5\. Appendixes {#5.-appendixes}

### 5.1 Glossary {#5.1-glossary}

The list below contains all the necessary terms to interpret the document, including acronyms and abbreviations.

| Term | Definition |
| :---- | :---- |
| WMS | Wedding Management System |
| DTO | Data Transfer Object \- Objects used to transfer data between layers |
| MD5 | Message-Digest Algorithm 5 \- Hash function used for password encryption |
| WPF | Windows Presentation Foundation \- Microsoft UI framework |
| CRUD | Create, Read, Update, Delete \- Basic data operations |
| MVVM | Model-View-ViewModel \- Architectural pattern for WPF applications |
| EF | Entity Framework \- Object-relational mapping framework |
| BR | Business Rule |
| MSG | Message \- System notification or error message |
| UC | Use Case |
| N/A | Not Available or Not Applicable |
| UI | User Interface |
| SRS | Software Requirements Specification |
| TBD | To Be Determined or To Be Defined |
| DAL | Data Access Layer |
| BLL | Business Logic Layer |
| PK | Primary Key |
| FK | Foreign Key |
| PDF | Portable Document Format |
| XAML | Extensible Application Markup Language |

### 5.2 Messages {#5.2-messages}

| Code | Content | Button |
| :---- | :---- | :---- |
| MSG 1 | Please enter username and password\! | OK |
| MSG 2 | Incorrect username or password\! | OK |
| MSG 3 | Login successful\! | OK |
| MSG 4 | Please enter valid email format\! | OK |
| MSG 5 | Username or Email already exists\! | OK |
| MSG 6 | Profile updated successfully\! | OK |
| MSG 7 | Password confirmation does not match\! | OK |
| MSG 8 | Incorrect current password\! | OK |
| MSG 9 | Password changed successfully\! | OK |
| MSG 10 | Please enter all required fields\! | OK |
| MSG 11 | Please enter username\! | OK |
| MSG 12 | Please enter password\! | OK |
| MSG 13 | Please enter full name\! | OK |
| MSG 14 | Please select user type\! | OK |
| MSG 15 | User added successfully\! | OK |
| MSG 16 | No changes to update\! | OK |
| MSG 17 | User updated successfully\! | OK |
| MSG 18 | User deleted successfully\! | OK |
| MSG 19 | No data to export\! | OK |
| MSG 20 | Please enter group code and group name\! | OK |
| MSG 21 | Cannot use 'Administrator' or 'admin' in group name\! | OK |
| MSG 22 | Group code or group name already exists\! | OK |
| MSG 23 | Permission group added successfully\! | OK |
| MSG 24 | Permission group updated successfully\! | OK |
| MSG 25 | Cannot delete group that is being referenced by users\! | OK |
| MSG 26 | Permission group deleted successfully\! | OK |
| MSG 27 | Parameters updated successfully\! | OK |
| MSG 28 | Failed to update parameters. Please try again\! | OK |
| MSG 29 | Please enter value between 0 and 1\! | OK |
| MSG 30 | Please enter valid number format\! | OK |
| MSG 31 | Please enter hall name\! | OK |
| MSG 32 | Please select hall type\! | OK |
| MSG 33 | Max table count must be greater than 0\! | OK |
| MSG 34 | Hall name already exists in this hall type\! | OK |
| MSG 35 | Hall added successfully\! | OK |
| MSG 36 | Hall updated successfully\! | OK |

continue...

### 5.3 Issues List {#5.3-issues-list}

| No. | Issue | Priority | Status | Notes |
| :---- | :---- | :---- | :---- | :---- |
| 1 | Customer web portal not implemented | Medium | Planned | Future phase development |
| 2 | Forgot Password feature pending email integration | Low | Pending | Requires SMTP configuration |
| 3 | Multi-language support not available | Low | Backlog | Vietnamese only currently |
| 4 | Mobile responsive design not applicable | N/A | N/A | Desktop WPF application |
| 5 | Backup automation not implemented | Medium | Planned | Manual backup via SQL Server |