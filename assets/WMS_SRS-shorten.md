**SOFTWARE REQUIREMENTS SPECIFICATION**

Wedding Management System

## Revision and Signoff Sheet

### Change Record

| Author | Version | Change reference | Date |
| :---- | :---- | :---- | :---- |
| WMS Team | 1.0.0 | Initial SRS creation with Authentication Use Cases | 26/10/2025 |
| WMS Team | 1.2.0 | Refined BR descriptions following activity flows | 10/11/2025 |
| WMS Team | 1.3.0 | Added Edit/Delete Permission Group, Manage System Parameters; BR line breaks | 11/11/2025 |
| WMS Team | 1.4.0 | Added Master Data Management: Manage Halls (5 UCs), Manage Hall Types (5 UCs); BR41-BR72; MSG 31-50 | 14/11/2025 |
| WMS Team | 1.5.0 | Added Manage Dishes (5 UCs), Manage Services (5 UCs); BR73-BR104; MSG 51-71 | 17/11/2025 |
| WMS Team | 1.6.0 | Added Manage Shifts (5 UCs) \+ Export, Customer Booking (6 UCs); BR105-BR137; MSG 72-98 | 26/11/2025 |
| WMS Team | 1.7.0 | Added Forgot Password, Staff Booking Management (6 UCs), Customer Payment (3 UCs); BR138-BR159; MSG 99-112 | 27/11/2025 |
| WMS Team | 1.8.0 | Added Staff Invoice Management (3 UCs), Reports & Statistics (2 UCs); BR160-BR171; MSG 114-116 | 30/11/2025 |

### Reviewers

| Name | Company | Version | Position | Date |
| :---- | :---- | :---- | :---- | :---- |
| Project Manager | WMS | 1.2.0 | Project Manager | 30/11/2025 |

#

## 1\. Introduction {#1.-introduction}

### 1.1 Purpose {#1.1-purpose}

This Software Requirements Specification document outlines the comprehensive requirements for the "WMS" (Wedding Management System) platform. This document serves as a detailed technical foundation for the development, deployment, and maintenance of the desktop WPF application. It provides developers with clear guidelines for planning, task assignment, and implementation. Additionally, quality assurance teams will utilize this document to design test cases that align with specified requirements, ensuring the final product meets both quality standards and user expectations for a wedding management system.

### 1.2 Scope {#1.2-scope}

This document encompasses the WMS platform, which is designed to provide a comprehensive wedding management system for booking wedding halls, managing menus and services, handling customer bookings, and processing payments. The system supports multiple user roles including Staff and Administrator, each with distinct functionalities for managing halls, bookings, and administering the platform.

### 1.3 Intended Audiences and Document Organization {#1.3-intended-audiences-and-document-organization}

This document is intended for:

- **Development Team**: Responsible for creating detailed designs, implementing features, and performing unit testing, integration testing, and system testing for the application using WPF and C\# with Entity Framework.
- **Quality Assurance Team**: Responsible for conducting user acceptance test sessions and validating system requirements.
- **Documentation Team**: Responsible for creating user guides and help documentation for the application.
- **Project Stakeholders**: Business owners and managers who need to understand system capabilities and requirements.

Below are the main sections of this document:

**1\. Introduction**: General introduction and overview of this document. **2\. Functional Requirements**: Detailed description of functional requirements including use cases and business rules. **3\. Non-functional Requirements**: Description of non-functional requirements such as security, performance, and interface requirements. **4\. Other Requirements**: Additional requirements including archive functions and other supporting features. **5\. Appendixes**: Supporting information including glossary, messages, and issues list.

### 1.4 References {#1.4-references}

| \# | Title | Version | File Name / Link | Description |
| :---- | :---- | :---- | :---- | :---- |
| 1 | Use Case Diagrams | 1.0.0 | Use Case Documentation | Complete use case diagrams for all user roles |
| 2 | Activity Diagrams | 1.0.0 | Activity Documentation | Activity flow diagrams for business processes |
| 3 | Database Schema | 1.0.0 | QuanLyTiecCuoi.sql | Entity-relationship diagrams and table definitions |

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

#### 2.1.3 Master Data Management Use Case {#2.1.3-master-data-management-use-case}

##### 2.1.3.1 View Hall Details {#2.1.3.1-view-hall-details}

###### *Use Case Description* {#use-case-description-14}

| Name | View Hall Details |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to view the list of all halls and their details. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects view halls function. |
| **Pre-condition** | User must be authenticated with valid active session and have "Hall" permission. |
| **Post-condition** | Hall list is displayed with all hall information including hall type details. |

######

###### *Activities Flow* {#activities-flow-14}

![][image18]

######

###### *Business Rules* {#business-rules-14}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR41* | **Displaying Rules:** When user clicks \[HallCommand\], the system reinitializes database context by method `resetDatabaseContext()`, creates new HallView with HallViewModel as DataContext. The HallViewModel constructor loads halls from database by method \`GetAll()\` in \`HallService\` class with syntax "SELECT \* FROM Hall", loads hall types by method \`GetAll()\` in \`HallTypeService\` class, and displays "HallView" screen with DataGrid showing list of halls. (Refer to "HallView" view in "View Description" file) |
| *(3), (4), (5), (6)* | *BR42* | **Searching Rules:** When user enters search text in \[SearchText\] field, the system uses method `PerformSearch()` in `HallViewModel` to filter halls. The method checks \[SelectedSearchProperty\] and filters \[OriginalList\] accordingly: IF \[SelectedSearchProperty\] \= "Tên sảnh", filter by \[HallName\] CONTAINS \[SearchText\]. IF \[SelectedSearchProperty\] \= "Tên loại sảnh", filter by \[HallType.HallTypeName\] CONTAINS \[SearchText\]. IF \[SelectedSearchProperty\] \= "Đơn giá bàn tối thiểu", filter by \[HallType.MinTablePrice\] CONTAINS \[SearchText\]. IF \[SelectedSearchProperty\] \= "Số lượng bàn tối đa", filter by \[MaxTableCount\] CONTAINS \[SearchText\]. IF \[SelectedSearchProperty\] \= "Ghi chú", filter by \[Note\] CONTAINS \[SearchText\]. |
| *(7), (8), (9), (10)* | *BR43* | **Selection Rules:** When user selects hall from DataGrid, the system triggers property setter `setSelectedItem(hall)` in `HallViewModel`. The system populates form fields: \[HallName\] \= \[SelectedItem.HallName\], \[MaxTableCount\] \= \[SelectedItem.MaxTableCount\], \[Note\] \= \[SelectedItem.Note\], \[SelectedHallType\] \= getHallType(\[SelectedItem.HallTypeId\]), \[MinTablePrice\] \= \[SelectedHallType.MinTablePrice\], and renders hall image by method \`RenderImageAsync(HallId, "Hall")\`. User views hall information and can close dialog or proceed to edit/delete. |

##### 2.1.3.2 Add New Hall {#2.1.3.2-add-new-hall}

###### *Use Case Description* {#use-case-description-15}

| Name | Add New Hall |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to add a new hall to the system. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects function Add New Hall. |
| **Pre-condition** | User must be authenticated and have "Hall" permission. HallView is displayed. |
| **Post-condition** | New hall is created in database and displayed in hall list. |

######

###### *Activities Flow* {#activities-flow-15}

![][image19]

######

###### *Business Rules* {#business-rules-15}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR44* | **Displaying Rules:** When user selects action "Thêm" from \[SelectedAction\], the system sets \[IsAdding\] \= TRUE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= FALSE, sets \[Image\] \= NULL, and calls method `Reset()` to clear form fields. The system displays add hall form with fields: \[HallName\], \[SelectedHallType\] dropdown, \[MaxTableCount\], \[Note\], and image selection button. (Refer to "HallView" view in "View Description" file) |
| *(3), (4), (5), (6), (6.1)* | *BR45* | **Validation Rules:** When user enters hall information and clicks \[AddCommand\], the system will use `AddCommand` in `HallViewModel` to validate data. IF \[HallName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 31\) IF \[SelectedHallType\] \= NULL, the system displays validation message and returns false. (Refer to MSG 32\) IF \[MaxTableCount\].IsNumeric \= FALSE OR \[MaxTableCount\] \<= 0, the system displays validation message and returns false. (Refer to MSG 33\) IF isDuplicateHallName(\[HallName\], \[SelectedHallType.HallTypeId\]) \= TRUE (checked by syntax "SELECT COUNT(\*) FROM Hall WHERE HallName \= \[HallName\] AND HallTypeId \= \[HallTypeId\]"), the system displays validation message and returns false. (Refer to MSG 34\) |
| *(7), (8), (9), (10)* | *BR46* | **Processing Rules:** After validation passes, the system creates new HallDTO object with: \[HallName\] \= \[HallName\].Trim, \[MaxTableCount\], \[Note\], \[HallTypeId\] \= \[SelectedHallType.HallTypeId\], \[HallType\] \= \[SelectedHallType\]. System calls method \`Create(newHall)\` in \`HallService\` class to insert into database by syntax "INSERT INTO Hall (HallName, MaxTableCount, Note, HallTypeId) VALUES (...)", adds to \[HallList\]. IF image cache exists at "Hall/Addcache.jpg", copies to "Hall/\[HallId\].jpg" and deletes cache. Calls method \`Reset()\` to clear form and displays success notification. (Refer to MSG 35\) |

##### 2.1.3.3 Edit Hall {#2.1.3.3-edit-hall}

###### *Use Case Description* {#use-case-description-16}

| Name | Edit Hall |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to edit an existing hall's information in the system. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects function Edit Hall. |
| **Pre-condition** | User must be authenticated with "Hall" permission. A hall must be selected. |
| **Post-condition** | Hall information is updated in database and reflected in hall list. |

######

###### *Activities Flow* {#activities-flow-16}

![][image20]

######

###### *Business Rules* {#business-rules-16}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4), (5)* | *BR47* | **Displaying Rules:** When user selects action "Sửa" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= TRUE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= FALSE and calls method `Reset()`. When user selects a hall from DataGrid, the system triggers property setter \`setSelectedItem(hall)\` to populate form with current data and renders hall image. (Refer to "HallView" view in "View Description" file) |
| *(6), (7), (8), (8.1)* | *BR48* | **Validation Rules:** When user edits hall information and clicks \[EditCommand\], the system will use `EditCommand` in `HallViewModel` to validate data. IF \[SelectedItem\] \= NULL, returns false. IF no changes detected, the system displays info message and returns false. (Refer to MSG 16\) IF \[HallName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 31\) IF \[MaxTableCount\].IsNumeric \= FALSE OR \[MaxTableCount\] \<= 0, the system displays validation message and returns false. (Refer to MSG 33\) IF isDuplicateHallName(\[HallName\], \[HallTypeId\], \[HallId\]) \= TRUE, the system displays validation message and returns false. (Refer to MSG 34\) IF hasUpcomingBookings(\[HallId\]) \= TRUE AND \[MaxTableCount\] changed, the system displays warning message and returns false. (Refer to MSG 37\) |
| *(9), (10), (11)* | *BR49* | **Processing Rules:** After validation passes, IF \[Image\] \= NULL AND image file exists, deletes image file. System creates HallDTO object with updated values, calls method \`Update(updateDto)\` in \`HallService\` class to update in database by syntax "UPDATE Hall SET HallName \= \[HallName\], MaxTableCount \= \[MaxTableCount\], Note \= \[Note\], HallTypeId \= \[HallTypeId\] WHERE HallId \= \[HallId\]". IF edit cache exists at "Hall/Editcache.jpg", copies to "Hall/\[HallId\].jpg" and deletes cache. Updates \[HallList\] at selected index, calls method \`Reset()\`, and displays success notification. (Refer to MSG 36\) |

##### 2.1.3.4 Delete Hall {#2.1.3.4-delete-hall}

###### *Use Case Description* {#use-case-description-17}

| Name | Delete Hall |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to delete an existing hall from the system. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects delete hall function. |
| **Pre-condition** | User must be authenticated with "Hall" permission. A hall must be selected. |
| **Post-condition** | Hall and its image are removed from database and file system. |

######

###### *Activities Flow* {#activities-flow-17}

![][image21]

###### ![][image22]

######

###### *Business Rules* {#business-rules-17}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4)* | *BR50* | **Displaying Rules:** When user selects action "Xóa" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= TRUE, \[IsExporting\] \= FALSE and calls method `Reset()`. The system displays halls list in DataGrid. User selects hall to delete. (Refer to "HallView" view in "View Description" file) |
| *(5), (5.1), (5.2)* | *BR51* | **Reference Check Rules:** The `DeleteCommand` in `HallViewModel` checks if the hall has referenced data by method `hasBookings(HallId)` which queries "SELECT COUNT(\*) FROM Booking WHERE HallId \= \[SelectedItem.HallId\]". IF \[hasBookings\] \= TRUE (bookings exist using this hall), the system displays warning message and returns false. User views referenced booking count and confirms end. (Refer to MSG 38\) |
| *(6), (7), (7.1), (7.2)* | *BR52* | **Confirmation Rules:** IF no references exist, the system displays confirmation dialog. IF user clicks "No" button, the operation is cancelled and no changes are made. (Refer to MSG 39\) |
| *(8), (9), (10)* | *BR53* | **Processing Rules:** IF user clicks "Yes" button to confirm delete, IF image file exists at "Hall/\[HallId\].jpg", deletes the image file. System calls method \`Delete(HallId)\` in \`HallService\` class to delete hall from database by syntax "DELETE FROM Hall WHERE HallId \= \[SelectedItem.HallId\]". Removes hall from \[HallList\], calls method \`Reset()\` to clear selection, and displays success notification. (Refer to MSG 40\) |

##### 2.1.3.5 Export Halls to Excel {#2.1.3.5-export-halls-to-excel}

###### *Use Case Description* {#use-case-description-18}

| Name | Export Halls to Excel |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to export the hall list to an Excel file. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user clicks Export Excel button. |
| **Pre-condition** | User must be authenticated with "Hall" permission. HallView is displayed. |
| **Post-condition** | Excel file containing hall data is generated and downloaded. |

###### *Activities Flow* {#activities-flow-18}

![][image23]

###### ![][image24]

###### *Business Rules* {#business-rules-18}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4), (5)* | *BR54* | **Displaying Rules:** When user selects action "Xuất Excel" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= TRUE. User can apply filter criteria (optional) and the system displays filtered halls list. User clicks \[ExportToExcelCommand\] button to export. (Refer to "HallView" view in "View Description" file) |
| *(6), (6.1), (6.2)* | *BR55* | **Validation Rules:** The `ExportToExcelCommand` in `HallViewModel` checks if there is data to export. IF \[HallList\] \= NULL OR \[HallList\].Count \= 0, the system displays validation message and returns. User confirms end. (Refer to MSG 19\) |
| *(7), (8), (9), (10)* | *BR56* | **Processing Rules:** IF data exists, the system creates new XLWorkbook using ClosedXML library, adds worksheet "Danh sách sảnh" with columns: "Tên sảnh", "Loại sảnh", "Đơn giá bàn tối thiểu", "Số lượng bàn tối đa", "Ghi chú". Iterates through \[HallList\] and populates rows with hall data. Applies formatting: header bold, light gray background, centered alignment, borders. Creates filename with timestamp format "DanhSachSanh\_\[yyyyMMddHHmmss\].xlsx", opens SaveFileDialog for user to choose location. Saves workbook and opens the file for user to view. (Refer to MSG 41\) |

##### 2.1.3.6 View Hall Type Details {#2.1.3.6-view-hall-type-details}

###### *Use Case Description* {#use-case-description-19}

| Name | View Hall Type Details |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to view the list of all hall types and their details. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects view hall types function. |
| **Pre-condition** | User must be authenticated with valid active session and have "HallType" permission. |
| **Post-condition** | Hall type list is displayed with all hall type information. |

######

###### *Activities Flow* {#activities-flow-19}

![][image25]

######

###### *Business Rules* {#business-rules-19}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR57* | **Displaying Rules:** When user clicks \[HallTypeCommand\], the system reinitializes database context by method `resetDatabaseContext()`, creates new HallTypeView with HallTypeViewModel as DataContext. The HallTypeViewModel constructor loads hall types from database by method \`GetAll()\` in \`HallTypeService\` class with syntax "SELECT \* FROM HallType", and displays "HallTypeView" screen with DataGrid showing list of hall types. (Refer to "HallTypeView" view in "View Description" file) |
| *(3), (4), (5), (6)* | *BR58* | **Searching Rules:** When user enters search text in \[SearchText\] field, the system uses method `PerformSearch()` in `HallTypeViewModel` to filter hall types. The method checks \[SelectedSearchProperty\] and filters \[OriginalList\] accordingly: IF \[SelectedSearchProperty\] \= "Tên loại sảnh", filter by \[HallTypeName\] CONTAINS \[SearchText\]. IF \[SelectedSearchProperty\] \= "Đơn giá bàn tối thiểu", filter by \[MinTablePrice\] CONTAINS \[SearchText\]. |
| *(7), (8), (9), (10)* | *BR59* | **Selection Rules:** When user selects hall type from DataGrid, the system triggers property setter `setSelectedItem(hallType)` in `HallTypeViewModel`. The system populates form fields: \[HallTypeName\] \= \[SelectedItem.HallTypeName\], \[MinTablePrice\] \= \[SelectedItem.MinTablePrice\]. User views hall type information and can close dialog or proceed to edit/delete. |

##### 2.1.3.7 Add New Hall Type {#2.1.3.7-add-new-hall-type}

###### *Use Case Description* {#use-case-description-20}

| Name | Add New Hall Type |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to add a new hall type to the system. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects function Add New Hall Type. |
| **Pre-condition** | User must be authenticated and have "HallType" permission. HallTypeView is displayed. |
| **Post-condition** | New hall type is created in database and displayed in hall type list. |

###### *Activities Flow* {#activities-flow-20}

![][image26]

######

###### *Business Rules* {#business-rules-20}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR60* | **Displaying Rules:** When user selects action "Thêm" from \[SelectedAction\], the system sets \[IsAdding\] \= TRUE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= FALSE and calls method `Reset()` to clear form fields. The system displays add hall type form with fields: \[HallTypeName\], \[MinTablePrice\]. (Refer to "HallTypeView" view in "View Description" file) |
| *(3), (4), (5), (6), (6.1)* | *BR61* | **Validation Rules:** When user enters hall type information and clicks \[AddCommand\], the system will use `AddCommand` in `HallTypeViewModel` to validate data. IF \[HallTypeName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 42\) IF isDuplicateHallTypeName(\[HallTypeName\]) \= TRUE (checked by syntax "SELECT COUNT(\*) FROM HallType WHERE HallTypeName \= \[HallTypeName\]"), the system displays validation message and returns false. (Refer to MSG 43\) IF \[MinTablePrice\].IsNumeric \= FALSE OR \[MinTablePrice\] is not integer, the system displays validation message and returns false. (Refer to MSG 30\) IF \[MinTablePrice\] \< 10000, the system displays validation message and returns false. (Refer to MSG 44\) |
| *(7), (8), (9), (10)* | *BR62* | **Processing Rules:** After validation passes, the system creates new HallTypeDTO object with: \[HallTypeName\] \= \[HallTypeName\].Trim, \[MinTablePrice\] \= decimal.Parse(\[MinTablePrice\]). System calls method \`Create(newHallType)\` in \`HallTypeService\` class to insert into database by syntax "INSERT INTO HallType (HallTypeName, MinTablePrice) VALUES (...)", adds to \[HallTypeList\], calls method \`Reset()\` to clear form, and displays success notification. (Refer to MSG 45\) |

##### 2.1.3.8 Edit Hall Type {#2.1.3.8-edit-hall-type}

###### *Use Case Description* {#use-case-description-21}

| Name | Edit Hall Type |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to edit an existing hall type's information. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects function Edit Hall Type. |
| **Pre-condition** | User must be authenticated with "HallType" permission. A hall type must be selected. |
| **Post-condition** | Hall type information is updated in database and reflected in hall type list. |

######

###### *Activities Flow* {#activities-flow-21}

![][image27]

######

###### *Business Rules* {#business-rules-21}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4), (5)* | *BR63* | **Displaying Rules:** When user selects action "Sửa" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= TRUE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= FALSE and calls method `Reset()`. When user selects a hall type from DataGrid, the system triggers property setter \`setSelectedItem(hallType)\` to populate form with current data. (Refer to "HallTypeView" view in "View Description" file) |
| *(6), (7), (8), (8.1)* | *BR64* | **Validation Rules:** When user edits hall type information and clicks \[EditCommand\], the system will use `EditCommand` in `HallTypeViewModel` to validate data. IF \[SelectedItem\] \= NULL, returns false. IF \[HallTypeName\] \= \[SelectedItem.HallTypeName\] AND \[MinTablePrice\] \= \[SelectedItem.MinTablePrice\], the system displays info message and returns false. (Refer to MSG 16\) IF \[HallTypeName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 42\) IF isDuplicateHallTypeName(\[HallTypeName\], \[HallTypeId\]) \= TRUE, the system displays validation message and returns false. (Refer to MSG 43\) IF \[MinTablePrice\].IsNumeric \= FALSE OR \[MinTablePrice\] is not integer, the system displays validation message and returns false. (Refer to MSG 30\) IF \[MinTablePrice\] \< 10000, the system displays validation message and returns false. (Refer to MSG 44\) |
| *(9), (10), (11)* | *BR65* | **Processing Rules:** After validation passes, the system creates HallTypeDTO object with: \[HallTypeId\] \= \[SelectedItem.HallTypeId\], \[HallTypeName\] \= \[HallTypeName\].Trim, \[MinTablePrice\] \= decimal.Parse(\[MinTablePrice\]). System calls method \`Update(updateDto)\` in \`HallTypeService\` class to update in database by syntax "UPDATE HallType SET HallTypeName \= \[HallTypeName\], MinTablePrice \= \[MinTablePrice\] WHERE HallTypeId \= \[HallTypeId\]". Updates \[HallTypeList\] at selected index, calls method \`Reset()\`, and displays success notification. (Refer to MSG 46\) |

##### 2.1.3.9 Delete Hall Type {#2.1.3.9-delete-hall-type}

###### *Use Case Description* {#use-case-description-22}

| Name | Delete Hall Type |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to delete an existing hall type from the system. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects delete hall type function. |
| **Pre-condition** | User must be authenticated with "HallType" permission. A hall type must be selected. |
| **Post-condition** | Hall type is removed from database. |

######

###### *Activities Flow* {#activities-flow-22}

![][image28]

###### ![][image29]

######

###### *Business Rules* {#business-rules-22}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4)* | *BR66* | **Displaying Rules:** When user selects action "Xóa" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= TRUE, \[IsExporting\] \= FALSE and calls method `Reset()`. The system displays hall types list in DataGrid. User selects hall type to delete. (Refer to "HallTypeView" view in "View Description" file) |
| *(5), (5.1), (5.2)* | *BR67* | **Reference Check Rules:** The `DeleteCommand` in `HallTypeViewModel` checks if the hall type has referenced data by method `hasHalls(HallTypeId)` which queries "SELECT COUNT(\*) FROM Hall WHERE HallTypeId \= \[SelectedItem.HallTypeId\]". IF \[hasHalls\] \= TRUE (halls exist using this type), the system displays warning message and returns false. User views referenced hall count and confirms end. (Refer to MSG 47\) |
| *(6), (7), (7.1), (7.2)* | *BR68* | **Confirmation Rules:** IF no references exist, the system displays confirmation dialog. IF user clicks "No" button, the operation is cancelled and no changes are made. (Refer to MSG 48\) |
| *(8), (9), (10)* | *BR69* | **Processing Rules:** IF user clicks "Yes" button to confirm delete, the system calls method `Delete(HallTypeId)` in `HallTypeService` class to delete hall type from database by syntax "DELETE FROM HallType WHERE HallTypeId \= \[SelectedItem.HallTypeId\]". Removes hall type from \[HallTypeList\], calls method \`Reset()\` to clear selection, and displays success notification. (Refer to MSG 49\) |

##### 2.1.3.10 Export Hall Types to Excel {#2.1.3.10-export-hall-types-to-excel}

###### *Use Case Description* {#use-case-description-23}

| Name | Export Hall Types to Excel |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to export the hall type list to an Excel file. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user clicks Export Excel button. |
| **Pre-condition** | User must be authenticated with "HallType" permission. HallTypeView is displayed. |
| **Post-condition** | Excel file containing hall type data is generated and downloaded. |

###### *Activities Flow* {#activities-flow-23}

![][image30]

###### ![][image31]

######

###### *Business Rules* {#business-rules-23}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4), (5)* | *BR70* | **Displaying Rules:** When user selects action "Xuất Excel" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= TRUE. User can apply filter criteria (optional) and the system displays filtered hall types list. User clicks \[ExportToExcelCommand\] button to export. (Refer to "HallTypeView" view in "View Description" file) |
| *(6), (6.1), (6.2)* | *BR71* | **Validation Rules:** The `ExportToExcelCommand` in `HallTypeViewModel` checks if there is data to export. IF \[HallTypeList\] \= NULL OR \[HallTypeList\].Count \= 0, the system displays validation message and returns. User confirms end. (Refer to MSG 19\) |
| *(7), (8), (9), (10)* | *BR72* | **Processing Rules:** IF data exists, the system creates new XLWorkbook using ClosedXML library, adds worksheet "Danh sách loại sảnh" with columns: "Tên loại sảnh", "Đơn giá bàn tối thiểu". Iterates through \[HallTypeList\] and populates rows with hall type data. Applies formatting: header bold, light gray background, centered alignment, borders, number format "\#,\#\#0" for price. Creates filename with timestamp format "DanhSachLoaiSanh\_\[yyyyMMddHHmmss\].xlsx", opens SaveFileDialog for user to choose location. Saves workbook and opens the file for user to view. (Refer to MSG 50\) |

##### 2.1.3.11 View Dish Details {#2.1.3.11-view-dish-details}

###### *Use Case Description* {#use-case-description-24}

| Name | View Dish Details |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to view the list of all dishes and their details. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects view dishes function. |
| **Pre-condition** | User must be authenticated with valid active session and have "Dish" permission. |
| **Post-condition** | Dish list is displayed with all dish information. |

######

###### *Activities Flow* {#activities-flow-24}

![][image32]

######

###### *Business Rules* {#business-rules-24}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR73* | **Displaying Rules:** When user clicks \[DishCommand\], the system reinitializes database context by method `resetDatabaseContext()`, creates new FoodView with FoodViewModel as DataContext. The FoodViewModel constructor loads dishes from database by method \`GetAll()\` in \`DishService\` class with syntax "SELECT \* FROM Dish", and displays "FoodView" screen with DataGrid showing list of dishes. (Refer to "FoodView" view in "View Description" file) |
| *(3), (4), (5), (6)* | *BR74* | **Searching Rules:** When user enters search text in \[SearchText\] field, the system uses method `PerformSearch()` in `FoodViewModel` to filter dishes. The method checks \[SelectedSearchProperty\] and filters \[OriginalList\] accordingly: IF \[SelectedSearchProperty\] \= "Tên món ăn", filter by \[DishName\] CONTAINS \[SearchText\]. IF \[SelectedSearchProperty\] \= "Đơn giá", filter by \[UnitPrice\] CONTAINS \[SearchText\]. IF \[SelectedSearchProperty\] \= "Ghi chú", filter by \[Note\] CONTAINS \[SearchText\]. |
| *(7), (8), (9), (10)* | *BR75* | **Selection Rules:** When user selects dish from DataGrid, the system triggers property setter `setSelectedItem(dish)` in `FoodViewModel`. The system populates form fields: \[DishName\] \= \[SelectedItem.DishName\], \[UnitPrice\] \= \[SelectedItem.UnitPrice\], \[Note\] \= \[SelectedItem.Note\], and calls \`RenderImageAsync()\` to display dish image. User views dish information and can close dialog or proceed to edit/delete. |

##### 2.1.3.12 Add New Dish {#2.1.3.12-add-new-dish}

###### *Use Case Description* {#use-case-description-25}

| Name | Add New Dish |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to add a new dish to the system. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects function Add New Dish. |
| **Pre-condition** | User must be authenticated and have "Dish" permission. FoodView is displayed. |
| **Post-condition** | New dish is created in database and displayed in dish list. |

###### *Activities Flow* {#activities-flow-25}

![][image33]

######

###### *Business Rules* {#business-rules-25}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR76* | **Displaying Rules:** When user selects action "Thêm" from \[SelectedAction\], the system sets \[IsAdding\] \= TRUE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= FALSE and calls method `Reset()` to clear form fields and \[Image\] \= NULL. The system displays add dish form with fields: \[DishName\], \[UnitPrice\], \[Note\], and image selection button. (Refer to "FoodView" view in "View Description" file) |
| *(3), (4), (5), (6), (6.1)* | *BR77* | **Validation Rules:** When user enters dish information and clicks \[AddCommand\], the system will use `CanAdd()` in `FoodViewModel` to validate data. IF \[OriginalList\].Count \>= 100, the system displays validation message and returns false. (Refer to MSG 51\) IF \[DishName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 52\) IF \[UnitPrice\].IsNumeric \= FALSE OR \[UnitPrice\] \<= 0, the system displays validation message and returns false. (Refer to MSG 53\) IF \[Note\].Length \> 100, the system displays validation message and returns false. (Refer to MSG 54\) IF isDuplicateDishName(\[DishName\]) \= TRUE (checked by LINQ query), the system displays validation message and returns false. (Refer to MSG 55\) |
| *(7), (8), (9), (10)* | *BR78* | **Processing Rules:** After validation passes, the system creates new DishDTO object with: \[DishName\] \= \[DishName\].Trim, \[UnitPrice\] \= decimal.Parse(\[UnitPrice\]), \[Note\] \= \[Note\]. System calls method \`Create(newDish)\` in \`DishService\` class to insert into database by syntax "INSERT INTO Dish (DishName, UnitPrice, Note) VALUES (...)". IF image cache exists at "Food/Addcache.jpg", copies to "Food/\[DishId\].jpg" and deletes cache. Adds to \[DishList\], calls method \`Reset()\` to clear form, and displays success notification. (Refer to MSG 56\) |

##### 2.1.3.13 Edit Dish {#2.1.3.13-edit-dish}

###### *Use Case Description* {#use-case-description-26}

| Name | Edit Dish |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to edit an existing dish's information. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects function Edit Dish. |
| **Pre-condition** | User must be authenticated with "Dish" permission. A dish must be selected. |
| **Post-condition** | Dish information is updated in database and reflected in dish list. |

######

###### *Activities Flow* {#activities-flow-26}

![][image34]

######

###### *Business Rules* {#business-rules-26}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4), (5)* | *BR79* | **Displaying Rules:** When user selects action "Sửa" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= TRUE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= FALSE and calls method `Reset()`. When user selects a dish from DataGrid, the system triggers property setter \`setSelectedItem(dish)\` to populate form with current data and calls \`RenderImageAsync()\` to display current image. (Refer to "FoodView" view in "View Description" file) |
| *(6), (7), (8), (8.1)* | *BR80* | **Validation Rules:** When user edits dish information and clicks \[EditCommand\], the system will use `CanEdit()` in `FoodViewModel` to validate data. IF \[SelectedItem\] \= NULL, returns false. IF no changes detected (all fields unchanged AND image unchanged), the system displays info message and returns false. (Refer to MSG 16\) IF \[DishName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 52\) IF \[UnitPrice\].IsNumeric \= FALSE OR \[UnitPrice\] \<= 0, the system displays validation message and returns false. (Refer to MSG 53\) IF \[Note\].Length \> 100, the system displays validation message and returns false. (Refer to MSG 54\) IF isDuplicateDishName(\[DishName\], \[DishId\]) \= TRUE, the system displays validation message and returns false. (Refer to MSG 55\) |
| *(9), (10), (11)* | *BR81* | **Processing Rules:** After validation passes, IF \[Image\] \= NULL AND image file exists, deletes the image file. The system creates DishDTO object with updated values, calls method \`Update(updateDto)\` in \`DishService\` class to update in database by syntax "UPDATE Dish SET DishName \= \[DishName\], UnitPrice \= \[UnitPrice\], Note \= \[Note\] WHERE DishId \= \[DishId\]". IF image cache exists at "Food/Editcache.jpg", copies to "Food/\[DishId\].jpg" and deletes cache. Updates \[DishList\] at selected index, calls method \`Reset()\`, and displays success notification. (Refer to MSG 57\) |

##### 2.1.3.14 Delete Dish {#2.1.3.14-delete-dish}

###### *Use Case Description* {#use-case-description-27}

| Name | Delete Dish |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to delete an existing dish from system. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects delete dish function. |
| **Pre-condition** | User must be authenticated with "Dish" permission. A dish must be selected. |
| **Post-condition** | Dish is removed from database. |

######

###### *Activities Flow* {#activities-flow-27}

![][image35]

###### ![][image36]

######

######

###### *Business Rules* {#business-rules-27}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4)* | *BR82* | **Displaying Rules:** When user selects action "Xóa" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= TRUE, \[IsExporting\] \= FALSE and calls method `Reset()`. The system displays dishes list in DataGrid. User selects dish to delete. (Refer to "FoodView" view in "View Description" file) |
| *(5), (5.1), (5.2)* | *BR83* | **Reference Check Rules:** The `CanDelete()` in `FoodViewModel` checks if the dish has referenced data by querying "SELECT COUNT(\*) FROM Menu WHERE DishId \= \[SelectedItem.DishId\]" using `_menuService.GetAll()`. IF dish exists in Menu (used in bookings), the system displays warning message and returns false. User views that dish is being used and confirms end. (Refer to MSG 58\) |
| *(6), (7), (7.1), (7.2)* | *BR84* | **Confirmation Rules:** IF no references exist, the system displays confirmation dialog. IF user clicks "No" button, the operation is cancelled and no changes are made. (Refer to MSG 59\) |
| *(8), (9), (10)* | *BR85* | **Processing Rules:** IF user clicks "Yes" button to confirm delete, IF image file exists at "Food/\[DishId\].jpg", deletes the image file. System calls method \`Delete(DishId)\` in \`DishService\` class to delete dish from database by syntax "DELETE FROM Dish WHERE DishId \= \[SelectedItem.DishId\]". Removes dish from \[DishList\] and \[OriginalList\], calls method \`Reset()\` to clear selection, and displays success notification. (Refer to MSG 60\) |

##### 2.1.3.15 Export Dishes to Excel {#2.1.3.15-export-dishes-to-excel}

###### *Use Case Description* {#use-case-description-28}

| Name | Export Dishes to Excel |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to export the dish list to an Excel file. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user clicks Export Excel button. |
| **Pre-condition** | User must be authenticated with "Dish" permission. FoodView is displayed. |
| **Post-condition** | Excel file containing dish data is generated and downloaded. |

###### *Activities Flow* {#activities-flow-28}

![][image37]

###### ![][image38]

######

###### *Business Rules* {#business-rules-28}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4), (5)* | *BR86* | **Displaying Rules:** When user selects action "Xuất Excel" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= TRUE. User can apply filter criteria (optional) and the system displays filtered dishes list. User clicks \[ExportToExcelCommand\] button to export. (Refer to "FoodView" view in "View Description" file) |
| *(6), (6.1), (6.2)* | *BR87* | **Validation Rules:** The `ExportToExcel()` in `FoodViewModel` checks if there is data to export. IF \[DishList\] \= NULL OR \[DishList\].Count \= 0, the system displays validation message and returns. User confirms end. (Refer to MSG 19\) |
| *(7), (8), (9), (10)* | *BR88* | **Processing Rules:** IF data exists, the system creates new XLWorkbook using ClosedXML library, adds worksheet "Danh sách Món ăn" with columns: "Tên món ăn", "Đơn giá", "Ghi chú". Iterates through \[DishList\] and populates rows with dish data. Applies formatting: header bold, light gray background, centered alignment, borders, number format "\#,\#\#0" for price. Creates filename with timestamp format "DanhSachMonAn\_\[yyyyMMddHHmmss\].xlsx", opens SaveFileDialog for user to choose location. Saves workbook and opens the file for user to view. (Refer to MSG 61\) |

##### 2.1.3.16 View Service Details {#2.1.3.16-view-service-details}

###### *Use Case Description* {#use-case-description-29}

| Name | View Service Details |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to view the list of all services and details. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects view services function. |
| **Pre-condition** | User must be authenticated with valid active session and have "Service" permission. |
| **Post-condition** | Service list is displayed with all service information. |

######

###### *Activities Flow* {#activities-flow-29}

![][image39]

######

###### *Business Rules* {#business-rules-29}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR89* | **Displaying Rules:** When user clicks \[ServiceCommand\], the system reinitializes database context by method `resetDatabaseContext()`, creates new ServiceView with ServiceViewModel as DataContext. The ServiceViewModel constructor loads services from database by method \`GetAll()\` in \`ServiceService\` class with syntax "SELECT \* FROM Service", and displays "ServiceView" screen with DataGrid showing list of services. (Refer to "ServiceView" view in "View Description" file) |
| *(3), (4), (5), (6)* | *BR90* | **Searching Rules:** When user enters search text in \[SearchText\] field, the system uses method `PerformSearch()` in `ServiceViewModel` to filter services. The method checks \[SelectedSearchProperty\] and filters \[OriginalList\] accordingly: IF \[SelectedSearchProperty\] \= "Tên dịch vụ", filter by \[ServiceName\] CONTAINS \[SearchText\]. IF \[SelectedSearchProperty\] \= "Đơn giá", filter by \[UnitPrice\] \= \[SearchText\]. IF \[SelectedSearchProperty\] \= "Ghi chú", filter by \[Note\] CONTAINS \[SearchText\]. |
| *(7), (8), (9), (10)* | *BR91* | **Selection Rules:** When user selects service from DataGrid, the system triggers property setter `setSelectedItem(service)` in `ServiceViewModel`. The system populates form fields: \[ServiceName\] \= \[SelectedItem.ServiceName\], \[UnitPrice\] \= \[SelectedItem.UnitPrice\], \[Note\] \= \[SelectedItem.Note\], and calls \`RenderImageAsync()\` to display service image. User views service information and can close dialog or proceed to edit/delete. |

##### 2.1.3.17 Add New Service {#2.1.3.17-add-new-service}

###### *Use Case Description* {#use-case-description-30}

| Name | Add New Service |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to add a new service to the system. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects function Add New Service. |
| **Pre-condition** | User must be authenticated and have "Service" permission. ServiceView is displayed. |
| **Post-condition** | New service is created in database and displayed in service list. |

######

###### *Activities Flow* {#activities-flow-30}

![][image40]

######

###### *Business Rules* {#business-rules-30}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR92* | **Displaying Rules:** When user selects action "Thêm" from \[SelectedAction\], the system sets \[IsAdding\] \= TRUE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= FALSE and calls method `Reset()` to clear form fields and \[Image\] \= NULL. The system displays add service form with fields: \[ServiceName\], \[UnitPrice\], \[Note\], and image selection button. (Refer to "ServiceView" view in "View Description" file) |
| *(3), (4), (5), (6), (6.1)* | *BR93* | **Validation Rules:** When user enters service information and clicks \[AddCommand\], the system will use `CanAdd()` in `ServiceViewModel` to validate data. IF \[ServiceName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 62\) IF \[UnitPrice\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 63\) IF \[UnitPrice\].IsNumeric \= FALSE OR \[UnitPrice\] \< 0, the system displays validation message and returns false. (Refer to MSG 64\) IF isDuplicateServiceName(\[ServiceName\]) \= TRUE (checked by LINQ query), the system displays validation message and returns false. (Refer to MSG 65\) |
| *(7), (8), (9), (10)* | *BR94* | **Processing Rules:** After validation passes, the system creates new ServiceDTO object with: \[ServiceName\] \= \[ServiceName\].Trim, \[UnitPrice\] \= decimal.Parse(\[UnitPrice\]), \[Note\] \= \[Note\]. System calls method \`Create(newService)\` in \`ServiceService\` class to insert into database by syntax "INSERT INTO Service (ServiceName, UnitPrice, Note) VALUES (...)". IF image cache exists at "Service/Addcache.jpg", copies to "Service/\[ServiceId\].jpg" and deletes cache. Adds to \[ServiceList\], calls method \`Reset()\` to clear form, and displays success notification. (Refer to MSG 66\) |

##### 2.1.3.18 Edit Service {#2.1.3.18-edit-service}

###### *Use Case Description* {#use-case-description-31}

| Name | Edit Service |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to edit an existing service's information. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects function Edit Service. |
| **Pre-condition** | User must be authenticated with "Service" permission. A service must be selected. |
| **Post-condition** | Service information is updated in database and reflected in service list. |

######

###### *Activities Flow* {#activities-flow-31}

![][image41]

######

###### *Business Rules* {#business-rules-31}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4), (5)* | *BR95* | **Displaying Rules:** When user selects action "Sửa" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= TRUE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= FALSE and calls method `Reset()`. When user selects a service from DataGrid, the system triggers property setter \`setSelectedItem(service)\` to populate form with current data and calls \`RenderImageAsync()\` to display current image. (Refer to "ServiceView" view in "View Description" file) |
| *(6), (7), (8), (8.1)* | *BR96* | **Validation Rules:** When user edits service information and clicks \[EditCommand\], the system will use `CanEdit()` in `ServiceViewModel` to validate data. IF \[SelectedItem\] \= NULL, returns false. IF \[ServiceName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 62\) IF \[UnitPrice\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 63\) IF \[UnitPrice\].IsNumeric \= FALSE OR \[UnitPrice\] \< 0, the system displays validation message and returns false. (Refer to MSG 64\) IF isDuplicateServiceName(\[ServiceName\], \[ServiceId\]) \= TRUE, the system displays validation message and returns false. (Refer to MSG 65\) IF no changes detected (all fields AND image unchanged), the system displays info message and returns false. (Refer to MSG 16\) |
| *(9), (10), (11)* | *BR97* | **Processing Rules:** After validation passes, IF \[Image\] \= NULL AND image file exists, deletes the image file. The system creates ServiceDTO object with updated values, calls method \`Update(updateDto)\` in \`ServiceService\` class to update in database by syntax "UPDATE Service SET ServiceName \= \[ServiceName\], UnitPrice \= \[UnitPrice\], Note \= \[Note\] WHERE ServiceId \= \[ServiceId\]". IF image cache exists at "Service/Editcache.jpg", copies to "Service/\[ServiceId\].jpg" and deletes cache. Updates \[ServiceList\] at selected index, calls method \`Reset()\`, and displays success notification. (Refer to MSG 67\) |

##### 2.1.3.19 Delete Service {#2.1.3.19-delete-service}

###### *Use Case Description* {#use-case-description-32}

| Name | Delete Service |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to delete an existing service from the system. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects delete service function. |
| **Pre-condition** | User must be authenticated with "Service" permission. A service must be selected. |
| **Post-condition** | Service is removed from database. |

######

###### *Activities Flow* {#activities-flow-32}

![][image42]

###### ![][image42]

######

###### *Business Rules* {#business-rules-32}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4)* | *BR98* | **Displaying Rules:** When user selects action "Xóa" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= TRUE, \[IsExporting\] \= FALSE and calls method `Reset()`. The system displays services list in DataGrid. User selects service to delete. (Refer to "ServiceView" view in "View Description" file) |
| *(5), (5.1), (5.2)* | *BR99* | **Reference Check Rules:** The `CanDelete()` in `ServiceViewModel` checks if the service has referenced data by querying "SELECT COUNT(\*) FROM ServiceDetail WHERE ServiceId \= \[SelectedItem.ServiceId\]" using `_serviceDetailService.GetAll()`. IF service exists in ServiceDetail (used in bookings), the system displays warning message and returns false. User views that service is being used and confirms end. (Refer to MSG 68\) |
| *(6), (7), (7.1), (7.2)* | *BR100* | **Confirmation Rules:** IF no references exist, the system displays confirmation dialog. IF user clicks "No" button, the operation is cancelled and no changes are made. (Refer to MSG 69\) |
| *(8), (9), (10)* | *BR101* | **Processing Rules:** IF user clicks "Yes" button to confirm delete, IF image file exists at "Service/\[ServiceId\].jpg", deletes the image file. System calls method \`Delete(ServiceId)\` in \`ServiceService\` class to delete service from database by syntax "DELETE FROM Service WHERE ServiceId \= \[SelectedItem.ServiceId\]". Removes service from \[ServiceList\] and \[OriginalList\], calls method \`Reset()\` to clear selection, and displays success notification. (Refer to MSG 70\) |

##### 2.1.3.20 Export Services to Excel {#2.1.3.20-export-services-to-excel}

###### *Use Case Description* {#use-case-description-33}

| Name | Export Services to Excel |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to export the service list to an Excel file. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user clicks Export Excel button. |
| **Pre-condition** | User must be authenticated with "Service" permission. ServiceView is displayed. |
| **Post-condition** | Excel file containing service data is generated and downloaded. |

######

###### *Activities Flow* {#activities-flow-33}

![][image43]

###### ![][image44]

######

###### *Business Rules* {#business-rules-33}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4), (5)* | *BR102* | **Displaying Rules:** When user selects action "Xuất Excel" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= TRUE. User can apply filter criteria (optional) and the system displays filtered services list. User clicks \[ExportToExcelCommand\] button to export. (Refer to "ServiceView" view in "View Description" file) |
| *(6), (6.1), (6.2)* | *BR103* | **Validation Rules:** The `ExportToExcel()` in `ServiceViewModel` checks if there is data to export. IF \[ServiceList\] \= NULL OR \[ServiceList\].Count \= 0, the system displays validation message and returns. User confirms end. (Refer to MSG 19\) |
| *(7), (8), (9), (10)* | *BR104* | **Processing Rules:** IF data exists, the system creates new XLWorkbook using ClosedXML library, adds worksheet "Danh sách Dịch vụ" with columns: "Tên dịch vụ", "Đơn giá", "Ghi chú". Iterates through \[ServiceList\] and populates rows with service data. Applies formatting: header bold, light gray background, centered alignment, borders, number format "\#,\#\#0" for price. Creates filename with timestamp format "DanhSachDichVu\_\[yyyyMMddHHmmss\].xlsx", opens SaveFileDialog for user to choose location. Saves workbook and opens the file for user to view. (Refer to MSG 71\) |

##### 2.1.3.21 View Shift Details {#2.1.3.21-view-shift-details}

###### *Use Case Description* {#use-case-description-34}

| Name | View Shift Details |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to view the list of all shifts and their details. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects view shifts function. |
| **Pre-condition** | User must be authenticated with valid active session and have "Shift" permission. |
| **Post-condition** | Shift list is displayed with all shift information. |

######

###### *Activities Flow* {#activities-flow-34}

![][image45]

######

###### *Business Rules* {#business-rules-34}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR105* | **Displaying Rules:** When user clicks \[ShiftCommand\], the system reinitializes database context by method `resetDatabaseContext()`, creates new ShiftView with ShiftViewModel as DataContext. The ShiftViewModel constructor loads shifts from database by method \`GetAll()\` in \`ShiftService\` class with syntax "SELECT \* FROM Shift", and displays "ShiftView" screen with DataGrid showing list of shifts. (Refer to "ShiftView" view in "View Description" file) |
| *(3), (4), (5), (6)* | *BR106* | **Searching Rules:** When user enters search text in \[SearchText\] field, the system uses method `PerformSearch()` in `ShiftViewModel` to filter shifts. The method checks \[SelectedSearchProperty\] and filters \[OriginalList\] accordingly: IF \[SelectedSearchProperty\] \= "Tên ca", filter by \[ShiftName\] CONTAINS \[SearchText\]. IF \[SelectedSearchProperty\] \= "Thời gian bắt đầu", filter by \[StartTime\] \= \[SearchText\]. IF \[SelectedSearchProperty\] \= "Thời gian kết thúc", filter by \[EndTime\] \= \[SearchText\]. |
| *(7), (8), (9), (10)* | *BR107* | **Selection Rules:** When user selects shift from DataGrid, the system triggers property setter `setSelectedItem(shift)` in `ShiftViewModel`. The system populates form fields: \[ShiftName\] \= \[SelectedItem.ShiftName\], \[StartTime\] \= \[SelectedItem.StartTime\], \[EndTime\] \= \[SelectedItem.EndTime\]. User views shift information and can close dialog or proceed to edit/delete. |

##### 2.1.3.22 Add New Shift {#2.1.3.22-add-new-shift}

###### *Use Case Description* {#use-case-description-35}

| Name | Add New Shift |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to add a new shift to the system. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects function Add New Shift. |
| **Pre-condition** | User must be authenticated and have "Shift" permission. ShiftView is displayed. |
| **Post-condition** | New shift is created in database and displayed in shift list. |

###### *Activities Flow* {#activities-flow-35}

![][image46]

######

###### *Business Rules* {#business-rules-35}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2)* | *BR108* | **Displaying Rules:** When user selects action "Thêm" from \[SelectedAction\], the system sets \[IsAdding\] \= TRUE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= FALSE and calls method `Reset()` to clear form fields. The system displays add shift form with fields: \[ShiftName\], \[StartTime\], \[EndTime\]. (Refer to "ShiftView" view in "View Description" file) |
| *(3), (4), (5), (6), (6.1)* | *BR109* | **Validation Rules:** When user enters shift information and clicks \[AddCommand\], the system will use `CanAdd()` in `ShiftViewModel` to validate data. IF \[ShiftName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 72\) IF \[StartTime\] \= NULL, the system displays validation message and returns false. (Refer to MSG 73\) IF \[EndTime\] \= NULL, the system displays validation message and returns false. (Refer to MSG 74\) IF \[StartTime\] \< 07:30 OR \[StartTime\] \>= 24:00, the system displays validation message and returns false. (Refer to MSG 75\) IF \[EndTime\] \< 07:30 OR \[EndTime\] \>= 24:00, the system displays validation message and returns false. (Refer to MSG 75\) IF \[EndTime\] \<= \[StartTime\], the system displays validation message and returns false. (Refer to MSG 76\) IF isDuplicateShiftName(\[ShiftName\]) \= TRUE, the system displays validation message and returns false. (Refer to MSG 77\) |
| *(7), (8), (9), (10)* | *BR110* | **Processing Rules:** After validation passes, the system creates new ShiftDTO object with: \[ShiftName\] \= \[ShiftName\].Trim, \[StartTime\] \= \[StartTime\], \[EndTime\] \= \[EndTime\]. System calls method \`Create(newShift)\` in \`ShiftService\` class to insert into database by syntax "INSERT INTO Shift (ShiftName, StartTime, EndTime) VALUES (...)". Adds to \[ShiftList\], calls method \`Reset()\` to clear form, and displays success notification. (Refer to MSG 78\) |

##### 2.1.3.23 Edit Shift {#2.1.3.23-edit-shift}

###### *Use Case Description* {#use-case-description-36}

| Name | Edit Shift |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to edit an existing shift's information. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects function Edit Shift. |
| **Pre-condition** | User must be authenticated with "Shift" permission. A shift must be selected. |
| **Post-condition** | Shift information is updated in database and reflected in shift list. |

######

###### *Activities Flow* {#activities-flow-36}

![][image47]

######

###### *Business Rules* {#business-rules-36}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4), (5)* | *BR111* | **Displaying Rules:** When user selects action "Sửa" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= TRUE, \[IsDeleting\] \= FALSE and calls method `Reset()`. When user selects a shift from DataGrid, the system triggers property setter \`setSelectedItem(shift)\` to populate form with current data. (Refer to "ShiftView" view in "View Description" file) |
| *(6), (7), (8), (8.1)* | *BR112* | **Validation Rules:** When user edits shift information and clicks \[EditCommand\], the system will use `CanEdit()` in `ShiftViewModel` to validate data. IF \[SelectedItem\] \= NULL, returns false. IF \[ShiftName\].IsEmpty \= TRUE, the system displays validation message and returns false. (Refer to MSG 72\) IF \[StartTime\] \= NULL, the system displays validation message and returns false. (Refer to MSG 73\) IF \[EndTime\] \= NULL, the system displays validation message and returns false. (Refer to MSG 74\) IF \[StartTime\] \< 07:30 OR \[StartTime\] \>= 24:00, the system displays validation message and returns false. (Refer to MSG 75\) IF \[EndTime\] \< 07:30 OR \[EndTime\] \>= 24:00, the system displays validation message and returns false. (Refer to MSG 75\) IF \[EndTime\] \<= \[StartTime\], the system displays validation message and returns false. (Refer to MSG 76\) IF isDuplicateShiftName(\[ShiftName\], \[ShiftId\]) \= TRUE, the system displays validation message and returns false. (Refer to MSG 77\) IF no changes detected (all fields unchanged), the system displays info message and returns false. (Refer to MSG 16\) |
| *(9), (10), (11)* | *BR113* | **Processing Rules:** After validation passes, the system creates ShiftDTO object with updated values, calls method `Update(updateDto)` in `ShiftService` class to update in database by syntax "UPDATE Shift SET ShiftName \= \[ShiftName\], StartTime \= \[StartTime\], EndTime \= \[EndTime\] WHERE ShiftId \= \[ShiftId\]". Updates \[ShiftList\] at selected index, calls method \`Reset()\`, and displays success notification. (Refer to MSG 79\) |

##### 2.1.3.24 Delete Shift {#2.1.3.24-delete-shift}

###### *Use Case Description* {#use-case-description-37}

| Name | Delete Shift |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to delete an existing shift from the system. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects delete shift function. |
| **Pre-condition** | User must be authenticated with "Shift" permission. A shift must be selected. |
| **Post-condition** | Shift is removed from database. |

######

###### *Activities Flow* {#activities-flow-37}

![][image48]

###### ![][image49]

###### *Business Rules* {#business-rules-37}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4)* | *BR114* | **Displaying Rules:** When user selects action "Xóa" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= TRUE and calls method `Reset()`. The system displays shifts list in DataGrid. User selects shift to delete. (Refer to "ShiftView" view in "View Description" file) |
| *(5), (5.1), (5.2)* | *BR115* | **Reference Check Rules:** The `CanDelete()` in `ShiftViewModel` checks if the shift has referenced data by querying "SELECT COUNT(\*) FROM Booking WHERE ShiftId \= \[SelectedItem.ShiftId\]" using `_bookingService.GetAll()`. IF shift exists in Booking (used in bookings), the system displays warning message and returns false. User views that shift is being used and confirms end. (Refer to MSG 80\) |
| *(6), (7), (7.1), (7.2)* | *BR116* | **Confirmation Rules:** IF no references exist, the system displays confirmation dialog. IF user clicks "No" button, the operation is cancelled and no changes are made. (Refer to MSG 81\) |
| *(8), (9), (10)* | *BR117* | **Processing Rules:** IF user clicks "Yes" button to confirm delete, the system calls method `Delete(ShiftId)` in `ShiftService` class to delete shift from database by syntax "DELETE FROM Shift WHERE ShiftId \= \[SelectedItem.ShiftId\]". Removes shift from \[ShiftList\] and \[OriginalList\], calls method \`Reset()\` to clear selection, and displays success notification. (Refer to MSG 83\) |

##### 2.1.3.25 Export Shifts to Excel {#2.1.3.25-export-shifts-to-excel}

###### *Use Case Description* {#use-case-description-38}

| Name | Export Shifts to Excel |
| :---- | :---- |
| **Description** | This use case allows Staff/Admin to export the shift list to an Excel file. |
| **Actor** | Staff, Administrator |
| **Trigger** | When user selects Export to Excel function. |
| **Pre-condition** | User must be authenticated with "Shift" permission. ShiftView is displayed. |
| **Post-condition** | Shift list is exported to Excel file and saved to user's selected location. |

######

###### *Activities Flow* {#activities-flow-38}

![][image50]

###### ![][image51]

######

###### *Business Rules* {#business-rules-38}

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| *(1), (2), (3), (4), (5)* | *BR118* | **Displaying Rules:** When user selects action "Xuất Excel" from \[SelectedAction\], the system sets \[IsAdding\] \= FALSE, \[IsEditing\] \= FALSE, \[IsDeleting\] \= FALSE, \[IsExporting\] \= TRUE. User can apply filter criteria (optional) and the system displays filtered shifts list. User clicks \[ExportToExcelCommand\] button to export. (Refer to "ShiftView" view in "View Description" file) |
| *(6), (6.1), (6.2)* | *BR119* | **Validation Rules:** The `ExportToExcel()` in `ShiftViewModel` checks if there is data to export. IF \[ShiftList\] \= NULL OR \[ShiftList\].Count \= 0, the system displays validation message and returns. User confirms end. (Refer to MSG 19\) |
| *(7), (8), (9), (10)* | *BR120* | **Processing Rules:** IF data exists, the system creates new XLWorkbook using ClosedXML library, adds worksheet "Danh sách Ca" with columns: "Tên ca", "Thời gian bắt đầu", "Thời gian kết thúc". Iterates through \[ShiftList\] and populates rows with shift data. Applies formatting: header bold, light gray background, centered alignment, borders, time format "HH:mm". Creates filename with timestamp format "DanhSachCa\_\[yyyyMMddHHmmss\].xlsx", opens SaveFileDialog for user to choose location. Saves workbook and opens the file for user to view. (Refer to MSG 101\) |

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