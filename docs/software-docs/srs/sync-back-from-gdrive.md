**SOFTWARE REQUIREMENTS SPECIFICATION**
Electricilies \- Website for Selling Electronic Products

##

## Revision and Signoff Sheet {#revision-and-signoff-sheet}

### Change Record {#change-record}

| Author         | Version | Change reference         | Date       |
| :------------- | :------ | :----------------------- | :--------- |
| Buggilies Team | 0.1.0   | Initial project creation | 19/09/2025 |
| Buggilies Team | 0.2.0   | Update more detail       | 31/10/2025 |

### Reviewers {#reviewers}

| Name        | Company       | Version | Position        | Date       |
| :---------- | :------------ | :------ | :-------------- | :--------- |
| Kevin Nitro | Electricilies | 0.1.0   | Project Manager | 20/09/2025 |
| Kevin Nitro | Electricilies | 0.2.0   | Project Manager | 1/11/2025  |

## 1\. Introduction {#1.-introduction}

### 1.1 Purpose {#1.1-purpose}

This Software Requirements Specification document outlines the comprehensive requirements for the "Electricilies" e-commerce platform. This document serves as a detailed technical foundation for the development, deployment, and maintenance of the website across various platforms. It provides developers with clear guidelines for planning, task assignment, and implementation. Additionally, quality assurance teams will utilize this document to design test cases that align with specified requirements, ensuring the final product meets both quality standards and user expectations for an electronic products marketplace.

### 1.2 Scope {#1.2-scope}

This document encompasses the Electricilies e-commerce platform, which is designed to provide a comprehensive online marketplace for electronic products. The system supports multiple user roles including customers, staff, and administrators, each with distinct functionalities for browsing products, managing inventory, processing orders, and administering the platform.

### 1.3 Intended Audiences and Document Organization {#1.3-intended-audiences-and-document-organization}

This document is intended for:

- **Development Team**: Responsible for creating detailed designs, implementing features, and performing unit testing, integration testing, and system testing for the application.
- **Quality Assurance Team**: Responsible for conducting user acceptance testing sessions and validating system requirements.
- **Documentation Team**: Responsible for creating user guides and help documentation for the application.
- **Project Stakeholders**: Business owners and managers who need to understand system capabilities and requirements.

Below are the main sections of this document:

- **1\. Introduction**: General introduction and overview of this document.
- **2\. Functional Requirements**: Detailed description of functional requirements including use cases, sequence diagrams, and activity diagrams.
- **3\. Non-functional Requirements**: Description of non-functional requirements such as security, performance, and interface requirements.
- **4\. Other Requirements**: Additional requirements including archive functions and other supporting features.
- **5\. Appendixes**: Supporting information including glossary, messages, and issues list.

### 1.4 References {#1.4-references}

| \#  | Title             | Version | File Name / Link                                                                              | Description                                        |
| :-- | :---------------- | :------ | :-------------------------------------------------------------------------------------------- | :------------------------------------------------- |
| 1   | Use Case Diagrams | 0.1.0   | [Use Case Documentation](https://electricilies.github.io/software-docs/use-case/generic.html) | Complete use case diagrams for all user roles      |
| 2   | Sequence Diagrams | 0.1.0   | [Sequence Documentation](https://electricilies.github.io/software-docs/sequence/)             | Sequence flow diagrams for all major features      |
| 3   | Activity Diagrams | 0.1.0   | [Activity Documentation](https://electricilies.github.io/software-docs/activity/)             | Activity flow diagrams for business processes      |
| 4   | Database Schema   | 0.1.0   | [Database Design Document](https://electricilies.github.io/software-docs/database/)           | Entity-relationship diagrams and table definitions |

## 2\. Functional Requirements {#2.-functional-requirements}

### 2.1 Use Case Description {#2.1-use-case-description}

#### 2.1.1 Manage Account Use Case {#2.1.1-manage-account-use-case}

##### 2.1.1.1 Manage Account {#2.1.1.1-manage-account}

###### _Use Case Description_

| Name               | Manage Account                                                                              |
| :----------------- | :------------------------------------------------------------------------------------------ |
| **Description**    | This use case allows users to manage their account settings and preferences in the system.  |
| **Actor**          | Customer, Staff, Admin                                                                      |
| **Trigger**        | When the user accesses their account settings from the navigation menu.                     |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in with their account. |
| **Post-condition** | User can access various account management functions.                                       |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                        |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** The system displays an "Account Management" view with user account information and available options. (Refer to "Account Management" view in "View Description" file)                                                        |
| (2)      | BR2     | **Choosing Rules:** User can only choose one account management feature at a time to use. Available options include: Delete Account, Edit Profile, Link Account With Third Party, Recover Account, Reset Password, Sign In, Sign Out, and Sign Up. |

##### 2.1.1.2 Sign Up {#2.1.1.2-sign-up}

###### _Use Case Description_

| Name               | Sign Up                                                                          |
| :----------------- | :------------------------------------------------------------------------------- |
| **Description**    | This use case allows new users to register an account in the system.             |
| **Actor**          | Customer                                                                         |
| **Trigger**        | When a user clicks on the "Sign Up" button on the sign-in page.                  |
| **Pre-condition**  | User's device must be connected to the internet.                                 |
| **Post-condition** | User account is created in the system and user is redirected to the home screen. |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR3     | **Security Rules:** The system generates a random code verifier and hashes it to create a code challenge for secure authentication flow.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| (4)      | BR4     | **Displaying Rules:** The system displays a "Sign Up" screen with fields for Username, Password, Email, and Full Name. (Refer to "Sign Up" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| (6)      | BR5     | **Validation Rules:** When the user enters registration data, the system validates data format using standard patterns: \- Username: alphanumeric, 4-255 characters \- Password: 4-255 characters, at least one uppercase, one lowercase, one number, one special character \- Email: valid email format (e.g., [user@domain.com](mailto:user@domain.com)), maximum 255 characters \- First Name: alphabetic characters and spaces only, maximum 255 characters \- Last Name: alphabetic characters and spaces only, maximum 255 characters if isValid(username, password, email, firstName, lastName): authService.Save(username, password, email, firstName, lastName) else: throw error If data format is invalid, system displays error message (Refer to MSG 1\) and requires user to re-enter data. |
| (8)      | BR6     | **Validation Rules:** The system checks if the username or email already exists in the auth service’s data. If the username or email is already registered, system displays error message (Refer to MSG 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| (12)     | BR7     | **Validation Rules:** The system validates the authorization code, verifier, and challenge. If validation fails, system displays error message (Refer to MSG 3). Otherwise, system generates and returns JWT Token with 5-min expiration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| (16)     | BR8     | **Validation Rules:** The system verifies the JWT Token and writes user data to the database. If JWT is invalid, system displays error message (Refer to MSG 4). Otherwise, user data is stored in auth service’s data and system redirects to Home View.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

##### 2.1.1.3 Sign In {#2.1.1.3-sign-in}

###### _Use Case Description_

| Name               | Sign In                                                                                 |
| :----------------- | :-------------------------------------------------------------------------------------- |
| **Description**    | This use case allows users to sign in to the system using their credentials.            |
| **Actor**          | Customer, Staff, Admin                                                                  |
| **Trigger**        | When the user clicks on the "Sign In" button on the sign-in page.                       |
| **Pre-condition**  | User's device must be connected to the internet. User account must exist in the system. |
| **Post-condition** | User is authenticated and signed in to the system.                                      |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR9     | **Security Rules:** The system generates a random code verifier and hashes it to create a code challenge for secure authentication flow.                                                                                                                                                                                                                                     |
| (5)      | BR10    | **Displaying Rules:** The system displays a "Sign In" screen with fields for Username/Email and Password. (Refer to "Sign In" view in "View Description" file)                                                                                                                                                                                                               |
| (6)      | BR11    | **Validation Rules:** When the user enters credentials, the system validates data format: \- Username/Email: must not be empty \- Password: must not be empty if isValid(username, password): authService.SignIn(username, password) else: throw error If data format is invalid, system displays error message (Refer to MSG 1\) and requires user to re-enter credentials. |
| (8)      | BR12    | **Validation Rules:** The system validates user credentials against the auth service’s data. If credentials are invalid, system displays error message (Refer to MSG 5\) and increments failed login counter.                                                                                                                                                                |
| (11)     | BR13    | **Validation Rules:** The system validates the authorization code, verifier, and challenge. If validation fails, system displays error message (Refer to MSG 3). Otherwise, system generates and returns JWT Token with 5-min expiration.                                                                                                                                    |
| (13)     | BR14    | **Validation Rules:** The system verifies the JWT Token. If JWT is invalid or expired, system displays error message (Refer to MSG 4). Otherwise, system creates user session and redirects to Home View.                                                                                                                                                                    |

##### 2.1.1.4 Sign Out {#2.1.1.4-sign-out}

###### _Use Case Description_

| Name               | Sign Out                                                                 |
| :----------------- | :----------------------------------------------------------------------- |
| **Description**    | This use case allows users to sign out from the system.                  |
| **Actor**          | Customer, Staff, Admin                                                   |
| **Trigger**        | When the user clicks on the "Sign Out" button.                           |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in. |
| **Post-condition** | User session is cleared and user is signed out.                          |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                         |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR15    | **Session Rules:** The system clears all user session data including JWT Token, cached user information, and temporary data from browser storage (localStorage and sessionStorage). |
| (3)      | BR16    | **Displaying Rules:** The system displays sign out confirmation message (Refer to MSG 6\) and automatically redirects to the Sign In page after 2 seconds.                          |

##### 2.1.1.5 Edit Profile {#2.1.1.5-edit-profile}

###### _Use Case Description_

| Name               | Edit Profile                                                             |
| :----------------- | :----------------------------------------------------------------------- |
| **Description**    | This use case allows users to edit their profile information.            |
| **Actor**          | Customer, Staff, Admin                                                   |
| **Trigger**        | When the user clicks on the "Edit Profile" option from account settings. |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in. |
| **Post-condition** | User profile information is updated in the system.                       |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR17    | **Displaying Rules:** The system displays a "Profile Edit" screen filled with current user information retrieved from auth service’s data. (Refer to "Profile Edit" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| (3)      | BR18    | **Validation Rules:** When the user enters new profile information, the system validates data format in real-time using Text_change() method: \- First Name: alphabetic characters and spaces only, 2-255 characters \- Last Name: alphabetic characters and spaces only, 2-255 characters \- Email: valid email format, maximum 255 characters \- Phone: valid phone format (if provided) \- Address: alphanumeric with special characters allowed (if provided), maximum 255 characters if isValid(firstName, lastName, email, phone, address): authService.Save(firstName, lastName, email, phone, address) else: throw error If data format is invalid, system displays error message (Refer to MSG 1). |
| (5)      | BR19    | **Validation Rules:** When the user clicks the "Save Changes" button, system validates updated data against auth service’s data: \- Check if new email is not already registered by another user \- Check if new phone is not already registered by another user (if provided) If validation fails, system displays error message (Refer to MSG 7 or MSG 8). Otherwise, profile data is updated in the database and success message is displayed (Refer to MSG 9).                                                                                                                                                                                                                                          |

##### 2.1.1.6 Link Account With Third Party Provider {#2.1.1.6-link-account-with-third-party-provider}

###### _Use Case Description_

| Name               | Link Account With Third Party Provider                                                      |
| :----------------- | :------------------------------------------------------------------------------------------ |
| **Description**    | This use case allows users to link their account with third-party authentication providers. |
| **Actor**          | Customer, Staff, Admin                                                                      |
| **Trigger**        | When the user clicks on "Link Account" option and selects a third-party provider.           |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in.                    |
| **Post-condition** | User account is linked with the selected third-party provider.                              |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR20    | **Displaying Rules:** The system displays available third-party providers (Google, Facebook, etc.) that can be linked to the user account. (Refer to "Link Account" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                    |
| (5)      | BR21    | **Validation Rules:** The system validates account linking request: \- Check if selected provider is not already linked to this account \- Check if provider account is not already linked to another user account \- Verify provider authentication token if isValid(provider): authService.LinkProvider(provider) else: throw error If validation fails, system displays error message (Refer to MSG 10). Otherwise, system creates third-party account link auth service’s data and displays success notification (Refer to MSG 11). |

##### 2.1.1.7 Delete Account {#2.1.1.7-delete-account}

###### _Use Case Description_

| Name               | Delete Account                                                                  |
| :----------------- | :------------------------------------------------------------------------------ |
| **Description**    | This use case allows users to permanently delete their account from the system. |
| **Actor**          | Customer, Staff, Admin                                                          |
| **Trigger**        | When the user clicks on "Delete Account" option in account settings.            |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in.        |
| **Post-condition** | User account is permanently deleted from the system.                            |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                  |
| :----------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)          | BR22    | **Displaying Rules:** The system displays a confirmation dialog warning the user about permanent account deletion and its consequences (Refer to "Confirmation Dialog" view in "View Description" file).                                                                                                                                                                     |
| (2.1), (2.2) | BR23    | **Selection Rules:** User must explicitly confirm account deletion. If user clicks "Cancel" button, the confirmation dialog closes and use case ends. If user clicks "Confirm" button, system proceeds with deletion process.                                                                                                                                                |
| (4)          | BR24    | **Validation Rules:** The system validates account data before deletion: \- Check for pending orders (orders must be completed or cancelled) If validation fails, system displays error message (Refer to MSG 12\) listing issues that must be resolved. Otherwise, system performs deletion and displays success message (Refer to MSG 13), then redirects to sign-in page. |

##### 2.1.1.8 Reset Password {#2.1.1.8-reset-password}

###### _Use Case Description_

| Name               | Reset Password                                                           |
| :----------------- | :----------------------------------------------------------------------- |
| **Description**    | This use case allows users to change their account password.             |
| **Actor**          | Customer, Staff, Admin                                                   |
| **Trigger**        | When the user clicks on "Change Password" option in account settings.    |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in. |
| **Post-condition** | User password is updated in the system.                                  |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR25    | **Displaying Rules:** The system displays a password change form with fields for current password and new password. (Refer to "Change Password" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                               |
| (4)      | BR26    | **Validation Rules:** The system validates password format in real-time: \- New password must be at least 4 characters long \- Must contain at least one uppercase letter \- Must contain at least one lowercase letter \- Must contain at least one number \- Must contain at least one special character (\!@\#$%^&\\\*) \- New password must be different from current password if isValid(oldPassword, newPassword): authService.UpdatePassword(user, newPassword) else: throw error If validation fails, system displays error message (Refer to MSG 14). |
| (6)      | BR27    | **Validation Rules:** When user clicks "Update Password" button, system validates current password against stored hash using bcrypt comparison. If current password is incorrect, system displays error message (Refer to MSG 15). Otherwise, auth service save the user data, and displays success message (Refer to MSG 16).                                                                                                                                                                                                                                 |

##### 2.1.1.9 View Account Activity {#2.1.1.9-view-account-activity}

###### _Use Case Description_

| Name               | View Account Activity                                                                                                              |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows users to view their account activity history including login attempts, password changes, and profile updates. |
| **Actor**          | Customer, Staff, Admin                                                                                                             |
| **Trigger**        | When the user clicks on "Account Activity" option in account settings.                                                             |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in.                                                           |
| **Post-condition** | User can view their account activity history.                                                                                      |

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                       |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| N/A      | BR28    | **Querying Rules:** The system queries activity logs auth service data for the current user, ordered by timestamp descending.                                                                                     |
| N/A      | BR29    | **Displaying Rules:** The system displays account activity history including: timestamp, activity type, IP address, device information, and status. (Refer to "Account Activity" view in "View Description" file) |

##### 2.1.1.10 Recover Account {#2.1.1.10-recover-account}

###### _Use Case Description_

| Name               | Recover Account                                                                           |
| :----------------- | :---------------------------------------------------------------------------------------- |
| **Description**    | This use case allows users to recover their account by requesting a password reset email. |
| **Actor**          | Customer, Staff, Admin                                                                    |
| **Trigger**        | When a user clicks on "Forgot Password" link on the sign-in page.                         |
| **Pre-condition**  | User's device must be connected to the internet.                                          |
| **Post-condition** | Password reset email is sent to user's registered email address.                          |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                               |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR30    | **Displaying Rules:** The system displays a password recovery form with email address field. (Refer to "Password Recovery" view in "View Description" file)                                                                                                                                                                                                                               |
| (4)      | BR31    | **Validation Rules:** The system validates email format: \- Must not be empty \- Must follow valid email pattern ([user@domain.com](mailto:user@domain.com)) if isValid(email): authService.SendRecoverEmail(email) else: throw error If validation fails, system displays error message (Refer to MSG 1).                                                                                |
| (6)      | BR32    | **Validation Rules:** The system checks if account exists in auth service data with the provided email. If account is not found, system displays generic error message for security reasons (Refer to MSG 17). Otherwise, system generates a unique reset token with 1-hour expiration, sends password reset email containing reset link, and displays success message (Refer to MSG 18). |

#### 2.1.2 View Product Use Case {#2.1.2-view-product-use-case}

##### 2.1.2.1 View Product {#2.1.2.1-view-product}

###### _Use Case Description_

| Name               | View Product                                                                         |
| :----------------- | :----------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view the list of available products in the system. |
| **Actor**          | Customer                                                                             |
| **Trigger**        | When the customer navigates to the products section or home page.                    |
| **Pre-condition**  | Customer's device must be connected to the internet.                                 |
| **Post-condition** | Customer can view list of products and choose various product-related functions.     |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                        |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR33    | **Displaying Rules:** The system displays a "Product List" view showing available products with pagination (20 products per page). Each product displays: thumbnail image, name, price, rating, and quick action buttons. (Refer to "Product List" view in "View Description" file) System uses Redis cache to store and retrieve product list data for faster response and reduced database load. |
| (2)      | BR34    | **Choosing Rules:** Customer can only choose one product-related feature at a time. Available options include: Add to Cart, Search Product, View Product Detail, View Product Reviews, and View Suggested Products.                                                                                                                                                                                |

##### 2.1.2.2 Search Product {#2.1.2.2-search-product}

###### _Use Case Description_

| Name               | Search Product                                                                    |
| :----------------- | :-------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to search for products using keywords and filters. |
| **Actor**          | Customer                                                                          |
| **Trigger**        | When the customer enters search criteria in the search box.                       |
| **Pre-condition**  | Customer's device must be connected to the internet.                              |
| **Post-condition** | Search results are displayed based on entered criteria.                           |

###### _Sequence Flow_

**![][image21]**

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR35    | **Searching Rules:** When the customer enters search criteria, the system uses Text_change() method to handle the search request with debounce delay of 300ms. System queries data in "PRODUCTS" table (Refer to "Products" table in "DB Sheet" file). products \= productService.ListProducts(params) Params can include: keyword, categories, price range, rating, sort by (price, rate), availability. System uses Redis cache to store and retrieve search results for popular queries to improve performance. |
| (4)      | BR36    | **Displaying Rules:** If search is triggered on "Home View", system displays results inline with autocomplete suggestions. If user presses Enter, system redirects to "Product Search View" (Refer to "Product Search" view in "View Description" file) showing filtered results with applied search criteria and filter options.                                                                                                                                                                                  |

##### 2.1.2.3 View Product Detail {#2.1.2.3-view-product-detail}

###### _Use Case Description_

| Name               | View Product Detail                                                                |
| :----------------- | :--------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view detailed information of a specific product. |
| **Actor**          | Customer                                                                           |
| **Trigger**        | When the customer clicks on a product from the product list or search results.     |
| **Pre-condition**  | Customer's device must be connected to the internet.                               |
| **Post-condition** | Detailed product information is displayed to the customer.                         |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                         |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (3)      | BR37    | **Querying Rules:** System queries product details from "PRODUCTS" table (Refer to "Products" table in "DB Sheet" file)  product \= productService.GetProduct(params) Params can include: ProductID System also retrieves related data including product images, category, attributes, options, product variants. System uses Redis cache to store and retrieve product detail data for frequently viewed products. |
| (4)      | BR38    | **Displaying Rules:** The system displays "Product Detail" view showing: product images (with zoom functionality), name, full description, price, availability status, attribute table, category, SKU, quantity selector, Add to Cart button, rating summary, and related products section. (Refer to "Product Detail" view in "View Description" file)                                                             |

##### 2.1.2.4 View Product Reviews {#2.1.2.4-view-product-reviews}

###### _Use Case Description_

| Name               | View Product Reviews                                                                   |
| :----------------- | :------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view reviews and ratings for a specific product.     |
| **Actor**          | Customer                                                                               |
| **Trigger**        | When the customer clicks on the reviews section of a product detail page.              |
| **Pre-condition**  | Customer's device must be connected to the internet. Product must exist in the system. |
| **Post-condition** | Product reviews are displayed to the customer.                                         |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                      |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR39    | **Querying Rules:** System queries reviews from "REVIEWS" table (Refer to "Reviews" table in "DB Sheet" file) reviews \= reviewService.ListReviews(params) param can include: ProductID System also calculates rating distribution statistics.                                                                                                                                   |
| (3)      | BR40    | **Displaying Rules:** The system displays reviews section showing: overall rating (1-5 stars), total review count, filter options (by rating, most recent), and list of reviews with reviewer name, rating, review text, images (if any), helpful count, and review date. Pagination loads 10 reviews at a time. (Refer to "Product Reviews" section in "View Description" file) |

##### 2.1.2.5 View Suggested Products {#2.1.2.5-view-suggested-products}

###### _Use Case Description_

| Name               | View Suggested Products                                                                                  |
| :----------------- | :------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view products suggested based on the current product they are viewing. |
| **Actor**          | Customer                                                                                                 |
| **Trigger**        | Automatically displayed when viewing product details.                                                    |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer is viewing a product detail page.          |
| **Post-condition** | Suggested products are displayed based on recommendation algorithm.                                      |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR41    | **Querying Rules:** System queries suggested products/related products using recommendation algorithm based on: 1\. Same category as current product 2\. Relate category by name to current category of the current product 3\. Relate product by name to current product 4\. Similar price range System queries from "PRODUCTS" table (Refer to "Products" table in "DB Sheet" file) products \= productService.ListSuggestedProducts(params) params can include: product, category, minPrice, maxPrice |
| (3)      | BR42    | **Displaying Rules:** The system returns ProductList. The system displays suggested products section at the bottom of product detail page showing: product thumbnail, name, price. The display is organized in a horizontal scrollable carousel. (Refer to "Suggested Products" section in "View Description" file)                                                                                                                                                                                      |
| (3.2)    | BR43    | **Navigation Rules:** When customer clicks on a suggested product, system redirects to that product's detail page and recursively executes the "View Product Detail" use case for the selected product.                                                                                                                                                                                                                                                                                                  |

##### 2.1.2.6 Add Product to Cart {#2.1.2.6-add-product-to-cart}

###### _Use Case Description_

| Name               | Add Product to Cart                                                                      |
| :----------------- | :--------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to add products to their shopping cart.                   |
| **Actor**          | Customer                                                                                 |
| **Trigger**        | When the customer clicks "Add to Cart" button after selecting quantity.                  |
| **Pre-condition**  | Customer's device must be connected to the internet. Product must be available in stock. |
| **Post-condition** | Product is added to customer's shopping cart.                                            |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR44    | **Validation Rules:** When customer enters quantity and clicks "Add to Cart", system validates: \- Quantity must be a positive integer, greater than 0 \- Quantity must not exceed available stock \- Quantity must not exceed maximum purchase limit (if any) If validation fails, system displays error message (Refer to MSG 19).                                                                                                                                                                         |
| (5)      | BR45    | **Validation Rules:** System validates cart data before storing: \- Check if product still exists and is active in "PRODUCTS" table \- Check if product is still in stock \- If product already exists in cart, add quantities together \- If total quantity exceeds stock, display error (Refer to MSG 20\) Otherwise, store/update cart item in "CARTS" table (Refer to "Carts" table in "DB Sheet" file) and display success notification with cart icon update showing new item count (Refer to MSG 21). |

#### 2.1.3 Manage Cart Use Case {#2.1.3-manage-cart-use-case}

##### 2.1.3.1 Manage Cart {#2.1.3.1-manage-cart}

###### _Use Case Description_

| Name               | Manage Cart                                                            |
| :----------------- | :--------------------------------------------------------------------- |
| **Description**    | This use case allows customers to manage items in their shopping cart. |
| **Actor**          | Customer                                                               |
| **Trigger**        | When the customer clicks on the cart icon or navigates to cart page.   |
| **Pre-condition**  | Customer's device must be connected to the internet.                   |
| **Post-condition** | Customer can view and manage cart items.                               |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                  |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR46    | **Querying Rules:** System queries cart items from "CARTS" table (Refer to "Carts" table in "DB Sheet" file) for the current customer. cart \= cartService.GetCart(params) param can include: UserID System calculates: Total items, total selected items’ price                                                                                             |
| (2)      | BR47    | **Displaying Rules:** The system displays "Cart View" showing: list of cart items (each with product image, name, price, quantity selector, remove button), cart summary panel (total price), and "Proceed to Checkout" button. If cart is empty, displays empty cart message with "Browse Products" link. (Refer to "Cart" view in "View Description" file) |
| (3)      | BR48    | **Choosing Rules:** Customer can choose from available cart management functions: Change Product Amount, Remove Product from Cart, or Purchase. Only one operation can be performed at a time.                                                                                                                                                               |

##### 2.1.3.2 Change Product Amount {#2.1.3.2-change-product-amount}

###### _Use Case Description_

| Name               | Change Product Amount                                                            |
| :----------------- | :------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to change the quantity of products in their cart. |
| **Actor**          | Customer                                                                         |
| **Trigger**        | When the customer adjusts the quantity selector for a cart item.                 |
| **Pre-condition**  | Customer's device must be connected to the internet. Product must exist in cart. |
| **Post-condition** | Product quantity in cart is updated.                                             |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR49    | **Validation Rules:** When customer changes product quantity, system validates: \- New quantity must be a positive integer \- New quantity must be greater than 0 \- New quantity must not exceed available stock \- New quantity must not exceed maximum purchase limit (100) cartItem \= updateCartItem(params) param can include: cartItemID, newQuantity If validation fails, system displays error message (Refer to MSG 19\) and reverts to previous quantity. Otherwise, system updates quantity in "CARTS" table and displays success notification (Refer to MSG 22). |
| (5)      | BR50    | **Displaying Rules:** After successful update, system refreshes cart view showing: updated quantity, updated item total, updated cart total. All calculations are updated in real-time without page reload.                                                                                                                                                                                                                                                                                                                                                                   |

##### 2.1.3.3 Remove Product from Cart {#2.1.3.3-remove-product-from-cart}

###### _Use Case Description_

| Name               | Remove Product from Cart                                                         |
| :----------------- | :------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to remove products from their cart.               |
| **Actor**          | Customer                                                                         |
| **Trigger**        | When the customer clicks the "Remove" button for a cart item.                    |
| **Pre-condition**  | Customer's device must be connected to the internet. Product must exist in cart. |
| **Post-condition** | Product is removed from cart.                                                    |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR51    | **Validation Rules:** System validates product exists in customer's cart by querying "CARTS" table (Refer to "Carts" table in "DB Sheet" file). if exist(cart, product): cart.Remove(product) else throw error If product is not found in cart, system displays error message (Refer to MSG 23). Otherwise, system deletes cart item from "CARTS" table and displays success notification (Refer to MSG 24). |
| (5)      | BR52    | **Displaying Rules:** After successful removal, system updates cart view removing the item from display and recalculating: cart subtotal, shipping estimate, and total amount. If cart becomes empty, displays empty cart message.                                                                                                                                                                           |

##### 2.1.3.4 Purchase {#2.1.3.4-purchase}

###### _Use Case Description_

| Name               | Purchase                                                                                                              |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to proceed to checkout and purchase items in their cart or directly from product view. |
| **Actor**          | Customer                                                                                                              |
| **Trigger**        | When the customer clicks "Proceed to Checkout" button.                                                                |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in.                                      |
| **Post-condition** | Customer is redirected to checkout page.                                                                              |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR53    | **Validation Rules:** Before proceeding to checkout, system validates: \- If from cart view, all selected products in cart: \- All products must still exist and be active in "PRODUCTS" table \- All products must be in stock with sufficient quantity \- Cart must not be empty \- Cart total must meet minimum order amount (if applicable) \- If direct from product view: \- All products must still exist and be active in "PRODUCTS" table \- All products must be in stock with sufficient quantity if isValid(\[\]CartItem): cartService.Checkout(\[\]CartItem) else: throw error If any validation fails, system displays specific error message (Refer to MSG 25 for invalid cart, MSG 26 for invalid product) and highlights problematic items. |
| (4)      | BR54    | **Redirect Rules:** If all validations pass, system closes Cart View and redirects customer to Checkout View with order data. System creates order record with order items, calculated totals, and customer information. (Refer to "Checkout" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### 2.1.4 View Order Use Case {#2.1.4-view-order-use-case}

##### 2.1.4.1 View Order {#2.1.4.1-view-order}

###### _Use Case Description_

| Name               | View Order                                                                       |
| :----------------- | :------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view their order history and manage orders.    |
| **Actor**          | Customer                                                                         |
| **Trigger**        | When the customer navigates to "My Orders" section.                              |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. |
| **Post-condition** | Customer can view list of orders and choose order management functions.          |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                           |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR55    | **Querying Rules:** System queries orders from "ORDERS" table (Refer to "orders" table in "DB Sheet" file) for current customer. orders \= orderService.ListOrders(params) params can include: userID System retrieves order summary including: order ID, date, status, total amount, and item count. |
| (2)      | BR56    | **Displaying Rules:** The system displays "Order Management" view showing paginated list of orders (20 per page). Each order displays: order number, date, status badge, total amount, item count. (Refer to "Order Management" view in "View Description" file)                                      |
| (3)      | BR57    | **Choosing Rules:** Customer can choose from available order functions: Cancel Order, Return Product, Review Product, Search Order, or View Order Detail. Only one operation can be performed at a time.                                                                                              |

##### 2.1.4.2 Search Order {#2.1.4.2-search-order}

###### _Use Case Description_

| Name               | Search Order                                                                        |
| :----------------- | :---------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to search for specific orders using search criteria. |
| **Actor**          | Customer                                                                            |
| **Trigger**        | When the customer enters search criteria in the order search box.                   |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in.    |
| **Post-condition** | Filtered order results are displayed.                                               |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                    |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR58    | **Searching Rules:** When customer enters search criteria, system uses Text_change() method with debounce delay of 300ms. System queries "ORDERS" table (Refer to "orders" table in "DB Sheet" file). orders \= listOrders(params) params can include: orderIDs, userID, status Search can filter by: order ID, order date, order status (Pending, Processing, Shipped, Delivered, Cancelled). |
| (4)      | BR59    | **Displaying Rules:** System displays "Order Management" view with filtered results showing matching orders. If no results found, displays "No orders found" message with the "Clear Search" option. Active filters are displayed as removable tags above the order list.                                                                                                                      |

##### 2.1.4.3 View Order Detail {#2.1.4.3-view-order-detail}

###### _Use Case Description_

| Name               | View Order Detail                                                                                                   |
| :----------------- | :------------------------------------------------------------------------------------------------------------------ |
| **Description**    | This use case allows customers to view detailed information of a specific order.                                    |
| **Actor**          | Customer                                                                                                            |
| **Trigger**        | When the customer clicks on an order from the order list.                                                           |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. Order must belong to the customer. |
| **Post-condition** | Detailed order information is displayed.                                                                            |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (3)      | BR60    | **Querying Rules:** System queries order details from "ORDERS" and "ORDER_ITEMS" tables (Refer to "orders" and "order_items" tables in "DB Sheet" file). order \= orderService.GetOrder(params) params can include: orderID System also retrieves order timeline, shipping information, and payment details.                                                                                      |
| (4)      | BR61    | **Displaying Rules:** The system displays "Order Detail" view showing: order header (order number, date, status), product list (each with image, name, quantity, price, review button if delivered), order summary (total, shipping), address, payment provider, and available actions (Cancel Order, Return Product, Contact Support). (Refer to "Order Detail" view in "View Description" file) |

##### 2.1.4.4 Cancel Order {#2.1.4.4-cancel-order}

###### _Use Case Description_

| Name               | Cancel Order                                                                                                                                  |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to cancel a pending order.                                                                                     |
| **Actor**          | Customer                                                                                                                                      |
| **Trigger**        | When the customer clicks "Cancel Order" button in order detail view.                                                                          |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. Order must be in cancellable status (Pending or Processing). |
| **Post-condition** | Order is cancelled and status is updated.                                                                                                     |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (2)          | BR62    | **Displaying Rules:** The system displays a confirmation dialog asking customer to confirm order cancellation with message: "Are you sure you want to cancel this order? This action cannot be undone." (Refer to "Confirmation Dialog" view in "View Description" file)                                                                                                                                                                                                                                                                    |
| (2.1), (2.2) | BR63    | **Selection Rules:** Customer must confirm cancellation. If customer clicks "Cancel" button, dialog closes and use case ends. If customer clicks "Confirm" button, system proceeds with cancellation.                                                                                                                                                                                                                                                                                                                                       |
| (4)          | BR64    | **Validation Rules:** System validates order can be cancelled by checking: \- Order status must be "Pending" or "Processing" \- Order must not have been shipped \- Order must belong to the customer if isValid(order): orderService.Cancel(order) else: throw error If validation fails, system displays error message (Refer to MSG 27). Otherwise, system updates order status to "Cancelled" in "ORDERS" table, restores product inventory, processes refund if payment was made, and displays success notification (Refer to MSG 28). |

##### 2.1.4.5 Return Product {#2.1.4.5-return-product}

###### _Use Case Description_

| Name               | Return Product                                                                                                                                  |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to return a product from a completed order.                                                                      |
| **Actor**          | Customer                                                                                                                                        |
| **Trigger**        | When the customer clicks "Return" button for a product in order detail view.                                                                    |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. Order must be delivered. Product must be within return period. |
| **Post-condition** | Return request is created and product status is updated.                                                                                        |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :----------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)          | BR65    | **Displaying Rules:** The system displays a confirmation dialog asking customer to confirm product return with message: "Do you want to return this product? Please ensure the product is in original condition with all accessories." Also displays return policy summary and estimated refund amount. (Refer to "Confirmation Dialog" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                          |
| (2.1), (2.2) | BR66    | **Selection Rules:** Customer must confirm return. If customer clicks "Cancel" button, dialog closes and use case ends. If customer clicks "Confirm" button, system proceeds with return request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| (4)          | BR67    | **Validation Rules:** System validates product can be returned by checking: \- Order status must be "Delivered" \- Product must be within return period (typically 30 days from delivery) \- Product must not be marked as non-returnable \- Product must not have been previously returned if isValid(orderItem): orderService.Return(orderItem) else: throw error If validation fails, system displays error message (Refer to MSG 29). Otherwise, system creates return request in "RETURN_REQUESTS" table, updates product status to "Return Requested" in "ORDER_ITEMS" table, sends return instructions to customer's email, creates return record in "RETURN_REQUEST" table, and displays success notification with return instructions (Refer to MSG 30). |

##### 2.1.4.6 Review Product {#2.1.4.6-review-product}

###### _Use Case Description_

| Name               | Review Product                                                                                                                                     |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to write a review for a product they have purchased.                                                                |
| **Actor**          | Customer                                                                                                                                           |
| **Trigger**        | When the customer clicks "Write Review" button for a delivered product.                                                                            |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. Order must be delivered. Product must not have been reviewed yet. |
| **Post-condition** | Product review is created and stored in the system.                                                                                                |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (2)      | BR68    | **Displaying Rules:** The system displays "Product Review" form with empty fields including: star rating selector (1-5 stars), review text area (max 500 characters), image upload section (optional), and Submit button. (Refer to "Product Review" view in "View Description" file)                                                                                                                                                                                                                                                 |
| (4)      | BR69    | **Validation Rules:** System validates review content in real-time: \- Star rating must be selected (required) \- Review text must not be empty and must be 50-500 characters \- If image is uploaded, it must be \< 2MB and in JPG/PNG format if isRatingValid(rating) && isReviewValid(review) && isImageValid(image): productService.CreateReview(product, review, rating, image) else: throw error If validation fails, system displays error message (Refer to MSG 31).                                                          |
| (7)      | BR70    | **Validation Rules:** When customer clicks "Submit" button, system validates review data: \- Customer must have purchased the product \- Customer must not have reviewed this product before \- All required fields must be filled \- Image (if provided) must be valid If validation fails, system displays error message (Refer to MSG 32). Otherwise, system stores review in "REVIEWS" table, updates product rating statistics, and displays success notification (Refer to MSG 33\) with message "Thank you for your review\!." |

#### 2.1.5 Contact Support Use Case {#2.1.5-contact-support-use-case}

##### 2.1.5.1 Contact Support {#2.1.5.1-contact-support}

###### _Use Case Description_

| Name               | Contact Support                                                                                |
| :----------------- | :--------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to contact customer support through third-party chat interface. |
| **Actor**          | Customer                                                                                       |
| **Trigger**        | When the customer clicks "Contact Support" or "Help" button.                                   |
| **Pre-condition**  | Customer's device must be connected to the internet.                                           |
| **Post-condition** | Customer is redirected to support chat interface.                                              |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                   |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (2)      | BR71    | **Redirect Rules:** The system redirects customer to third-party chat support interface (e.g., Facebook, Email). System passes customer context including: customer ID (if signed in), current page URL, and basic customer information to pre-populate chat. |
| (3)      | BR72    | **Interaction Rules:** Customer interacts with support chat independently. System does not control or monitor chat interactions. Chat history and support tickets are managed by the third-party support system.                                              |

#### 2.1.6 View Customer Self Report Use Case {#2.1.6-view-customer-self-report-use-case}

##### 2.1.6.1 View Customer Self Report {#2.1.6.1-view-customer-self-report}

###### _Use Case Description_

| Name               | View Customer Self Report                                                        |
| :----------------- | :------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view their own activity and purchase reports.  |
| **Actor**          | Customer                                                                         |
| **Trigger**        | When the customer navigates to "My Reports" or "My Statistics" section.          |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. |
| **Post-condition** | Customer activity report is displayed.                                           |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                          |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR73    | **Displaying Rules:** The system displays "Customer Report" view with empty report charts and filter options. Available report types include: Purchase History, Spending Analysis, Order Statistics, Product Categories. Time range options include: Last 7 days, Last 30 days, Last 3 months, Last year, Custom range. (Refer to "Customer Report" view in "View Description" file) |
| (4)      | BR74    | **Querying Rules:** When customer selects report type and time range, system queries data from "ORDERS", "ORDER_ITEMS", and "CUSTOMER_REPORT" tables (Refer to corresponding tables in "DB Sheet" file) using SQL based on selected options. System calculates statistics including: total orders, total spending, average order value, most purchased categories, spending trends.  |
| (6)      | BR75    | **Displaying Rules:** System displays report data in visual format using charts and graphs: \- Bar chart for spending by time period \- Pie chart for spending by category \- Line chart for order trends \- Table for top purchased products System also displays summary statistics cards showing key metrics.                                                                     |

#### 2.1.7 View Document Use Case {#2.1.7-view-document-use-case}

##### 2.1.7.1 View Document {#2.1.7.1-view-document}

###### _Use Case Description_

| Name               | View Document                                                                |
| :----------------- | :--------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view system documents and guides.          |
| **Actor**          | Customer                                                                     |
| **Trigger**        | When the customer navigates to "Help Center", "FAQ", or "Documents" section. |
| **Pre-condition**  | Customer's device must be connected to the internet.                         |
| **Post-condition** | Document list and selected document content are displayed.                   |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (2)      | BR76    | **Querying Rules:** System queries documents from "DOCUMENT" table (Refer to "Document" table in "DB Sheet" file) using SQL: "SELECT \* FROM Document WHERE status \= 'published' AND target_audience LIKE '%customer%' ORDER BY category, title". Documents are organized by categories: Getting Started, Shopping Guide, Payment & Shipping, Returns & Refunds, Account Management, Terms & Policies. |
| (3)      | BR77    | **Displaying Rules:** The system displays "Document Management" view showing: document categories in sidebar, document list with title and brief description, search box for filtering documents. (Refer to "Document Management" view in "View Description" file)                                                                                                                                      |
| (3.3)    | BR78    | **Searching Rules:** If customer enters search criteria, system queries documents using SQL: "SELECT \* FROM Document WHERE status \= 'published' AND (title LIKE '%keyword%' OR content LIKE '%keyword%') ORDER BY relevance DESC". Search results display with highlighted keywords.                                                                                                                  |
| (7)      | BR79    | **Displaying Rules:** When customer selects a document, system displays "Document Detail" view showing: document title, last updated date, full document content (formatted with headings, lists, images), related documents section, "Was this helpful?" feedback buttons. (Refer to "Document Detail" view in "View Description" file)                                                                |

#### 2.1.8 Manage Product Use Case (Staff) {#2.1.8-manage-product-use-case-(staff)}

##### 2.1.8.1 Manage Product {#2.1.8.1-manage-product}

###### _Use Case Description_

| Name               | Manage Product                                                                                   |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to manage products in the system.                                     |
| **Actor**          | Staff                                                                                            |
| **Trigger**        | When the staff navigates to "Product Management" section.                                        |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | Staff can view product list and choose product management functions.                             |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                             |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (1)      | BR80    | **Querying Rules:** System queries all products from "PRODUCTS" table (Refer to "Products" table in "DB Sheet" file). products \= productService.ListProducts(params) param can include: ProductID, productName System retrieves: product ID, name, category, price, stock quantity, status, and last modified date.                                    |
| (2)      | BR81    | **Displaying Rules:** The system displays "Product Management" view showing: product list in table format with pagination (20 products per page), filter options (category, status, stock level), search box, "Add Product" button, and action buttons (Edit, Delete) for each product. (Refer to "Product Management" view in "View Description" file) |
| (3)      | BR82    | **Choosing Rules:** Staff can choose from available product management functions: Add Product, Delete Product, Delete Review, Search Product, or Update Product. Only one operation can be performed at a time.                                                                                                                                         |

##### 2.1.8.2 Add Product {#2.1.8.2-add-product}

###### _Use Case Description_

| Name               | Add Product                                                                                      |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to add a new product to the system.                                   |
| **Actor**          | Staff                                                                                            |
| **Trigger**        | When the staff clicks "Add Product" button.                                                      |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | New product is created and stored in the system.                                                 |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR83    | **Displaying Rules:** The system displays "Product Detail" form with empty fields including: product name, category dropdown, description editor, price, stock quantity, SKU, brand, specifications table, product images uploader, deleted selector (“exclude”,”only”, “all”), attribute selector and attribute values selector (can create new value in place), Option creation section, creating Variant Section, and Save button. (Refer to "Product Detail" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| (3)      | BR84    | **Validation Rules:** System validates product data in real-time: \- Product name: required, 3-200 characters \- Category: required, must select from predefined categories \- Description: required, minimum 10 characters \- Price: required, must be positive number, maximum 10 digits \- Stock quantity: required, must be non-negative integer \- SKU: required, unique, alphanumeric, 5-30 characters \- Product images: at least 1 required, each \< 5MB, JPG/PNG format \- Options: If product has variants, there must be options with values, and variant must be formed by those option values. A variant cannot be formed by matrix of the same option’s values. Each variant cannot be formed by the same matrix option values. If product doesn’t have variants, it must have one variant (no option and option value) \- Attribute: Can be omitted, or multiple selected If validation fails, system displays error message (Refer to MSG 34). |
| (5)      | BR85    | **Validation Rules:** When staff clicks "Save" button, system validates product data: \- Check if SKU is unique in "PRODUCTS" table \- Validate all required fields are filled \- Validate images are valid and uploaded successfully If validation fails, system displays error message (Refer to MSG 35). Otherwise, system stores product data in "PRODUCTS" table, stores product images in "PRODUCT_IMAGES" table, and displays success notification (Refer to MSG 36). System then closes the form and refreshes product list.                                                                                                                                                                                                                                                                                                                                                                                                                           |

##### 2.1.8.3 Update Product {#2.1.8.3-update-product}

###### _Use Case Description_

| Name               | Update Product                                                                                                                     |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to update existing product information.                                                                 |
| **Actor**          | Staff                                                                                                                              |
| **Trigger**        | When the staff clicks "Edit" button for a product.                                                                                 |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. Product must exist in the system. |
| **Post-condition** | Product information is updated in the system.                                                                                      |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR86    | **Querying Rules:** System queries product details from "PRODUCTS", "PRODUCT_IMAGES" tables                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| (4)      | BR87    | **Displaying Rules:** The system displays "Product Detail" form filled with current product data including: product relate fields (name, description, images, attributes, options, variants), and Save button. (Refer to "Product Detail" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| (6)      | BR88    | **Validation Rules:** System validates updated product data in real-time using same validation rules as Add Product (BR2 from 2.1.8.2). If validation fails, system displays error message (Refer to MSG 34).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| (8)      | BR89    | **Validation Rules:** When staff clicks "Save" button, system validates updated data: \- Validate all required fields are filled and valid \- Validate new images (if uploaded) are valid \- At least 1 product image must remain \- Option and values can only be updated (name), no create or delete \- Variants can be deleted or created or updated \- Attribute value can be added or removed If validation fails, system displays error message (Refer to MSG 35). Otherwise, system updates product data in "PRODUCTS" table, adds/deletes product images in "PRODUCT_IMAGES" “PRODUCT_VARIANTS”, “OPTIONS”, “OPTION_VALUES” and other related tables (the composition tables,...) as needed, updates modified timestamp, and displays success notification (Refer to MSG 37). System then closes the form and refreshes product list. |

##### 2.1.8.4 Delete Product {#2.1.8.4-delete-product}

###### _Use Case Description_

| Name               | Delete Product                                                                                                                     |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to delete a product from the system.                                                                    |
| **Actor**          | Staff                                                                                                                              |
| **Trigger**        | When the staff clicks "Delete" button for a product.                                                                               |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. Product must exist in the system. |
| **Post-condition** | Product is deleted from the system.                                                                                                |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :----------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)          | BR90    | **Displaying Rules:** The system displays a confirmation dialog asking staff to confirm product deletion with message: "Are you sure you want to delete this product? This action cannot be undone. All product data including reviews will be removed." (Refer to "Confirmation Dialog" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| (2.1), (2.2) | BR91    | **Selection Rules:** Staff must confirm deletion. If staff clicks "Cancel" button, dialog closes and use case ends. If staff clicks "Confirm" button, system proceeds with deletion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| (4)          | BR92    | **Validation Rules:** System validates product can be deleted by checking: \- Product must not have pending orders if orderService.IsPending(OrderItem): productService.Delete(product) else throw error The Delete method will soft delete the product, product variant, product options and product option values, product images. The attribute values linked with the product will not be affected. If validation fails, system displays error message (Refer to MSG 38). Otherwise, system performs soft delete by updating status to "Deleted" in "PRODUCTS" table (keeping data for audit purposes), removes product from search index, archives product images, archives product reviews, and displays success notification (Refer to MSG 39). System then refreshes product list. |

##### 2.1.8.5 Search Product {#2.1.8.5-search-product}

###### _Use Case Description_

| Name               | Search Product (Staff)                                                                           |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to search for products in the product management system.              |
| **Actor**          | Staff                                                                                            |
| **Trigger**        | When the staff enters search criteria in the search box.                                         |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | Filtered product results are displayed.                                                          |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                            |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR93    | **Searching Rules:** When staff enters search criteria, system uses Text_change() method with debounce delay of 300ms. System queries "PRODUCTS" table (Refer to "Products" table in "DB Sheet" file). products \= productService.ListProducts(params) Params can include: keyword, categories, availability. System uses Redis cache to store and retrieve search results for popular queries to improve performance. |
| (4)      | BR94    | **Displaying Rules:** System displays "Product Management" view with filtered results showing matching products. Active filters are displayed as removable tags above the product table. Result count is displayed. If no results found, displays "No products found" message with "Clear Search" option.                                                                                                              |

##### 2.1.8.6 Delete Review {#2.1.8.6-delete-review}

###### _Use Case Description_

| Name               | Delete Review                                                                                                                     |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to delete inappropriate product reviews.                                                               |
| **Actor**          | Staff                                                                                                                             |
| **Trigger**        | When the staff clicks "Delete" button for a review in product review management section.                                          |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. Review must exist in the system. |
| **Post-condition** | Review is deleted from the system.                                                                                                |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)          | BR95    | **Displaying Rules:** The system displays a confirmation dialog asking staff to confirm review deletion with message: "Are you sure you want to delete this review? This action cannot be undone." Dialog also shows review content preview. (Refer to "Confirmation Dialog" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                               |
| (2.1), (2.2) | BR96    | **Selection Rules:** Staff must confirm deletion. If staff clicks "Cancel" button, dialog closes and use case ends. If staff clicks "Confirm" button, system proceeds with deletion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| (4)          | BR97    | **Validation Rules:** System validates review exists in "REVIEWS" table (Refer to "Reviews" table in "DB Sheet" file) review \= reviewService.GetReview(ReviewID) if review \== null: throw error reviewService.Delete(review) If review not found, system displays error message (Refer to MSG 40). Otherwise, system deletes review from "REVIEWS" table, deletes associated review images from "REVIEW_IMAGE" table, updates product rating statistics (recalculates average rating without deleted review), sends notification to review author about deletion (if applicable), and displays success notification (Refer to MSG 41). System then refreshes review list. |

#### 2.1.9 Manage User Use Case {#2.1.9-manage-user-use-case}

##### 2.1.9.1 Manage User {#2.1.9.1-manage-user}

###### _Use Case Description_

| Name               | Manage User                                                                                            |
| :----------------- | :----------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff and admin to manage user accounts in the system.                            |
| **Actor**          | Staff, Admin                                                                                           |
| **Trigger**        | When the staff/admin navigates to "User Management" section.                                           |
| **Pre-condition**  | Actor's device must be connected to the internet. Actor must be signed in with appropriate privileges. |
| **Post-condition** | Actor can view user list and choose user management functions.                                         |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                             |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR98    | **Querying Rules:** System queries users from auth service persistent storage. System retrieves: user ID, name, email, role, status, registration date.                                                                                                                                                                 |
| (2)      | BR99    | **Displaying Rules:** The system displays "User Management" view showing: user list in table format with pagination (20 users per page), filter options (role, status, registration date), search box, and available action buttons based on actor's role. (Refer to "User Management" view in "View Description" file) |
| (3)      | BR100   | **Choosing Rules:** Actor can choose from available user management functions based on their role: \- Staff: Search User, View Customer Report \- Admin: All functions including Change User Roles, Delete User, Search User, View Customer Report, View Staff Report                                                   |

##### 2.1.9.2 Search User {#2.1.9.2-search-user}

###### _Use Case Description_

| Name               | Search User                                                                                            |
| :----------------- | :----------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff and admin to search for users in the system.                                |
| **Actor**          | Staff, Admin                                                                                           |
| **Trigger**        | When the actor enters search criteria in the user search box.                                          |
| **Pre-condition**  | Actor's device must be connected to the internet. Actor must be signed in with appropriate privileges. |
| **Post-condition** | Filtered user results are displayed.                                                                   |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR101   | **Searching Rules:** When actor enters search criteria, system uses Text_change() method with debounce delay of 300ms. System queries users from auth service persistent storage base on actor roles. \- Staff searches customers only \- Admin searches all users Filters can include: role, status (Active/Inactive/Suspended), registration date range. |
| (4)      | BR102   | **Displaying Rules:** System displays "User Management" view with filtered results showing matching users. Active filters are displayed as removable tags. Result count is displayed. If no results found, displays "No users found" message with "Clear Search" option.                                                                                   |

##### 2.1.9.3 Change User Roles (Admin only) {#2.1.9.3-change-user-roles-(admin-only)}

###### _Use Case Description_

| Name               | Change User Roles                                                                                                               |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| **Description**    | This use case allows admin to change a user's role in the system.                                                               |
| **Actor**          | Admin                                                                                                                           |
| **Trigger**        | When the admin clicks "Change Role" button for a user.                                                                          |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. User must exist in the system. |
| **Post-condition** | User's role is updated in the system.                                                                                           |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR103   | **Querying Rules:** System queries user details from auth service persistent storage. System retrieves current role and associated permissions.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| (4)      | BR104   | **Displaying Rules:** The system displays "User Detail" view showing: current user information, current role badge, role selector dropdown (Customer, Staff, Admin), role descriptions, and "Change Roles" button. (Refer to "User Detail" view in "View Description" file)                                                                                                                                                                                                                                                                                     |
| (6)      | BR105   | **Validation Rules:** System validates role change in real-time: \- New role must be different from current role \- New role must be one of: Customer, Staff, Admin \- Admin cannot change their own role to prevent lockout If validation fails, system displays error message (Refer to MSG 42).                                                                                                                                                                                                                                                              |
| (8)      | BR106   | **Validation Rules:** When admin clicks "Change Roles" button, system validates: \- User is not the current admin (self) \- New role is valid \- No pending administrative actions by user (if demoting from Staff/Admin) If validation fails, system displays error message (Refer to MSG 43). Otherwise, system updates role in auth service persistent storage, update the user session (invalidate current session, force user to get new session via refresh token), and displays success notification (Refer to MSG 44). System then refreshes user list. |

##### 2.1.9.4 Delete User (Admin only) {#2.1.9.4-delete-user-(admin-only)}

###### _Use Case Description_

| Name               | Delete User                                                                                                                     |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| **Description**    | This use case allows admin to delete a user account from the system.                                                            |
| **Actor**          | Admin                                                                                                                           |
| **Trigger**        | When the admin clicks "Delete" button for a user.                                                                               |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. User must exist in the system. |
| **Post-condition** | User account is deleted from the system.                                                                                        |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :----------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)          | BR107   | **Displaying Rules:** The system displays a confirmation dialog asking admin to confirm user deletion with message: "Are you sure you want to delete this user account? This action cannot be undone. All user data will be removed." Dialog shows user's name and email for confirmation. (Refer to "Confirmation Dialog" view in "View Description" file)                                                                                                                                |
| (2.1), (2.2) | BR108   | **Selection Rules:** Admin must confirm deletion. If admin clicks "Cancel" button, dialog closes and use case ends. If admin clicks "Confirm" button, system proceeds with deletion.                                                                                                                                                                                                                                                                                                       |
| (4)          | BR109   | **Validation Rules:** System validates user can be deleted by checking: \- User is not the current admin (self) \- User must not have pending orders (orders must be completed or cancelled) \- User must not have active disputes or support tickets If validation fails, system displays error message (Refer to MSG 45). Otherwise, system will delete user data (from auth service) permanently, and displays success notification (Refer to MSG 46). System then refreshes user list. |

##### 2.1.9.5 View Customer Report {#2.1.9.5-view-customer-report}

###### _Use Case Description_

| Name               | View Customer Report                                                                                                                      |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff and admin to view customer activity and purchase reports.                                                      |
| **Actor**          | Staff, Admin                                                                                                                              |
| **Trigger**        | When the actor clicks "View Report" button for a customer.                                                                                |
| **Pre-condition**  | Actor's device must be connected to the internet. Actor must be signed in with appropriate privileges. Customer must exist in the system. |
| **Post-condition** | Customer activity report is displayed.                                                                                                    |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR110   | **Displaying Rules:** The system displays "Customer Report" view with empty report charts and filter options. Available report types include: Purchase History, Spending Analysis, Order Statistics, Product Preferences, Account Activity. Time range options include: Last 7 days, Last 30 days, Last 3 months, Last year, Custom range. (Refer to "Customer Report" view in "View Description" file)                                                                                                                          |
| (4)      | BR111   | **Querying Rules:** When actor selects customer, report type, and time range, system queries data from "ORDERS", "ORDER_ITEMS", and "CUSTOMER_REPORT" tables (Refer to corresponding tables in "DB Sheet" file) using SQL based on selected options: "SELECT \* FROM orders WHERE customerID \= \[Customer.ID\] AND DATE(created_date) BETWEEN \[start_date\] AND \[end_date\]". System calculates: total orders, total spending, average order value, order frequency, most purchased categories, spending trends, return rate. |
| (6)      | BR112   | **Displaying Rules:** System displays report data in visual format using charts and graphs: \- Bar chart for spending by time period \- Pie chart for spending by category \- Line chart for order trends over time \- Table for top purchased products \- Summary statistics cards showing key metrics \- Customer lifetime value (CLV) indicator Report can be exported to PDF or Excel format.                                                                                                                                |

##### 2.1.9.6 View Staff Report (Admin only) {#2.1.9.6-view-staff-report-(admin-only)}

###### _Use Case Description_

| Name               | View Staff Report                                                                                                                       |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to view staff performance and activity reports.                                                              |
| **Actor**          | Admin                                                                                                                                   |
| **Trigger**        | When the admin clicks "View Report" button for a staff member.                                                                          |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. Staff member must exist in the system. |
| **Post-condition** | Staff performance report is displayed.                                                                                                  |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR113   | **Displaying Rules:** The system displays "Staff Report" view with empty report charts and filter options. Available report types include: Product Management Activity, User Management Activity, Review Moderation Activity, Order Processing Activity, Overall Performance. Time range options include: Last 7 days, Last 30 days, Last 3 months, Last year, Custom range. (Refer to "Staff Report" view in "View Description" file)                                                                                                                   |
| (4)      | BR114   | **Querying Rules:** When admin selects staff, report type, and time range, system queries data from "STAFF_ACTIVITY", "PRODUCTS", "REVIEWS", "USER_AUDIT" tables (Refer to corresponding tables in "DB Sheet" file) using SQL based on selected options: "SELECT \* FROM StaffActivity WHERE staffID \= \[Staff.ID\] AND DATE(activity_date) BETWEEN \[start_date\] AND \[end_date\]". System calculates: total products added/updated, total reviews moderated, total users managed, average response time, activity distribution, performance metrics. |
| (6)      | BR115   | **Displaying Rules:** System displays report data in visual format: \- Bar chart for activities by type \- Line chart for activity trends over time \- Pie chart for time distribution by activity type \- Table for detailed activity log \- Summary statistics cards showing key performance indicators Report can be exported to PDF or Excel format for performance reviews.                                                                                                                                                                         |

#### 2.1.10 View Shop Report Use Case {#2.1.10-view-shop-report-use-case}

##### 2.1.10.1 View Shop Report {#2.1.10.1-view-shop-report}

###### _Use Case Description_

| Name               | View Shop Report                                                                                 |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to view overall shop performance and analytics reports.               |
| **Actor**          | Admin                                                                                            |
| **Trigger**        | When the admin navigates to "Shop Reports" or "Analytics" section.                               |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | Shop performance report is displayed with selected metrics.                                      |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR116   | **Displaying Rules:** The system displays "Shop Report" view with empty report charts and filter options. Available report types include: Sales Overview, Revenue Analysis, Product Performance, Customer Analytics, Inventory Status, Order Statistics. Time range options include: Today, Yesterday, Last 7 days, Last 30 days, Last 3 months, Last year, Custom range. (Refer to "Shop Report" view in "View Description" file)                                                                                                                                                                                                                                      |
| (4)      | BR117   | **Querying Rules:** When admin selects report type and time range, system queries aggregated data from multiple tables including "ORDERS", "PRODUCTS", "USER", "ORDER_ITEMS" (Refer to corresponding tables in "DB Sheet" file). System calculates comprehensive metrics: \- Total revenue and revenue trends \- Total orders and order status distribution \- Average order value \- Best-selling products \- Low stock alerts \- Customer acquisition and retention rates \- Return rate and return reasons \- Category performance \- Peak sales hours/days \- Conversion rate                                                                                       |
| (6)      | BR118   | **Displaying Rules:** System displays comprehensive shop report with multiple visualization components: \- Dashboard overview with key metrics cards (revenue, orders, customers, conversion rate) \- Line chart for revenue/sales trends \- Bar chart for top-selling products \- Pie chart for order status distribution \- Pie chart for revenue by category \- Table for product performance ranking \- Table for inventory alerts \- Heat map for sales by time period \- Comparison metrics vs. previous period Report supports drill-down functionality to view detailed data. Reports can be exported to PDF, Excel, or scheduled for automatic email delivery. |

#### 2.1.11 View System Monitoring Use Case {#2.1.11-view-system-monitoring-use-case}

##### 2.1.11.1 View System Monitoring {#2.1.11.1-view-system-monitoring}

###### _Use Case Description_

| Name               | View System Monitoring                                                                           |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to monitor system performance, health, and usage statistics, log.     |
| **Actor**          | Admin                                                                                            |
| **Trigger**        | When the admin navigates to "System Monitoring" or "System Health" section.                      |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | System monitoring dashboard is displayed with real-time metrics.                                 |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (2)      | BR119   | **Querying Rules:** Monitoring system queries for metric, log from (metric and log storage). System collects real-time metrics, log: \- System uptime and availability percentage \- Server response time (average, min, max) \- API endpoint performance \- Database query performance \- Active user sessions \- Memory and CPU usage \- Disk space usage \- Error rate and error logs \- Request rate (requests per second) \- Cache hit rate                                                                                                                                                                                                                                                                                                                                |
| (4)      | BR120   | **Displaying Rules:** System displays "System Monitoring" dashboard with real-time visualizations: \- Status indicator (Healthy/Warning/Critical) at the top \- Real-time metrics cards showing: uptime percentage (target: 99.5%), average response time, active sessions, error rate \- Line chart for response time trends (last 24 hours) \- Line chart for memory/CPU usage over time \- Bar chart for API endpoint performance \- Table for recent error logs with severity levels \- Table for slow database queries \- System resource gauge charts (memory, CPU, disk) \- Alert notifications for threshold breaches Dashboard auto-refreshes every 30 seconds. Historical data can be viewed for up to 30 days. Critical alerts trigger email notifications to admin. |

#### 2.1.12 Adjust Document Use Case {#2.1.12-adjust-document-use-case}

##### 2.1.12.1 Adjust Document {#2.1.12.1-adjust-document}

###### _Use Case Description_

| Name               | Adjust Document                                                                                  |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to manage system documents and guides.                                |
| **Actor**          | Admin                                                                                            |
| **Trigger**        | When the admin navigates to "Document Management" section.                                       |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | Admin can view document list and choose document management functions.                           |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                         |
| :------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR121   | **Querying Rules:** System queries all documents from "DOCUMENT" table (Refer to "Document" table in "DB Sheet" file) using SQL: "SELECT \* FROM Document ORDER BY category, title ASC". System retrieves: document ID, title, category, status (Draft/Published), target audience, last modified date, and author.                                                                                 |
| (2)      | BR122   | **Displaying Rules:** The system displays "Document Management" view showing: document list organized by category in table format with pagination (20 documents per page), filter options (category, status, target audience), search box, "Create Document" button, and action buttons (Edit, Delete, Preview) for each document. (Refer to "Document Management" view in "View Description" file) |
| (3)      | BR123   | **Choosing Rules:** Admin can choose from available document management functions: Create Document, Delete Document, Search Document, or Update Document. Only one operation can be performed at a time.                                                                                                                                                                                            |

##### 2.1.12.2 Create Document {#2.1.12.2-create-document}

###### _Use Case Description_

| Name               | Create Document                                                                                  |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to create a new system document.                                      |
| **Actor**          | Admin                                                                                            |
| **Trigger**        | When the admin clicks "Create Document" button.                                                  |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | New document is created and stored in the system.                                                |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR124   | **Displaying Rules:** The system displays "Document Detail" form with empty fields including: document title, category dropdown (Getting Started, Shopping Guide, Payment & Shipping, Returns & Refunds, Account Management, Terms & Policies), rich text content editor with formatting toolbar, target audience multi-select (Customer, Staff, Admin), status selector (Draft/Published), meta description (for SEO), and Save button. (Refer to "Document Detail" view in "View Description" file)                                                                                                                                                                                |
| (3)      | BR125   | **Validation Rules:** System validates document data in real-time: \- Title: required, 5-200 characters \- Category: required, must select from predefined categories \- Content: required, minimum 100 characters \- Target audience: at least one must be selected \- Meta description: optional, maximum 300 characters If validation fails, system displays error message (Refer to MSG 47).                                                                                                                                                                                                                                                                                     |
| (5)      | BR126   | **Validation Rules:** When admin clicks "Save" button, system validates document data: \- All required fields are filled \- Title is not duplicate within same category \- Content is properly formatted and valid HTML If validation fails, system displays error message (Refer to MSG 48). Otherwise, system stores document in "DOCUMENT" table with: created date, last modified date, author (current admin ID), generates document slug for URL, creates document version in "DOCUMENT_VERSION" table for version control, indexes document content for search, and displays success notification (Refer to MSG 49). System then closes the form and refreshes document list. |

##### 2.1.12.3 Update Document {#2.1.12.3-update-document}

###### _Use Case Description_

| Name               | Update Document                                                                                                                     |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to update existing document content and settings.                                                        |
| **Actor**          | Admin                                                                                                                               |
| **Trigger**        | When the admin clicks "Edit" button for a document.                                                                                 |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. Document must exist in the system. |
| **Post-condition** | Document information is updated in the system.                                                                                      |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR127   | **Querying Rules:** System queries document details from "DOCUMENT" table (Refer to "Document" table in "DB Sheet" file) using SQL: "SELECT \* FROM Document WHERE documentID \= \[Document.ID\]". System also retrieves document version history from "DOCUMENT_VERSION" table.                                                                                                                                                                                                                                                                                                                                                                                                          |
| (4)      | BR128   | **Displaying Rules:** The system displays "Document Detail" form filled with current document data including: all document fields, version history section showing previous versions with rollback option, and Save button. (Refer to "Document Detail" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                                  |
| (6)      | BR129   | **Validation Rules:** System validates updated document data in real-time using same validation rules as Create Document (BR2 from 2.1.12.2). If validation fails, system displays error message (Refer to MSG 47).                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| (8)      | BR130   | **Validation Rules:** When admin clicks "Save" button, system validates updated data: \- All required fields are filled \- Title is not duplicate (excluding current document) within same category \- Content is properly formatted If validation fails, system displays error message (Refer to MSG 48). Otherwise, system updates document in "DOCUMENT" table, updates last modified date and modified by field, creates new version entry in "DOCUMENT_VERSION" table with change log, updates document slug if title changed, re-indexes document content for search, and displays success notification (Refer to MSG 50). System then closes the form and refreshes document list. |

##### 2.1.12.4 Delete Document {#2.1.12.4-delete-document}

###### _Use Case Description_

| Name               | Delete Document                                                                                                                     |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to delete a document from the system.                                                                    |
| **Actor**          | Admin                                                                                                                               |
| **Trigger**        | When the admin clicks "Delete" button for a document.                                                                               |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. Document must exist in the system. |
| **Post-condition** | Document is deleted from the system.                                                                                                |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)          | BR131   | **Displaying Rules:** The system displays a confirmation dialog asking admin to confirm document deletion with message: "Are you sure you want to delete this document? This action cannot be undone." Dialog shows document title for confirmation. (Refer to "Confirmation Dialog" view in "View Description" file)                                                                                                                                                                                                                                                                                    |
| (2.1), (2.2) | BR132   | **Selection Rules:** Admin must confirm deletion. If admin clicks "Cancel" button, dialog closes and use case ends. If admin clicks "Confirm" button, system proceeds with deletion.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| (4)          | BR133   | **Validation Rules:** System validates document exists in "DOCUMENT" table (Refer to "Document" table in "DB Sheet" file). If document not found, system displays error message (Refer to MSG 51). Otherwise, system performs soft delete by updating status to "Deleted" in "DOCUMENT" table (keeping data for audit purposes), removes document from search index, archives document versions in "DOCUMENT_VERSION" table, creates deletion audit log in "DOCUMENT_AUDIT" table with admin ID and timestamp, and displays success notification (Refer to MSG 52). System then refreshes document list. |

##### 2.1.12.5 Search Document {#2.1.12.5-search-document}

###### _Use Case Description_

| Name               | Search Document (Admin)                                                                          |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to search for documents in the document management system.            |
| **Actor**          | Admin                                                                                            |
| **Trigger**        | When the admin enters search criteria in the document search box.                                |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | Filtered document results are displayed.                                                         |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR134   | **Searching Rules:** When admin enters search criteria, system uses Text_change() method with debounce delay of 300ms. System queries "DOCUMENT" table (Refer to "Document" table in "DB Sheet" file) using SQL: "SELECT \* FROM Document WHERE status \!= 'Deleted' AND (title LIKE '%keyword%' OR content LIKE '%keyword%' OR category LIKE '%keyword%') ORDER BY title ASC". Filters can include: category, status (Draft/Published), target audience (Customer/Staff/Admin), last modified date range. |
| (4)      | BR135   | **Displaying Rules:** System displays "Document Management" view with filtered results showing matching documents. Active filters are displayed as removable tags. Result count is displayed. If no results found, displays "No documents found" message with "Clear Search" option. Search results highlight matched keywords in title and content preview.                                                                                                                                               |

#### 2.1.13 View Staff Self Report Use Case {#2.1.13-view-staff-self-report-use-case}

##### 2.1.13.1 View Staff Self Report {#2.1.13.1-view-staff-self-report}

###### _Use Case Description_

| Name               | View Staff Self Report                                                                           |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to view their own performance and activity reports.                   |
| **Actor**          | Staff                                                                                            |
| **Trigger**        | When the staff navigates to "My Performance" or "My Reports" section.                            |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | Staff performance report is displayed.                                                           |

###### _Sequence Flow_

###### _Activities Flow_

###### _Business Rules_

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (1)      | BR136   | **Displaying Rules:** The system displays "Staff Self Report" view with empty report charts and filter options. Available report types include: My Product Management Activity, My User Management Activity, My Review Moderation Activity, Overall My Performance. Time range options include: Today, Last 7 days, Last 30 days, Last 3 months, This year. (Refer to "Staff Self Report" view in "View Description" file)                                                                                                                  |
| (4)      | BR137   | **Querying Rules:** When staff selects report type and time range, system queries data from "STAFF_ACTIVITY" table (Refer to "StaffActivity" table in "DB Sheet" file) filtered by current staff ID using SQL: "SELECT \* FROM StaffActivity WHERE staffID \= \[CurrentStaff.ID\] AND DATE(activity_date) BETWEEN \[start_date\] AND \[end_date\]". System calculates: total products added/updated, total reviews moderated, total users managed, activity distribution, daily averages.                                                   |
| (6)      | BR138   | **Displaying Rules:** System displays staff self report with visualizations: \- Summary cards showing: total activities, products managed, reviews moderated, users helped \- Line chart showing activity trends over selected period \- Bar chart showing activity distribution by type \- Calendar heat map showing daily activity intensity \- Table listing recent activities with timestamps \- Performance comparison vs. team average (if available) Report helps staff track their own productivity and identify improvement areas. |

### 2.2 List Description {#2.2-list-description}

The Electricilies system utilizes the following main data lists and tables:

| \#  | List Code | List Name             | Description                                                                                                                                                                                               |
| :-- | :-------- | :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | List01    | User                  | This list contains all user accounts in the system including customers, staff, and admins. Information includes user ID, name, email, password hash, role, status, registration date, and last login.     |
| 2   | List02    | Account               | This list stores authentication credentials and account linking information. It includes account ID, user ID, username, password hash, third-party provider links, account status, and security settings. |
| 3   | List03    | Product               | This list holds all product information including product ID, name, description, category, price, stock quantity, SKU, brand, status, created date, and modified date.                                    |
| 4   | List04    | Product Image         | This list stores product images with image ID, product ID, image URL, image order, and upload date. Each product can have multiple images.                                                                |
| 5   | List05    | Product Specification | This list contains product specifications with specification ID, product ID, specification name, and specification value.                                                                                 |
| 6   | List06    | Cart                  | This list manages shopping cart items with cart ID, customer ID, product ID, quantity, added date, and cart session ID.                                                                                   |
| 7   | List07    | Order                 | This list stores order information including order ID, customer ID, order date, order status, total amount, shipping address, billing address, payment method, and tracking number.                       |
| 8   | List08    | Order Item            | This list contains individual items in each order with order item ID, order ID, product ID, quantity, unit price, and subtotal.                                                                           |
| 9   | List09    | Review                | This list holds product reviews with review ID, product ID, customer ID, rating (1-5), review content, and created date.                                                                                  |
| 10  | List10    | Review Image          | This list stores review images with image ID, review ID, image URL, and upload date.                                                                                                                      |
| 11  | List11    | Document              | This list contains system documents and guides with document ID, title, category, content, target audience, status, created date, last modified date, and author ID.                                      |
| 12  | List12    | Document Version      | This list tracks document version history with version ID, document ID, version number, content snapshot, change log, and version date.                                                                   |
| 13  | List13    | Staff Activity        | This list logs staff activities with activity ID, staff ID, activity type, activity description, timestamp, and affected entity.                                                                          |
| 14  | List14    | Customer Report       | This list stores aggregated customer statistics and metrics for reporting purposes.                                                                                                                       |
| 15  | List15    | Staff Report          | This list stores aggregated staff performance statistics and metrics for reporting purposes.                                                                                                              |
| 16  | List16    | Shop Report           | This list stores aggregated shop-wide statistics including sales, revenue, inventory, and customer metrics.                                                                                               |
| 17  | List17    | Monitoring Data       | This list contains system monitoring metrics including uptime, response time, error logs, resource usage, and performance data.                                                                           |
| 18  | List18    | User Audit            | This list tracks user-related administrative actions with audit ID, actor ID, action type, target user ID, timestamp, and change details.                                                                 |
| 19  | List19    | Account Provider      | This list manages third-party authentication provider linkages with provider ID, user ID, provider name, provider user ID, and linked date.                                                               |
| 20  | List20    | Product Return        | This list manages product return requests with return ID, order ID, product ID, customer ID, reason, status, request date, and resolution date.                                                           |
| 21  | List21    | Password Reset Token  | This list stores password reset tokens with token ID, user ID, reset token, expiration time, and used status.                                                                                             |
| 22  | List22    | Order History         | This list tracks order status changes and events with history ID, order ID, status, event type, timestamp, and notes.                                                                                     |
| 23  | List23    | Review Audit          | This list logs review moderation actions with audit ID, review ID, staff ID, action type, reason, and timestamp.                                                                                          |
| 24  | List24    | Document Audit        | This list logs document management actions with audit ID, document ID, admin ID, action type, and timestamp.                                                                                              |
| 25  | List25    | Account Activity      | This list tracks account-related events including login attempts, password changes, and profile updates with activity ID, user ID, activity type, IP address, device info, timestamp, and status.         |

### 2.3 View Description {#2.3-view-description}

The Electricilies system provides the following main views/screens:

| \#  | View Code | View Name              | Description                                                                                                                                                                                        | User Role              |
| :-- | :-------- | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
| 1   | View01    | Sign Up                | Registration form for new customers with fields for username, password, email, full name, and sign-up button.                                                                                      | Guest                  |
| 2   | View02    | Sign In                | Login form with username/email and password fields, sign-in button, forgot password link, and sign-up link.                                                                                        | Guest                  |
| 3   | View03    | Home View              | Main landing page displaying featured products, categories, search bar, navigation menu, cart icon, and user account menu.                                                                         | All                    |
| 4   | View04    | Profile View           | User profile page showing personal information, edit profile button, change password option, account activity link, linked accounts section, and delete account option.                            | Customer, Staff, Admin |
| 5   | View05    | Product List           | Grid or list view of products with product cards showing thumbnail, name, price, rating, and quick actions. Includes pagination and sorting options.                                               | All                    |
| 6   | View06    | Product Search         | Search results page with filters sidebar, search criteria display, product grid, sorting options, and result count.                                                                                | All                    |
| 7   | View07    | Product Detail         | Detailed product page with image gallery, product information, price, availability, quantity selector, add to cart button, specifications table, reviews section, and suggested products carousel. | All                    |
| 8   | View08    | Cart View              | Shopping cart page listing cart items with product details, quantity selectors, remove buttons, cart summary panel, and checkout button.                                                           | Customer               |
| 9   | View09    | Checkout View          | Checkout page with delivery information form, payment method selection, order summary, and place order button.                                                                                     | Customer               |
| 10  | View10    | Order Management       | Order history page listing orders with order cards showing order number, date, status, total, and action buttons. Includes search and filter options.                                              | Customer               |
| 11  | View11    | Order Detail           | Detailed order page showing order timeline, product list, order summary, shipping information, billing information, and available actions.                                                         | Customer               |
| 12  | View12    | Product Review         | Review submission form with star rating selector, review content area, image upload section, and submit button.                                                                                    | Customer               |
| 13  | View13    | Customer Report        | Customer's personal analytics dashboard with charts showing purchase history, spending analysis, and statistics. Includes report type and time range selectors.                                    | Customer               |
| 14  | View14    | Document Management    | Document listing page organized by categories with document cards, search box, and filter options. For customers, read-only view. For admins, includes create/edit/delete actions.                 | Admin                  |
| 15  | View15    | Document Detail        | Document content page displaying title, formatted content, last updated date, and related documents. Includes edit options for admin.                                                              | Admin                  |
| 16  | View16    | Product Management     | Product management dashboard for staff with product table, search box, filters, add product button, and action buttons for each product.                                                           | Staff                  |
| 17  | View17    | Product Detail (Staff) | Product edit form for staff with fields for all product information, image uploader, specifications editor, and save button.                                                                       | Staff                  |
| 18  | View18    | User Management        | User management page for staff/admin with user table, search box, filters, and action buttons based on role.                                                                                       | Staff, Admin           |
| 19  | View19    | User Detail            | User information page showing user details, role selector (admin only), and user statistics.                                                                                                       | Staff, Admin           |
| 20  | View20    | Staff Self Report      | Staff's personal performance dashboard with activity charts, statistics cards, and productivity metrics.                                                                                           | Staff                  |
| 21  | View21    | Shop Report            | Comprehensive shop analytics dashboard for admin with multiple charts showing sales, revenue, inventory, and customer metrics. Includes report type and time range selectors.                      | Admin                  |
| 22  | View22    | System Monitoring      | System health dashboard for admin showing real-time metrics, status indicators, performance charts, error logs, and resource usage.                                                                | Admin                  |
| 23  | View23    | Confirmation Dialog    | Modal dialog for confirming critical actions with message, cancel button, and confirm button.                                                                                                      | All                    |
| 24  | View24    | Password Recovery      | Password reset request form with email field and send reset email button.                                                                                                                          | Guest                  |
| 25  | View25    | Account Activity       | List of account-related events showing timestamp, activity type, IP address, device info, and status.                                                                                              | Customer, Staff, Admin |

## 3\. Non-functional Requirements {#3.-non-functional-requirements}

### 3.1 User Access and Security {#3.1-user-access-and-security}

| Function                      | Guest | Customer | Staff | Admin |
| :---------------------------- | :---: | :------: | :---: | :---: |
| **Manage Account Functions**  |       |          |       |       |
| Sign Up                       |   X   |          |       |       |
| Sign In                       |   X   |    X     |   X   |   X   |
| Sign Out                      |       |    X     |   X   |   X   |
| Edit Profile                  |       |  X(\*)   | X(\*) | X(\*) |
| Link Account With Third Party |       |  X(\*)   | X(\*) | X(\*) |
| Delete Account                |       |  X(\*)   | X(\*) | X(\*) |
| Reset Password                |       |  X(\*)   | X(\*) | X(\*) |
| View Account Activity         |       |  X(\*)   | X(\*) | X(\*) |
| Recover Account               |   X   |    X     |   X   |   X   |
| **View Product Functions**    |       |          |       |       |
| View Product                  |   X   |    X     |   X   |   X   |
| Search Product                |   X   |    X     |   X   |   X   |
| View Product Detail           |   X   |    X     |   X   |   X   |
| View Product Reviews          |   X   |    X     |   X   |   X   |
| View Suggested Products       |   X   |    X     |   X   |   X   |
| Add Product to Cart           |       |    X     |       |       |
| **Manage Cart Functions**     |       |          |       |       |
| Manage Cart                   |       |  X(\*)   |       |       |
| Change Product Amount         |       |  X(\*)   |       |       |
| Remove Product from Cart      |       |  X(\*)   |       |       |
| Purchase                      |       |  X(\*)   |       |       |
| **View Order Functions**      |       |          |       |       |
| View Order                    |       |  X(\*)   |       |       |
| Search Order                  |       |  X(\*)   |       |       |
| View Order Detail             |       |  X(\*)   |       |       |
| Cancel Order                  |       |  X(\*)   |       |       |
| Return Product                |       |  X(\*)   |       |       |
| Review Product                |       |  X(\*)   |       |       |
| **Other Customer Functions**  |       |          |       |       |
| Contact Support               |   X   |    X     |       |       |
| View Customer Self Report     |       |  X(\*)   |       |       |
| View Document                 |   X   |    X     |   X   |   X   |
| **Manage Product Functions**  |       |          |       |       |
| Manage Product                |       |          |   X   |   X   |
| Add Product                   |       |          |   X   |   X   |
| Update Product                |       |          |   X   |   X   |
| Delete Product                |       |          |   X   |   X   |
| Search Product (Staff)        |       |          |   X   |   X   |
| Delete Review                 |       |          |   X   |   X   |
| **Manage User Functions**     |       |          |       |       |
| Manage User                   |       |          |   X   |   X   |
| Search User                   |       |          |   X   |   X   |
| View Customer Report          |       |          |   X   |   X   |
| Change User Roles             |       |          |       |   X   |
| Delete User                   |       |          |       |   X   |
| View Staff Report             |       |          |       |   X   |
| **Admin Functions**           |       |          |       |       |
| View Shop Report              |       |          |       |   X   |
| View System Monitoring        |       |          |       |   X   |
| Adjust Document               |       |          |       |   X   |
| Create Document               |       |          |       |   X   |
| Update Document               |       |          |       |   X   |
| Delete Document               |       |          |       |   X   |
| Search Document (Admin)       |       |          |       |   X   |
| **Staff Functions**           |       |          |       |       |
| View Staff Self Report        |       |          | X(\*) | X(\*) |

**Legend:**

- X: User has full permission to perform the action
- X(\*): User has permission to perform the action on their own items only
- X(\*\*): User has permission to perform the action on items sent to them only

**Security Requirements:**

- JWT must be expired shortly, no more than 5 minutes
- HTTPS must be enforced for all connections
- API endpoints must validate authentication tokens
- Failed login attempts limited to 3 before temporary account lock (15 minutes)
- Sensitive data (payment info) must be encrypted at rest
- SQL injection prevention through parameterized queries
- XSS protection through input sanitization and output encoding
- CSRF tokens required for all state-changing operations
- File upload restrictions: max 5MB for product images, 2MB for review images
- Rate limiting: max 100 requests per minute per IP address
- Admin actions must be logged in audit trail
- User sessions must be invalidated on password change or role change

### 3.2 Performance Requirements {#3.2-performance-requirements}

**Response Time:**

- Page load time: \< 3 seconds for 95% of requests
- API response time: \< 500ms for 90% of requests
- Database query time: \< 200ms for standard queries
- Search results: \< 1 second for product/user/document searches
- Image loading: \< 2 seconds for product images with lazy loading
- Cart operations: \< 300ms for add/update/remove operations
- Report generation: \< 5 seconds for standard reports

**Scalability:**

- Support minimum 1,000 concurrent users
- Support minimum 10,000 active customer accounts
- Support minimum 5,000 staff members
- Support minimum 50,000 products in catalog
- Database capable of handling 100,000 orders per year
- Support minimum 500,000 product reviews
- Cart operations support 500 concurrent transactions
- System should scale horizontally with load balancer

**Availability:**

- 99.5% uptime during business hours (24/7)
- Scheduled maintenance windows: 2 AM \- 4 AM on weekends
- Maximum unplanned downtime: 4 hours per month
- Backup systems with \< 15 minutes failover time
- Database replication for high availability
- Automated health checks every 5 minutes
- Disaster recovery plan with \< 1 hour recovery time

**Data Volume:**

- Product images: Max 5MB per image, up to 10 images per product
- Review images: Max 2MB per image, up to 5 images per review
- Document content: Max 10MB per document
- Database growth rate: Estimated 20% annually
- Daily backup of all transactional data
- Archive old orders after 2 years (keep for compliance)
- Log retention: 90 days for application logs, 1 year for audit logs
- Maximum cart size: 100 items per customer
- Maximum document file size: 10MB

**Caching:**

- Product catalog cached for 5 minutes
- User session data cached for session duration
- Static assets cached for 7 days with CDN
- Database query results cached for frequently accessed data
- Cache invalidation on data updates

### 3.3 Implementation Requirements {#3.3-implementation-requirements}

**Technology Stack:**

- Frontend: React.js with Next.js framework
- Backend: Go (Golang) for API services
- Authentication: Keycloak for identity and access management
- Database: PostgreSQL for relational data
- Search Engine: ParadeDB for product/user/document search
- File Storage: AWS S3 or compatible object storage
- CDN: CloudFlare or AWS CloudFront for static assets
- Monitoring: Prometheus, Loki, Grafana for system monitoring

**Development Environment:**

- Version Control: Git with Github Flow branching strategy
- CI/CD: GitHub Actions
- Code Quality: SonarQube for code analysis
- Testing: Jest for frontend, Go test for backend
- API Documentation: Swagger/OpenAPI specification
- Containerization: Docker for development and deployment
- Orchestration: Kubernetes for production deployment

**Deployment:**

- Development: Local Docker containers
- Staging: Kubernetes cluster on cloud provider
- Production: Kubernetes cluster with auto-scaling
- Database: PostgreSQL on Kubernetes
- Monitoring: Integrated logging and monitoring stack

**Security Implementation:**

- Authentication: OAuth 2.0 / OpenID Connect via Keycloak
- Authorization: Role-Based Access Control (RBAC)
- API Security: JWT tokens
- Communication: TLS 1.3 for all external connections
- Database: Encrypted at rest and in transit
- Secrets Management: HashiCorp Vault or AWS Secrets Manager, or encrypted secret on repositories
- Penetration Testing: Quarterly security audits

**Compliance:**

- GDPR compliance for EU customers
- PCI DSS compliance for payment processing
- Data retention policies per regulatory requirements
- Privacy policy and terms of service
- Cookie consent management

## 4\. Other Requirements {#4.-other-requirements}

### 4.1 Archive Function {#4.1-archive-function}

| List                   | Actor        | Condition                                                                                                                                         |
| :--------------------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| Order                  | Admin        | The Admin is able to archive completed orders older than 2 years. Archived orders remain accessible for compliance but are moved to cold storage. |
| User                   | Admin        | The Admin is able to archive deleted user accounts after 90 days of deletion. Personal data is anonymized per GDPR requirements.                  |
| Product                | Staff, Admin | Staff/Admin can archive discontinued products. Archived products are hidden from customer view but retain historical data for reporting.          |
| Review                 | Staff, Admin | Staff/Admin can archive old reviews (older than 3 years) while maintaining review statistics.                                                     |
| Document               | Admin        | The Admin is able to archive outdated documents. Archived documents are not visible to users but accessible to admin for historical reference.    |
| Staff Activity Log     | Admin        | The Admin is able to archive staff activity logs older than 1 year for audit compliance.                                                          |
| System Monitoring Data | Admin        | The Admin is able to archive system monitoring data older than 90 days to maintain database performance.                                          |

### 4.2 Security Audit Function {#4.2-security-audit-function}

Enable Security Audit Function for "Admin" to track critical system events:

- User account creation, modification, and deletion
- User role changes and permission modifications
- Failed login attempts and account lockouts
- Password changes and password reset requests
- Product creation, modification, and deletion
- Order modifications and cancellations
- Review deletions and moderation actions
- Document creation, modification, and deletion
- System configuration changes
- Admin access to sensitive user data
- API authentication failures
- Suspicious activity patterns (e.g., rapid requests, unauthorized access attempts)

All audit logs include: timestamp, actor ID, action type, affected entity, IP address, user agent, and action result. Audit logs are immutable and retained for minimum 1 year for compliance purposes.

### 4.3 Electricilies Sites {#4.3-electricilies-sites}

| \#  | Site Name     | Description                                                                                                                                                                                                                                                                                                                                                                   |
| :-- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Customer Site | This is the main e-commerce website for customers. It provides functionalities to browse products, search products, view product details and reviews, manage shopping cart, place orders, track orders, write reviews, view documents, contact support, and view personal reports.                                                                                            |
| 2   | Staff Site    | This site is designed for staff members. It enables them to manage products (add, update, delete), moderate product reviews, search products with advanced filters, view and manage users (customers only), view customer reports, and view their own performance reports.                                                                                                    |
| 3   | Admin Site    | This is the control console for administrators. It provides full access to manage users (including staff), change user roles, view comprehensive shop reports, monitor system health and performance, manage system documents, view staff performance reports, and access all staff functionalities. Admin site includes advanced analytics and system configuration options. |

### 4.4 Electricilies Lists {#4.4-electricilies-lists}

Refer to section 2.2 List Description for detailed information about all lists/tables used in the Electricilies system.

### 4.5 Custom Pages {#4.5-custom-pages}

Custom pages implemented in the Electricilies system:

| \#  | Page Name            | Description                                                      | User Role               |
| :-- | :------------------- | :--------------------------------------------------------------- | :---------------------- |
| 1   | Dashboard            | Personalized dashboard showing quick stats and recent activities | Customer, Staff, Admin  |
| 2   | Analytics Dashboard  | Comprehensive analytics page with customizable widgets           | Admin                   |
| 3   | Inventory Management | Advanced inventory tracking and low-stock alerts                 | Staff, Admin            |
| 4   | Bulk Operations      | Interface for bulk product updates and data import/export        | Staff, Admin            |
| 5   | Notification Center  | Centralized notification management for all system alerts        | All authenticated users |
| 6   | Order Tracking       | Real-time order tracking with map integration                    | Customer                |
| 7   | Wishlist             | Product wishlist management for customers                        | Customer                |
| 8   | Comparison Tool      | Side-by-side product comparison interface                        | Customer                |
| 9   | Advanced Search      | Advanced search page with multiple filter options                | All                     |
| 10  | Category Management  | Product category hierarchy management                            | Admin                   |

### 4.6 Scheduled Agents {#4.6-scheduled-agents}

Scheduled jobs and automated tasks in the Electricilies system:

| \#  | Agent Name                    | Schedule                    | Description                                                                        |
| :-- | :---------------------------- | :-------------------------- | :--------------------------------------------------------------------------------- |
| 1   | Order Status Sync             | Every 15 minutes            | Synchronizes order status with shipping providers and updates tracking information |
| 2   | Inventory Alert               | Daily at 8:00 AM            | Checks inventory levels and sends low-stock alerts to staff                        |
| 3   | Abandoned Cart Reminder       | Daily at 10:00 AM           | Sends email reminders to customers with abandoned carts (older than 24 hours)      |
| 4   | Review Notification           | Daily at 9:00 AM            | Sends email notifications to customers prompting them to review delivered orders   |
| 5   | Report Generation             | Daily at 1:00 AM            | Generates and caches daily sales and performance reports                           |
| 6   | Database Backup               | Daily at 2:00 AM            | Performs full database backup and verification                                     |
| 7   | Log Cleanup                   | Weekly on Sunday at 3:00 AM | Archives old logs and cleans up temporary data                                     |
| 10  | Analytics Aggregation         | Daily at 4:00 AM            | Aggregates daily analytics data for reporting                                      |
| 11  | Product Recommendation Update | Daily at 5:00 AM            | Updates product recommendation algorithm with latest purchase data                 |
| 12  | Price Update                  | As configured               | Processes scheduled price changes and promotional pricing                          |

### 4.7 Technical Concern {#4.7-technical-concern}

**Scalability Concerns:**

- **High Traffic Events:** System must handle traffic spikes during sales events (Black Friday, Flash Sales). Implement auto-scaling, CDN caching, and queue-based order processing to maintain performance.

- **Large Product Catalog:** With 50,000+ products, search and filtering performance is critical. ParadeDB indexing and optimized database queries with proper indexing are essential.

- **Image Storage:** Large volume of product and review images can impact storage costs and performance. Implement image compression, lazy loading, CDN delivery, and tiered storage (hot/cold) strategy.

**Data Management Concerns:**

- **Data Volume Growth:** 20% annual growth requires capacity planning for database, storage, and backup systems. Implement data archiving strategy for old orders and reviews.

- **Search Performance:** Full-text search across products, documents, and users with complex filters requires optimized ParadeDB configuration and query optimization.

- **Report Generation:** Complex reports with large datasets may impact database performance. Implement report caching, pre-aggregation of metrics, and scheduled report generation during off-peak hours.

**Security Concerns:**

- **PCI DSS Compliance:** Payment processing must comply with PCI DSS standards. Use tokenization and never store full credit card data. Implement third-party payment gateway integration (Stripe, PayPal).

- **Data Privacy:** GDPR compliance requires proper consent management, right to be forgotten, data portability, and data encryption. Implement personal data anonymization for archived users.

- **API Security:** Public APIs must be protected against abuse. Implement rate limiting, API key rotation, request validation, and DDoS protection.

**Performance Concerns:**

- **Database Queries:** Complex queries for reports and analytics can impact database performance. Implement read replicas, query optimization, and appropriate indexing strategy.

- **Concurrent Users:** Target of 1,000 concurrent users requires horizontal scaling capability. Implement stateless application design, session management in Redis, and load balancing.

- **Real-time Updates:** Cart synchronization, inventory updates, and order status require real-time or near-real-time processing. Implement WebSocket connections for live updates and message queue for asynchronous processing.

**Integration Concerns:**

- **Third-party Services:** Dependencies on external services (payment gateway, shipping providers, email service, support chat) require proper error handling, retry logic, and fallback mechanisms.

- **Authentication Provider:** Keycloak integration requires proper configuration, token management, and session synchronization. Implement token refresh mechanism and handle authentication failures gracefully.

**Operational Concerns:**

- **Monitoring and Alerting:** Critical for maintaining 99.5% uptime. Implement comprehensive monitoring for application health, database performance, API response times, error rates, and resource utilization.

- **Deployment Strategy:** Zero-downtime deployments are essential for 24/7 availability. Implement blue-green deployment or rolling updates with health checks.

- **Disaster Recovery:** RTO (Recovery Time Objective) of \< 1 hour requires automated backup verification, documented recovery procedures, and regular disaster recovery drills.

## 5\. Appendixes {#5.-appendixes}

### 5.1 Glossary {#5.1-glossary}

The list below contains all the necessary terms to interpret the document, including acronyms and abbreviations.

| Term       | Description                                                             |
| :--------- | :---------------------------------------------------------------------- |
| _API_      | **A**pplication **P**rogramming **I**nterface                           |
| _AWS_      | **A**mazon **W**eb **S**ervices                                         |
| _BR_       | **B**usiness **R**ule                                                   |
| _CDN_      | **C**ontent **D**elivery **N**etwork                                    |
| _CLV_      | **C**ustomer **L**ifetime **V**alue                                     |
| _CPU_      | **C**entral **P**rocessing **U**nit                                     |
| _CRUD_     | **C**reate, **R**ead, **U**pdate, **D**elete                            |
| _CSRF_     | **C**ross-**S**ite **R**equest **F**orgery                              |
| _DB_       | **D**ata**b**ase                                                        |
| _GDPR_     | **G**eneral **D**ata **P**rotection **R**egulation                      |
| _HTML_     | **H**yper**T**ext **M**arkup **L**anguage                               |
| _HTTPS_    | **H**yper**T**ext **T**ransfer **P**rotocol **S**ecure                  |
| _ID_       | **Id**entifier                                                          |
| _IP_       | **I**nternet **P**rotocol                                               |
| _JPG/JPEG_ | **J**oint **P**hotographic **E**xperts **G**roup (image format)         |
| _JSON_     | **J**ava**S**cript **O**bject **N**otation                              |
| _JWT_      | **J**SON **W**eb **T**oken                                              |
| _MB_       | **M**ega**b**yte                                                        |
| _MSG_      | **M**es**s**a**g**e                                                     |
| _N/A_      | **N**ot **A**vailable or **N**ot **A**pplicable                         |
| _OAuth_    | **O**pen **Auth**orization                                              |
| _PCI DSS_  | **P**ayment **C**ard **I**ndustry **D**ata **S**ecurity **S**tandard    |
| _PDF_      | **P**ortable **D**ocument **F**ormat                                    |
| _PNG_      | **P**ortable **N**etwork **G**raphics (image format)                    |
| _RBAC_     | **R**ole-**B**ased **A**ccess **C**ontrol                               |
| _REST_     | **RE**presentational **S**tate **T**ransfer                             |
| _RTO_      | **R**ecovery **T**ime **O**bjective                                     |
| _SEO_      | **S**earch **E**ngine **O**ptimization                                  |
| _SKU_      | **S**tock **K**eeping **U**nit                                          |
| _SQL_      | **S**tructured **Q**uery **L**anguage                                   |
| _SRS_      | **S**oftware **R**equirements **S**pecification                         |
| _SSL/TLS_  | **S**ecure **S**ockets **L**ayer / **T**ransport **L**ayer **S**ecurity |
| _TBD_      | **T**o **b**e **d**etermined or **t**o **b**e **d**efined               |
| _UC_       | **U**se **C**ase                                                        |
| _UI_       | **U**ser **I**nterface                                                  |
| _URL_      | **U**niform **R**esource **L**ocator                                    |
| _UUID_     | **U**niversally **U**nique **Id**entifier                               |
| _XSS_      | **C**ross-**S**ite **S**cripting                                        |

### 5.2 Mapping to Notes Application {#5.2-mapping-to-notes-application}

There is no mapping between the Electricilies application and any source Notes application.

### 5.3 Messages {#5.3-messages}

This section describes the details of messages used in business rules including error messages, confirmation messages, success messages, and informational messages.

| Message Code | Message Content                                                                                                              | Button |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------- | :----- |
| MSG 1        | This field is required. Please provide valid information to proceed.                                                         | Ok     |
| MSG 2        | This username or email is already registered. Please use a different one.                                                    | Ok     |
| MSG 3        | Invalid authorization code or verifier. Please try again.                                                                    | Ok     |
| MSG 4        | Invalid authentication token. Please sign in again.                                                                          | Ok     |
| MSG 5        | Invalid username/email or password. Please check your credentials and try again.                                             | Ok     |
| MSG 6        | You have been successfully signed out. Redirecting to sign in page...                                                        | Ok     |
| MSG 7        | Email address is already registered by another account. Please use a different email.                                        | Ok     |
| MSG 8        | Phone number is already registered by another account. Please use a different phone.                                         | Ok     |
| MSG 9        | Profile updated successfully.                                                                                                | Ok     |
| MSG 10       | This account is already linked to this provider or provider account is linked to another user.                               | Ok     |
| MSG 11       | Account linked successfully with third-party provider.                                                                       | Ok     |
| MSG 12       | Cannot delete account. You have pending orders or active subscriptions that must be resolved first.                          | Ok     |
| MSG 13       | Your account has been deleted successfully. Thank you for using our service.                                                 | Ok     |
| MSG 14       | Password does not meet requirements. Must be at least 8 characters with uppercase, lowercase, number, and special character. | Ok     |
| MSG 15       | Current password is incorrect. Please try again.                                                                             | Ok     |
| MSG 16       | Password updated successfully.                                                                                               | Ok     |
| MSG 17       | If this email is registered, you will receive a password reset link shortly.                                                 | Ok     |
| MSG 18       | Password reset email sent successfully. Please check your inbox and follow the instructions.                                 | Ok     |
| MSG 19       | Invalid quantity. Please enter a valid positive number that does not exceed available stock.                                 | Ok     |
| MSG 20       | Total quantity exceeds available stock. Please reduce quantity.                                                              | Ok     |
| MSG 21       | Product added to cart successfully.                                                                                          | Ok     |
| MSG 22       | Cart updated successfully.                                                                                                   | Ok     |
| MSG 23       | Product not found in cart.                                                                                                   | Ok     |
| MSG 24       | Product removed from cart successfully.                                                                                      | Ok     |
| MSG 25       | Cannot proceed to checkout. Some items in your cart are no longer available or have insufficient stock.                      | Ok     |
| MSG 26       | Cannot proceed to checkout. One or more products are no longer available.                                                    | Ok     |
| MSG 27       | Cannot cancel order. Order has already been shipped or is not in cancellable status.                                         | Ok     |
| MSG 28       | Order cancelled successfully. Refund will be processed within 3-5 business days.                                             | Ok     |
| MSG 29       | Cannot return product. Product is not eligible for return or return period has expired.                                      | Ok     |
| MSG 30       | Return request created successfully. Please check your email for return instructions.                                        | Ok     |
| MSG 31       | Invalid review content. Please ensure all required fields are filled correctly.                                              | Ok     |
| MSG 32       | Cannot submit review. You have not purchased this product or have already reviewed it.                                       | Ok     |
| MSG 33       | Thank you for your review\! It will be published after moderation.                                                           | Ok     |
| MSG 34       | Invalid product data. Please check all required fields and try again.                                                        | Ok     |
| MSG 35       | Cannot save product. SKU already exists or validation failed.                                                                | Ok     |
| MSG 36       | Product created successfully.                                                                                                | Ok     |
| MSG 37       | Product updated successfully.                                                                                                | Ok     |
| MSG 38       | Cannot delete product. Product has pending orders.                                                                           | Ok     |
| MSG 39       | Product deleted successfully.                                                                                                | Ok     |
| MSG 40       | Review not found.                                                                                                            | Ok     |
| MSG 41       | Review deleted successfully.                                                                                                 | Ok     |
| MSG 42       | Invalid role change. Please select a different role.                                                                         | Ok     |
| MSG 43       | Cannot change user role. User has pending administrative actions.                                                            | Ok     |
| MSG 44       | User role updated successfully. User will need to sign in again.                                                             | Ok     |
| MSG 45       | Cannot delete user. User has pending orders or active disputes.                                                              | Ok     |
| MSG 46       | User deleted successfully.                                                                                                   | Ok     |
| MSG 47       | Invalid document data. Please check all required fields.                                                                     | Ok     |
| MSG 48       | Cannot save document. Title already exists in this category or validation failed.                                            | Ok     |
| MSG 49       | Document created successfully.                                                                                               | Ok     |
| MSG 50       | Document updated successfully.                                                                                               | Ok     |
| MSG 51       | Document not found.                                                                                                          | Ok     |
| MSG 52       | Document deleted successfully.                                                                                               | Ok     |

### 5.4 Issues List {#5.4-issues-list}

N/A
