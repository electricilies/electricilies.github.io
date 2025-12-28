  **SOFTWARE REQUIREMENTS SPECIFICATION**
Electricilies \- Website for Selling Electronic Products

##

## Revision and Signoff Sheet {#revision-and-signoff-sheet}

### Change Record {#change-record}

| Author | Version | Change reference | Date |
| :---- | :---- | :---- | :---- |
| Buggilies Team | 0.1.0 | Initial project creation | 19/09/2025 |
| Buggilies Team | 0.2.0 | Update more detail | 31/10/2025 |
| Buggilies Team | 0.3.0 | Remove generic use cases, add additional use cases | 26/12/2025 |

### Reviewers {#reviewers}

| Name | Company | Version | Position | Date |
| :---- | :---- | :---- | :---- | :---- |
| Kevin Nitro | Electricilies | 0.1.0 | Project Manager | 20/09/2025 |
| NTGNguyen & Kevin Nitro | Electricilies | 0.2.0 | Electricilies Team Backend | 1/11/2025 |
| NTGNguyen & Kevin Nitro | Electricilies | 0.3.0 | Electricilies Team Backend | 26/12/2025 |

##

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

###

### 1.4 References {#1.4-references}

| \# | Title | Version | File Name / Link | Description |
| :---- | :---- | :---- | :---- | :---- |
| 1 | Use Case Diagrams | 0.3.0 | [Use Case Documentation](https://electricilies.github.io/software-docs/use-case/generic.html) | Complete use case diagrams for all user roles |
| 2 | Sequence Diagrams | 0.3.0 | [Sequence Documentation](https://electricilies.github.io/software-docs/sequence/) | Sequence flow diagrams for all major features |
| 3 | Activity Diagrams | 0.3.0 | [Activity Documentation](https://electricilies.github.io/software-docs/activity/) | Activity flow diagrams for business processes |
| 4 | Database Schema | 0.3.0 | [Database Design Document](https://electricilies.github.io/software-docs/database/) | Entity-relationship diagrams and table definitions |

## 2\. Functional Requirements {#2.-functional-requirements}

### 2.1 Use Case Description {#2.1-use-case-description}

#### 2.1.1 Manage Account Use Case {#2.1.1-manage-account-use-case}

##### 2.1.1.1 Sign Up {#2.1.1.1-sign-up}

###### *Use Case Description*

| Name | Sign Up |
| :---- | :---- |
| **Description** | This use case allows new users to register an account in the system. |
| **Actor** | User |
| **Trigger** | When a user clicks on the "Sign Up" button on the sign-in page. |
| **Precondition** | User's device must be connected to the internet. |
| **Post-condition** | User account is created in the system and user is redirected to the home screen. |

###### *Activities Flow*

![][image1]

###### *Sequence Flow*

###### ![][image2]*Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (4) | BR1 | **Displaying Rules:** The system displays a "Sign Up" screen with fields for Username, Password, Email, and Full Name. |
| (6) | BR2 | **Validation Rules:** When the user enters registration data, the system validates data format using standard patterns:  \- Username: alphanumeric, 4-255 characters \- Password: 4-255 characters, at least one uppercase, one lowercase, one number, one special character \- Email: valid email format (e.g., [user@domain.com](mailto:user@domain.com)), maximum 255 characters \- First Name: alphabetic characters and spaces only, maximum 255 characters \- Last Name: alphabetic characters and spaces only, maximum 255 characters if \!(isValid(\[username\]) && isValid(\[password\]) && isValid(\[email\]) && isValid(\[firstName\]) && isValid(\[lastName\])):     display error(\[MSG1\]) move to step (6.2) |
| (8) | BR3 | **Validation Rules:** The system checks if the username or email already exists in the auth service’s data. If the username or email is already registered, system displays error message (Refer to MSG 2). if isExisted(\[username\]) || isExisted(\[email\]):     display error(\[MSG2\]) move to step (8.2) |
| (10) | BR4 | **Validation Rules:** The system validates the authorization code, verifier, and challenge. If validation fails, system displays error message (Refer to MSG 3). Otherwise, system generates and returns JWT Token with 5-min expiration. if \!isValid(\[authorizationCode\],\[verifier\],\[challenge\]):     throw error(\[MSG3\]\]) move to step (10.2) |
| (11.2) | BR5 | **Validation Rules:** The system verifies the JWT Token and writes user data to the database. If JWT is invalid, system displays error message (Refer to MSG 4). Otherwise, user data is stored in auth service’s data and system redirects to Home View. if \!isValid(\[token\]):     throw error(\[MSG4\]) move to step (11.4) |

##### 2.1.1.2 Sign In {#2.1.1.2-sign-in}

###### *Use Case Description*

| Name | Sign In |
| :---- | :---- |
| **Description** | This use case allows users to sign in to the system using their credentials. |
| **Actor** | Customer, Staff, Admin |
| **Trigger** | When the user clicks on the "Sign In" button on the sign-in page. |
| **Pre-condition** | User's device must be connected to the internet. User account must exist in the system. |
| **Post-condition** | User is authenticated and signed in to the system. |

###### *Activities Flow*

![][image3]

###### *Sequence Flow*

###### ![][image4]*Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (4) | BR6 | **Displaying Rules:** The system displays a "Sign In" screen with fields for Username/Email and Password. |
| (6) | BR7 | **Validation Rules:** When the user enters credentials, the system validates data format:  \- Username/Email: must not be empty \- Password: must not be empty if \!(isValid(\[username\] && isValid(\[password\])):     throw error(\[MSG1\]) move to step(7) |
| (8) | BR8 | **Validation Rules:** The system validates user credentials against the auth service’s data. If credentials are invalid, system displays error message (Refer to MSG 5\) and increments failed login counter. if \!isValid(\[username\], \[password\]):     throw error(\[MSG5\]) move to step(8.2) |
| (9.2) | BR9 | **Validation Rules:** The system validates the authorization code, verifier, and challenge. If validation fails, system displays error message (Refer to MSG 3). Otherwise, system generates and returns JWT Token with 5-min expiration. if \!isValid(\[authorizationCode\], \[verifier\], \[challenge\]):     throw error(\[MSG3\]\]) move to step (9.4) |
| (10.2) | BR10 | **Validation Rules:** The system verifies the JWT Token. If JWT is invalid or expired, system displays error message (Refer to MSG 4). Otherwise, system creates user session and redirects to Home View. if \!isValid(\[token\]):     throw error(\[MSG4\]) move to step (10.4) |

##### 2.1.1.3 Sign Out {#2.1.1.3-sign-out}

###### *Use Case Description*

| Name | Sign Out |
| :---- | :---- |
| **Description** | This use case allows users to sign out from the system. |
| **Actor** | Customer, Staff, Admin |
| **Trigger** | When the user clicks on the "Sign Out" button. |
| **Pre-condition** | User's device must be connected to the internet. User must be signed in. |
| **Post-condition** | User session is cleared and user is signed out. |

###### *Sequence Flow*

![][image5]

###### *Activities Flow*

![][image6]

###### *Sequence Flow*

###### ![][image5]*Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR11 | **Session Rules:** The system clears all user session data including JWT Token, cached user information, and temporary data from browser storage (localStorage and sessionStorage). |
| (3) | BR12 | **Displaying Rules:** The system displays sign out confirmation message (Refer to MSG 6\) and automatically redirects to the Sign In page after 2 seconds. |

##### 2.1.1.4 Edit Profile {#2.1.1.4-edit-profile}

###### *Use Case Description*

| Name | Edit Profile |
| :---- | :---- |
| **Description** | This use case allows users to edit their profile information. |
| **Actor** | Customer, Staff, Admin |
| **Trigger** | When the user clicks on the "Edit Profile" option from account settings. |
| **Pre-condition** | User's device must be connected to the internet. User must be signed in. |
| **Post-condition** | User profile information is updated in the system. |

###### *Activities Flow*

![][image7]

###### *Sequence Flow*

![][image8]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (3) | BR13 | **Displaying Rules:** The system displays a "Profile Edit" screen filled with current user information retrieved from auth service’s data. |
| (5) | BR14 | **Validation Rules:** When the user enters new profile information, the system validates data format in real-time using Text\_change() method: \- First Name: alphabetic characters and spaces only, 2-255 characters \- Last Name: alphabetic characters and spaces only, 2-255 characters \- Email: valid email format, maximum 255 characters \- Phone: valid phone format (if provided) \- Address: alphanumeric with special characters allowed (if provided), maximum 255 characters if \!(isValid(\[username\]) && isValid(\[password\]) && isValid(\[email\]) && isValid(\[firstName\]) && isValid(\[lastName\]) && isValid(\[phone\]) && isValid(\[address\])):     display error(\[MSG1\]) move to step (6) |
| (7) | BR15 | **Validation Rules:** When the user clicks the "Save Changes" button, system validates updated data against auth service’s data:  \- Check if the new email is not already registered by another user \- Check if new phone is not already registered by another user (if provided) If validation fails, system displays error message (Refer to MSG 7 or MSG 8). Otherwise, profile data is updated in the database and success message is displayed (Refer to MSG 9). if (isExisted(\[email\])):     throw error(\[MSG7\]) if (isExisted(\[phone\])):     throw error(\[MSG8\]) move to step(7.2) display(\[MSG9\]) |

##### 2.1.1.5 Link Account With Third Party Provider {#2.1.1.5-link-account-with-third-party-provider}

###### *Use Case Description*

| Name | Link Account With Third Party Provider |
| :---- | :---- |
| **Description** | This use case allows users to link their account with third-party authentication providers. |
| **Actor** | Customer, Staff, Admin |
| **Trigger** | When the user clicks on "Link Account" option and selects a third-party provider. |
| **Pre-condition** | User's device must be connected to the internet. User must be signed in. |
| **Post-condition** | User account is linked with the selected third-party provider. |

###### *Activities Flow*

![][image9]

###### *Sequence Flow*

![][image10]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR16 | **Displaying Rules:** The system displays available third-party providers (Google, Facebook, etc.) that can be linked to the user account. (Refer to "Link Account" view in "View Description" file) |
| (4) | BR17 | **Validation Rules:** The system validates account linking request:  \- Check if selected provider is not already linked to this account \- Check if provider account is not already linked to another user account \- Verify provider authentication token if \!( hasLinkToOtherAccount(\[providerAccount\]) && isLinked(\[userId\], \[providerAccount\])):     throw error(MSG10) authService.LinkProvider(\[userId\], \[provider\]) display(MSG11) |

##### 2.1.1.6 Delete Account {#2.1.1.6-delete-account}

###### *Use Case Description*

| Name | Delete Account |
| :---- | :---- |
| **Description** | This use case allows users to permanently delete their account from the system. |
| **Actor** | Customer, Staff, Admin |
| **Trigger** | When the user clicks on "Delete Account" option in account settings. |
| **Pre-condition** | User's device must be connected to the internet. User must be signed in. |
| **Post-condition** | User account is permanently deleted from the system. |

###### *Activities Flow*

![][image11]

###### *Sequence Flow*

![][image12]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR18 | **Displaying Rules:** The system displays a confirmation dialog warning the user about permanent account deletion and its consequences. |
| (2.1), (2.2) | BR19 | **Selection Rules:** User must explicitly confirm account deletion. If user clicks "Cancel" button, the confirmation dialog closes and use case ends. If user clicks "Confirm" button, system proceeds with deletion process. |
| (3) | BR20 | **Validation Rules:** The system validates account data before deletion: \- Check for pending orders (orders must be completed or cancelled) If validation fails, system displays error message (Refer to MSG 12\) listing issues that must be resolved. Otherwise, system performs deletion and displays success message (Refer to MSG 13), then redirects to sign-in page. if (listOrderByUserId(\[userId\]) \!= 0):     throw error(\[MSG12\]) display(\[MSG13\]) |

##### 2.1.1.8 Reset Password {#2.1.1.8-reset-password}

###### *Use Case Description*

| Name | Reset Password |
| :---- | :---- |
| **Description** | This use case allows users to change their account password. |
| **Actor** | Customer, Staff, Admin |
| **Trigger** | When the user clicks on "Change Password" option in account settings. |
| **Pre-condition** | User's device must be connected to the internet. User must be signed in. |
| **Post-condition** | User password is updated in the system. |

###### *Activities Flow*

![][image13]

###### *Sequence Flow*

![][image14]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR21 | **Displaying Rules:** The system displays a password change form with fields for current password and new password. |
| (4) | BR22 | **Validation Rules:** The system validates password format in real-time:  \- New password must be at least 4 characters long \- Must contain at least one uppercase letter \- Must contain at least one lowercase letter \- Must contain at least one number \- Must contain at least one special character (\!@\#$%^&\\\*) \- New password must be different from current password if \!isValidPassword(\[newPassword\]):      throw error(\[MSG14\]) if oldPassword \!= newPassword:    authService.UpdatePassword(\[userId\], \[newPassword\]) |
| (6) | BR23 | **Validation Rules:** When user clicks "Update Password" button, system validates current password against stored hash using bcrypt comparison. If current password is incorrect, system displays error message (Refer to MSG 15). Otherwise, auth service save the user data, and displays success message (Refer to MSG 16). if \[oldPassword\] \!= \[currentPassword\]:     throw error(\[MSG15\]) authService.Save(\[userId\], \[newPassword\]) display(MSG16) |

##### 2.1.1.9 View Account Activity {#2.1.1.9-view-account-activity}

###### *Activities Flow*

![][image15]

###### *Sequence Flow*

![][image16]

###### *Use Case Description*

| Name | View Account Activity |
| :---- | :---- |
| **Description** | This use case allows users to view their account activity history including login attempts, password changes, and profile updates. |
| **Actor** | Customer, Staff, Admin |
| **Trigger** | When the user clicks on "Account Activity" option in account settings. |
| **Pre-condition** | User's device must be connected to the internet. User must be signed in. |
| **Post-condition** | User can view their account activity history. |

######

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
|  | BR24 | **Querying Rules:** The system queries activity logs auth service data for the current user, ordered by timestamp descending. |
|  | BR25 | **Displaying Rules:** The system displays account activity history including: timestamp, activity type, IP address, device information, and status. |

##### 2.1.1.10 Recover Account {#2.1.1.10-recover-account}

###### *Use Case Description*

| Name | Recover Account |
| :---- | :---- |
| **Description** | This use case allows users to recover their account by requesting a password reset email. |
| **Actor** | Customer, Staff, Admin |
| **Trigger** | When a user clicks on "Forgot Password" link on the sign-in page. |
| **Pre-condition** | User's device must be connected to the internet. |
| **Post-condition** | Password reset email is sent to user's registered email address. |

###### *Activities Flow*

![][image17]

###### *Sequence Flow*

![][image18]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR26 | **Displaying Rules:** The system displays a password recovery form with email address field. |
| (4) | BR27 | **Validation Rules:** The system validates email format:  \- Must not be empty \- Must follow valid email pattern ([user@domain.com](mailto:user@domain.com)) if isValid(\[email\]):     authService.SendRecoverEmail(\[email\]) else:     throw error(MSG1) |
| (6) | BR28 | **Validation Rules:** The system checks if account exists in auth service data with the provided email. If account is not found, system displays generic error message for security reasons (Refer to MSG 17). Otherwise, system generates a unique reset token with 1-hour expiration, sends password reset email containing reset link, and displays success message (Refer to MSG 18). if \!isExisted(\[email\]):     display(\[MSG17\]) sendRecoverEmail(\[email\]) display(\[MSG18\]) |

#### 2.1.2 View Product Use Case {#2.1.2-view-product-use-case}

##### 2.1.2.2 Search Product {#2.1.2.2-search-product}

###### *Use Case Description*

| Name | Search Product |
| :---- | :---- |
| **Description** | This use case allows customers to search for products using keywords and filters. |
| **Actor** | Customer |
| **Trigger** | When the customer enters search criteria in the search box. |
| **Pre-condition** | Customer's device must be connected to the internet. |
| **Post-condition** | Search results are displayed based on entered criteria. |

###### *Activities Flow*

![][image19]

###### *Sequence Flow*

**![][image20]**

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (1) | BR29 | **Searching Rules:** When the customer enters search criteria, the system handles the search request with debounce delay of 300ms. System queries data in "PRODUCTS" table (Refer to "Products" table in "DB Sheet" file). System uses Redis cache to store and retrieve search results for popular queries to improve performance. productService.ListProducts(\[params\]) \[params\] can include: \[keyword\], \[categories\], \[maxPrice\], \[minPrice\], \[rating\], \[sortByRate\], \[sortByPrice\], \[isDeleted\] |
| (3) | BR30 | **Displaying Rules:** If search is triggered on "Home View", system displays results inline with autocomplete suggestions. If user presses Enter, system redirects to "Product Search View" (Refer to "Product Search" view in "View Description" file) showing filtered results with applied search criteria and filter options. |

##### 2.1.2.3 View Product Detail {#2.1.2.3-view-product-detail}

###### *Use Case Description*

| Name | View Product Detail |
| :---- | :---- |
| **Description** | This use case allows customers to view detailed information of a specific product. |
| **Actor** | Customer |
| **Trigger** | When the customer clicks on a product from the product list or search results. |
| **Pre-condition** | Customer's device must be connected to the internet. |
| **Post-condition** | Detailed product information is displayed to the customer. |

###### *Activities Flow*

![][image21]

###### *Sequence Flow*

![][image22]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR31 | **Querying Rules:** System queries product details from "PRODUCTS" table (Refer to "Products" table in "DB Sheet" file)System also retrieves related data including product images, category, attributes, options, product variants.  System uses Redis cache to store and retrieve product detail data for frequently viewed products. productService.GetProduct(\[params\]) Params include: \[ProductId\] |
| (3) | BR32 | **Displaying Rules:** The system displays "Product Detail" view showing: product images (with zoom functionality), name, full description, price, availability status, attribute table, category, SKU, quantity selector, Add to Cart button, rating summary, and related products section. (Refer to "Product Detail" view in "View Description" file) |

##### 2.1.2.4 View Product Reviews {#2.1.2.4-view-product-reviews}

###### *Use Case Description*

| Name | View Product Reviews |
| :---- | :---- |
| **Description** | This use case allows customers to view reviews and ratings for a specific product. |
| **Actor** | Customer |
| **Trigger** | When the customer clicks on the reviews section of a product detail page. |
| **Pre-condition** | Customer's device must be connected to the internet. Product must exist in the system. |
| **Post-condition** | Product reviews are displayed to the customer. |

###### *Activities Flow*

![][image23]

###### *Sequence Flow*

![][image24]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR33 | **Querying Rules:** System queries reviews from "REVIEWS" table (Refer to "Reviews" table in "DB Sheet" file). System also calculates rating distribution statistics. reviews \= reviewService.ListReviews(\[params\]) \[params\] can include: \[ProductId\] |
| (3) | BR34 | **Displaying Rules:** The system displays reviews section showing: overall rating (1-5 stars), total review count, filter options (by rating, most recent), and list of reviews with reviewer name, rating, review text, images (if any), helpful count, and review date. Pagination loads 20 reviews at a time. (Refer to "Product Reviews" section in "View Description" file) |

##### 2.1.2.5 View Suggested Products {#2.1.2.5-view-suggested-products}

###### *Use Case Description*

| Name | View Suggested Products |
| :---- | :---- |
| **Description** | This use case allows customers to view products suggested based on the current product they are viewing. |
| **Actor** | Customer |
| **Trigger** | Automatically displayed when viewing product details. |
| **Pre-condition** | Customer's device must be connected to the internet. Customer is viewing a product detail page. |
| **Post-condition** | Suggested products are displayed based on recommendation algorithm. |

###### *Activities Flow*

![][image25]

###### *Sequence Flow*

![][image26]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR35 | **Querying Rules:** System queries suggested products/related products using recommendation algorithm based on:  1\. Same category as current product 2\. Relate category by name to current category of the current product 3\. Relate product by name to current product 4\. Similar price range System queries from "PRODUCTS" table (Refer to "Products" table in "DB Sheet" file) products \= productService.ListSuggestedProducts(\[params\]) \[params\] can include: \[product\], \[category\], \[minPrice\], \[maxPrice\] |
| (3) | BR36 | **Displaying Rules:**  The system returns ProductList. The system displays suggested products section at the bottom of product detail page showing: product thumbnail, name, price. The display is organized in a horizontal scrollable carousel. (Refer to "Suggested Products" section in "View Description" file) |
| (3.2) | BR37 | **Navigation Rules:** When customer clicks on a suggested product, system redirects to that product's detail page and recursively executes the "View Product Detail" use case for the selected product. |

##### 2.1.2.6 Add Product to Cart {#2.1.2.6-add-product-to-cart}

###### *Use Case Description*

| Name | Add Product to Cart |
| :---- | :---- |
| **Description** | This use case allows customers to add products to their shopping cart. |
| **Actor** | Customer |
| **Trigger** | When the customer clicks "Add to Cart" button after selecting quantity. |
| **Pre-condition** | Customer's device must be connected to the internet. Product must be available in stock. |
| **Post-condition** | Product is added to customer's shopping cart. |

###### *Activities Flow*

![][image27]

###### *Sequence Flow*

![][image28]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR38 | **Validation Rules:** When customer enters quantity and clicks "Add to Cart", system validates:  \- Quantity must be a positive integer, greater than 0 \- Quantity must not exceed available stock \- Quantity must not exceed maximum purchase limit (if any) if \!isValid(\[product.quantity\]):     throw error(\[MSG19\]) |
| (4) | BR39 | **Validation Rules:** System validates cart data before storing:  \- Check if product still exists and is active in "PRODUCTS" table \- Check if product is still in stock \- If product already exists in cart, add quantities together \- If total quantity exceeds stock Then display error (Refer to MSG 20). Otherwise, store/update cart item in "CARTS" table (Refer to "Carts" table in "DB Sheet" file) and display success notification with cart icon update showing new item count (Refer to MSG 21). if \!(isValid(\[product.quantity\]) && isExisted(\[product\])):     throw error(\[MSG20\]) if hasInCart(\[cart\], \[productId\]):     increaseQuantity(\[cart\], \[product.quantity\]) else:     addToCart(\[cart\], \[product\]) display(\[MSG21\]) |

#### 2.1.3 Manage Cart Use Case {#2.1.3-manage-cart-use-case}

##### 2.1.3.2 Change Product Amount {#2.1.3.2-change-product-amount}

###### *Use Case Description*

| Name | Change Product Amount |
| :---- | :---- |
| **Description** | This use case allows customers to change the quantity of products in their cart. |
| **Actor** | Customer |
| **Trigger** | When the customer adjusts the quantity selector for a cart item. |
| **Pre-condition** | Customer's device must be connected to the internet. Product must exist in cart. |
| **Post-condition** | Product quantity in cart is updated. |

###### *Activities Flow*

![][image29]

###### *Sequence Flow*

![][image30]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR40 | **Validation Rules:** When customer changes product quantity, system validates:  \- New quantity must be a positive integer \- New quantity must be greater than 0 \- New quantity must not exceed available stock \- New quantity must not exceed maximum purchase limit (100) If validation fails, system displays error message (Refer to MSG 19\) and reverts to previous quantity. Otherwise, system updates quantity in "CARTS" table and displays success notification (Refer to MSG 22). if isValid(\[newQuantity\]):     throw error(\[MSG19\]) cartItem \= updateCartItemQuantity(\[cartItem\], \[newQuantity\]) display(\[MSG22\]) |
| (3.2) | BR41 | **Displaying Rules:** After successful update, system refreshes cart view showing: updated quantity, updated item total, updated cart total. All calculations are updated in real-time without page reload. |

##### 2.1.3.3 Remove Product from Cart {#2.1.3.3-remove-product-from-cart}

###### *Use Case Description*

| Name | Remove Product from Cart |
| :---- | :---- |
| **Description** | This use case allows customers to remove products from their cart. |
| **Actor** | Customer |
| **Trigger** | When the customer clicks the "Remove" button for a cart item. |
| **Pre-condition** | Customer's device must be connected to the internet. Product must exist in cart. |
| **Post-condition** | Product is removed from cart. |

###### *Sequence Flow*

![][image31]

###### *Activities Flow*

![][image32]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR42 | **Validation Rules:** System validates product exists in customer's cart by querying "CARTS" table (Refer to "Carts" table in "DB Sheet" file). If product is not found in cart, system displays error message (Refer to MSG 23). Otherwise, system deletes cart item from "CARTS" table and displays success notification (Refer to MSG 24). if \!isExisted(\[cart\], \[product\]):     throw error(\[MSG23\]) cart.RemoveItem(\[product\]) display(\[MSG24\]) |
| (3.2) | BR43 | **Displaying Rules:** After successful removal, system updates cart view removing the item from display and recalculating: cart subtotal, shipping estimate, and total amount. If cart becomes empty, displays empty cart message. |

##### 2.1.3.4 Purchase {#2.1.3.4-purchase}

###### *Use Case Description*

| Name | Purchase |
| :---- | :---- |
| **Description** | This use case allows customers to proceed to checkout and purchase items in their cart or directly from product view. |
| **Actor** | Customer |
| **Trigger** | When the customer clicks "Proceed to Checkout" button. |
| **Pre-condition** | Customer's device must be connected to the internet. Customer must be signed in. |
| **Post-condition** | Customer is redirected to checkout page. |

###### *Activities Flow*

![][image33]

###### *Sequence Flow*

![][image34]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2.2) | BR44 | **Validation Rules:** Before proceeding to checkout, system validates: \- If from cart view, all selected products in cart:    \- All products must still exist and be active in "PRODUCTS" table   \- All products must be in stock with sufficient quantity   \- Cart total must meet minimum order amount (if applicable) \- If direct from product view:   \- All products must still exist and be active in "PRODUCTS" table   \- All products must be in stock with sufficient quantity if \!isValidCartItems(\[cartItems\]):     throw error(\[MSG25\]) productIds \= filterProductIds(\[cartItems\]) products \= listProductsByIds(\[productIds\]) if \!isValidProduct(\[products\]):     throw error(\[MSG26\])    cartService.Checkout(\[cartItems\])  |
| (2.4) | BR45 | **Redirect Rules:** If all validations pass, system closes Cart View and redirects customer to Checkout View with order data. System creates order record with order items, calculated totals, and customer information. (Refer to "Checkout" view in "View Description" file) |

#### 2.1.4 View Order Use Case {#2.1.4-view-order-use-case}

##### 2.1.4.2 Search Order {#2.1.4.2-search-order}

###### *Use Case Description*

| Name | Search Order |
| :---- | :---- |
| **Description** | This use case allows customers to search for specific orders using search criteria. |
| **Actor** | Customer |
| **Trigger** | When the customer enters search criteria in the order search box. |
| **Pre-condition** | Customer's device must be connected to the internet. Customer must be signed in. |
| **Post-condition** | Filtered order results are displayed. |

###### *Sequence Flow*

![][image35]

###### *Activities Flow*

![][image36]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (1) ,(2) | BR46 | **Searching Rules:** When customer enters search criteria, system uses Text\_change() method with debounce delay of 300ms. System queries "ORDERS" table (Refer to "orders" table in "DB Sheet" file). orders \= listOrders(\[params\]) \[params\] can include: \[orderIds\], \[userId\], \[orderStatus\] \[orderStatus\]: \[Pending, Processing, Shipped, Delivered, Cancelled\] |
| (4) | BR47 | **Displaying Rules:** System displays "Order Management" view with filtered results showing matching orders. If no results found, displays "No orders found" message with the "Clear Search" option. Active filters are displayed as removable tags above the order list. |

##### 2.1.4.3 View Order Detail {#2.1.4.3-view-order-detail}

###### *Use Case Description*

| Name | View Order Detail |
| :---- | :---- |
| **Description** | This use case allows customers to view detailed information of a specific order. |
| **Actor** | Customer |
| **Trigger** | When the customer clicks on an order from the order list. |
| **Pre-condition** | Customer's device must be connected to the internet. Customer must be signed in. Order must belong to the customer. |
| **Post-condition** | Detailed order information is displayed. |

###### *Activities Flow*

![][image37]

###### *Sequence Flow*

###### ![][image38]*Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR48 | **Querying Rules:** System queries order details from "ORDERS" and "ORDER\_ITEMS" tables (Refer to "orders" and "order\_items" tables in "DB Sheet" file). System also retrieves order timeline, shipping information, and payment details. order \= orderService.GetOrder(\[params\]) \[params\] can include: \[orderId\] |
| (3) | BR49 | **Displaying Rules:** The system displays "Order Detail" view showing: order header (order number, date, status), product list (each with image, name, quantity, price, review button if delivered), order summary (total, shipping), address, payment provider, and available actions (Cancel Order, Return Product, Contact Support). (Refer to "Order Detail" view in "View Description" file) |

##### 2.1.4.4 Cancel Order {#2.1.4.4-cancel-order}

###### *Use Case Description*

| Name | Cancel Order |
| :---- | :---- |
| **Description** | This use case allows customers to cancel a pending order. |
| **Actor** | Customer |
| **Trigger** | When the customer clicks "Cancel Order" button in order detail view. |
| **Pre-condition** | Customer's device must be connected to the internet. Customer must be signed in. Order must be in cancellable status (Pending or Processing). |
| **Post-condition** | Order is cancelled and status is updated. |

###### *Activities Flow*

![][image39]

###### *Sequence Flow*

![][image40]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR50 | **Displaying Rules:** The system displays a confirmation dialog asking customer to confirm order cancellation with message: "Are you sure you want to cancel this order? This action cannot be undone." |
| (2.1), (2.2) | BR51 | **Selection Rules:** Customer must confirm cancellation. If customer clicks "Cancel" button, dialog closes and use case ends. If customer clicks "Confirm" button, system proceeds with cancellation. |
| (3) | BR52 | **Validation Rules:** System validates order can be cancelled by checking:  \- Order status must be "Pending" or "Processing" \- Order must not have been shipped \- Order must belong to the customer If validation fails, system displays error message (Refer to MSG 27). Otherwise, system updates order status to "Cancelled" in "ORDERS" table, restores product inventory, processes refund if payment was made, and displays success notification (Refer to MSG 28). if \! \[order.status\] in \[‘Pending’, ‘Processing’\]:     throw error(MSG27) orderService.Cancel(order) display(MSG28) |

##### 2.1.4.5 Return Product {#2.1.4.5-return-product}

###### *Use Case Description*

| Name | Return Product |
| :---- | :---- |
| **Description** | This use case allows customers to return a product from a completed order. |
| **Actor** | Customer |
| **Trigger** | When the customer clicks "Return" button for a product in order detail view. |
| **Pre-condition** | Customer's device must be connected to the internet. Customer must be signed in. Order must be delivered. Product must be within return period. |
| **Post-condition** | Return request is created and product status is updated. |

###### *Activities Flow*

![][image41]

###### *Sequence Flow*

![][image42]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR53 | **Displaying Rules:** The system displays a confirmation dialog asking customer to confirm product return with message: "Do you want to return this product? Please ensure the product is in original condition with all accessories." Also displays return policy summary and estimated refund amount. (Refer to "Confirmation Dialog" view in "View Description" file) |
| (2.1), (2.2) | BR54 | **Selection Rules:** Customer must confirm return. If customer clicks "Cancel" button, dialog closes and use case ends. If customer clicks "Confirm" button, system proceeds with return request. |
| (3) | BR55 | **Validation Rules:** System validates product can be returned by checking:  \- Order status must be "Delivered" \- Product must be within return period (typically 30 days from delivery) \- Product must not be marked as non-returnable \- Product must not have been previously returned If validation fails, system displays error message (Refer to MSG 29). Otherwise, system creates return request in "RETURN\_REQUESTS" table, updates product status to "Return Requested" in "ORDER\_ITEMS" table, sends return instructions to customer's email, creates return record in "RETURN\_REQUEST" table, and displays success notification with return instructions (Refer to MSG 30). if \!isOrderValid(\[OrderItem\]):     throw error(\[MSG29\]) \[product\] \= productService.get(\[orderItem.productId\]) if \!isProductValid(\[product\]):     throw error(\[MSG29\]) orderService.Return(\[orderItem\]) display(\[MSG30\]) |

##### 2.1.4.6 Review Product {#2.1.4.6-review-product}

###### *Use Case Description*

| Name | Review Product |
| :---- | :---- |
| **Description** | This use case allows customers to write a review for a product they have purchased. |
| **Actor** | Customer |
| **Trigger** | When the customer clicks "Write Review" button for a delivered product. |
| **Pre-condition** | Customer's device must be connected to the internet. Customer must be signed in. Order must be delivered. Product must not have been reviewed yet. |
| **Post-condition** | Product review is created and stored in the system. |

###### *Sequence Flow*

![][image43]

###### *Activities Flow*

![][image44]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR56 | **Displaying Rules:** The system displays "Product Review" form with empty fields including: star rating selector (1-5 stars), review text area (max 500 characters), image upload section (optional), and Submit button. (Refer to "Product Review" view in "View Description" file) |
| (4) | BR57 | **Validation Rules:** System validates review content in real-time:  \- Star rating must be selected (required) \- Review text must not be empty and must be 50-500 characters \- If image is uploaded, it must be \< 2MB and in JPG/PNG format if isRatingValid(\[rating\]) && isReviewValid(\[review\]) && isImageValid(\[image\]):    productService.CreateReview(\[product\], \[review\], \[rating\], \[image\]) else:     throw error(\[MSG31\]) |
| (7) | BR58 | **Validation Rules:** When customer clicks "Submit" button, system validates review data: \- Customer must have purchased the product \- Customer must not have reviewed this product before \- All required fields must be filled \- Image (if provided) must be valid If validation fails, system displays error message (Refer to MSG 32). Otherwise, system stores review in "REVIEWS" table, updates product rating statistics, and displays success notification (Refer to MSG 33\) with message "Thank you for your review\!." if \!(isPurchased(\[customerId\], \[product\]) && listProductReviews(\[product\], \[customerId\]) \== 0):     throw error(\[MSG32\]) createReview(\[review\], \[product\]) display(\[MSG33\]) |

#### 2.1.5 Contact Support Use Case {#2.1.5-contact-support-use-case}

##### 2.1.5.1 Contact Support {#2.1.5.1-contact-support}

###### *Use Case Description*

| Name | Contact Support |
| :---- | :---- |
| **Description** | This use case allows customers to contact customer support through third-party chat interface. |
| **Actor** | Customer |
| **Trigger** | When the customer clicks "Contact Support" or "Help" button. |
| **Pre-condition** | Customer's device must be connected to the internet. |
| **Post-condition** | Customer is redirected to support chat interface. |

###### *Activities Flow*

![][image45]

###### *Sequence Flow*

![][image46]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR59 | **Redirect Rules:** The system redirects customer to third-party chat support interface (e.g., Facebook, Email). System passes customer context including: customer ID (if signed in), current page URL, and basic customer information to pre-populate chat. |
| (3) | BR60 | **Interaction Rules:** Customer interacts with support chat independently. System does not control or monitor chat interactions. Chat history and support tickets are managed by the third-party support system. |

#### 2.1.6 View Customer Self Report Use Case {#2.1.6-view-customer-self-report-use-case}

##### 2.1.6.1 View Customer Self Report {#2.1.6.1-view-customer-self-report}

###### *Use Case Description*

| Name | View Customer Self Report |
| :---- | :---- |
| **Description** | This use case allows customers to view their own activity and purchase reports. |
| **Actor** | Customer |
| **Trigger** | When the customer navigates to "My Reports" or "My Statistics" section. |
| **Pre-condition** | Customer's device must be connected to the internet. Customer must be signed in. |
| **Post-condition** | Customer activity report is displayed. |

###### *Activities Flow*

![][image47]

###### *Sequence Flow*

![][image48]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR61 | **Displaying Rules:** The system displays "Customer Report" view with empty report charts and filter options. Available report types include: Purchase History, Spending Analysis, Order Statistics, Product Categories. Time range options include: Last 7 days, Last 30 days, Last 3 months, Last year, Custom range. |
| (5) | BR62 | **Querying Rules:** When customer selects report type and time range, system queries data from "ORDERS", "ORDER\_ITEMS", and "CUSTOMER\_REPORT" tables (Refer to corresponding tables in "DB Sheet" file) using SQL based on selected options. System calculates statistics including: total orders, total spending, average order value, most purchased categories, spending trends. reportService.getCustomerReport(\[params\]) \[params\] can include: \[customerId\] |
| (6) | BR63 | **Displaying Rules:** System displays report data in visual format using charts and graphs:  \- Bar chart for spending by time period \- Pie chart for spending by category \- Line chart for order trends \- Table for top purchased products System also displays summary statistics cards showing key metrics. |

#### 2.1.7 View Document Use Case {#2.1.7-view-document-use-case}

##### 2.1.7.1 View Document {#2.1.7.1-view-document}

###### *Use Case Description*

| Name | View Document |
| :---- | :---- |
| **Description** | This use case allows customers to view system documents and guides. |
| **Actor** | Customer |
| **Trigger** | When the customer navigates to "Help Center", "FAQ", or "Documents" section. |
| **Pre-condition** | Customer's device must be connected to the internet. |
| **Post-condition** | Document list and selected document content are displayed. |

###### *Activities Flow*

![][image49]

###### *Sequence Flow*

###### ![][image50]*Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR64 | **Querying Rules:** System queries documents from "DOCUMENT" table (Refer to "Document" table in "DB Sheet" file). Documents are organized by categories: Getting Started, Shopping Guide, Payment & Shipping, Returns & Refunds, Account Management, Terms & Policies. documentService.listDocuments(\[params\]) \[params\] can include: \[status\] |
| (3) | BR65 | **Displaying Rules:** The system displays "Document Management" view showing: document categories in sidebar, document list with title and brief description, search box for filtering documents. |
| (3.1) | BR66 | **Searching Rules:** If customer enters search criteria, system queries documents. documentService.Search(\[keyword\]) |
| (6) | BR67 | **Displaying Rules:** When a customer selects a document, system displays "Document Detail" view showing: document title, last updated date, full document content (formatted with headings, lists, images), related documents section, "Was this helpful?" feedback buttons. |

#### 2.1.8 Manage Product Use Case (Staff) {#2.1.8-manage-product-use-case-(staff)}

##### 2.1.8.2 Add Product {#2.1.8.2-add-product}

###### *Use Case Description*

| Name | Add Product |
| :---- | :---- |
| **Description** | This use case allows staff to add a new product to the system. |
| **Actor** | Staff |
| **Trigger** | When the staff clicks "Add Product" button. |
| **Pre-condition** | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | New product is created and stored in the system. |

###### *Activities Flow*

![][image51]

###### *Sequence Flow*

![][image52]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR68 | **Displaying Rules:** The system displays "Product Detail" form with empty fields including: product name, category dropdown, description editor, price, stock quantity, SKU, brand, options, option values, product images uploader, attribute selector and attribute values selector (can create new value in place), Option creation section, creating Variant Section, and Save button. (Refer to "Add Product” view in "View Description" file) |
| (4) | BR69 | **Validation Rules:** System validates product data in real-time:  \- Product name: required, 3-200 characters \- Category: required, must select from predefined categories \- Description: required, minimum 10 characters \- Price: required, must be positive number, maximum 10 digits \- Stock quantity: required, must be non-negative integer \- SKU: required, unique, alphanumeric, 5-30 characters \- Product images: at least 1 required, each \< 5MB, JPG/PNG format \- Options: If product has variants, there must be options with values, and variant must be formed by those option values. A variant cannot be formed by matrix of the same option’s values. Each variant cannot be formed by the same matrix option values. If product doesn’t have variants, it must have one variant (no option and option value) \- Attribute: Can be omitted, or multiple selected if \!(isNameValid(\[name\]) && isCategoryValid(\[category\]) && isDescriptionValid(\[Description\]) && isPriceValid(\[price\]) && isValid(\[stockQuantity\]) && isValid(\[sku\]) && isValid(\[images\]) && isValid(\[optionArgs\])):     throw error(\[MSG34\]) \[product\] \= createProduct(\[name\], \[description\], \[price\], \[stockQuantity\], \[sku\], \[images\]) \[product\].setCategory(category) \[product\].addAttributes(attributes) \[options\] \= createOptions(\[optionArgs\]) \[product\].addOptions(\[options\]) for each \[variantArg\] in \[variantArgs\]:     \[variant\] \= createVariant(\[variantArg.sku\], \[variantArg.price\], \[variantArg.quantity\])     \[variant\].setOptionValues(\[variantArg.optionValues\])     \[product\].addVariant(\[variant\]) saveProduct(\[product\]) |
| (6) | BR70 | **Validation Rules:** When staff clicks "Save" button, system validates product data:  \- Check if SKU is unique in "PRODUCTS" table If validation fails, system displays error message (Refer to MSG 35). Otherwise, system stores product data in "PRODUCTS" table, stores product images in "PRODUCT\_IMAGES" table, and displays success notification (Refer to MSG 36). System then closes the form and refreshes product list. if isExisted(\[product.sku\]):     throw error(\[MSG36\]) productRepo(\[product\]) |

##### 2.1.8.3 Update Product {#2.1.8.3-update-product}

###### *Use Case Description*

| Name | Update Product |
| :---- | :---- |
| **Description** | This use case allows staff to update existing product information. |
| **Actor** | Staff |
| **Trigger** | When the staff clicks "Edit" button for a product. |
| **Pre-condition** | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. Product must exist in the system. |
| **Post-condition** | Product information is updated in the system. |

###### *Activities Flow*

![][image53]

###### *Sequence Flow*

![][image54]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR71 | **Querying Rules:** System queries product details from "PRODUCTS", "PRODUCT\_IMAGES" tables |
| (3) | BR72 | **Displaying Rules:** The system displays "Product Detail" form filled with current product data including: product relate fields (name, description, images, attributes, options, variants), and Save button. (Refer to "Product Detail" view in "View Description" file) |
| (5) | BR73 | **Validation Rules:** System validates updated product data in real-time using same validation rules as Add Product. If validation fails, system displays error message (Refer to MSG 34). |
| (7) | BR74 | **Validation Rules:** When staff clicks "Save" button, system validates updated data:  \- Validate all required fields are filled and valid \- Validate new images (if uploaded) are valid \- At least 1 product image must remain \- Option and values can only be updated (name), no create or delete \- Variants can be deleted or created or updated \- Attribute value can be added or removed If validation fails, system displays error message (Refer to MSG 35). Otherwise, system updates product data in "PRODUCTS" table, adds/deletes product images in "PRODUCT\_IMAGES" “PRODUCT\_VARIANTS”, “OPTIONS”, “OPTION\_VALUES” and other related tables (the composition tables,...) as needed, updates modified timestamp, and displays success notification (Refer to MSG 37). System then closes the form and refreshes product list. validationErr \= productService.ValidateUpdate(\[updatedData\]) if validationErr:     throw error(\[MSG35\]) if len(\[updatedData.Images\]) \== 0:     throw error(MSG35) product.Update(\[updatedData.Name\], \[updatedData.Description, \[updatedData.CategoryID\]) product.AddImages(\[updatedData.Images\]) product.AddAttributeValues(\[updatedData.AttributeValues\]) for option in updatedData.Options:     product.UpdateOption(\[option.ID\], \[option.Name\]) product.AddVariants(\[updatedData.NewVariants\]) product.UpdateVariantFields(\[updatedData.UpdatedVariants\]) product.RemoveVariants(\[updatedData.DeletedVariantIDs\]) product.UpdatedAt \= now() productRepo.Save(\[product\]) display(\[MSG37\]) |

##### 2.1.8.4 Delete Product {#2.1.8.4-delete-product}

###### *Use Case Description*

| Name | Delete Product |
| :---- | :---- |
| **Description** | This use case allows staff to delete a product from the system. |
| **Actor** | Staff |
| **Trigger** | When the staff clicks "Delete" button for a product. |
| **Pre-condition** | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. Product must exist in the system. |
| **Post-condition** | Product is deleted from the system. |

###### *Activities Flow*

![][image55]

###### *Sequence Flow*

![][image56]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR75 | **Displaying Rules:** The system displays a confirmation dialog asking staff to confirm product deletion with message: "Are you sure you want to delete this product? This action cannot be undone. All product data including reviews will be removed." (Refer to "Confirmation Dialog" view in "View Description" file) |
| (2.1), (2.2) | BR76 | **Selection Rules:** Staff must confirm deletion. If staff clicks "Cancel" button, dialog closes and the use case ends. If staff clicks "Confirm" button, system proceeds with deletion. |
| (3) | BR77 | **Validation Rules:** System validates product can be deleted by checking:  \- Product must not have pending orders The Delete method will soft delete the product, product variant, product options and product option values, product images. The attribute values linked with the product will not be affected. If validation fails, system displays error message (Refer to MSG 38). Otherwise, system performs soft delete by updating status to "Deleted" in "PRODUCTS" table (keeping data for audit purposes), removes product from search index, archives product images, archives product reviews, and displays success notification (Refer to MSG 39). System then refreshes product list. if orderService.IsPending(\[OrderItem\]):     throw error(\[MSG38\]) \[product\] \= productService.Get(\[OrderItem.productId\]) productService.Delete(\[product\]) display(\[MSG29\]) |

##### 2.1.8.5 Search Product {#2.1.8.5-search-product}

###### *Use Case Description*

| Name | Search Product (Staff) |
| :---- | :---- |
| **Description** | This use case allows staff to search for products in the product management system. |
| **Actor** | Staff |
| **Trigger** | When the staff enters search criteria in the search box. |
| **Pre-condition** | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | Filtered product results are displayed. |

###### *Activities Flow*

![][image57]

###### *Sequence Flow*

![][image58]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR78 | **Searching Rules:** When the customer enters search criteria, the system handles the search request with debounce delay of 300ms. System queries data in "PRODUCTS" table (Refer to "Products" table in "DB Sheet" file). System uses Redis cache to store and retrieve search results for popular queries to improve performance. productService.ListProducts(\[params\]) \[params\] can include: \[keyword\], \[categories\], \[sortByRate\], \[sortByPrice\], \[isDeleted\] |
| (3) | BR79 | **Displaying Rules:** System displays "Product Management" view with filtered results showing matching products. Active filters are displayed as removable tags above the product table. Result count is displayed. If no results found, displays "No products found" message with "Clear Search" option.product |

##### 2.1.8.6 Delete Review {#2.1.8.6-delete-review}

###### *Use Case Description*

| Name | Delete Review |
| :---- | :---- |
| **Description** | This use case allows staff to delete inappropriate product reviews. |
| **Actor** | Staff |
| **Trigger** | When the staff clicks "Delete" button for a review in product review management section. |
| **Pre-condition** | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. Review must exist in the system. |
| **Post-condition** | Review is deleted from the system. |

###### *Activities Flow*

![][image59]

###### *Sequence Flow*

###### ![][image60]*Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR80 | **Displaying Rules:** The system displays a confirmation dialog asking staff to confirm review deletion with message: "Are you sure you want to delete this review? This action cannot be undone." Dialog also shows review content preview. (Refer to "Confirmation Dialog" view in "View Description" file) |
| (2.1), (2.2) | BR81 | **Selection Rules:** Staff must confirm deletion. If staff clicks "Cancel" button, dialog closes and use case ends. If staff clicks "Confirm" button, system proceeds with deletion. |
| (3) | BR82 | **Validation Rules:** System validates review exists in "REVIEWS" table (Refer to "Reviews" table in "DB Sheet" file) If review not found, system displays error message (Refer to MSG 40). Otherwise, system deletes review from "REVIEWS" table, deletes associated review images from "REVIEW\_IMAGE" table, updates product rating statistics (recalculates average rating without deleted review), sends notification to review author about deletion (if applicable), and displays success notification (Refer to MSG 41). System then refreshes review list. review \= reviewService.Get(\[ReviewID\]) if review \== null:     throw error(\[MSG40\]) reviewService.Delete(review) display(\[MSG41\]) \[product\] \= productService.Get(\[review.ProductId\]) productService.UpdateAvgRating(\[product\]) |

##### 2.1.8.7 Add Category {#2.1.8.7-add-category}

###### *Use Case Description*

| Name | Add Category |
| :---- | :---- |
| **Description** | This use case allows staff to add a new product category to the system. |
| **Actor** | Staff |
| **Trigger** | When the staff clicks "Add Category" button. |
| **Pre-condition** | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | New category is created and stored in the system. |

###### *Activities Flow*

![][image61]

###### *Sequence Flow*

###### *![][image62]*

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR83 | **Displaying Rules:** The system displays "Category Form" view with empty field for category name. |
| (4) | BR84 | **Validation Rules:** System validates category name in real-time:  \- Category name: required, 2-100 characters, alphanumeric with spaces allowed  \- Category name must not contain only spaces  \- Category name must start with alphanumeric character  if \!isNameValid(\[name\]):          throw error(\[MSG53\]) move to step (5) |
| (6) | BR85 | **Validation Rules:** When staff clicks "Save" button, system validates category data:  \- Check if category name already exists in "CATEGORIES" table (case-insensitive comparison)  \- Validate category name format If validation fails, system displays error message (Refer to MSG 54). Otherwise, system stores category data in "CATEGORIES" table with created\_at timestamp and displays success notification (Refer to MSG 55). System then closes the form and refreshes category list. if isExisted(\[categoryName\]):           throw error(\[MSG54\])  \[category\] \= createCategory(\[name\])  categoryRepo.Save(\[category\])  display(\[MSG55\]) |

##### 2.1.8.8 Add Attribute {#2.1.8.8-add-attribute}

###### *Use Case Description*

| Name | Add Attribute |
| :---- | :---- |
| **Description** | This use case allows staff to add a new product attribute with its values to the system. |
| **Actor** | Staff |
| **Trigger** | When the staff clicks "Add Attribute" button. |
| **Pre-condition** | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | New attribute with its values is created and stored in the system. |

###### *Activities Flow*

![][image63]

###### *Sequence Flow*

![][image64]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR86 | **Displaying Rules:** The system displays "Attribute Form" view with fields for attribute name and a dynamic list for attribute values with "Add Value" button. |
| (4) | BR87 | **Validation Rules:** System validates attribute data in real-time: \- Attribute code: required, 2-50 character \- Attribute name: required, 2-100 characters, alphanumeric with spaces allowed  \- Attribute name must not contain only spaces \- At least one attribute value must be provided  \- Attribute values: each value 1-100 characters, must not be empty or contain only spaces \- Attribute values must be unique within the attribute (case-insensitive)  if \!(isNameValid(\[attributeName\]) && len(\[attributeValues\]) \> 0 && areValuesValid(\[attributeValues\]) && areValuesUnique(\[attributeValues\])):          throw error(\[MSG56\])  move to step (5) |
| (6) | BR88 | **Validation Rules:** When staff clicks "Save" button, system validates attribute data: \- Check if attribute name and attribute code already exists in "ATTRIBUTES" table \- Validate all attribute values are unique \- Validate attribute name and values format If validation fails, system displays error message (Refer to MSG 57). Otherwise, system do:  1\. Store attribute data in "ATTRIBUTES" table with created\_at timestamp  2\. Store each attribute value in "ATTRIBUTE\_VALUES" table linked to the attribute  3\. Displays success notification (Refer to MSG 58). System then closes the form and refreshes attribute list.  if isNameExisted(\[name\]) || isCodeExisted(\[code\]):     throw error(\[MSG57\])  \[attribute\] \= createAttribute(\[name\], \[code\]) for each \[value\] in \[attributeValues\]:     \[attribute\].AddValue(\[value\]) attributeRepo.Save(\[attribute\]) display(\[MSG58\]) |

#### 2.1.9 Manage User Use Case {#2.1.9-manage-user-use-case}

##### 2.1.9.2 Search User {#2.1.9.2-search-user}

###### *Use Case Description*

| Name | Search User |
| :---- | :---- |
| **Description** | This use case allows staff and admin to search for users in the system. |
| **Actor** | Staff, Admin |
| **Trigger** | When the actor enters search criteria in the user search box. |
| **Pre-condition** | Actor's device must be connected to the internet. Actor must be signed in with appropriate privileges. |
| **Post-condition** | Filtered user results are displayed. |

###### *Activities Flow*

![][image65]

###### *Sequence Flow*

![][image66]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR89 | **Searching Rules:** When actor enters search criteria, system handles search with debounce delay of 300ms. System queries users from auth service persistent storage. userService.Search(\[params\]) \[params\] can include: \[name\], \[email\] |
| (3) | BR90 | **Displaying Rules:** Result count is displayed. If no results found, displays "No users found" message with "Clear Search" option. |

##### 2.1.9.3 Change User Roles (Admin only) {#2.1.9.3-change-user-roles-(admin-only)}

###### *Use Case Description*

| Name | Change User Roles |
| :---- | :---- |
| **Description** | This use case allows admin to change a user's role in the system. |
| **Actor** | Admin |
| **Trigger** | When the admin clicks "Change Role" button for a user. |
| **Pre-condition** | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. User must exist in the system. |
| **Post-condition** | User's role is updated in the system. |

###### *Activities Flow*

![][image67]

###### *Sequence Flow*

![][image68]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR91 | **Querying Rules:** System queries user details from auth service persistent storage. System retrieves current role and associated permissions. userService.List() |
| (3) | BR92 | **Displaying Rules:** The system displays "User Detail" view showing: current user information, current role badge, role selector dropdown (Customer, Staff, Admin), role descriptions, and "Change Roles" button. |
| (5) | BR93 | **Validation Rules:** System validates role change in real-time:  \- New role must be different from current role \- New role must be one of: Customer, Staff, Admin \- Admin cannot change their own role to prevent lockout if \!(\[newRole\] \== \[currentRole\] && \[newRole\] in \[‘Customer’, ‘Staff’, ‘Admin’\] && \[currentRole\] \!= ‘Admin’):     throw error(\[MSG42\]) userService.changeRole(\[user\], \[newRole\]) |
| (7) | BR94 | **Validation Rules:** When admin clicks "Change Roles" button, system validates: \- User is not the current admin (self) \- New role is valid \- No pending administrative actions by user (if demoting from Staff/Admin) If validation fails, system displays error message (Refer to MSG 43). Otherwise, system updates role in auth service persistent storage, update the user session (invalidate current session, force user to get new session via refresh token), and displays success notification (Refer to MSG 44). System then refreshes user list. if \!(\[newRole\] \== \[currentRole\] && \[newRole\] in \[‘Customer’, ‘Staff’, ‘Admin’\] && \[currentRole\] \!= ‘Admin’):     throw error(\[MSG43\]) user.UpdateRole(\[newRole\]) userService.Save(\[user\]) session.Refresh() display(\[MSG44\]) |

##### 2.1.9.4 Delete User (Admin only) {#2.1.9.4-delete-user-(admin-only)}

###### *Use Case Description*

| Name | Delete User |
| :---- | :---- |
| **Description** | This use case allows admin to delete a user account from the system. |
| **Actor** | Admin |
| **Trigger** | When the admin clicks "Delete" button for a user. |
| **Pre-condition** | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. User must exist in the system. |
| **Post-condition** | User account is deleted from the system. |

###### *Activities Flow*

![][image69]

###### *Sequence Flow*

![][image70]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR95 | **Displaying Rules:** The system displays a confirmation dialog asking admin to confirm user deletion with message: "Are you sure you want to delete this user account? This action cannot be undone. All user data will be removed." Dialog shows user's name and email for confirmation. (Refer to "Confirmation Dialog" view in "View Description" file) |
| (2.1), (2.2) | BR96 | **Selection Rules:** Admin must confirm deletion. If admin clicks "Cancel" button, dialog closes and use case ends. If admin clicks "Confirm" button, system proceeds with deletion. |
| (3) | BR97 | **Validation Rules:** System validates user can be deleted by checking: \- User is not the current admin (self) \- User must not have pending orders (orders must be completed or cancelled) If validation fails, system displays error message (Refer to MSG 45). Otherwise, system will delete user data (from auth service) permanently, and displays success notification (Refer to MSG 46). System then refreshes user list. if \!(\[currentRole\] \!= ‘Admin’) && hasPendingOrder(\[userId\]):     throw error(\[MSG45\]) display(\[MSG46\]) |

##### 2.1.9.5 View Customer Report {#2.1.9.5-view-customer-report}

###### *Use Case Description*

| Name | View Customer Report |
| :---- | :---- |
| **Description** | This use case allows staff and admin to view customer activity and purchase reports. |
| **Actor** | Staff, Admin |
| **Trigger** | When the actor clicks "View Report" button for a customer. |
| **Pre-condition** | Actor's device must be connected to the internet. Actor must be signed in with appropriate privileges. Customer must exist in the system. |
| **Post-condition** | Customer activity report is displayed. |

###### *Activities Flow*

![][image71]

###### *Sequence Flow*

![][image72]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (1) | BR98 | **Displaying Rules:** The system displays "Customer Report" view with empty report charts and filter options. Available report types include: Purchase History, Spending Analysis, Order Statistics, Product Preferences, Account Activity. Time range options include: Last 7 days, Last 30 days, Last 3 months, Last year, Custom range. |
| (4) | BR99 | **Querying Rules:** When actor selects customer, report type, and time range, system queries data from "ORDERS", "ORDER\_ITEMS", and "CUSTOMER\_REPORT" tables (Refer to corresponding tables in "DB Sheet" file). System calculates: total orders, total spending, average order value, order frequency, most purchased categories, spending trends, return rate. \[orders\] \= orderService.ListByUserId(\[customerId\]) \[customerReports\] \= reportService.GetCustomerReports(\[customerId\]) |
| (5) | BR100 | **Displaying Rules:** System displays report data in visual format using charts and graphs:  \- Bar chart for spending by time period \- Pie chart for spending by category \- Line chart for order trends over time \- Table for top purchased products \- Summary statistics cards showing key metrics \- Customer lifetime value (CLV) indicator Report can be exported to PDF or Excel format. |

##### 2.1.9.6 View Staff Report (Admin only) {#2.1.9.6-view-staff-report-(admin-only)}

###### *Use Case Description*

| Name | View Staff Report |
| :---- | :---- |
| **Description** | This use case allows admin to view staff performance and activity reports. |
| **Actor** | Admin |
| **Trigger** | When the admin clicks "View Report" button for a staff member. |
| **Pre-condition** | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. Staff member must exist in the system. |
| **Post-condition** | Staff performance report is displayed. |

###### *Activities Flow*

![][image73]

###### *Sequence Flow*

![][image74]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (1) | BR101 | **Displaying Rules:** The system displays "Staff Report" view with empty report charts and filter options. Available report types include: Product Management Activity, User Management Activity, Review Moderation Activity, Order Processing Activity, Overall Performance. Time range options include: Last 7 days, Last 30 days, Last 3 months, Last year, Custom range. (Refer to "Staff Report" view in "View Description" file) |
| (4) | BR102 | **Querying Rules:** When admin selects staff, report type, and time range, system queries data from "STAFF\_ACTIVITY", "PRODUCTS", "REVIEWS" tables (Refer to corresponding tables in "DB Sheet" file). System calculates: total products added/updated, total reviews moderated, total users managed, average response time, activity distribution, performance metrics. \[staffActivities\] \= reportService.GetStaffActivities(\[StaffId\]) \[report\] \= reportService.GetStaffReport(\[StaffId\])  |
| (5) | BR103 | **Displaying Rules:** System displays report data in visual format:  \- Bar chart for activities by type \- Line chart for activity trends over time \- Pie chart for time distribution by activity type \- Summary statistics cards showing key performance indicators Report can be exported to PDF or Excel format for performance reviews. |

#### 2.1.10 View Shop Report Use Case {#2.1.10-view-shop-report-use-case}

##### 2.1.10.1 View Shop Report {#2.1.10.1-view-shop-report}

###### *Use Case Description*

| Name | View Shop Report |
| :---- | :---- |
| **Description** | This use case allows admin to view overall shop performance and analytics reports. |
| **Actor** | Admin |
| **Trigger** | When the admin navigates to "Shop Reports" or "Analytics" section. |
| **Pre-condition** | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | Shop performance report is displayed with selected metrics. |

###### *Activities Flow*

![][image75]

###### *Sequence Flow*

![][image76]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (1) | BR104 | **Displaying Rules:** The system displays "Shop Report" view with empty report charts and filter options. Available report types include: Sales Overview, Revenue Analysis, Product Performance, Customer Analytics, Inventory Status, Order Statistics. Time range options include: Today, Yesterday, Last 7 days, Last 30 days, Last 3 months, Last year, Custom range. |
| (4) | BR105 | **Querying Rules:** When admin selects report type and time range, system queries aggregated data from multiple tables including "ORDERS", "PRODUCTS", "USERS", "ORDER\_ITEMS" (Refer to corresponding tables in "DB Sheet" file). System calculates comprehensive metrics:  \- Total revenue and revenue trends \- Total orders and order status distribution \- Best-selling products \- Low stock alerts \- Customer acquisition and retention rates \- Return rate and return reasons \- Peak sales hours/days \- Conversion rate \[reports\] \= reportService.ListShopReports(\[startDate\], \[endDate\]) \[orders\] \= orderService.List(\[startDate\], \[endDate\]) \[products\] \= productService.List(\[startDate\], \[endDate\], \[sortByTrendingScore\], \[category\], \[sortByStockQuantity\]) \[returns\] \= returnService.List(\[startDate\], \[endDate\]) |
| (6) | BR106 | **Displaying Rules:** System displays comprehensive shop report with multiple visualization components: \- Dashboard overview with key metrics cards (revenue, orders, customers, conversion rate) \- Line chart for revenue/sales trends \- Bar chart for top-selling products \- Pie chart for order status distribution \- Pie chart for revenue by category \- Table for product performance ranking \- Table for inventory alerts \- Heat map for sales by time period \- Comparison metrics vs. previous period Report supports drill-down functionality to view detailed data. Reports can be exported to PDF, Excel, or scheduled for automatic email delivery. |

#### 2.1.11 View System Monitoring Use Case {#2.1.11-view-system-monitoring-use-case}

##### 2.1.11.1 View System Monitoring {#2.1.11.1-view-system-monitoring}

###### *Use Case Description*

| Name | View System Monitoring |
| :---- | :---- |
| **Description** | This use case allows admin to monitor system performance, health, and usage statistics, log. |
| **Actor** | Admin |
| **Trigger** | When the admin navigates to "System Monitoring" or "System Health" section. |
| **Pre-condition** | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | System monitoring dashboard is displayed with real-time metrics. |

###### *Activities Flow*

![][image77]

###### *Sequence Flow*

![][image78]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR107 | **Querying Rules:** Monitoring system queries for metric, log from (metric and log storage). System collects real-time metrics, log:  \- System uptime and availability percentage \- Server response time (average, min, max) \- API endpoint performance \- Database query performance \- Active user sessions \- Memory and CPU usage \- Disk space usage \- Error rate and error logs \- Request rate (requests per second) \- Cache hit rate |
| (3) | BR108 | **Displaying Rules:** System displays "System Monitoring" dashboard with real-time visualizations:  \- Status indicator (Healthy/Warning/Critical) at the top \- Real-time metrics cards showing: uptime percentage (target: 99.5%), average response time, active sessions, error rate \- Line chart for response time trends (last 24 hours) \- Line chart for memory/CPU usage over time \- Bar chart for API endpoint performance \- Table for recent error logs with severity levels \- Table for slow database queries \- System resource gauge charts (memory, CPU, disk) \- Alert notifications for threshold breaches Dashboard auto-refreshes every 30 seconds. Historical data can be viewed for up to 30 days. Critical alerts trigger email notifications to admin. |

#### 2.1.12 Adjust Document Use Case {#2.1.12-adjust-document-use-case}

##### 2.1.12.2 Create Document {#2.1.12.2-create-document}

###### *Use Case Description*

| Name | Create Document |
| :---- | :---- |
| **Description** | This use case allows admin to create a new system document. |
| **Actor** | Admin |
| **Trigger** | When the admin clicks "Create Document" button. |
| **Pre-condition** | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | New document is created and stored in the system. |

###### *Activities Flow*

![][image79]

###### *Sequence Flow*

![][image80]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR109 | **Displaying Rules:** The system displays "Document Detail" form with empty fields including: document title, category dropdown (Getting Started, Shopping Guide, Payment & Shipping, Returns & Refunds, Account Management, Terms & Policies), rich text content editor with formatting toolbar, target audience multi-select (Customer, Staff, Admin), status selector (Draft/Published), meta description (for SEO), and Save button. |
| (4) | BR110 | **Validation Rules:** System validates document data in real-time:  \- Title: required, 5-200 characters \- Category: required, must select from predefined categories \- Content: required, minimum 100 characters \- Target audience: at least one must be selected \- Meta description: optional, maximum 300 characters if \!(isTitleValid(\[title\]) && isCategoryValid(\[category\]) && isContentValid(\[content\]) && len(audiences) \> 0 && isDesciptionValid(\[description\])):     throw error(\[MSG47\]) move to step(5) |
| (6) | BR111 | **Validation Rules:** When admin clicks "Save" button, system validates document data:  \- All required fields are filled \- Content is properly formatted and valid HTML if \!(isTitleValid(\[title\]) && isCategoryValid(\[category\]) && isContentValid(\[content\]) && len(audiences) \> 0 && isDesciptionValid(\[description\])):     throw error(\[MSG48\]) display(\[MSG49\]) |

##### 2.1.12.3 Update Document {#2.1.12.3-update-document}

###### *Use Case Description*

| Name | Update Document |
| :---- | :---- |
| **Description** | This use case allows admin to update existing document content and settings. |
| **Actor** | Admin |
| **Trigger** | When the admin clicks "Edit" button for a document. |
| **Pre-condition** | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. Document must exist in the system. |
| **Post-condition** | Document information is updated in the system. |

###### *Activities Flow*

![][image81]

###### *Sequence Flow*

###### ![][image82]*Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR112 | **Querying Rules:** System queries document details \[document\] \= documentService.Get(\[documentId\]) |
| (3) | BR113 | **Displaying Rules:** The system displays "Document Detail" form filled with current document data including: all document fields, version history section showing previous versions with rollback option, and Save button. (Refer to "Document Detail" view in "View Description" file) |
| (5) | BR114 | **Validation Rules:** System validates updated document data in real-time using same validation rules as Create Document. If validation fails, system displays error message (Refer to MSG 47). |
| (7) | BR115 | **Validation Rules:** When admin clicks "Save" button, system validates updated data:  \- All required fields are filled \- Content is properly formatted if \!(isTitleValid(\[title\]) && isCategoryValid(\[category\]) && isContentValid(\[content\]) && len(audiences) \> 0 && isDesciptionValid(\[description\])):     throw error(\[MSG48\]) display(\[MSG50\]) refreshDocumentList() If validation fails, system displays error message (Refer to MSG 48). Otherwise, system displays success notification (Refer to MSG 50). System then closes the form and refreshes document list. |

##### 2.1.12.4 Delete Document {#2.1.12.4-delete-document}

###### *Use Case Description*

| Name | Delete Document |
| :---- | :---- |
| **Description** | This use case allows admin to delete a document from the system. |
| **Actor** | Admin |
| **Trigger** | When the admin clicks "Delete" button for a document. |
| **Pre-condition** | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. Document must exist in the system. |
| **Post-condition** | Document is deleted from the system. |

###### *Activities Flow*

![][image83]

###### *Sequence Flow*

###### ![][image84]*Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR116 | **Displaying Rules:** The system displays a confirmation dialog asking admin to confirm document deletion with message: "Are you sure you want to delete this document? This action cannot be undone." Dialog shows document title for confirmation. (Refer to "Confirmation Dialog" view in "View Description" file) |
| (2.1), (2.2) | BR117 | **Selection Rules:** Admin must confirm deletion. If admin clicks "Cancel" button, dialog closes and use case ends. If admin clicks "Confirm" button, system proceeds with deletion. |
| (3) | BR118 | **Validation Rules:** System validates document exists. If document not found, system displays error message (Refer to MSG 51). Otherwise, system performs soft delete by updating status to "Deleted", removes document from search index, and displays success notification (Refer to MSG 52). System then refreshes document list. \[document\] \= documentService.Get(\[documentId\]) if \!document:     throw error(\[MSG51\]) documentService.SoftDelete(\[document\]) display(\[MSG52\]) refreshDocumentList() |

##### 2.1.12.5 Search Document {#2.1.12.5-search-document}

###### *Use Case Description*

| Name | Search Document (Admin) |
| :---- | :---- |
| **Description** | This use case allows admin to search for documents in the document management system. |
| **Actor** | Admin |
| **Trigger** | When the admin enters search criteria in the document search box. |
| **Pre-condition** | Admin's device must be connected to the internet. Admin must be signed in with admin privileges. |
| **Post-condition** | Filtered document results are displayed. |

###### *Activities Flow*

![][image85]

###### *Sequence Flow*

###### ![][image86]*Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR119 | **Searching Rules:** When admin enters search criteria, system handles debounce delay of 300ms… \[documents\] \= documentService.List(\[params\]) \[params\] can include:  \[documentId\], \[documentIds\], \[isDeleted\] |
| (3) | BR120 | **Displaying Rules:** System displays "Document Management" view with filtered results showing matching documents. Active filters are displayed as removable tags. Result count is displayed. If no results found, displays "No documents found" message with "Clear Search" option. Search results highlight matched keywords in title and content preview. |

#### 2.1.13 View Staff Self Report Use Case {#2.1.13-view-staff-self-report-use-case}

##### 2.1.13.1 View Staff Self Report {#2.1.13.1-view-staff-self-report}

###### *Use Case Description*

| Name | View Staff Self Report |
| :---- | :---- |
| **Description** | This use case allows staff to view their own performance and activity reports. |
| **Actor** | Staff |
| **Trigger** | When the staff navigates to "My Performance" or "My Reports" section. |
| **Pre-condition** | Staff's device must be connected to the internet. Staff must be signed in with staff privileges. |
| **Post-condition** | Staff performance report is displayed. |

###### *Activities Flow*

![][image87]

###### *Sequence Flow*

![][image88]

###### *Business Rules*

| Activity | BR Code | Description |
| :---- | :---- | :---- |
| (2) | BR121 | **Displaying Rules:** The system displays "Staff Self Report" view with empty report charts and filter options. Available report types include: My Product Management Activity, My User Management Activity, My Review Moderation Activity, Overall My Performance. Time range options include: Today, Last 7 days, Last 30 days, Last 3 months, This year. (Refer to "Staff Self Report" view in "View Description" file) |
| (5) | BR122 | **Querying Rules:** When staff selects report type and time range, system queries data from "STAFF\_ACTIVITY" table (Refer to "StaffActivity" table in "DB Sheet" file). System calculates: total products added/updated, total reviews moderated, total users managed, activity distribution, daily averages. reportService.getStaffReport(\[params\]) \[params\] can include: \[staffId\], \[startDate\], \[endDate\], \[type\] \[type\]: \[‘productsManaged’, ‘reviewsModerated’\] |
| (6) | BR123 | **Displaying Rules:** System displays staff self report with visualizations:  \- Summary cards showing:  activity totalities, products managed, reviews moderated \- Line chart showing activity trends over selected period \- Bar chart showing activity distribution by type \- Calendar heat map showing daily activity intensity \- Table listing recent activities with timestamps \- Performance comparison vs. team average (if available) Report helps staff track their own productivity and identify improvement areas. |

### 2.2 List Description {#2.2-list-description}

[list description](https://docs.google.com/spreadsheets/d/1cj2hpflDFAKjSCCdVPaIyBcr1G2DxPVa/edit?usp=drive_link&ouid=100911792397330771782&rtpof=true&sd=true)

### 2.3 View Description {#2.3-view-description}

[view description](https://docs.google.com/spreadsheets/d/1IY1xpIl34_e5T1E1dMMatWpxhNDwam-x/edit?rtpof=true)

## 3\. Non-functional Requirements {#3.-non-functional-requirements}

### 3.1 User Access and Security {#3.1-user-access-and-security}

| Function | User | Customer | Staff | Admin |
| :---- | :---: | :---: | :---: | :---: |
| **Manage Account Functions** |  |  |  |  |
| Sign Up | X |  |  |  |
| Sign In | X | X | X | X |
| Sign Out |  | X | X | X |
| Edit Profile |  | X(\*) | X(\*) | X(\*) |
| Link Account With Third Party |  | X(\*) | X(\*) | X(\*) |
| Delete Account |  | X(\*) | X(\*) | X(\*) |
| Reset Password |  | X(\*) | X(\*) | X(\*) |
| View Account Activity |  | X(\*) | X(\*) | X(\*) |
| Recover Account | X | X | X | X |
| **View Product Functions** |  |  |  |  |
| View Product | X | X | X | X |
| Search Product | X | X | X | X |
| View Product Detail | X | X | X | X |
| View Product Reviews | X | X | X | X |
| View Suggested Products | X | X | X | X |
| Add Product to Cart |  | X |  |  |
| **Manage Cart Functions** |  |  |  |  |
| Manage Cart |  | X(\*) |  |  |
| Change Product Amount |  | X(\*) |  |  |
| Remove Product from Cart |  | X(\*) |  |  |
| Purchase |  | X(\*) |  |  |
| **View Order Functions** |  |  |  |  |
| View Order |  | X(\*) |  |  |
| Search Order |  | X(\*) |  |  |
| View Order Detail |  | X(\*) |  |  |
| Cancel Order |  | X(\*) |  |  |
| Return Product |  | X(\*) |  |  |
| Review Product |  | X(\*) |  |  |
| **Other Customer Functions** |  |  |  |  |
| Contact Support | X | X |  |  |
| View Customer Self Report |  | X(\*) |  |  |
| View Document | X | X | X | X |
| **Manage Product Functions** |  |  |  |  |
| Manage Product |  |  | X | X |
| Add Product |  |  | X | X |
| Update Product |  |  | X | X |
| Delete Product |  |  | X | X |
| Search Product (Staff) |  |  | X | X |
| Delete Review |  |  | X | X |
| **Manage User Functions** |  |  |  |  |
| Manage User |  |  | X | X |
| Search User |  |  | X | X |
| View Customer Report |  |  | X | X |
| Change User Roles |  |  |  | X |
| Delete User |  |  |  | X |
| View Staff Report |  |  |  | X |
| **Admin Functions** |  |  |  |  |
| View Shop Report |  |  |  | X |
| View System Monitoring |  |  |  | X |
| Adjust Document |  |  |  | X |
| Create Document |  |  |  | X |
| Update Document |  |  |  | X |
| Delete Document |  |  |  | X |
| Search Document (Admin) |  |  |  | X |
| **Staff Functions** |  |  |  |  |
| View Staff Self Report |  |  | X(\*) | X(\*) |

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

- Support minimum 50 concurrent users
- Support minimum 50 active customer accounts
- Support minimum 10 staff members
- Support minimum 500 products in catalog
- Database capable of handling ,1000 orders per year
- Support minimum 50 product reviews each product
- Cart operations support 20 concurrent transactions
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

## 4\. Other Requirements {#4.-other-requirements}

### 4.1 Archive Function {#4.1-archive-function}

| List | Actor | Condition |
| :---- | :---- | :---- |
| Order | Admin | The Admin is able to archive completed orders older than 2 years. Archived orders remain accessible for compliance but are moved to cold storage. |
| User | Admin | The Admin is able to archive deleted user accounts after 90 days of deletion. Personal data is anonymized per GDPR requirements. |
| Product | Staff, Admin | Staff/Admin can archive discontinued products. Archived products are hidden from customer view but retain historical data for reporting. |
| Review | Staff, Admin | Staff/Admin can archive old reviews (older than 3 years) while maintaining review statistics. |
| Document | Admin | The Admin is able to archive outdated documents. Archived documents are not visible to users but accessible to admin for historical reference. |
| Staff Activity Log | Admin | The Admin is able to archive staff activity logs older than 1 year for audit compliance. |
| System Monitoring Data | Admin | The Admin is able to archive system monitoring data older than 90 days to maintain database performance. |

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

| \# | Site Name | Description |
| :---- | :---- | :---- |
| 1 | Customer Site | This is the main e-commerce website for customers. It provides functionalities to browse products, search products, view product details and reviews, manage shopping cart, place orders, track orders, write reviews, view documents, contact support, and view personal reports. |
| 2 | Staff Site | This site is designed for staff members. It enables them to manage products (add, update, delete), moderate product reviews, search products with advanced filters, view and manage users (customers only), view customer reports, and view their own performance reports. |
| 3 | Admin Site | This is the control console for administrators. It provides full access to manage users (including staff), change user roles, view comprehensive shop reports, monitor system health and performance, manage system documents, view staff performance reports, and access all staff functionalities. Admin site includes advanced analytics and system configuration options. |

### 4.4 Electricilies Lists {#4.4-electricilies-lists}

Refer to section 2.2 List Description for detailed information about all lists/tables used in the Electricilies system.

### 4.5 Custom Pages {#4.5-custom-pages}

Custom pages implemented in the Electricilies system:

| \# | Page Name | Description | User Role |
| :---- | :---- | :---- | :---- |
| 1 | Dashboard | Personalized dashboard showing quick stats and recent activities | Customer, Staff, Admin |
| 2 | Analytics Dashboard | Comprehensive analytics page with customizable widgets | Admin |
| 3 | Inventory Management | Advanced inventory tracking and low-stock alerts | Staff, Admin |
| 4 | Bulk Operations | Interface for bulk product updates and data import/export | Staff, Admin |
| 5 | Notification Center | Centralized notification management for all system alerts | All authenticated users |
| 6 | Order Tracking | Real-time order tracking with map integration | Customer |
| 7 | Wishlist | Product wishlist management for customers | Customer |
| 8 | Comparison Tool | Side-by-side product comparison interface | Customer |
| 9 | Advanced Search | Advanced search page with multiple filter options | All |
| 10 | Category Management | Product category hierarchy management | Admin |

### 4.6 Scheduled Agents {#4.6-scheduled-agents}

Scheduled jobs and automated tasks in the Electricilies system:

| \# | Agent Name | Schedule | Description |
| :---- | :---- | :---- | :---- |
| 1 | Order Status Sync | Every 15 minutes | Synchronizes order status with shipping providers and updates tracking information |
| 2 | Inventory Alert | Daily at 8:00 AM | Checks inventory levels and sends low-stock alerts to staff |
| 3 | Abandoned Cart Reminder | Daily at 10:00 AM | Sends email reminders to customers with abandoned carts (older than 24 hours) |
| 4 | Review Notification | Daily at 9:00 AM | Sends email notifications to customers prompting them to review delivered orders |
| 5 | Report Generation | Daily at 1:00 AM | Generates and caches daily sales and performance reports |
| 6 | Database Backup | Daily at 2:00 AM | Performs full database backup and verification |
| 7 | Log Cleanup | Weekly on Sunday at 3:00 AM | Archives old logs and cleans up temporary data |
| 10 | Analytics Aggregation | Daily at 4:00 AM | Aggregates daily analytics data for reporting |
| 11 | Product Recommendation Update | Daily at 5:00 AM | Updates product recommendation algorithm with latest purchase data |
| 12 | Price Update | As configured | Processes scheduled price changes and promotional pricing |

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

| Term | Description |
| :---- | :---- |
| *API* | **A**pplication **P**rogramming **I**nterface |
| *AWS* | **A**mazon **W**eb **S**ervices |
| *BR* | **B**usiness **R**ule |
| *CDN* | **C**ontent **D**elivery **N**etwork |
| *CLV* | **C**ustomer **L**ifetime **V**alue |
| *CPU* | **C**entral **P**rocessing **U**nit |
| *CRUD* | **C**reate, **R**ead, **U**pdate, **D**elete |
| *CSRF* | **C**ross-**S**ite **R**equest **F**orgery |
| *DB* | **D**ata**b**ase |
| *GDPR* | **G**eneral **D**ata **P**rotection **R**egulation |
| *HTML* | **H**yper**T**ext **M**arkup **L**anguage |
| *HTTPS* | **H**yper**T**ext **T**ransfer **P**rotocol **S**ecure |
| *ID* | **Id**entifier |
| *IP* | **I**nternet **P**rotocol |
| *JPG/JPEG* | **J**oint **P**hotographic **E**xperts **G**roup (image format) |
| *JSON* | **J**ava**S**cript **O**bject **N**otation |
| *JWT* | **J**SON **W**eb **T**oken |
| *MB* | **M**ega**b**yte |
| *MSG* | **M**es**s**a**g**e |
| *N/A* | **N**ot **A**vailable or **N**ot **A**pplicable |
| *OAuth* | **O**pen **Auth**orization |
| *PCI DSS* | **P**ayment **C**ard **I**ndustry **D**ata **S**ecurity **S**tandard |
| *PDF* | **P**ortable **D**ocument **F**ormat |
| *PNG* | **P**ortable **N**etwork **G**raphics (image format) |
| *RBAC* | **R**ole-**B**ased **A**ccess **C**ontrol |
| *REST* | **RE**presentational **S**tate **T**ransfer |
| *RTO* | **R**ecovery **T**ime **O**bjective |
| *SEO* | **S**earch **E**ngine **O**ptimization |
| *SKU* | **S**tock **K**eeping **U**nit |
| *SQL* | **S**tructured **Q**uery **L**anguage |
| *SRS* | **S**oftware **R**equirements **S**pecification |
| *SSL/TLS* | **S**ecure **S**ockets **L**ayer / **T**ransport **L**ayer **S**ecurity |
| *TBD* | **T**o **b**e **d**etermined or **t**o **b**e **d**efined |
| *UC* | **U**se **C**ase |
| *UI* | **U**ser **I**nterface |
| *URL* | **U**niform **R**esource **L**ocator |
| *UUID* | **U**niversally **U**nique **Id**entifier |
| *XSS* | **C**ross-**S**ite **S**cripting |

### 5.2 Mapping to Notes Application {#5.2-mapping-to-notes-application}

There is no mapping between the Electricilies application and any source Notes application.

### 5.3 Messages {#5.3-messages}

This section describes the details of messages used in business rules including error messages, confirmation messages, success messages, and informational messages.

| Message Code | Message Content | Button |
| :---- | :---- | :---- |
| MSG 1 | This field is required. Please provide valid information to proceed. | Ok |
| MSG 2 | This username or email is already registered. Please use a different one. | Ok |
| MSG 3 | Invalid authorization code or verifier. Please try again. | Ok |
| MSG 4 | Invalid authentication token. Please sign in again. | Ok |
| MSG 5 | Invalid username/email or password. Please check your credentials and try again. | Ok |
| MSG 6 | You have been successfully signed out. Redirecting to sign in page... | Ok |
| MSG 7 | Email address is already registered by another account. Please use a different email. | Ok |
| MSG 8 | Phone number is already registered by another account. Please use a different phone. | Ok |
| MSG 9 | Profile updated successfully. | Ok |
| MSG 10 | This account is already linked to this provider or provider account is linked to another user. | Ok |
| MSG 11 | Account linked successfully with third-party provider. | Ok |
| MSG 12 | Cannot delete account. You have pending orders or active subscriptions that must be resolved first. | Ok |
| MSG 13 | Your account has been deleted successfully. Thank you for using our service. | Ok |
| MSG 14 | Password does not meet requirements. Must be at least 8 characters with uppercase, lowercase, number, and special character. | Ok |
| MSG 15 | Current password is incorrect. Please try again. | Ok |
| MSG 16 | Password updated successfully. | Ok |
| MSG 17 | If this email is registered, you will receive a password reset link shortly. | Ok |
| MSG 18 | Password reset email sent successfully. Please check your inbox and follow the instructions. | Ok |
| MSG 19 | Invalid quantity. Please enter a valid positive number that does not exceed available stock. | Ok |
| MSG 20 | Total quantity exceeds available stock. Please reduce quantity. | Ok |
| MSG 21 | Product added to cart successfully. | Ok |
| MSG 22 | Cart updated successfully. | Ok |
| MSG 23 | Product not found in cart. | Ok |
| MSG 24 | Product removed from cart successfully. | Ok |
| MSG 25 | Cannot proceed to checkout. Some items in your cart are no longer available or have insufficient stock. | Ok |
| MSG 26 | Cannot proceed to checkout. One or more products are no longer available. | Ok |
| MSG 27 | Cannot cancel order. Order has already been shipped or is not in cancellable status. | Ok |
| MSG 28 | Order cancelled successfully. Refund will be processed within 3-5 business days. | Ok |
| MSG 29 | Cannot return product. Product is not eligible for return or return period has expired. | Ok |
| MSG 30 | Return request created successfully. Please check your email for return instructions. | Ok |
| MSG 31 | Invalid review content. Please ensure all required fields are filled correctly. | Ok |
| MSG 32 | Cannot submit review. You have not purchased this product or have already reviewed it. | Ok |
| MSG 33 | Thank you for your review\! It will be published after moderation. | Ok |
| MSG 34 | Invalid product data. Please check all required fields and try again. | Ok |
| MSG 35 | Cannot save product. SKU already exists or validation failed. | Ok |
| MSG 36 | Product created successfully. | Ok |
| MSG 37 | Product updated successfully. | Ok |
| MSG 38 | Cannot delete product. Product has pending orders. | Ok |
| MSG 39 | Product deleted successfully. | Ok |
| MSG 40 | Review not found. | Ok |
| MSG 41 | Review deleted successfully. | Ok |
| MSG 42 | Invalid role change. Please select a different role. | Ok |
| MSG 43 | Cannot change user role. User has pending administrative actions. | Ok |
| MSG 44 | User role updated successfully. User will need to sign in again. | Ok |
| MSG 45 | Cannot delete user. User has pending orders or active disputes. | Ok |
| MSG 46 | User deleted successfully. | Ok |
| MSG 47 | Invalid document data. Please check all required fields. | Ok |
| MSG 48 | Cannot save document. Title already exists in this category or validation failed. | Ok |
| MSG 49 | Document created successfully. | Ok |
| MSG 50 | Document updated successfully. | Ok |
| MSG 51 | Document not found. | Ok |
| MSG 52 | Document deleted successfully. | Ok |
| MSG 53 | Invalid category name format. Category name must be 2-100 characters and start with alphanumeric character. | Ok |
| MSG 54 | Category name already exists. Please use a different name. | Ok |
| MSG 55 | Category created successfully. | Ok |
| MSG 56 | Invalid attribute data. Please ensure attribute name and at least one unique value are provided. | Ok |
| MSG 57 | Attribute name already exists or attribute values are not unique. Please check and try again. | Ok |
| MSG 58 | Attribute and values created successfully. | Ok |

### 5.4 Issues List {#5.4-issues-list}

N/A