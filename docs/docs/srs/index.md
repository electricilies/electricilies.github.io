---
outline: [1, 5]
---

**Electricilies - Website for Selling Electronic Products**

## Revision and Signoff Sheet

### Change Record

| Author         | Version | Change reference         | Date       |
| -------------- | ------- | ------------------------ | ---------- |
| Buggilies Team | 0.1.0   | Initial project creation | 19/09/2025 |

### Reviewers

| Name        | Company       | Version | Position        | Date       |
| ----------- | ------------- | ------- | --------------- | ---------- |
| Kevin Nitro | Electricilies | 0.1.0   | Project Manager | 20/09/2025 |

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification document outlines the comprehensive requirements for the "Electricilies" e-commerce platform. This document serves as a detailed technical foundation for the development, deployment, and maintenance of the website across various platforms. It provides developers with clear guidelines for planning, task assignment, and implementation. Additionally, quality assurance teams will utilize this document to design test cases that align with specified requirements, ensuring the final product meets both quality standards and user expectations for an electronic products marketplace.

### 1.2 Scope

This document encompasses the Electricilies e-commerce platform, which is designed to provide a comprehensive online marketplace for electronic products. The system supports multiple user roles including customers, staff, and administrators, each with distinct functionalities for browsing products, managing inventory, processing orders, and administering the platform.

### 1.3 Intended Audiences and Document Organization

This document is intended for:

- **Development Team**: Responsible for creating detailed designs, implementing features, and performing unit testing, integration testing, and system testing for the application.
- **Quality Assurance Team**: Responsible for conducting user acceptance testing sessions and validating system requirements.
- **Documentation Team**: Responsible for creating user guides and help documentation for the application.
- **Project Stakeholders**: Business owners and managers who need to understand system capabilities and requirements.

Below are the main sections of this document:

- **1. Introduction**: General introduction and overview of this document.
- **2. Functional Requirements**: Detailed description of functional requirements including use cases, sequence diagrams, and activity diagrams.
- **3. Non-functional Requirements**: Description of non-functional requirements such as security, performance, and interface requirements.
- **4. Other Requirements**: Additional requirements including archive functions and other supporting features.
- **5. Appendixes**: Supporting information including glossary, messages, and issues list.

### 1.4 References

| #   | Title             | Version | File Name / Link         | Description                                        |
| --- | ----------------- | ------- | ------------------------ | -------------------------------------------------- |
| 1   | Use Case Diagrams | 0.1.0   | Use Case Documentation   | Complete use case diagrams for all user roles      |
| 2   | Sequence Diagrams | 0.1.0   | Sequence Documentation   | Sequence flow diagrams for all major features      |
| 3   | Activity Diagrams | 0.1.0   | Activity Documentation   | Activity flow diagrams for business processes      |
| 4   | Database Schema   | 0.1.0   | Database Design Document | Entity-relationship diagrams and table definitions |

## 2. Functional Requirements

### 2.1 Use Case Description

#### 2.1.1 Manage Account Use Case

##### 2.1.1.1 Manage Account

###### Use Case Description

| Name               | Manage Account                                                                              |
| :----------------- | :------------------------------------------------------------------------------------------ |
| **Description**    | This use case allows users to manage their account settings and preferences in the system.  |
| **Actor**          | Customer, Staff, Admin                                                                      |
| **Trigger**        | When the user accesses their account settings from the navigation menu.                     |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in with their account. |
| **Post-condition** | User can access various account management functions.                                       |

###### Sequence Flow

[sequence-manage-account-manage-account](../sequence/manage-account/manage-account)

###### Activities Flow

[activity-manage-account-manage-account](../activity/manage-account/manage-account)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                        |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** The system displays an "Account Management" view with user account information and available options. (Refer to "Account Management" view in "View Description" file)                                                        |
| (2)      | BR2     | **Choosing Rules:** User can only choose one account management feature at a time to use. Available options include: Delete Account, Edit Profile, Link Account With Third Party, Recover Account, Reset Password, Sign In, Sign Out, and Sign Up. |

##### 2.1.1.2 Sign Up

###### Use Case Description

| Name               | Sign Up                                                                          |
| :----------------- | :------------------------------------------------------------------------------- |
| **Description**    | This use case allows new users to register an account in the system.             |
| **Actor**          | Customer                                                                         |
| **Trigger**        | When a user clicks on the "Sign Up" button on the sign-in page.                  |
| **Pre-condition**  | User's device must be connected to the internet.                                 |
| **Post-condition** | User account is created in the system and user is redirected to the home screen. |

###### Sequence Flow

[sequence-manage-account-sign-up](../sequence/manage-account/sign-up)

###### Activities Flow

[activity-manage-account-sign-up](../activity/manage-account/sign-up)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR1     | **Security Rules:** The system generates a random code verifier and hashes it to create a code challenge for secure authentication flow.                                                                                                                                                                                                                                                                                                                                                                               |
| (4)      | BR2     | **Displaying Rules:** The system displays a "Sign Up" screen with fields for Username, Password, Email, and Full Name. (Refer to "Sign Up" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                            |
| (6)      | BR3     | **Validation Rules:** When the user enters registration data, the system validates data format using standard patterns: <br/>- Username: alphanumeric, 4-20 characters<br/>- Password: minimum 8 characters, at least one uppercase, one lowercase, one number, one special character<br/>- Email: valid email format (e.g., user@domain.com)<br/>- Full Name: alphabetic characters and spaces only<br/>If data format is invalid, system displays error message (Refer to MSG 1) and requires user to re-enter data. |
| (8)      | BR4     | **Validation Rules:** The system checks if the username or email already exists in the "USER" table (Refer to "User" table in "DB Sheet" file). If the username or email is already registered, system displays error message (Refer to MSG 2). Otherwise, system creates new user account with hashed password using bcrypt algorithm with minimum 10 rounds.                                                                                                                                                         |
| (12)     | BR5     | **Validation Rules:** The system validates the authorization code, verifier, and challenge. If validation fails, system displays error message (Refer to MSG 3). Otherwise, system generates and returns JWT Token with 24-hour expiration.                                                                                                                                                                                                                                                                            |
| (16)     | BR6     | **Validation Rules:** The system verifies the JWT Token and writes user data to the database. If JWT is invalid, system displays error message (Refer to MSG 4). Otherwise, user data is stored in "USER" table and system redirects to Home View.                                                                                                                                                                                                                                                                     |

##### 2.1.1.3 Sign In

###### Use Case Description

| Name               | Sign In                                                                                 |
| :----------------- | :-------------------------------------------------------------------------------------- |
| **Description**    | This use case allows users to sign in to the system using their credentials.            |
| **Actor**          | Customer, Staff, Admin                                                                  |
| **Trigger**        | When the user clicks on the "Sign In" button on the sign-in page.                       |
| **Pre-condition**  | User's device must be connected to the internet. User account must exist in the system. |
| **Post-condition** | User is authenticated and signed in to the system.                                      |

###### Sequence Flow

[sequence-manage-account-sign-in](../sequence/manage-account/sign-in)

###### Activities Flow

[activity-manage-account-sign-in](../activity/manage-account/sign-in)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                  |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR1     | **Security Rules:** The system generates a random code verifier and hashes it to create a code challenge for secure authentication flow.                                                                                                                                                                                                                                                     |
| (5)      | BR2     | **Displaying Rules:** The system displays a "Sign In" screen with fields for Username/Email and Password. (Refer to "Sign In" view in "View Description" file)                                                                                                                                                                                                                               |
| (6)      | BR3     | **Validation Rules:** When the user enters credentials, the system validates data format: <br/>- Username/Email: must not be empty<br/>- Password: must not be empty<br/>If data format is invalid, system displays error message (Refer to MSG 1) and requires user to re-enter credentials.                                                                                                |
| (8)      | BR4     | **Validation Rules:** The system validates user credentials against the "ACCOUNT" table (Refer to "Account" table in "DB Sheet" file). Password is verified using bcrypt comparison with stored hash. If credentials are invalid, system displays error message (Refer to MSG 5) and increments failed login counter. After 3 failed attempts, account is temporarily locked for 15 minutes. |
| (11)     | BR5     | **Validation Rules:** The system validates the authorization code, verifier, and challenge. If validation fails, system displays error message (Refer to MSG 3). Otherwise, system generates and returns JWT Token with 24-hour expiration.                                                                                                                                                  |
| (13)     | BR6     | **Validation Rules:** The system verifies the JWT Token. If JWT is invalid or expired, system displays error message (Refer to MSG 4). Otherwise, system creates user session and redirects to Home View.                                                                                                                                                                                    |

##### 2.1.1.4 Sign Out

###### Use Case Description

| Name               | Sign Out                                                                 |
| :----------------- | :----------------------------------------------------------------------- |
| **Description**    | This use case allows users to sign out from the system.                  |
| **Actor**          | Customer, Staff, Admin                                                   |
| **Trigger**        | When the user clicks on the "Sign Out" button.                           |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in. |
| **Post-condition** | User session is cleared and user is signed out.                          |

###### Sequence Flow

[sequence-manage-account-sign-out](../sequence/manage-account/sign-out)

###### Activities Flow

[activity-manage-account-sign-out](../activity/manage-account/sign-out)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                         |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR1     | **Session Rules:** The system clears all user session data including JWT Token, cached user information, and temporary data from browser storage (localStorage and sessionStorage). |
| (3)      | BR2     | **Displaying Rules:** The system displays sign out confirmation message (Refer to MSG 6) and automatically redirects to the Sign In page after 2 seconds.                           |

##### 2.1.1.5 Edit Profile

###### Use Case Description

| Name               | Edit Profile                                                             |
| :----------------- | :----------------------------------------------------------------------- |
| **Description**    | This use case allows users to edit their profile information.            |
| **Actor**          | Customer, Staff, Admin                                                   |
| **Trigger**        | When the user clicks on the "Edit Profile" option from account settings. |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in. |
| **Post-condition** | User profile information is updated in the system.                       |

###### Sequence Flow

[sequence-manage-account-edit-profile](../sequence/manage-account/edit-profile)

###### Activities Flow

[activity-manage-account-edit-profile](../activity/manage-account/edit-profile)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** The system displays a "Profile Edit" screen filled with current user information retrieved from "USER" table. (Refer to "Profile Edit" view in "View Description" file)                                                                                                                                                                                                                                                                                                                     |
| (3)      | BR2     | **Validation Rules:** When the user enters new profile information, the system validates data format in real-time using Text_change() method: <br/>- Full Name: alphabetic characters and spaces only, 2-100 characters<br/>- Email: valid email format<br/>- Phone: valid phone format (if provided)<br/>- Address: alphanumeric with special characters allowed (if provided)<br/>If data format is invalid, system displays error message (Refer to MSG 1).                                                    |
| (5)      | BR3     | **Validation Rules:** When the user clicks the "Save Changes" button, system validates updated data against "USER" table (Refer to "User" table in "DB Sheet" file): <br/>- Check if new email is not already registered by another user<br/>- Check if new phone is not already registered by another user (if provided)<br/>If validation fails, system displays error message (Refer to MSG 7 or MSG 8). Otherwise, profile data is updated in the database and success message is displayed (Refer to MSG 9). |

##### 2.1.1.6 Link Account With Third Party Provider

###### Use Case Description

| Name               | Link Account With Third Party Provider                                                      |
| :----------------- | :------------------------------------------------------------------------------------------ |
| **Description**    | This use case allows users to link their account with third-party authentication providers. |
| **Actor**          | Customer, Staff, Admin                                                                      |
| **Trigger**        | When the user clicks on "Link Account" option and selects a third-party provider.           |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in.                    |
| **Post-condition** | User account is linked with the selected third-party provider.                              |

###### Sequence Flow

[sequence-manage-account-link-account-with-third-party](../sequence/manage-account/link-account-with-third-party)

###### Activities Flow

[activity-manage-account-link-account-with-third-party](../activity/manage-account/link-account-with-third-party)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR1     | **Displaying Rules:** The system displays available third-party providers (Google, Facebook, etc.) that can be linked to the user account. (Refer to "Link Account" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                     |
| (5)      | BR2     | **Validation Rules:** The system validates account linking request: <br/>- Check if selected provider is not already linked to this account<br/>- Check if provider account is not already linked to another user account<br/>- Verify provider authentication token<br/>If validation fails, system displays error message (Refer to MSG 10). Otherwise, system creates third-party account link in "ACCOUNT_PROVIDER" table (Refer to "AccountProvider" table in "DB Sheet" file) and displays success notification (Refer to MSG 11). |

##### 2.1.1.7 Delete Account

###### Use Case Description

| Name               | Delete Account                                                                  |
| :----------------- | :------------------------------------------------------------------------------ |
| **Description**    | This use case allows users to permanently delete their account from the system. |
| **Actor**          | Customer, Staff, Admin                                                          |
| **Trigger**        | When the user clicks on "Delete Account" option in account settings.            |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in.        |
| **Post-condition** | User account is permanently deleted from the system.                            |

###### Sequence Flow

[sequence-manage-account-delete-account](../sequence/manage-account/delete-account)

###### Activities Flow

[activity-manage-account-delete-account](../activity/manage-account/delete-account)

###### Business Rules

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (2)          | BR1     | **Displaying Rules:** The system displays a confirmation dialog warning the user about permanent account deletion and its consequences (Refer to "Confirmation Dialog" view in "View Description" file).                                                                                                                                                                                                                                                                                                                                    |
| (2.1), (2.2) | BR2     | **Selection Rules:** User must explicitly confirm account deletion. If user clicks "Cancel" button, the confirmation dialog closes and use case ends. If user clicks "Confirm" button, system proceeds with deletion process.                                                                                                                                                                                                                                                                                                               |
| (4)          | BR3     | **Validation Rules:** The system validates account data before deletion: <br/>- Check for pending orders (orders must be completed or cancelled)<br/>- Check for active subscriptions (must be cancelled)<br/>- Verify user has no outstanding balances<br/>If validation fails, system displays error message (Refer to MSG 12) listing issues that must be resolved. Otherwise, system performs soft delete by marking account as deleted in "USER" table and displays success message (Refer to MSG 13), then redirects to sign-in page. |

##### 2.1.1.8 Reset Password

###### Use Case Description

| Name               | Reset Password                                                           |
| :----------------- | :----------------------------------------------------------------------- |
| **Description**    | This use case allows users to change their account password.             |
| **Actor**          | Customer, Staff, Admin                                                   |
| **Trigger**        | When the user clicks on "Change Password" option in account settings.    |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in. |
| **Post-condition** | User password is updated in the system.                                  |

###### Sequence Flow

[sequence-manage-account-reset-password](../sequence/manage-account/reset-password)

###### Activities Flow

[activity-manage-account-reset-password](../activity/manage-account/reset-password)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR1     | **Displaying Rules:** The system displays a password change form with fields for current password and new password. (Refer to "Change Password" view in "View Description" file)                                                                                                                                                                                                                                                                                            |
| (4)      | BR2     | **Validation Rules:** The system validates password format in real-time: <br/>- New password must be at least 8 characters long<br/>- Must contain at least one uppercase letter<br/>- Must contain at least one lowercase letter<br/>- Must contain at least one number<br/>- Must contain at least one special character (!@#$%^&\*)<br/>- New password must be different from current password<br/>If validation fails, system displays error message (Refer to MSG 14). |
| (6)      | BR3     | **Validation Rules:** When user clicks "Update Password" button, system validates current password against stored hash using bcrypt comparison. If current password is incorrect, system displays error message (Refer to MSG 15). Otherwise, system hashes new password using bcrypt with minimum 10 rounds, updates password in "ACCOUNT" table (Refer to "Account" table in "DB Sheet" file), and displays success message (Refer to MSG 16).                            |

##### 2.1.1.9 View Account Activity

###### Use Case Description

| Name               | View Account Activity                                                                                                              |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows users to view their account activity history including login attempts, password changes, and profile updates. |
| **Actor**          | Customer, Staff, Admin                                                                                                             |
| **Trigger**        | When the user clicks on "Account Activity" option in account settings.                                                             |
| **Pre-condition**  | User's device must be connected to the internet. User must be signed in.                                                           |
| **Post-condition** | User can view their account activity history.                                                                                      |

###### Sequence Flow

Not provided in sequence diagrams.

###### Activities Flow

Not provided in activity diagrams.

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                       |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| N/A      | BR1     | **Querying Rules:** The system queries activity logs from "ACCOUNT_ACTIVITY" table (Refer to "AccountActivity" table in "DB Sheet" file) for the current user, ordered by timestamp descending.                   |
| N/A      | BR2     | **Displaying Rules:** The system displays account activity history including: timestamp, activity type, IP address, device information, and status. (Refer to "Account Activity" view in "View Description" file) |

##### 2.1.1.10 Recover Account

###### Use Case Description

| Name               | Recover Account                                                                           |
| :----------------- | :---------------------------------------------------------------------------------------- |
| **Description**    | This use case allows users to recover their account by requesting a password reset email. |
| **Actor**          | Customer, Staff, Admin                                                                    |
| **Trigger**        | When a user clicks on "Forgot Password" link on the sign-in page.                         |
| **Pre-condition**  | User's device must be connected to the internet.                                          |
| **Post-condition** | Password reset email is sent to user's registered email address.                          |

###### Sequence Flow

[sequence-manage-account-recover-account](../sequence/manage-account/recover-account)

###### Activities Flow

[activity-manage-account-recover-account](../activity/manage-account/recover-account)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR1     | **Displaying Rules:** The system displays a password recovery form with email address field. (Refer to "Password Recovery" view in "View Description" file)                                                                                                                                                                                                                                                                                                                      |
| (4)      | BR2     | **Validation Rules:** The system validates email format: <br/>- Must not be empty<br/>- Must follow valid email pattern (user@domain.com)<br/>If validation fails, system displays error message (Refer to MSG 1).                                                                                                                                                                                                                                                               |
| (6)      | BR3     | **Validation Rules:** The system checks if account exists in "ACCOUNT" table (Refer to "Account" table in "DB Sheet" file) with the provided email. If account is not found, system displays generic error message for security reasons (Refer to MSG 17). Otherwise, system generates a unique reset token with 1-hour expiration, stores it in "PASSWORD_RESET_TOKEN" table, sends password reset email containing reset link, and displays success message (Refer to MSG 18). |

#### 2.1.2 View Product Use Case

##### 2.1.2.1 View Product

###### Use Case Description

| Name               | View Product                                                                         |
| :----------------- | :----------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view the list of available products in the system. |
| **Actor**          | Customer                                                                             |
| **Trigger**        | When the customer navigates to the products section or home page.                    |
| **Pre-condition**  | Customer's device must be connected to the internet.                                 |
| **Post-condition** | Customer can view list of products and choose various product-related functions.     |

###### Sequence Flow

[sequence-view-product-view-product](../sequence/view-product/view-product)

###### Activities Flow

[activity-view-product-view-product](../activity/view-product/view-product)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                         |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** The system displays a "Product List" view showing available products with pagination (20 products per page). Each product displays: thumbnail image, name, price, rating, and quick action buttons. (Refer to "Product List" view in "View Description" file) |
| (2)      | BR2     | **Choosing Rules:** Customer can only choose one product-related feature at a time. Available options include: Add to Cart, Search Product, View Product Detail, View Product Reviews, and View Suggested Products.                                                                 |

##### 2.1.2.2 Search Product

###### Use Case Description

| Name               | Search Product                                                                    |
| :----------------- | :-------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to search for products using keywords and filters. |
| **Actor**          | Customer                                                                          |
| **Trigger**        | When the customer enters search criteria in the search box.                       |
| **Pre-condition**  | Customer's device must be connected to the internet.                              |
| **Post-condition** | Search results are displayed based on entered criteria.                           |

###### Sequence Flow

[sequence-view-product-search-product](../sequence/view-product/search-product)

###### Activities Flow

[activity-view-product-search-product](../activity/view-product/search-product)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR1     | **Searching Rules:** When the customer enters search criteria, the system uses Text_change() method to handle the search request with debounce delay of 300ms. System queries data in "PRODUCT" table (Refer to "Product" table in "DB Sheet" file) using SQL: "SELECT \* FROM Product WHERE name LIKE '%keyword%' OR description LIKE '%keyword%' OR category LIKE '%keyword%' AND status = 'active' ORDER BY relevance DESC". Filters can include: category, price range, rating, brand, availability. |
| (4)      | BR2     | **Displaying Rules:** If search is triggered on "Home View", system displays results inline with autocomplete suggestions. If user presses Enter, system redirects to "Product Search View" (Refer to "Product Search" view in "View Description" file) showing filtered results with applied search criteria and filter options.                                                                                                                                                                        |

##### 2.1.2.3 View Product Detail

###### Use Case Description

| Name               | View Product Detail                                                                |
| :----------------- | :--------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view detailed information of a specific product. |
| **Actor**          | Customer                                                                           |
| **Trigger**        | When the customer clicks on a product from the product list or search results.     |
| **Pre-condition**  | Customer's device must be connected to the internet.                               |
| **Post-condition** | Detailed product information is displayed to the customer.                         |

###### Sequence Flow

[sequence-view-product-view-product-detail](../sequence/view-product/view-product-detail)

###### Activities Flow

[activity-view-product-view-product-detail](../activity/view-product/view-product-detail)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                            |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR1     | **Querying Rules:** System queries product details from "PRODUCT" table (Refer to "Product" table in "DB Sheet" file) using SQL: "SELECT \* FROM Product WHERE productID = [Product.ID] AND status = 'active'". System also retrieves related data including product images, specifications, and inventory status.                                                                     |
| (4)      | BR2     | **Displaying Rules:** The system displays "Product Detail" view showing: product images (with zoom functionality), name, full description, price, discount (if any), availability status, specifications table, category, brand, SKU, quantity selector, Add to Cart button, rating summary, and related products section. (Refer to "Product Detail" view in "View Description" file) |

##### 2.1.2.4 View Product Reviews

###### Use Case Description

| Name               | View Product Reviews                                                                   |
| :----------------- | :------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view reviews and ratings for a specific product.     |
| **Actor**          | Customer                                                                               |
| **Trigger**        | When the customer clicks on the reviews section of a product detail page.              |
| **Pre-condition**  | Customer's device must be connected to the internet. Product must exist in the system. |
| **Post-condition** | Product reviews are displayed to the customer.                                         |

###### Sequence Flow

[sequence-view-product-view-product-reviews](../sequence/view-product/view-product-reviews)

###### Activities Flow

[activity-view-product-view-product-reviews](../activity/view-product/view-product-reviews)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                               |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (2)      | BR1     | **Querying Rules:** System queries reviews from "REVIEW" table (Refer to "Review" table in "DB Sheet" file) using SQL: "SELECT \* FROM Review WHERE productID = [Product.ID] AND status = 'approved' ORDER BY helpful_count DESC, created_date DESC LIMIT 10". System also calculates rating distribution statistics.                                                                                                     |
| (3)      | BR2     | **Displaying Rules:** The system displays reviews section showing: overall rating (1-5 stars), total review count, rating distribution chart, filter options (by rating, most helpful, most recent), and list of reviews with reviewer name, rating, review text, images (if any), helpful count, and review date. Pagination loads 10 reviews at a time. (Refer to "Product Reviews" section in "View Description" file) |

##### 2.1.2.5 View Suggested Products

###### Use Case Description

| Name               | View Suggested Products                                                                                  |
| :----------------- | :------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view products suggested based on the current product they are viewing. |
| **Actor**          | Customer                                                                                                 |
| **Trigger**        | Automatically displayed when viewing product details.                                                    |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer is viewing a product detail page.          |
| **Post-condition** | Suggested products are displayed based on recommendation algorithm.                                      |

###### Sequence Flow

[sequence-view-product-view-suggested-product](../sequence/view-product/view-suggested-product)

###### Activities Flow

[activity-view-product-view-suggested-product](../activity/view-product/view-suggested-product)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR1     | **Querying Rules:** System queries suggested products using recommendation algorithm based on: <br/>1. Same category as current product<br/>2. Frequently bought together<br/>3. Customer browsing history (if signed in)<br/>4. Similar price range<br/>System queries from "PRODUCT" table (Refer to "Product" table in "DB Sheet" file) with SQL: "SELECT \* FROM Product WHERE category = [current_category] AND productID != [current_product] AND status = 'active' ORDER BY similarity_score DESC LIMIT 8". |
| (3)      | BR2     | **Displaying Rules:** The system displays suggested products section at the bottom of product detail page showing: product thumbnail, name, price, rating, and quick view button. Display is organized in horizontal scrollable carousel with 4 products visible at a time. (Refer to "Suggested Products" section in "View Description" file)                                                                                                                                                                     |
| (3.2)    | BR3     | **Navigation Rules:** When customer clicks on a suggested product, system redirects to that product's detail page and recursively executes the "View Product Detail" use case for the selected product.                                                                                                                                                                                                                                                                                                            |

##### 2.1.2.6 Add Product to Cart

###### Use Case Description

| Name               | Add Product to Cart                                                                      |
| :----------------- | :--------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to add products to their shopping cart.                   |
| **Actor**          | Customer                                                                                 |
| **Trigger**        | When the customer clicks "Add to Cart" button after selecting quantity.                  |
| **Pre-condition**  | Customer's device must be connected to the internet. Product must be available in stock. |
| **Post-condition** | Product is added to customer's shopping cart.                                            |

###### Sequence Flow

[sequence-view-product-add-product-to-cart](../sequence/view-product/add-product-to-cart)

###### Activities Flow

[activity-view-product-add-product-to-cart](../activity/view-product/add-product-to-cart)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (2)      | BR1     | **Validation Rules:** When customer enters quantity and clicks "Add to Cart", system validates: <br/>- Quantity must be a positive integer<br/>- Quantity must be greater than 0<br/>- Quantity must not exceed available stock<br/>- Quantity must not exceed maximum purchase limit (if any)<br/>If validation fails, system displays error message (Refer to MSG 19).                                                                                                                                                  |
| (5)      | BR2     | **Validation Rules:** System validates cart data before storing: <br/>- Check if product still exists and is active in "PRODUCT" table<br/>- Check if product is still in stock<br/>- If product already exists in cart, add quantities together<br/>- If total quantity exceeds stock, display error (Refer to MSG 20)<br/>Otherwise, store/update cart item in "CART" table (Refer to "Cart" table in "DB Sheet" file) and display success notification with cart icon update showing new item count (Refer to MSG 21). |

#### 2.1.3 Manage Cart Use Case

##### 2.1.3.1 Manage Cart

###### Use Case Description

| Name               | Manage Cart                                                            |
| :----------------- | :--------------------------------------------------------------------- |
| **Description**    | This use case allows customers to manage items in their shopping cart. |
| **Actor**          | Customer                                                               |
| **Trigger**        | When the customer clicks on the cart icon or navigates to cart page.   |
| **Pre-condition**  | Customer's device must be connected to the internet.                   |
| **Post-condition** | Customer can view and manage cart items.                               |

###### Sequence Flow

[sequence-manage-cart-manage-cart](../sequence/manage-cart/manage-cart)

###### Activities Flow

[activity-manage-cart-manage-cart](../activity/manage-cart/manage-cart)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Querying Rules:** System queries cart items from "CART" table (Refer to "Cart" table in "DB Sheet" file) for the current customer using SQL: "SELECT \* FROM Cart c JOIN Product p ON c.productID = p.productID WHERE c.customerID = [Customer.ID]". System calculates: subtotal per item, cart subtotal, applicable discounts, shipping estimate, and total amount.                                                     |
| (2)      | BR2     | **Displaying Rules:** The system displays "Cart View" showing: list of cart items (each with product image, name, price, quantity selector, subtotal, remove button), cart summary panel (subtotal, discount, shipping, total), "Continue Shopping" button, and "Proceed to Checkout" button. If cart is empty, displays empty cart message with "Browse Products" link. (Refer to "Cart" view in "View Description" file) |
| (3)      | BR3     | **Choosing Rules:** Customer can choose from available cart management functions: Change Product Amount, Remove Product from Cart, or Purchase. Only one operation can be performed at a time.                                                                                                                                                                                                                             |

##### 2.1.3.2 Change Product Amount

###### Use Case Description

| Name               | Change Product Amount                                                            |
| :----------------- | :------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to change the quantity of products in their cart. |
| **Actor**          | Customer                                                                         |
| **Trigger**        | When the customer adjusts the quantity selector for a cart item.                 |
| **Pre-condition**  | Customer's device must be connected to the internet. Product must exist in cart. |
| **Post-condition** | Product quantity in cart is updated.                                             |

###### Sequence Flow

[sequence-manage-cart-change-product-amount](../sequence/manage-cart/change-product-amount)

###### Activities Flow

[activity-manage-cart-change-product-amount](../activity/manage-cart/change-product-amount)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR1     | **Validation Rules:** When customer changes product quantity, system validates: <br/>- New quantity must be a positive integer<br/>- New quantity must be greater than 0<br/>- New quantity must not exceed available stock<br/>- New quantity must not exceed maximum purchase limit<br/>If validation fails, system displays error message (Refer to MSG 19) and reverts to previous quantity. Otherwise, system updates quantity in "CART" table and displays success notification (Refer to MSG 22). |
| (5)      | BR2     | **Displaying Rules:** After successful update, system refreshes cart view showing: updated quantity, updated item subtotal, updated cart total. All calculations are updated in real-time without page reload.                                                                                                                                                                                                                                                                                           |

##### 2.1.3.3 Remove Product from Cart

###### Use Case Description

| Name               | Remove Product from Cart                                                         |
| :----------------- | :------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to remove products from their cart.               |
| **Actor**          | Customer                                                                         |
| **Trigger**        | When the customer clicks the "Remove" button for a cart item.                    |
| **Pre-condition**  | Customer's device must be connected to the internet. Product must exist in cart. |
| **Post-condition** | Product is removed from cart.                                                    |

###### Sequence Flow

[sequence-manage-cart-remove-product-from-cart](../sequence/manage-cart/remove-product-from-cart)

###### Activities Flow

[activity-manage-cart-remove-product-from-cart](../activity/manage-cart/remove-product-from-cart)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR1     | **Validation Rules:** System validates product exists in customer's cart by querying "CART" table (Refer to "Cart" table in "DB Sheet" file) using SQL: "SELECT \* FROM Cart WHERE customerID = [Customer.ID] AND productID = [Product.ID]". If product is not found in cart, system displays error message (Refer to MSG 23). Otherwise, system deletes cart item from "CART" table and displays success notification (Refer to MSG 24). |
| (5)      | BR2     | **Displaying Rules:** After successful removal, system updates cart view removing the item from display and recalculating: cart subtotal, applicable discounts, shipping estimate, and total amount. If cart becomes empty, displays empty cart message.                                                                                                                                                                                  |

##### 2.1.3.4 Purchase

###### Use Case Description

| Name               | Purchase                                                                                                              |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to proceed to checkout and purchase items in their cart.                               |
| **Actor**          | Customer                                                                                                              |
| **Trigger**        | When the customer clicks "Proceed to Checkout" button.                                                                |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. Cart must contain at least one item. |
| **Post-condition** | Customer is redirected to checkout page.                                                                              |

###### Sequence Flow

[sequence-manage-cart-purchase](../sequence/manage-cart/purchase)

###### Activities Flow

[activity-manage-cart-purchase](../activity/manage-cart/purchase)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR1     | **Validation Rules:** Before proceeding to checkout, system validates all cart items: <br/>- All products must still exist and be active in "PRODUCT" table<br/>- All products must be in stock with sufficient quantity<br/>- Cart must not be empty<br/>- Cart total must meet minimum order amount (if applicable)<br/>If any validation fails, system displays specific error message (Refer to MSG 25 for invalid cart, MSG 26 for invalid product) and highlights problematic items. |
| (4)      | BR2     | **Redirect Rules:** If all validations pass, system closes Cart View and redirects customer to Checkout View with cart data. System creates temporary order session with cart items, calculated totals, and customer information. (Refer to "Checkout" view in "View Description" file)                                                                                                                                                                                                    |

#### 2.1.4 View Order Use Case

##### 2.1.4.1 View Order

###### Use Case Description

| Name               | View Order                                                                       |
| :----------------- | :------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view their order history and manage orders.    |
| **Actor**          | Customer                                                                         |
| **Trigger**        | When the customer navigates to "My Orders" section.                              |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. |
| **Post-condition** | Customer can view list of orders and choose order management functions.          |

###### Sequence Flow

[sequence-view-order-view-order](../sequence/view-order/view-order)

###### Activities Flow

[activity-view-order-view-order](../activity/view-order/view-order)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                          |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Querying Rules:** System queries orders from "ORDER" table (Refer to "Order" table in "DB Sheet" file) for current customer using SQL: "SELECT \* FROM Order WHERE customerID = [Customer.ID] ORDER BY created_date DESC". System retrieves order summary including: order ID, date, status, total amount, and item count.                         |
| (2)      | BR2     | **Displaying Rules:** The system displays "Order Management" view showing paginated list of orders (10 per page). Each order displays: order number, date, status badge, total amount, item count, and quick action buttons. Orders are grouped by status: Active Orders, Past Orders. (Refer to "Order Management" view in "View Description" file) |
| (3)      | BR3     | **Choosing Rules:** Customer can choose from available order functions: Cancel Order, Return Product, Review Product, Search Order, or View Order Detail. Only one operation can be performed at a time.                                                                                                                                             |

##### 2.1.4.2 Search Order

###### Use Case Description

| Name               | Search Order                                                                        |
| :----------------- | :---------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to search for specific orders using search criteria. |
| **Actor**          | Customer                                                                            |
| **Trigger**        | When the customer enters search criteria in the order search box.                   |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in.    |
| **Post-condition** | Filtered order results are displayed.                                               |

###### Sequence Flow

[sequence-view-order-search-order](../sequence/view-order/search-order)

###### Activities Flow

[activity-view-order-search-order](../activity/view-order/search-order)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (3)      | BR1     | **Searching Rules:** When customer enters search criteria, system uses Text_change() method with debounce delay of 300ms. System queries "ORDER" table (Refer to "Order" table in "DB Sheet" file) using SQL: "SELECT \* FROM Order WHERE customerID = [Customer.ID] AND (orderID LIKE '%keyword%' OR status = 'keyword' OR DATE(created_date) = 'keyword') ORDER BY created_date DESC". Search can filter by: order ID, order date, order status (Pending, Processing, Shipped, Delivered, Cancelled). |
| (4)      | BR2     | **Displaying Rules:** System displays "Order Management" view with filtered results showing matching orders. If no results found, displays "No orders found" message with "Clear Search" option. Active filters are displayed as removable tags above the order list.                                                                                                                                                                                                                                   |

##### 2.1.4.3 View Order Detail

###### Use Case Description

| Name               | View Order Detail                                                                                                   |
| :----------------- | :------------------------------------------------------------------------------------------------------------------ |
| **Description**    | This use case allows customers to view detailed information of a specific order.                                    |
| **Actor**          | Customer                                                                                                            |
| **Trigger**        | When the customer clicks on an order from the order list.                                                           |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. Order must belong to the customer. |
| **Post-condition** | Detailed order information is displayed.                                                                            |

###### Sequence Flow

[sequence-view-order-view-order-detail](../sequence/view-order/view-order-detail)

###### Activities Flow

[activity-view-order-view-order-detail](../activity/view-order/view-order-detail)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR1     | **Querying Rules:** System queries order details from "ORDER" and "ORDER_ITEM" tables (Refer to "Order" and "OrderItem" tables in "DB Sheet" file) using SQL: "SELECT \* FROM Order o JOIN OrderItem oi ON o.orderID = oi.orderID JOIN Product p ON oi.productID = p.productID WHERE o.orderID = [Order.ID] AND o.customerID = [Customer.ID]". System also retrieves order timeline, shipping information, and payment details.                                                                              |
| (4)      | BR2     | **Displaying Rules:** The system displays "Order Detail" view showing: order header (order number, date, status), order timeline (ordered, processing, shipped, delivered), product list (each with image, name, quantity, price, review button if delivered), order summary (subtotal, shipping, tax, discount, total), shipping address, billing address, payment method, and available actions (Cancel Order, Return Product, Contact Support). (Refer to "Order Detail" view in "View Description" file) |

##### 2.1.4.4 Cancel Order

###### Use Case Description

| Name               | Cancel Order                                                                                                                                  |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to cancel a pending order.                                                                                     |
| **Actor**          | Customer                                                                                                                                      |
| **Trigger**        | When the customer clicks "Cancel Order" button in order detail view.                                                                          |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. Order must be in cancellable status (Pending or Processing). |
| **Post-condition** | Order is cancelled and status is updated.                                                                                                     |

###### Sequence Flow

[sequence-view-order-cancel-order](../sequence/view-order/cancel-order)

###### Activities Flow

[activity-view-order-cancel-order](../activity/view-order/cancel-order)

###### Business Rules

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :----------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)          | BR1     | **Displaying Rules:** The system displays a confirmation dialog asking customer to confirm order cancellation with message: "Are you sure you want to cancel this order? This action cannot be undone." (Refer to "Confirmation Dialog" view in "View Description" file)                                                                                                                                                                                                                                                                       |
| (2.1), (2.2) | BR2     | **Selection Rules:** Customer must confirm cancellation. If customer clicks "Cancel" button, dialog closes and use case ends. If customer clicks "Confirm" button, system proceeds with cancellation.                                                                                                                                                                                                                                                                                                                                          |
| (4)          | BR3     | **Validation Rules:** System validates order can be cancelled by checking: <br/>- Order status must be "Pending" or "Processing"<br/>- Order must not have been shipped<br/>- Order must belong to the customer<br/>If validation fails, system displays error message (Refer to MSG 27). Otherwise, system updates order status to "Cancelled" in "ORDER" table, restores product inventory, processes refund if payment was made, creates cancellation record in "ORDER_HISTORY" table, and displays success notification (Refer to MSG 28). |

##### 2.1.4.5 Return Product

###### Use Case Description

| Name               | Return Product                                                                                                                                  |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to return a product from a completed order.                                                                      |
| **Actor**          | Customer                                                                                                                                        |
| **Trigger**        | When the customer clicks "Return" button for a product in order detail view.                                                                    |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. Order must be delivered. Product must be within return period. |
| **Post-condition** | Return request is created and product status is updated.                                                                                        |

###### Sequence Flow

[sequence-view-order-return-product](../sequence/view-order/return-product)

###### Activities Flow

[activity-view-order-return-product](../activity/view-order/return-product)

###### Business Rules

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (2)          | BR1     | **Displaying Rules:** The system displays a confirmation dialog asking customer to confirm product return with message: "Do you want to return this product? Please ensure the product is in original condition with all accessories." Also displays return policy summary and estimated refund amount. (Refer to "Confirmation Dialog" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                |
| (2.1), (2.2) | BR2     | **Selection Rules:** Customer must confirm return. If customer clicks "Cancel" button, dialog closes and use case ends. If customer clicks "Confirm" button, system proceeds with return request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| (4)          | BR3     | **Validation Rules:** System validates product can be returned by checking: <br/>- Order status must be "Delivered"<br/>- Product must be within return period (typically 30 days from delivery)<br/>- Product must not be marked as non-returnable<br/>- Product must not have been previously returned<br/>If validation fails, system displays error message (Refer to MSG 29). Otherwise, system creates return request in "PRODUCT_RETURN" table, updates product status to "Return Requested" in "ORDER_ITEM" table, sends return instructions to customer's email, creates return record in "ORDER_HISTORY" table, and displays success notification with return instructions (Refer to MSG 30). |

##### 2.1.4.6 Review Product

###### Use Case Description

| Name               | Review Product                                                                                                                                     |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to write a review for a product they have purchased.                                                                |
| **Actor**          | Customer                                                                                                                                           |
| **Trigger**        | When the customer clicks "Write Review" button for a delivered product.                                                                            |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. Order must be delivered. Product must not have been reviewed yet. |
| **Post-condition** | Product review is created and stored in the system.                                                                                                |

###### Sequence Flow

[sequence-view-order-review-product](../sequence/view-order/review-product)

###### Activities Flow

[activity-view-order-review-product](../activity/view-order/review-product)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR1     | **Displaying Rules:** The system displays "Product Review" form with empty fields including: star rating selector (1-5 stars), review title input (max 100 characters), review text area (max 500 characters), image upload section (optional, max 5 images), and Submit button. (Refer to "Product Review" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                  |
| (4)      | BR2     | **Validation Rules:** System validates review content in real-time: <br/>- Star rating must be selected (required)<br/>- Review title must not be empty and must be 10-100 characters<br/>- Review text must not be empty and must be 50-500 characters<br/>- Review must not contain profanity or inappropriate content<br/>- If images are uploaded, each must be < 2MB and in JPG/PNG format<br/>If validation fails, system displays error message (Refer to MSG 31).                                                                                                                                                                                                                                                     |
| (7)      | BR3     | **Validation Rules:** When customer clicks "Submit" button, system validates review data: <br/>- Customer must have purchased the product<br/>- Customer must not have reviewed this product before<br/>- All required fields must be filled<br/>- Images (if provided) must be valid<br/>If validation fails, system displays error message (Refer to MSG 32). Otherwise, system stores review in "REVIEW" table with status "Pending" for moderation, stores review images in "REVIEW_IMAGE" table, updates product rating statistics, creates review record in "ORDER_HISTORY" table, and displays success notification (Refer to MSG 33) with message "Thank you for your review! It will be published after moderation." |

#### 2.1.5 Contact Support Use Case

##### 2.1.5.1 Contact Support

###### Use Case Description

| Name               | Contact Support                                                                                |
| :----------------- | :--------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to contact customer support through third-party chat interface. |
| **Actor**          | Customer                                                                                       |
| **Trigger**        | When the customer clicks "Contact Support" or "Help" button.                                   |
| **Pre-condition**  | Customer's device must be connected to the internet.                                           |
| **Post-condition** | Customer is redirected to support chat interface.                                              |

###### Sequence Flow

[sequence-contact-support-contact-support](../sequence/contact-support/contact-support)

###### Activities Flow

[activity-contact-support-contact-support](../activity/contact-support/contact-support)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                   |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR1     | **Redirect Rules:** The system redirects customer to third-party chat support interface (e.g., Tawk.to, Zendesk Chat, Intercom). System passes customer context including: customer ID (if signed in), current page URL, and basic customer information to pre-populate chat. |
| (3)      | BR2     | **Interaction Rules:** Customer interacts with support chat independently. System does not control or monitor chat interactions. Chat history and support tickets are managed by the third-party support system.                                                              |

#### 2.1.6 View Customer Self Report Use Case

##### 2.1.6.1 View Customer Self Report

###### Use Case Description

| Name               | View Customer Self Report                                                        |
| :----------------- | :------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view their own activity and purchase reports.  |
| **Actor**          | Customer                                                                         |
| **Trigger**        | When the customer navigates to "My Reports" or "My Statistics" section.          |
| **Pre-condition**  | Customer's device must be connected to the internet. Customer must be signed in. |
| **Post-condition** | Customer activity report is displayed.                                           |

###### Sequence Flow

[sequence-view-customer-self-report-view-customer-self-report](../sequence/view-customer-self-report/view-customer-self-report)

###### Activities Flow

[activity-view-customer-self-report-view-customer-self-report](../activity/view-customer-self-report/view-customer-self-report)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                          |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** The system displays "Customer Report" view with empty report charts and filter options. Available report types include: Purchase History, Spending Analysis, Order Statistics, Product Categories. Time range options include: Last 7 days, Last 30 days, Last 3 months, Last year, Custom range. (Refer to "Customer Report" view in "View Description" file) |
| (4)      | BR2     | **Querying Rules:** When customer selects report type and time range, system queries data from "ORDER", "ORDER_ITEM", and "CUSTOMER_REPORT" tables (Refer to corresponding tables in "DB Sheet" file) using SQL based on selected options. System calculates statistics including: total orders, total spending, average order value, most purchased categories, spending trends.    |
| (6)      | BR3     | **Displaying Rules:** System displays report data in visual format using charts and graphs: <br/>- Bar chart for spending by time period<br/>- Pie chart for spending by category<br/>- Line chart for order trends<br/>- Table for top purchased products<br/>System also displays summary statistics cards showing key metrics.                                                    |

#### 2.1.7 View Document Use Case

##### 2.1.7.1 View Document

###### Use Case Description

| Name               | View Document                                                                |
| :----------------- | :--------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view system documents and guides.          |
| **Actor**          | Customer                                                                     |
| **Trigger**        | When the customer navigates to "Help Center", "FAQ", or "Documents" section. |
| **Pre-condition**  | Customer's device must be connected to the internet.                         |
| **Post-condition** | Document list and selected document content are displayed.                   |

###### Sequence Flow

[sequence-view-document-view-document](../sequence/view-document/view-document)

###### Activities Flow

[activity-view-document-view-document](../activity/view-document/view-document)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                            |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR1     | **Querying Rules:** System queries documents from "DOCUMENT" table (Refer to "Document" table in "DB Sheet" file) using SQL: "SELECT \* FROM Document WHERE status = 'published' AND target_audience LIKE '%customer%' ORDER BY category, title". Documents are organized by categories: Getting Started, Shopping Guide, Payment & Shipping, Returns & Refunds, Account Management, Terms & Policies. |
| (3)      | BR2     | **Displaying Rules:** The system displays "Document Management" view showing: document categories in sidebar, document list with title and brief description, search box for filtering documents. (Refer to "Document Management" view in "View Description" file)                                                                                                                                     |
| (3.3)    | BR3     | **Searching Rules:** If customer enters search criteria, system queries documents using SQL: "SELECT \* FROM Document WHERE status = 'published' AND (title LIKE '%keyword%' OR content LIKE '%keyword%') ORDER BY relevance DESC". Search results display with highlighted keywords.                                                                                                                  |
| (7)      | BR4     | **Displaying Rules:** When customer selects a document, system displays "Document Detail" view showing: document title, last updated date, full document content (formatted with headings, lists, images), related documents section, "Was this helpful?" feedback buttons. (Refer to "Document Detail" view in "View Description" file)                                                               |

#### 2.1.8 Manage Product Use Case (Staff)

##### 2.1.8.1 Manage Product

###### Use Case Description

| Name               | Manage Product                                                                                   |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to manage products in the system.                                     |
| **Actor**          | Staff                                                                                            |
| **Trigger**        | When the staff navigates to "Product Management" section.                                        |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | Staff can view product list and choose product management functions.                             |

###### Sequence Flow

[sequence-manage-product-manage-product](../sequence/manage-product/manage-product)

###### Activities Flow

[activity-manage-product-manage-product](../activity/manage-product/manage-product)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                             |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (1)      | BR1     | **Querying Rules:** System queries all products from "PRODUCT" table (Refer to "Product" table in "DB Sheet" file) using SQL: "SELECT \* FROM Product ORDER BY created_date DESC". System retrieves: product ID, name, category, price, stock quantity, status, and last modified date.                                                                 |
| (2)      | BR2     | **Displaying Rules:** The system displays "Product Management" view showing: product list in table format with pagination (20 products per page), filter options (category, status, stock level), search box, "Add Product" button, and action buttons (Edit, Delete) for each product. (Refer to "Product Management" view in "View Description" file) |
| (3)      | BR3     | **Choosing Rules:** Staff can choose from available product management functions: Add Product, Delete Product, Delete Review, Search Product, or Update Product. Only one operation can be performed at a time.                                                                                                                                         |

##### 2.1.8.2 Add Product

###### Use Case Description

| Name               | Add Product                                                                                      |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to add a new product to the system.                                   |
| **Actor**          | Staff                                                                                            |
| **Trigger**        | When the staff clicks "Add Product" button.                                                      |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | New product is created and stored in the system.                                                 |

###### Sequence Flow

[sequence-manage-product-add-product](../sequence/manage-product/add-product)

###### Activities Flow

[activity-manage-product-add-product](../activity/manage-product/add-product)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** The system displays "Product Detail" form with empty fields including: product name, category dropdown, description editor, price, stock quantity, SKU, brand, specifications table, product images uploader (max 10 images), status selector (Active/Inactive), and Save button. (Refer to "Product Detail" view in "View Description" file)                                                                                                                                                                                                                                                                                          |
| (3)      | BR2     | **Validation Rules:** System validates product data in real-time: <br/>- Product name: required, 5-200 characters<br/>- Category: required, must select from predefined categories<br/>- Description: required, minimum 50 characters<br/>- Price: required, must be positive number, maximum 10 digits<br/>- Stock quantity: required, must be non-negative integer<br/>- SKU: required, unique, alphanumeric, 5-30 characters<br/>- Product images: at least 1 required, each < 5MB, JPG/PNG format<br/>If validation fails, system displays error message (Refer to MSG 34).                                                                              |
| (5)      | BR3     | **Validation Rules:** When staff clicks "Save" button, system validates product data: <br/>- Check if SKU is unique in "PRODUCT" table<br/>- Validate all required fields are filled<br/>- Validate images are valid and uploaded successfully<br/>If validation fails, system displays error message (Refer to MSG 35). Otherwise, system stores product data in "PRODUCT" table, stores product images in "PRODUCT_IMAGE" table, creates product specifications in "PRODUCT_SPECIFICATION" table if provided, generates product slug for URL, and displays success notification (Refer to MSG 36). System then closes the form and refreshes product list. |

##### 2.1.8.3 Update Product

###### Use Case Description

| Name               | Update Product                                                                                                                     |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to update existing product information.                                                                 |
| **Actor**          | Staff                                                                                                                              |
| **Trigger**        | When the staff clicks "Edit" button for a product.                                                                                 |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. Product must exist in the system. |
| **Post-condition** | Product information is updated in the system.                                                                                      |

###### Sequence Flow

[sequence-manage-product-update-product](../sequence/manage-product/update-product)

###### Activities Flow

[activity-manage-product-update-product](../activity/manage-product/update-product)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR1     | **Querying Rules:** System queries product details from "PRODUCT", "PRODUCT_IMAGE", and "PRODUCT_SPECIFICATION" tables (Refer to corresponding tables in "DB Sheet" file) using SQL: "SELECT \* FROM Product WHERE productID = [Product.ID]" along with related data from joined tables.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| (4)      | BR2     | **Displaying Rules:** The system displays "Product Detail" form filled with current product data including: all product fields, existing images with delete option, existing specifications, and Save button. (Refer to "Product Detail" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| (6)      | BR3     | **Validation Rules:** System validates updated product data in real-time using same validation rules as Add Product (BR2 from 2.1.8.2). If validation fails, system displays error message (Refer to MSG 34).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| (8)      | BR4     | **Validation Rules:** When staff clicks "Save" button, system validates updated data: <br/>- Check if SKU is unique (excluding current product) in "PRODUCT" table<br/>- Validate all required fields are filled<br/>- Validate new images (if uploaded) are valid<br/>- At least 1 product image must remain<br/>If validation fails, system displays error message (Refer to MSG 35). Otherwise, system updates product data in "PRODUCT" table, adds/deletes product images in "PRODUCT_IMAGE" table as needed, updates product specifications in "PRODUCT_SPECIFICATION" table, updates modified timestamp, and displays success notification (Refer to MSG 37). System then closes the form and refreshes product list. |

##### 2.1.8.4 Delete Product

###### Use Case Description

| Name               | Delete Product                                                                                                                     |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to delete a product from the system.                                                                    |
| **Actor**          | Staff                                                                                                                              |
| **Trigger**        | When the staff clicks "Delete" button for a product.                                                                               |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. Product must exist in the system. |
| **Post-condition** | Product is deleted from the system.                                                                                                |

###### Sequence Flow

[sequence-manage-product-delete-product](../sequence/manage-product/delete-product)

###### Activities Flow

[activity-manage-product-delete-product](../activity/manage-product/delete-product)

###### Business Rules

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :----------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)          | BR1     | **Displaying Rules:** The system displays a confirmation dialog asking staff to confirm product deletion with message: "Are you sure you want to delete this product? This action cannot be undone. All product data including reviews will be removed." (Refer to "Confirmation Dialog" view in "View Description" file)                                                                                                                                                                                                                                                                           |
| (2.1), (2.2) | BR2     | **Selection Rules:** Staff must confirm deletion. If staff clicks "Cancel" button, dialog closes and use case ends. If staff clicks "Confirm" button, system proceeds with deletion.                                                                                                                                                                                                                                                                                                                                                                                                                |
| (4)          | BR3     | **Validation Rules:** System validates product can be deleted by checking: <br/>- Product must not have pending orders<br/>- Product must not be in active shopping carts (or system will notify cart owners)<br/>If validation fails, system displays error message (Refer to MSG 38). Otherwise, system performs soft delete by updating status to "Deleted" in "PRODUCT" table (keeping data for audit purposes), removes product from search index, archives product images, archives product reviews, and displays success notification (Refer to MSG 39). System then refreshes product list. |

##### 2.1.8.5 Search Product

###### Use Case Description

| Name               | Search Product (Staff)                                                                           |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to search for products in the product management system.              |
| **Actor**          | Staff                                                                                            |
| **Trigger**        | When the staff enters search criteria in the search box.                                         |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | Filtered product results are displayed.                                                          |

###### Sequence Flow

[sequence-manage-product-search-product](../sequence/manage-product/search-product)

###### Activities Flow

[activity-manage-product-search-product](../activity/manage-product/search-product)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR1     | **Searching Rules:** When staff enters search criteria, system uses Text_change() method with debounce delay of 300ms. System queries "PRODUCT" table (Refer to "Product" table in "DB Sheet" file) using SQL: "SELECT \* FROM Product WHERE (productID LIKE '%keyword%' OR name LIKE '%keyword%' OR SKU LIKE '%keyword%' OR category LIKE '%keyword%') AND status != 'Deleted' ORDER BY name ASC". Filters can include: category, status (Active/Inactive), stock level (In Stock/Low Stock/Out of Stock), price range. |
| (4)      | BR2     | **Displaying Rules:** System displays "Product Management" view with filtered results showing matching products. Active filters are displayed as removable tags above the product table. Result count is displayed. If no results found, displays "No products found" message with "Clear Search" option.                                                                                                                                                                                                                |

##### 2.1.8.6 Delete Review

###### Use Case Description

| Name               | Delete Review                                                                                                                     |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to delete inappropriate product reviews.                                                               |
| **Actor**          | Staff                                                                                                                             |
| **Trigger**        | When the staff clicks "Delete" button for a review in product review management section.                                          |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. Review must exist in the system. |
| **Post-condition** | Review is deleted from the system.                                                                                                |

###### Sequence Flow

[sequence-manage-product-delete-review](../sequence/manage-product/delete-review)

###### Activities Flow

[activity-manage-product-delete-review](../activity/manage-product/delete-review)

###### Business Rules

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (2)          | BR1     | **Displaying Rules:** The system displays a confirmation dialog asking staff to confirm review deletion with message: "Are you sure you want to delete this review? This action cannot be undone." Dialog also shows review content preview. (Refer to "Confirmation Dialog" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                                 |
| (2.1), (2.2) | BR2     | **Selection Rules:** Staff must confirm deletion. If staff clicks "Cancel" button, dialog closes and use case ends. If staff clicks "Confirm" button, system proceeds with deletion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| (4)          | BR3     | **Validation Rules:** System validates review exists in "REVIEW" table (Refer to "Review" table in "DB Sheet" file) using SQL: "SELECT \* FROM Review WHERE reviewID = [Review.ID]". If review not found, system displays error message (Refer to MSG 40). Otherwise, system deletes review from "REVIEW" table, deletes associated review images from "REVIEW_IMAGE" table, updates product rating statistics (recalculates average rating without deleted review), creates deletion audit log in "REVIEW_AUDIT" table with staff ID and reason, sends notification to review author about deletion (if applicable), and displays success notification (Refer to MSG 41). System then refreshes review list. |

#### 2.1.9 Manage User Use Case

##### 2.1.9.1 Manage User

###### Use Case Description

| Name               | Manage User                                                                                            |
| :----------------- | :----------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff and admin to manage user accounts in the system.                            |
| **Actor**          | Staff, Admin                                                                                           |
| **Trigger**        | When the staff/admin navigates to "User Management" section.                                           |
| **Pre-condition**  | Actor's device must be connected to the internet. Actor must be signed in with appropriate privileges. |
| **Post-condition** | Actor can view user list and choose user management functions.                                         |

###### Sequence Flow

[sequence-manage-user-manage-user](../sequence/manage-user/manage-user)

###### Activities Flow

[activity-manage-user-manage-user](../activity/manage-user/manage-user)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Querying Rules:** System queries users from "USER" table (Refer to "User" table in "DB Sheet" file) based on actor's role: <br/>- Staff: Can view only customers using SQL: "SELECT _ FROM User WHERE role = 'customer' ORDER BY created_date DESC"<br/>- Admin: Can view all users using SQL: "SELECT _ FROM User ORDER BY created_date DESC"<br/>System retrieves: user ID, name, email, role, status, registration date. |
| (2)      | BR2     | **Displaying Rules:** The system displays "User Management" view showing: user list in table format with pagination (20 users per page), filter options (role, status, registration date), search box, and available action buttons based on actor's role. (Refer to "User Management" view in "View Description" file)                                                                                                       |
| (3)      | BR3     | **Choosing Rules:** Actor can choose from available user management functions based on their role: <br/>- Staff: Search User, View Customer Report<br/>- Admin: All functions including Change User Roles, Delete User, Search User, View Customer Report, View Staff Report                                                                                                                                                  |

##### 2.1.9.2 Search User

###### Use Case Description

| Name               | Search User                                                                                            |
| :----------------- | :----------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff and admin to search for users in the system.                                |
| **Actor**          | Staff, Admin                                                                                           |
| **Trigger**        | When the actor enters search criteria in the user search box.                                          |
| **Pre-condition**  | Actor's device must be connected to the internet. Actor must be signed in with appropriate privileges. |
| **Post-condition** | Filtered user results are displayed.                                                                   |

###### Sequence Flow

[sequence-manage-user-search-user](../sequence/manage-user/search-user)

###### Activities Flow

[activity-manage-user-search-user](../activity/manage-user/search-user)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR1     | **Searching Rules:** When actor enters search criteria, system uses Text*change() method with debounce delay of 300ms. System queries "USER" table (Refer to "User" table in "DB Sheet" file) based on actor's role: <br/>- Staff searches customers only: "SELECT * FROM User WHERE role = 'customer' AND (name LIKE '%keyword%' OR email LIKE '%keyword%' OR userID LIKE '%keyword%') ORDER BY name ASC"<br/>- Admin searches all users: "SELECT \_ FROM User WHERE (name LIKE '%keyword%' OR email LIKE '%keyword%' OR userID LIKE '%keyword%') ORDER BY name ASC"<br/>Filters can include: role, status (Active/Inactive/Suspended), registration date range. |
| (4)      | BR2     | **Displaying Rules:** System displays "User Management" view with filtered results showing matching users. Active filters are displayed as removable tags. Result count is displayed. If no results found, displays "No users found" message with "Clear Search" option.                                                                                                                                                                                                                                                                                                                                                                                          |

##### 2.1.9.3 Change User Roles (Admin only)

###### Use Case Description

| Name               | Change User Roles                                                                                                               |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| **Description**    | This use case allows admin to change a user's role in the system.                                                               |
| **Actor**          | Admin                                                                                                                           |
| **Trigger**        | When the admin clicks "Change Role" button for a user.                                                                          |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. User must exist in the system. |
| **Post-condition** | User's role is updated in the system.                                                                                           |

###### Sequence Flow

[sequence-manage-user-change-user-roles](../sequence/manage-user/change-user-roles)

###### Activities Flow

[activity-manage-user-change-user-roles](../activity/manage-user/change-user-roles)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR1     | **Querying Rules:** System queries user details from "USER" table (Refer to "User" table in "DB Sheet" file) using SQL: "SELECT \* FROM User WHERE userID = [User.ID]". System retrieves current role and associated permissions.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| (4)      | BR2     | **Displaying Rules:** The system displays "User Detail" view showing: current user information, current role badge, role selector dropdown (Customer, Staff, Admin), role descriptions, and "Change Roles" button. (Refer to "User Detail" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                                 |
| (6)      | BR3     | **Validation Rules:** System validates role change in real-time: <br/>- New role must be different from current role<br/>- New role must be one of: Customer, Staff, Admin<br/>- Admin cannot change their own role to prevent lockout<br/>If validation fails, system displays error message (Refer to MSG 42).                                                                                                                                                                                                                                                                                                                                                            |
| (8)      | BR4     | **Validation Rules:** When admin clicks "Change Roles" button, system validates: <br/>- User is not the current admin (self)<br/>- New role is valid<br/>- No pending administrative actions by user (if demoting from Staff/Admin)<br/>If validation fails, system displays error message (Refer to MSG 43). Otherwise, system updates role in "USER" table, updates permissions in "USER_PERMISSION" table, creates role change audit log in "USER_AUDIT" table, invalidates user's current session to force re-authentication, sends notification email to user about role change, and displays success notification (Refer to MSG 44). System then refreshes user list. |

##### 2.1.9.4 Delete User (Admin only)

###### Use Case Description

| Name               | Delete User                                                                                                                     |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| **Description**    | This use case allows admin to delete a user account from the system.                                                            |
| **Actor**          | Admin                                                                                                                           |
| **Trigger**        | When the admin clicks "Delete" button for a user.                                                                               |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. User must exist in the system. |
| **Post-condition** | User account is deleted from the system.                                                                                        |

###### Sequence Flow

[sequence-manage-user-delete-user](../sequence/manage-user/delete-user)

###### Activities Flow

[activity-manage-user-delete-user](../activity/manage-user/delete-user)

###### Business Rules

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :----------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)          | BR1     | **Displaying Rules:** The system displays a confirmation dialog asking admin to confirm user deletion with message: "Are you sure you want to delete this user account? This action cannot be undone. All user data will be removed." Dialog shows user's name and email for confirmation. (Refer to "Confirmation Dialog" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                                           |
| (2.1), (2.2) | BR2     | **Selection Rules:** Admin must confirm deletion. If admin clicks "Cancel" button, dialog closes and use case ends. If admin clicks "Confirm" button, system proceeds with deletion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| (4)          | BR3     | **Validation Rules:** System validates user can be deleted by checking: <br/>- User is not the current admin (self)<br/>- User must not have pending orders (orders must be completed or cancelled)<br/>- User must not have active disputes or support tickets<br/>If validation fails, system displays error message (Refer to MSG 45). Otherwise, system performs soft delete by updating status to "Deleted" in "USER" table (keeping data for audit purposes), anonymizes user's personal data (replaces with "Deleted User") for privacy compliance, archives user's orders and reviews, invalidates all user sessions, creates deletion audit log in "USER_AUDIT" table, and displays success notification (Refer to MSG 46). System then refreshes user list. |

##### 2.1.9.5 View Customer Report

###### Use Case Description

| Name               | View Customer Report                                                                                                                      |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff and admin to view customer activity and purchase reports.                                                      |
| **Actor**          | Staff, Admin                                                                                                                              |
| **Trigger**        | When the actor clicks "View Report" button for a customer.                                                                                |
| **Pre-condition**  | Actor's device must be connected to the internet. Actor must be signed in with appropriate privileges. Customer must exist in the system. |
| **Post-condition** | Customer activity report is displayed.                                                                                                    |

###### Sequence Flow

[sequence-manage-user-view-customer-report](../sequence/manage-user/view-customer-report)

###### Activities Flow

[activity-manage-user-view-customer-report](../activity/manage-user/view-customer-report)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** The system displays "Customer Report" view with empty report charts and filter options. Available report types include: Purchase History, Spending Analysis, Order Statistics, Product Preferences, Account Activity. Time range options include: Last 7 days, Last 30 days, Last 3 months, Last year, Custom range. (Refer to "Customer Report" view in "View Description" file)                                                                                                                |
| (4)      | BR2     | **Querying Rules:** When actor selects customer, report type, and time range, system queries data from "ORDER", "ORDER_ITEM", and "CUSTOMER_REPORT" tables (Refer to corresponding tables in "DB Sheet" file) using SQL based on selected options: "SELECT \* FROM Order WHERE customerID = [Customer.ID] AND DATE(created_date) BETWEEN [start_date] AND [end_date]". System calculates: total orders, total spending, average order value, order frequency, most purchased categories, spending trends, return rate. |
| (6)      | BR3     | **Displaying Rules:** System displays report data in visual format using charts and graphs: <br/>- Bar chart for spending by time period<br/>- Pie chart for spending by category<br/>- Line chart for order trends over time<br/>- Table for top purchased products<br/>- Summary statistics cards showing key metrics<br/>- Customer lifetime value (CLV) indicator<br/>Report can be exported to PDF or Excel format.                                                                                               |

##### 2.1.9.6 View Staff Report (Admin only)

###### Use Case Description

| Name               | View Staff Report                                                                                                                       |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to view staff performance and activity reports.                                                              |
| **Actor**          | Admin                                                                                                                                   |
| **Trigger**        | When the admin clicks "View Report" button for a staff member.                                                                          |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. Staff member must exist in the system. |
| **Post-condition** | Staff performance report is displayed.                                                                                                  |

###### Sequence Flow

[sequence-manage-user-view-staff-report](../sequence/manage-user/view-staff-report)

###### Activities Flow

[activity-manage-user-view-staff-report](../activity/manage-user/view-staff-report)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** The system displays "Staff Report" view with empty report charts and filter options. Available report types include: Product Management Activity, User Management Activity, Review Moderation Activity, Order Processing Activity, Overall Performance. Time range options include: Last 7 days, Last 30 days, Last 3 months, Last year, Custom range. (Refer to "Staff Report" view in "View Description" file)                                                                                                          |
| (4)      | BR2     | **Querying Rules:** When admin selects staff, report type, and time range, system queries data from "STAFF_ACTIVITY", "PRODUCT", "REVIEW", "USER_AUDIT" tables (Refer to corresponding tables in "DB Sheet" file) using SQL based on selected options: "SELECT \* FROM StaffActivity WHERE staffID = [Staff.ID] AND DATE(activity_date) BETWEEN [start_date] AND [end_date]". System calculates: total products added/updated, total reviews moderated, total users managed, average response time, activity distribution, performance metrics. |
| (6)      | BR3     | **Displaying Rules:** System displays report data in visual format: <br/>- Bar chart for activities by type<br/>- Line chart for activity trends over time<br/>- Pie chart for time distribution by activity type<br/>- Table for detailed activity log<br/>- Summary statistics cards showing key performance indicators<br/>Report can be exported to PDF or Excel format for performance reviews.                                                                                                                                            |

#### 2.1.10 View Shop Report Use Case

##### 2.1.10.1 View Shop Report

###### Use Case Description

| Name               | View Shop Report                                                                                 |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to view overall shop performance and analytics reports.               |
| **Actor**          | Admin                                                                                            |
| **Trigger**        | When the admin navigates to "Shop Reports" or "Analytics" section.                               |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | Shop performance report is displayed with selected metrics.                                      |

###### Sequence Flow

[sequence-view-shop-report-view-shop-report](../sequence/view-shop-report/view-shop-report)

###### Activities Flow

[activity-view-shop-report-view-shop-report](../activity/view-shop-report/view-shop-report)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (1)      | BR1     | **Displaying Rules:** The system displays "Shop Report" view with empty report charts and filter options. Available report types include: Sales Overview, Revenue Analysis, Product Performance, Customer Analytics, Inventory Status, Order Statistics. Time range options include: Today, Yesterday, Last 7 days, Last 30 days, Last 3 months, Last year, Custom range. (Refer to "Shop Report" view in "View Description" file)                                                                                                                                                                                                                                                                      |
| (4)      | BR2     | **Querying Rules:** When admin selects report type and time range, system queries aggregated data from multiple tables including "ORDER", "PRODUCT", "USER", "ORDER_ITEM" (Refer to corresponding tables in "DB Sheet" file). System calculates comprehensive metrics: <br/>- Total revenue and revenue trends<br/>- Total orders and order status distribution<br/>- Average order value<br/>- Best-selling products<br/>- Low stock alerts<br/>- Customer acquisition and retention rates<br/>- Return rate and return reasons<br/>- Category performance<br/>- Peak sales hours/days<br/>- Conversion rate                                                                                           |
| (6)      | BR3     | **Displaying Rules:** System displays comprehensive shop report with multiple visualization components: <br/>- Dashboard overview with key metrics cards (revenue, orders, customers, conversion rate)<br/>- Line chart for revenue/sales trends<br/>- Bar chart for top-selling products<br/>- Pie chart for order status distribution<br/>- Pie chart for revenue by category<br/>- Table for product performance ranking<br/>- Table for inventory alerts<br/>- Heat map for sales by time period<br/>- Comparison metrics vs. previous period<br/>Report supports drill-down functionality to view detailed data. Reports can be exported to PDF, Excel, or scheduled for automatic email delivery. |

#### 2.1.11 View System Monitoring Use Case

##### 2.1.11.1 View System Monitoring

###### Use Case Description

| Name               | View System Monitoring                                                                           |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to monitor system performance, health, and usage statistics.          |
| **Actor**          | Admin                                                                                            |
| **Trigger**        | When the admin navigates to "System Monitoring" or "System Health" section.                      |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | System monitoring dashboard is displayed with real-time metrics.                                 |

###### Sequence Flow

[sequence-view-system-monitoring-view-system-monitoring](../sequence/view-system-monitoring/view-system-monitoring)

###### Activities Flow

[activity-view-system-monitoring-view-system-monitoring](../activity/view-system-monitoring/view-system-monitoring)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)      | BR1     | **Querying Rules:** System queries monitoring data from "MONITORING_DATA" table and system logs (Refer to "MonitoringData" table in "DB Sheet" file). System collects real-time metrics: <br/>- System uptime and availability percentage<br/>- Server response time (average, min, max)<br/>- API endpoint performance<br/>- Database query performance<br/>- Active user sessions<br/>- Memory and CPU usage<br/>- Disk space usage<br/>- Error rate and error logs<br/>- Failed login attempts<br/>- Request rate (requests per second)<br/>- Cache hit rate                                                                                                                                                                                                                                                 |
| (4)      | BR2     | **Displaying Rules:** System displays "System Monitoring" dashboard with real-time visualizations: <br/>- Status indicator (Healthy/Warning/Critical) at the top<br/>- Real-time metrics cards showing: uptime percentage (target: 99.5%), average response time, active sessions, error rate<br/>- Line chart for response time trends (last 24 hours)<br/>- Line chart for memory/CPU usage over time<br/>- Bar chart for API endpoint performance<br/>- Table for recent error logs with severity levels<br/>- Table for slow database queries<br/>- System resource gauge charts (memory, CPU, disk)<br/>- Alert notifications for threshold breaches<br/>Dashboard auto-refreshes every 30 seconds. Historical data can be viewed for up to 30 days. Critical alerts trigger email notifications to admin. |

#### 2.1.12 Adjust Document Use Case

##### 2.1.12.1 Adjust Document

###### Use Case Description

| Name               | Adjust Document                                                                                  |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to manage system documents and guides.                                |
| **Actor**          | Admin                                                                                            |
| **Trigger**        | When the admin navigates to "Document Management" section.                                       |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | Admin can view document list and choose document management functions.                           |

###### Sequence Flow

[sequence-adjust-document-adjust-document](../sequence/adjust-document/adjust-document)

###### Activities Flow

[activity-adjust-document-adjust-document](../activity/adjust-document/adjust-document)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                         |
| :------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Querying Rules:** System queries all documents from "DOCUMENT" table (Refer to "Document" table in "DB Sheet" file) using SQL: "SELECT \* FROM Document ORDER BY category, title ASC". System retrieves: document ID, title, category, status (Draft/Published), target audience, last modified date, and author.                                                                                 |
| (2)      | BR2     | **Displaying Rules:** The system displays "Document Management" view showing: document list organized by category in table format with pagination (20 documents per page), filter options (category, status, target audience), search box, "Create Document" button, and action buttons (Edit, Delete, Preview) for each document. (Refer to "Document Management" view in "View Description" file) |
| (3)      | BR3     | **Choosing Rules:** Admin can choose from available document management functions: Create Document, Delete Document, Search Document, or Update Document. Only one operation can be performed at a time.                                                                                                                                                                                            |

##### 2.1.12.2 Create Document

###### Use Case Description

| Name               | Create Document                                                                                  |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to create a new system document.                                      |
| **Actor**          | Admin                                                                                            |
| **Trigger**        | When the admin clicks "Create Document" button.                                                  |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | New document is created and stored in the system.                                                |

###### Sequence Flow

[sequence-adjust-document-create-document](../sequence/adjust-document/create-document)

###### Activities Flow

[activity-adjust-document-create-document](../activity/adjust-document/create-document)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** The system displays "Document Detail" form with empty fields including: document title, category dropdown (Getting Started, Shopping Guide, Payment & Shipping, Returns & Refunds, Account Management, Terms & Policies), rich text content editor with formatting toolbar, target audience multi-select (Customer, Staff, Admin), status selector (Draft/Published), meta description (for SEO), and Save button. (Refer to "Document Detail" view in "View Description" file)                                                                                                                                                                                              |
| (3)      | BR2     | **Validation Rules:** System validates document data in real-time: <br/>- Title: required, 5-200 characters<br/>- Category: required, must select from predefined categories<br/>- Content: required, minimum 100 characters<br/>- Target audience: at least one must be selected<br/>- Meta description: optional, maximum 300 characters<br/>If validation fails, system displays error message (Refer to MSG 47).                                                                                                                                                                                                                                                                               |
| (5)      | BR3     | **Validation Rules:** When admin clicks "Save" button, system validates document data: <br/>- All required fields are filled<br/>- Title is not duplicate within same category<br/>- Content is properly formatted and valid HTML<br/>If validation fails, system displays error message (Refer to MSG 48). Otherwise, system stores document in "DOCUMENT" table with: created date, last modified date, author (current admin ID), generates document slug for URL, creates document version in "DOCUMENT_VERSION" table for version control, indexes document content for search, and displays success notification (Refer to MSG 49). System then closes the form and refreshes document list. |

##### 2.1.12.3 Update Document

###### Use Case Description

| Name               | Update Document                                                                                                                     |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to update existing document content and settings.                                                        |
| **Actor**          | Admin                                                                                                                               |
| **Trigger**        | When the admin clicks "Edit" button for a document.                                                                                 |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. Document must exist in the system. |
| **Post-condition** | Document information is updated in the system.                                                                                      |

###### Sequence Flow

[sequence-adjust-document-update-document](../sequence/adjust-document/update-document)

###### Activities Flow

[activity-adjust-document-update-document](../activity/adjust-document/update-document)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (3)      | BR1     | **Querying Rules:** System queries document details from "DOCUMENT" table (Refer to "Document" table in "DB Sheet" file) using SQL: "SELECT \* FROM Document WHERE documentID = [Document.ID]". System also retrieves document version history from "DOCUMENT_VERSION" table.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| (4)      | BR2     | **Displaying Rules:** The system displays "Document Detail" form filled with current document data including: all document fields, version history section showing previous versions with rollback option, and Save button. (Refer to "Document Detail" view in "View Description" file)                                                                                                                                                                                                                                                                                                                                                                                                                |
| (6)      | BR3     | **Validation Rules:** System validates updated document data in real-time using same validation rules as Create Document (BR2 from 2.1.12.2). If validation fails, system displays error message (Refer to MSG 47).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| (8)      | BR4     | **Validation Rules:** When admin clicks "Save" button, system validates updated data: <br/>- All required fields are filled<br/>- Title is not duplicate (excluding current document) within same category<br/>- Content is properly formatted<br/>If validation fails, system displays error message (Refer to MSG 48). Otherwise, system updates document in "DOCUMENT" table, updates last modified date and modified by field, creates new version entry in "DOCUMENT_VERSION" table with change log, updates document slug if title changed, re-indexes document content for search, and displays success notification (Refer to MSG 50). System then closes the form and refreshes document list. |

##### 2.1.12.4 Delete Document

###### Use Case Description

| Name               | Delete Document                                                                                                                     |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to delete a document from the system.                                                                    |
| **Actor**          | Admin                                                                                                                               |
| **Trigger**        | When the admin clicks "Delete" button for a document.                                                                               |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. Document must exist in the system. |
| **Post-condition** | Document is deleted from the system.                                                                                                |

###### Sequence Flow

[sequence-adjust-document-delete-document](../sequence/adjust-document/delete-document)

###### Activities Flow

[activity-adjust-document-delete-document](../activity/adjust-document/delete-document)

###### Business Rules

| Activity     | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (2)          | BR1     | **Displaying Rules:** The system displays a confirmation dialog asking admin to confirm document deletion with message: "Are you sure you want to delete this document? This action cannot be undone." Dialog shows document title for confirmation. (Refer to "Confirmation Dialog" view in "View Description" file)                                                                                                                                                                                                                                                                                    |
| (2.1), (2.2) | BR2     | **Selection Rules:** Admin must confirm deletion. If admin clicks "Cancel" button, dialog closes and use case ends. If admin clicks "Confirm" button, system proceeds with deletion.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| (4)          | BR3     | **Validation Rules:** System validates document exists in "DOCUMENT" table (Refer to "Document" table in "DB Sheet" file). If document not found, system displays error message (Refer to MSG 51). Otherwise, system performs soft delete by updating status to "Deleted" in "DOCUMENT" table (keeping data for audit purposes), removes document from search index, archives document versions in "DOCUMENT_VERSION" table, creates deletion audit log in "DOCUMENT_AUDIT" table with admin ID and timestamp, and displays success notification (Refer to MSG 52). System then refreshes document list. |

##### 2.1.12.5 Search Document

###### Use Case Description

| Name               | Search Document (Admin)                                                                          |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to search for documents in the document management system.            |
| **Actor**          | Admin                                                                                            |
| **Trigger**        | When the admin enters search criteria in the document search box.                                |
| **Pre-condition**  | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | Filtered document results are displayed.                                                         |

###### Sequence Flow

[sequence-adjust-document-search-document](../sequence/adjust-document/search-document)

###### Activities Flow

[activity-adjust-document-search-document](../activity/adjust-document/search-document)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (3)      | BR1     | **Searching Rules:** When admin enters search criteria, system uses Text_change() method with debounce delay of 300ms. System queries "DOCUMENT" table (Refer to "Document" table in "DB Sheet" file) using SQL: "SELECT \* FROM Document WHERE status != 'Deleted' AND (title LIKE '%keyword%' OR content LIKE '%keyword%' OR category LIKE '%keyword%') ORDER BY title ASC". Filters can include: category, status (Draft/Published), target audience (Customer/Staff/Admin), last modified date range. |
| (4)      | BR2     | **Displaying Rules:** System displays "Document Management" view with filtered results showing matching documents. Active filters are displayed as removable tags. Result count is displayed. If no results found, displays "No documents found" message with "Clear Search" option. Search results highlight matched keywords in title and content preview.                                                                                                                                              |

#### 2.1.13 View Staff Self Report Use Case

##### 2.1.13.1 View Staff Self Report

###### Use Case Description

| Name               | View Staff Self Report                                                                           |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to view their own performance and activity reports.                   |
| **Actor**          | Staff                                                                                            |
| **Trigger**        | When the staff navigates to "My Performance" or "My Reports" section.                            |
| **Pre-condition**  | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | Staff performance report is displayed.                                                           |

###### Sequence Flow

[sequence-view-staff-self-report-view-staff-self-report](../sequence/view-staff-self-report/view-staff-self-report)

###### Activities Flow

[activity-view-staff-self-report-view-staff-self-report](../activity/view-staff-self-report/view-staff-self-report)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** The system displays "Staff Self Report" view with empty report charts and filter options. Available report types include: My Product Management Activity, My User Management Activity, My Review Moderation Activity, Overall My Performance. Time range options include: Today, Last 7 days, Last 30 days, Last 3 months, This year. (Refer to "Staff Self Report" view in "View Description" file)                                                                                                                                         |
| (4)      | BR2     | **Querying Rules:** When staff selects report type and time range, system queries data from "STAFF_ACTIVITY" table (Refer to "StaffActivity" table in "DB Sheet" file) filtered by current staff ID using SQL: "SELECT \* FROM StaffActivity WHERE staffID = [CurrentStaff.ID] AND DATE(activity_date) BETWEEN [start_date] AND [end_date]". System calculates: total products added/updated, total reviews moderated, total users managed, activity distribution, daily averages.                                                                                 |
| (6)      | BR3     | **Displaying Rules:** System displays staff self report with visualizations: <br/>- Summary cards showing: total activities, products managed, reviews moderated, users helped<br/>- Line chart showing activity trends over selected period<br/>- Bar chart showing activity distribution by type<br/>- Calendar heat map showing daily activity intensity<br/>- Table listing recent activities with timestamps<br/>- Performance comparison vs. team average (if available)<br/>Report helps staff track their own productivity and identify improvement areas. |

### 2.2 List Description

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
| 9   | List09    | Review                | This list holds product reviews with review ID, product ID, customer ID, rating (1-5), review title, review text, helpful count, status, and created date.                                                |
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

### 2.3 View Description

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
| 12  | View12    | Product Review         | Review submission form with star rating selector, review title input, review text area, image upload section, and submit button.                                                                   | Customer               |
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

## 3. Non-functional Requirements

### 3.1 User Access and Security

| Function                      | Guest | Customer | Staff | Admin |
| :---------------------------- | :---: | :------: | :---: | :---: |
| **Manage Account Functions**  |
| Sign Up                       |   X   |          |       |       |
| Sign In                       |   X   |    X     |   X   |   X   |
| Sign Out                      |       |    X     |   X   |   X   |
| Edit Profile                  |       |  X(\*)   | X(\*) | X(\*) |
| Link Account With Third Party |       |  X(\*)   | X(\*) | X(\*) |
| Delete Account                |       |  X(\*)   | X(\*) | X(\*) |
| Reset Password                |       |  X(\*)   | X(\*) | X(\*) |
| View Account Activity         |       |  X(\*)   | X(\*) | X(\*) |
| Recover Account               |   X   |    X     |   X   |   X   |
| **View Product Functions**    |
| View Product                  |   X   |    X     |   X   |   X   |
| Search Product                |   X   |    X     |   X   |   X   |
| View Product Detail           |   X   |    X     |   X   |   X   |
| View Product Reviews          |   X   |    X     |   X   |   X   |
| View Suggested Products       |   X   |    X     |   X   |   X   |
| Add Product to Cart           |       |    X     |       |       |
| **Manage Cart Functions**     |
| Manage Cart                   |       |  X(\*)   |       |       |
| Change Product Amount         |       |  X(\*)   |       |       |
| Remove Product from Cart      |       |  X(\*)   |       |       |
| Purchase                      |       |  X(\*)   |       |       |
| **View Order Functions**      |
| View Order                    |       |  X(\*)   |       |       |
| Search Order                  |       |  X(\*)   |       |       |
| View Order Detail             |       |  X(\*)   |       |       |
| Cancel Order                  |       |  X(\*)   |       |       |
| Return Product                |       |  X(\*)   |       |       |
| Review Product                |       |  X(\*)   |       |       |
| **Other Customer Functions**  |
| Contact Support               |   X   |    X     |       |       |
| View Customer Self Report     |       |  X(\*)   |       |       |
| View Document                 |   X   |    X     |   X   |   X   |
| **Manage Product Functions**  |
| Manage Product                |       |          |   X   |   X   |
| Add Product                   |       |          |   X   |   X   |
| Update Product                |       |          |   X   |   X   |
| Delete Product                |       |          |   X   |   X   |
| Search Product (Staff)        |       |          |   X   |   X   |
| Delete Review                 |       |          |   X   |   X   |
| **Manage User Functions**     |
| Manage User                   |       |          |   X   |   X   |
| Search User                   |       |          |   X   |   X   |
| View Customer Report          |       |          |   X   |   X   |
| Change User Roles             |       |          |       |   X   |
| Delete User                   |       |          |       |   X   |
| View Staff Report             |       |          |       |   X   |
| **Admin Functions**           |
| View Shop Report              |       |          |       |   X   |
| View System Monitoring        |       |          |       |   X   |
| Adjust Document               |       |          |       |   X   |
| Create Document               |       |          |       |   X   |
| Update Document               |       |          |       |   X   |
| Delete Document               |       |          |       |   X   |
| Search Document (Admin)       |       |          |       |   X   |
| **Staff Functions**           |
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

### 3.2 Performance Requirements

**Response Time:**

- Page load time: < 3 seconds for 95% of requests
- API response time: < 500ms for 90% of requests
- Database query time: < 200ms for standard queries
- Search results: < 1 second for product/user/document searches
- Image loading: < 2 seconds for product images with lazy loading
- Cart operations: < 300ms for add/update/remove operations
- Report generation: < 5 seconds for standard reports

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
- Scheduled maintenance windows: 2 AM - 4 AM on weekends
- Maximum unplanned downtime: 4 hours per month
- Backup systems with < 15 minutes failover time
- Database replication for high availability
- Automated health checks every 5 minutes
- Disaster recovery plan with < 1 hour recovery time

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

### 3.3 Implementation Requirements

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

- Version Control: Git with GitFlow branching strategy
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
- API Security: JWT tokens with RS256 signing
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

## 4. Other Requirements

### 4.1 Archive Function

| List                   | Actor        | Condition                                                                                                                                         |
| :--------------------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| Order                  | Admin        | The Admin is able to archive completed orders older than 2 years. Archived orders remain accessible for compliance but are moved to cold storage. |
| User                   | Admin        | The Admin is able to archive deleted user accounts after 90 days of deletion. Personal data is anonymized per GDPR requirements.                  |
| Product                | Staff, Admin | Staff/Admin can archive discontinued products. Archived products are hidden from customer view but retain historical data for reporting.          |
| Review                 | Staff, Admin | Staff/Admin can archive old reviews (older than 3 years) while maintaining review statistics.                                                     |
| Document               | Admin        | The Admin is able to archive outdated documents. Archived documents are not visible to users but accessible to admin for historical reference.    |
| Staff Activity Log     | Admin        | The Admin is able to archive staff activity logs older than 1 year for audit compliance.                                                          |
| System Monitoring Data | Admin        | The Admin is able to archive system monitoring data older than 90 days to maintain database performance.                                          |

### 4.2 Security Audit Function

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

### 4.3 Electricilies Sites

| \#  | Site Name     | Description                                                                                                                                                                                                                                                                                                                                                                   |
| :-- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Customer Site | This is the main e-commerce website for customers. It provides functionalities to browse products, search products, view product details and reviews, manage shopping cart, place orders, track orders, write reviews, view documents, contact support, and view personal reports.                                                                                            |
| 2   | Staff Site    | This site is designed for staff members. It enables them to manage products (add, update, delete), moderate product reviews, search products with advanced filters, view and manage users (customers only), view customer reports, and view their own performance reports.                                                                                                    |
| 3   | Admin Site    | This is the control console for administrators. It provides full access to manage users (including staff), change user roles, view comprehensive shop reports, monitor system health and performance, manage system documents, view staff performance reports, and access all staff functionalities. Admin site includes advanced analytics and system configuration options. |

### 4.4 Electricilies Lists

Refer to section 2.2 List Description for detailed information about all lists/tables used in the Electricilies system.

### 4.5 Custom Pages

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

### 4.6 Scheduled Agents

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

### 4.7 Technical Concern

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

- **Disaster Recovery:** RTO (Recovery Time Objective) of < 1 hour requires automated backup verification, documented recovery procedures, and regular disaster recovery drills.

## 5. Appendixes

### 5.1 Glossary

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

### 5.2 Mapping to Notes Application

\*\* There is no mapping between the Electricilies application and any source Notes application. \*\*

### 5.3 Messages

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
| MSG 33       | Thank you for your review! It will be published after moderation.                                                            | Ok     |
| MSG 34       | Invalid product data. Please check all required fields and try again.                                                        | Ok     |
| MSG 35       | Cannot save product. SKU already exists or validation failed.                                                                | Ok     |
| MSG 36       | Product created successfully.                                                                                                | Ok     |
| MSG 37       | Product updated successfully.                                                                                                | Ok     |
| MSG 38       | Cannot delete product. Product has pending orders or is in active carts.                                                     | Ok     |
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

### 5.4 Issues List

N/A
