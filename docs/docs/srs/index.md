---
outline: [1, 5]
---

# SOFTWARE REQUIREMENTS SPECIFICATION

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

#### 2.1.1 Authentication Use Cases

##### 2.1.1.1 Sign In Use Case

###### Use Case Description

| Name               | Sign In                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------- |
| **Description**    | This use case allows users to authenticate and access the system using their credentials. |
| **Actor**          | Customer, Staff, Admin                                                                    |
| **Trigger**        | When the user clicks on the "Sign In" button on the login page.                           |
| **Pre-condition**  | User's device must be connected to the internet. User account must exist in the system.   |
| **Post-condition** | User is authenticated and redirected to the appropriate dashboard based on their role.    |

###### Sequence Flow

[sequence-auth-sign-in](../sequence/auth/sign-in.html)

###### Activities Flow

[activity-auth-sign-in](../activity/auth/sign-in.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (1)      | BR1     | **Displaying Rules:** The system displays a "Sign In" screen with fields for username/email and password, along with options for "Remember Me" and "Forgot Password".                                                                                                                                                                                                                      |
| (2)      | BR2     | **Validation Rules:** When user enters credentials, the system validates the input format using validateInput(username, password) method. The system checks: <br>- Username/email is not empty<br>- Password is not empty<br>- Email format is valid (if email is used)<br>If validation fails, display error message (Refer to MSG 1).                                                    |
| (3)      | BR3     | **Authentication Rules:** System queries the ACCOUNT table in the database to verify credentials. Password is hashed and compared with stored hash. If authentication fails, increment failed login attempts counter. After 3 failed attempts, temporarily lock the account for 15 minutes (Refer to MSG 2).                                                                               |
| (4)      | BR4     | **Session Management:** Upon successful authentication:<br>- Create user session with unique session ID<br>- Store session data including user ID, role, and login timestamp<br>- Generate JWT token for API authentication<br>- Redirect user to role-appropriate home page (Customer → Home, Staff → Product Management, Admin → Dashboard)<br>Display success message (Refer to MSG 3). |

##### 2.1.1.2 Sign Up Use Case

###### Use Case Description

| Name               | Sign Up for Customer                                                       |
| ------------------ | -------------------------------------------------------------------------- |
| **Description**    | This use case allows new users to create a customer account in the system. |
| **Actor**          | Customer (Guest)                                                           |
| **Trigger**        | When the user clicks on the "Sign Up" button on the login page.            |
| **Pre-condition**  | User's device must be connected to the internet.                           |
| **Post-condition** | New customer account is created and user is signed in to the system.       |

###### Sequence Flow

[sequence-auth-sign-up](../sequence/auth/sign-up.html)

###### Activities Flow

[activity-auth-sign-up](../activity/auth/sign-up.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** The system displays a "Sign Up" screen with required fields: username, email, password, confirm password, full name, phone number, and optional fields for address details.                                                                                                                                                                                                          |
| (2)      | BR2     | **Validation Rules:** System validates all input fields:<br>- Username: 4-20 characters, alphanumeric only<br>- Email: valid email format<br>- Password: minimum 8 characters, must contain uppercase, lowercase, number, and special character<br>- Confirm Password: must match password<br>- Phone: valid phone number format<br>If validation fails, display specific error messages (Refer to MSG 4). |
| (3)      | BR3     | **Uniqueness Check:** System checks ACCOUNT table for existing username and email. If either exists, display error message (Refer to MSG 5 or MSG 6).                                                                                                                                                                                                                                                      |
| (4)      | BR4     | **Account Creation:** System creates new account record:<br>- Hash password using bcrypt<br>- Generate unique customer ID<br>- Set account status to "Active"<br>- Set role to "Customer"<br>- Store creation timestamp<br>- Send verification email (optional)<br>Display success message and auto-login user (Refer to MSG 7).                                                                           |

#### 2.1.2 Product Management Use Cases

##### 2.1.2.1 Manage Product Use Case

###### Use Case Description

| Name               | Manage Product                                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description**    | This use case allows staff to choose various functions (Create, Read, Update, Delete, Search) to manage product information in the system. |
| **Actor**          | Staff                                                                                                                                      |
| **Trigger**        | When staff clicks on "Product Management" in the navigation menu.                                                                          |
| **Pre-condition**  | Staff must be authenticated with appropriate permissions.                                                                                  |
| **Post-condition** | Product information is updated according to the selected operation.                                                                        |

###### Sequence Flow

[sequence-manage-product-manage-product](../sequence/manage-product/manage-product.html)

###### Activities Flow

[activity-manage-product-manage-product](../activity/manage-product/manage-product.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** System displays "Product Management" screen showing a grid/list of products with columns: Product ID, Name, Category, Price, Stock, Status, and Actions (Edit, Delete). Includes search bar and "Add New Product" button at the top. |
| (2)      | BR2     | **Navigation Rules:** Staff can select one of the following operations:<br>- Add Product<br>- Update Product<br>- Delete Product<br>- Search Product<br>Only one operation can be active at a time.                                                        |

##### 2.1.2.2 Add Product Use Case

###### Use Case Description

| Name               | Add Product                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to add new product information to the system.  |
| **Actor**          | Staff                                                                     |
| **Trigger**        | When staff clicks "Add New Product" button.                               |
| **Pre-condition**  | Staff must be authenticated. Product categories must exist in the system. |
| **Post-condition** | New product is created and displayed in the product list.                 |

###### Sequence Flow

[sequence-manage-product-add-product](../sequence/manage-product/add-product.html)

###### Activities Flow

[activity-manage-product-add-product](../activity/manage-product/add-product.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                         |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** System displays "Product Detail" form with fields:<br>- Product Name (required)<br>- Category (dropdown, required)<br>- Brand (required)<br>- Price (required, numeric)<br>- Stock Quantity (required, integer)<br>- Description (rich text editor)<br>- Specifications (key-value pairs)<br>- Product Images (multiple upload)<br>- Status (Active/Inactive) |
| (2)      | BR2     | **Validation Rules:** System validates inputs in real-time:<br>- Product Name: not empty, max 200 characters<br>- Price: positive number, max 2 decimal places<br>- Stock: non-negative integer<br>- Images: max 5 images, each max 5MB, formats: JPG, PNG, WebP<br>If validation fails, display error message (Refer to MSG 1 or MSG 8).                                           |
| (3)      | BR3     | **Data Storage:** Upon clicking "Save":<br>- Generate unique product ID<br>- Process and optimize product images<br>- Store product data in PRODUCT table<br>- Store specifications in PRODUCTSPECIFICATION table<br>- Create initial inventory record in INVENTORY table<br>- Log creation action in audit trail<br>Display success message (Refer to MSG 7).                      |

##### 2.1.2.3 Update Product Use Case

###### Use Case Description

| Name               | Update Product                                                     |
| ------------------ | ------------------------------------------------------------------ |
| **Description**    | This use case allows staff to modify existing product information. |
| **Actor**          | Staff                                                              |
| **Trigger**        | When staff clicks the "Edit" icon next to a product.               |
| **Pre-condition**  | Staff must be authenticated. Product must exist in the system.     |
| **Post-condition** | Product information is updated in the system.                      |

###### Sequence Flow

[sequence-manage-product-update-product](../sequence/manage-product/update-product.html)

###### Activities Flow

[activity-manage-product-update-product](../activity/manage-product/update-product.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                       |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Data Retrieval:** System queries PRODUCT table with productID and retrieves:<br>- Basic product information<br>- Associated specifications<br>- Product images<br>- Current inventory levels<br>- Review statistics                                                                                                                                             |
| (2)      | BR2     | **Displaying Rules:** System displays "Product Detail" form pre-filled with current product data. All fields are editable except Product ID and creation date.                                                                                                                                                                                                    |
| (3)      | BR3     | **Validation Rules:** Same validation rules as Add Product (BR2 from 2.1.2.2).<br>Additionally:<br>- Cannot set stock to 0 if there are pending orders<br>- Cannot change category if product has active reviews                                                                                                                                                  |
| (4)      | BR4     | **Update Processing:** Upon clicking "Save":<br>- Compare changes with original data<br>- Update modified fields in PRODUCT table<br>- Update specifications if changed<br>- Process new images and remove deleted ones<br>- Log update action with change history<br>- Notify affected systems (inventory, pricing)<br>Display success message (Refer to MSG 7). |

##### 2.1.2.4 Delete Product Use Case

###### Use Case Description

| Name               | Delete Product                                                              |
| ------------------ | --------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to remove a product from the system.             |
| **Actor**          | Staff                                                                       |
| **Trigger**        | When staff clicks the "Delete" icon next to a product.                      |
| **Pre-condition**  | Staff must be authenticated. Product must exist and have no pending orders. |
| **Post-condition** | Product is removed from active listings (soft delete).                      |

###### Sequence Flow

[sequence-manage-product-delete-product](../sequence/manage-product/delete-product.html)

###### Activities Flow

[activity-manage-product-delete-product](../activity/manage-product/delete-product.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                            |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Confirmation Display:** System displays confirmation dialog with:<br>- Product name and ID<br>- Warning message about deletion<br>- Current stock and order information<br>- "Confirm" and "Cancel" buttons<br>(Refer to MSG 11)                                                                                     |
| (2)      | BR2     | **Validation Rules:** Before deletion, system checks:<br>- No pending orders containing this product<br>- No active shopping carts containing this product<br>- Product is not part of active promotions<br>If constraints exist, display error (Refer to MSG 9).                                                      |
| (3)      | BR3     | **Soft Delete Process:** Instead of physical deletion:<br>- Set product status to "Deleted"<br>- Set deletedAt timestamp<br>- Keep all related data (reviews, specifications)<br>- Remove from active search indexes<br>- Archive product images<br>- Log deletion action<br>Display success message (Refer to MSG 7). |

##### 2.1.2.5 Search Product Use Case

###### Use Case Description

| Name               | Search Product                                                            |
| ------------------ | ------------------------------------------------------------------------- |
| **Description**    | This use case allows staff to search for products using various criteria. |
| **Actor**          | Staff                                                                     |
| **Trigger**        | When staff enters text in the search box or applies filters.              |
| **Pre-condition**  | Staff must be authenticated.                                              |
| **Post-condition** | Product list is filtered according to search criteria.                    |

###### Sequence Flow

[sequence-manage-product-search-product](../sequence/manage-product/search-product.html)

###### Activities Flow

[activity-manage-product-search-product](../activity/manage-product/search-product.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                            |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (1)      | BR1     | **Search Interface:** System provides search capabilities including:<br>- Text search box (searches name, description, SKU)<br>- Category filter (dropdown)<br>- Price range filter (min-max)<br>- Stock status filter (In Stock, Low Stock, Out of Stock)<br>- Status filter (Active, Inactive, Deleted)<br>- Sort options (Name, Price, Stock, Date) |
| (2)      | BR2     | **Search Processing:** System executes search query:<br>- Combines all active filters with AND logic<br>- Uses LIKE operator for text search<br>- Searches across PRODUCT table and related tables<br>- Returns results sorted by relevance or selected sort order<br>- Implements pagination (20 items per page)                                      |
| (3)      | BR3     | **Result Display:** System updates product list showing:<br>- Matching products with highlighting of search terms<br>- Total result count<br>- Active filters displayed as removable chips<br>- Option to clear all filters<br>- Message if no results found                                                                                           |

#### 2.1.3 User Management Use Cases

##### 2.1.3.1 Manage User Use Case

###### Use Case Description

| Name               | Manage User                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| **Description**    | This use case allows staff/admin to manage user accounts in the system. |
| **Actor**          | Staff, Admin                                                            |
| **Trigger**        | When staff/admin clicks on "User Management" in the admin panel.        |
| **Pre-condition**  | User must be authenticated with appropriate administrative permissions. |
| **Post-condition** | User information is updated according to the selected operation.        |

###### Sequence Flow

[sequence-manage-user-manage-user](../sequence/manage-user/manage-user.html)

###### Activities Flow

[activity-manage-user-manage-user](../activity/manage-user/manage-user.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Displaying Rules:** System displays "User Management" screen with:<br>- List of users showing: ID, Username, Email, Role, Status, Registration Date<br>- Search and filter options<br>- Action buttons based on permissions:<br> _ Staff can: View Customer details, Delete Customer, View Reports<br> _ Admin can: All Staff actions plus Promote Customer, Promote Staff, Demote Staff, Demote Admin, Delete Staff |
| (2)      | BR2     | **Permission Rules:** System enforces role-based access:<br>- Admin has full access to all operations<br>- Staff has limited access (cannot modify other staff/admin accounts)<br>- Operations are disabled/hidden based on current user's role                                                                                                                                                                        |

##### 2.1.3.2 Search User Use Case

###### Use Case Description

| Name               | Search User                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| **Description**    | This use case allows staff/admin to search for user accounts.          |
| **Actor**          | Staff, Admin                                                           |
| **Trigger**        | When staff/admin enters search criteria in the user management screen. |
| **Pre-condition**  | User must be authenticated with appropriate permissions.               |
| **Post-condition** | User list is filtered according to search criteria.                    |

###### Sequence Flow

[sequence-manage-user-search-user](../sequence/manage-user/search-user.html)

###### Activities Flow

[activity-manage-user-search-user](../activity/manage-user/search-user.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                        |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Search Interface:** System provides comprehensive search with:<br>- Text search (username, email, full name)<br>- Role filter (Customer, Staff, Admin)<br>- Status filter (Active, Inactive, Suspended)<br>- Registration date range<br>- Sort options (Name, Email, Date, Role) |
| (2)      | BR2     | **Search Execution:** System queries USER table:<br>- Uses full-text search for name and email fields<br>- Applies filters using WHERE clauses<br>- Returns paginated results (50 users per page)<br>- Highlights matching search terms in results                                 |

##### 2.1.3.3 Delete Customer Use Case

###### Use Case Description

| Name               | Delete Customer                                               |
| ------------------ | ------------------------------------------------------------- |
| **Description**    | This use case allows staff/admin to delete customer accounts. |
| **Actor**          | Staff, Admin                                                  |
| **Trigger**        | When staff/admin clicks "Delete" next to a customer account.  |
| **Pre-condition**  | User must be authenticated. Customer account must exist.      |
| **Post-condition** | Customer account is deactivated or deleted from the system.   |

###### Sequence Flow

[sequence-manage-user-delete-customer](../sequence/manage-user/delete-customer.html)

###### Activities Flow

[activity-manage-user-delete-customer](../activity/manage-user/delete-customer.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                            |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (1)      | BR1     | **Constraint Check:** System validates:<br>- Customer has no active orders<br>- Customer has no pending payments<br>- Customer has no active disputes<br>If constraints exist, display warning message (Refer to MSG 9).                                                                                                                               |
| (2)      | BR2     | **Deletion Process:** System performs soft delete:<br>- Set account status to "Deleted"<br>- Anonymize personal data (GDPR compliance)<br>- Retain order history (anonymized)<br>- Remove from active customer lists<br>- Send account deletion confirmation email<br>- Log deletion action with admin ID<br>Display success message (Refer to MSG 7). |

##### 2.1.3.4 View Customer Report Use Case

###### Use Case Description

| Name               | View Customer Report                                                                 |
| ------------------ | ------------------------------------------------------------------------------------ |
| **Description**    | This use case allows staff/admin to view detailed reports about customer activities. |
| **Actor**          | Staff, Admin                                                                         |
| **Trigger**        | When staff/admin selects a customer and chooses "View Report".                       |
| **Pre-condition**  | User must be authenticated. Customer data must exist.                                |
| **Post-condition** | Customer activity report is displayed.                                               |

###### Sequence Flow

[sequence-manage-user-view-customer-report](../sequence/manage-user/view-customer-report.html)

###### Activities Flow

[activity-manage-user-view-customer-report](../activity/manage-user/view-customer-report.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                 |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Report Options:** System displays report type selection:<br>- Purchase History (all orders, amounts, dates)<br>- Product Preferences (most viewed, purchased categories)<br>- Review Activity (all reviews, ratings)<br>- Cart Activity (abandoned carts, saved items)<br>- Time period selection (last 30 days, 90 days, year, all time) |
| (2)      | BR2     | **Data Aggregation:** System queries multiple tables:<br>- CUSTOMER_REPORT for pre-aggregated data<br>- ORDER table for purchase history<br>- REVIEW table for review metrics<br>- CART table for shopping behavior<br>Calculates metrics: total spent, average order value, purchase frequency                                             |
| (3)      | BR3     | **Report Display:** System presents report with:<br>- Summary statistics (charts and graphs)<br>- Detailed transaction list<br>- Export options (PDF, Excel)<br>- Date range filters<br>- Comparison with previous periods                                                                                                                  |

#### 2.1.4 Shopping Cart Use Cases

##### 2.1.4.1 Manage Cart Use Case

###### Use Case Description

| Name               | Manage Cart                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view and manage items in their shopping cart. |
| **Actor**          | Customer                                                                        |
| **Trigger**        | When customer clicks on the shopping cart icon or navigates to cart page.       |
| **Pre-condition**  | Customer must be signed in.                                                     |
| **Post-condition** | Cart contents are displayed with current totals.                                |

###### Sequence Flow

[sequence-manage-cart-manage-cart](../sequence/manage-cart/manage-cart.html)

###### Activities Flow

[activity-manage-cart-manage-cart](../activity/manage-cart/manage-cart.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                            |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (1)      | BR1     | **Cart Display:** System shows cart with:<br>- Product image, name, and selected specifications<br>- Unit price and quantity<br>- Line total (price × quantity)<br>- Quantity adjustment controls (+/-)<br>- Remove item button<br>- Cart subtotal, tax, shipping estimate<br>- Grand total<br>- "Continue Shopping" and "Proceed to Checkout" buttons |
| (2)      | BR2     | **Cart State Management:** System maintains cart data:<br>- For signed-in users: persist in CART table<br>- For guests: store in browser session/local storage<br>- Merge guest cart with user cart on sign-in<br>- Sync cart across devices for signed-in users                                                                                       |

##### 2.1.4.2 Change Product Amount Use Case

###### Use Case Description

| Name               | Change Product Amount                                                       |
| ------------------ | --------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to adjust quantities of items in their cart. |
| **Actor**          | Customer                                                                    |
| **Trigger**        | When customer clicks +/- buttons or enters quantity directly.               |
| **Pre-condition**  | Product must be in cart. Customer must be signed in.                        |
| **Post-condition** | Cart quantity is updated and totals are recalculated.                       |

###### Sequence Flow

[sequence-manage-cart-change-product-amount](../sequence/manage-cart/change-product-amount.html)

###### Activities Flow

[activity-manage-cart-change-product-amount](../activity/manage-cart/change-product-amount.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                   |
| -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Quantity Validation:** System validates new quantity:<br>- Minimum: 1 unit<br>- Maximum: available stock or product limit (whichever is lower)<br>- Must be positive integer<br>If invalid, display error message (Refer to MSG 4).         |
| (2)      | BR2     | **Stock Check:** System verifies:<br>- Current available stock in INVENTORY table<br>- Reserved stock for other pending orders<br>- Product purchase limits (if any)<br>If insufficient stock, display error with maximum available quantity. |
| (3)      | BR3     | **Update Processing:** Upon valid quantity:<br>- Update CART table with new quantity<br>- Recalculate line total<br>- Update cart subtotal and totals<br>- Refresh cart display<br>- Show updated totals without page reload                  |

##### 2.1.4.3 Remove Product from Cart Use Case

###### Use Case Description

| Name               | Remove Product from Cart                                                 |
| ------------------ | ------------------------------------------------------------------------ |
| **Description**    | This use case allows customers to remove items from their shopping cart. |
| **Actor**          | Customer                                                                 |
| **Trigger**        | When customer clicks "Remove" button next to a cart item.                |
| **Pre-condition**  | Product must be in cart.                                                 |
| **Post-condition** | Product is removed from cart and totals are updated.                     |

###### Sequence Flow

[sequence-manage-cart-remove-product-from-cart](../sequence/manage-cart/remove-product-from-cart.html)

###### Activities Flow

[activity-manage-cart-remove-product-from-cart](../activity/manage-cart/remove-product-from-cart.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Confirmation:** System displays confirmation dialog:<br>- Show product name and image<br>- Ask "Remove this item from cart?"<br>- Provide "Remove" and "Cancel" buttons<br>- Option to "Move to Wishlist" (Refer to MSG 11).                             |
| (2)      | BR2     | **Removal Processing:** Upon confirmation:<br>- Delete cart item from CART table<br>- Release any reserved stock<br>- Recalculate cart totals<br>- Update cart item count badge<br>- Show success notification<br>- Offer to undo action (5-second window) |

##### 2.1.4.4 Purchase Use Case

###### Use Case Description

| Name               | Purchase                                                         |
| ------------------ | ---------------------------------------------------------------- |
| **Description**    | This use case allows customers to proceed from cart to checkout. |
| **Actor**          | Customer                                                         |
| **Trigger**        | When customer clicks "Proceed to Checkout" button.               |
| **Pre-condition**  | Cart must contain at least one item. Customer must be signed in. |
| **Post-condition** | Customer is redirected to checkout page.                         |

###### Sequence Flow

[sequence-manage-cart-purchase](../sequence/manage-cart/purchase.html)

###### Activities Flow

[activity-manage-cart-purchase](../activity/manage-cart/purchase.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                    |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (1)      | BR1     | **Pre-Checkout Validation:** System validates:<br>- Cart is not empty<br>- All items are still available<br>- Prices haven't changed significantly<br>- Stock is still available for all items<br>If validation fails, display specific error messages.                        |
| (2)      | BR2     | **Checkout Preparation:** System:<br>- Reserves stock for cart items (15-minute hold)<br>- Locks prices at current values<br>- Retrieves customer's saved addresses<br>- Retrieves saved payment methods<br>- Calculates shipping options<br>- Applies any eligible promotions |
| (3)      | BR3     | **Redirect to Checkout:** System displays checkout page with:<br>- Cart summary (read-only)<br>- Shipping address selection/entry<br>- Shipping method selection<br>- Payment method selection<br>- Order review<br>- Place order button                                       |

#### 2.1.5 Order Management Use Cases

##### 2.1.5.1 View Order Use Case

###### Use Case Description

| Name               | View Order                                                              |
| ------------------ | ----------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view their order history and details. |
| **Actor**          | Customer                                                                |
| **Trigger**        | When customer navigates to "My Orders" page.                            |
| **Pre-condition**  | Customer must be signed in.                                             |
| **Post-condition** | List of customer's orders is displayed.                                 |

###### Sequence Flow

[sequence-view-order-view-order](../sequence/view-order/view-order.html)

###### Activities Flow

[activity-view-order-view-order](../activity/view-order/view-order.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                  |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Order List Display:** System shows orders with:<br>- Order number and date<br>- Order status (Pending, Processing, Shipped, Delivered, Cancelled)<br>- Total amount<br>- Number of items<br>- Thumbnail images of products<br>- Quick action buttons (View Details, Track, Review, Return)<br>- Default sort: newest first |
| (2)      | BR2     | **Filtering Options:** System provides filters:<br>- Date range<br>- Order status<br>- Price range<br>- Search by product name or order number<br>- Time period (Last 30 days, 3 months, 6 months, Year, All)                                                                                                                |

##### 2.1.5.2 View Order Detail Use Case

###### Use Case Description

| Name               | View Order Detail                                                                   |
| ------------------ | ----------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view detailed information about a specific order. |
| **Actor**          | Customer                                                                            |
| **Trigger**        | When customer clicks on an order from the order list.                               |
| **Pre-condition**  | Customer must be signed in. Order must belong to customer.                          |
| **Post-condition** | Detailed order information is displayed.                                            |

###### Sequence Flow

[sequence-view-order-view-order-detail](../sequence/view-order/view-order-detail.html)

###### Activities Flow

[activity-view-order-view-order-detail](../activity/view-order/view-order-detail.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Detail Display:** System shows comprehensive order information:<br>**Order Summary:**<br>- Order number, date, status<br>- Estimated delivery date<br>- Tracking number (if shipped)<br><br>**Items:**<br>- Product images, names, quantities<br>- Individual prices and totals<br>- Links to product pages<br><br>**Pricing:**<br>- Subtotal, tax, shipping<br>- Discounts/promotions applied<br>- Grand total<br><br>**Addresses:**<br>- Shipping address<br>- Billing address<br><br>**Payment:**<br>- Payment method used<br>- Payment status<br><br>**Actions:**<br>- Cancel order (if eligible)<br>- Return items (if eligible)<br>- Review products (if delivered)<br>- Download invoice |
| (2)      | BR2     | **Action Availability:** System determines available actions based on order status:<br>- Cancel: only if status is "Pending" or "Processing"<br>- Return: only if status is "Delivered" and within return window<br>- Review: only if status is "Delivered"<br>- Track: only if status is "Shipped" or "Delivered"                                                                                                                                                                                                                                                                                                                                                                                |

##### 2.1.5.3 Search Order Use Case

###### Use Case Description

| Name               | Search Order                                                  |
| ------------------ | ------------------------------------------------------------- |
| **Description**    | This use case allows customers to search for specific orders. |
| **Actor**          | Customer                                                      |
| **Trigger**        | When customer enters search criteria in the order list page.  |
| **Pre-condition**  | Customer must be signed in.                                   |
| **Post-condition** | Order list is filtered according to search criteria.          |

###### Sequence Flow

[sequence-view-order-search-order](../sequence/view-order/search-order.html)

###### Activities Flow

[activity-view-order-search-order](../activity/view-order/search-order.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                          |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (1)      | BR1     | **Search Capabilities:** System provides search by:<br>- Order number (exact match)<br>- Product name (partial match)<br>- Date range<br>- Status<br>- Price range                                                                   |
| (2)      | BR2     | **Search Execution:** System queries ORDER table:<br>- Filters by customer ID<br>- Applies search criteria<br>- Joins with ORDERDETAILS for product search<br>- Returns sorted results<br>- Displays "No orders found" if no matches |

##### 2.1.5.4 Cancel Order Use Case

###### Use Case Description

| Name               | Cancel Order                                                                 |
| ------------------ | ---------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to cancel orders that haven't been processed. |
| **Actor**          | Customer                                                                     |
| **Trigger**        | When customer clicks "Cancel Order" on order details page.                   |
| **Pre-condition**  | Order must be in "Pending" or "Processing" status.                           |
| **Post-condition** | Order is cancelled and refund is initiated.                                  |

###### Sequence Flow

[sequence-view-order-cancel-order](../sequence/view-order/cancel-order.html)

###### Activities Flow

[activity-view-order-cancel-order](../activity/view-order/cancel-order.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                            |
| -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Cancellation Eligibility:** System checks:<br>- Order status is "Pending" or "Processing"<br>- Order hasn't been shipped<br>- Order is less than 24 hours old<br>If not eligible, display error message.                                                                                                                             |
| (2)      | BR2     | **Confirmation Dialog:** System displays:<br>- Order details<br>- Refund amount and method<br>- Estimated refund time<br>- Optional cancellation reason dropdown<br>- "Confirm Cancellation" and "Keep Order" buttons<br>(Refer to MSG 11)                                                                                             |
| (3)      | BR3     | **Cancellation Processing:** Upon confirmation:<br>- Update order status to "Cancelled"<br>- Release reserved inventory<br>- Initiate refund process<br>- Send cancellation confirmation email<br>- Log cancellation with reason<br>- Update customer's order history<br>Display success message with refund details (Refer to MSG 7). |

##### 2.1.5.5 Return Product Use Case

###### Use Case Description

| Name               | Return Product                                                            |
| ------------------ | ------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to request returns for delivered products. |
| **Actor**          | Customer                                                                  |
| **Trigger**        | When customer clicks "Return" button on delivered order.                  |
| **Pre-condition**  | Order must be delivered. Product must be within return window (30 days).  |
| **Post-condition** | Return request is created and submitted for approval.                     |

###### Sequence Flow

[sequence-view-order-return-product](../sequence/view-order/return-product.html)

###### Activities Flow

[activity-view-order-return-product](../activity/view-order/return-product.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                 |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Return Eligibility:** System validates:<br>- Order status is "Delivered"<br>- Delivery date is within 30 days<br>- Product is not in non-returnable category<br>- Product hasn't been previously returned<br>If not eligible, show error with reason.                                                                                                     |
| (2)      | BR2     | **Return Form:** System displays return request form:<br>- Select items to return (checkboxes)<br>- Return reason (dropdown: defective, wrong item, not as described, etc.)<br>- Detailed description (text area)<br>- Photo upload (up to 5 images)<br>- Return method preference (pickup/drop-off)<br>- Refund preference (original payment/store credit) |
| (3)      | BR3     | **Return Processing:** Upon submission:<br>- Create return request in RETURN table<br>- Generate return authorization number<br>- Send confirmation email with return instructions<br>- Update order status to "Return Requested"<br>- Notify customer service team<br>- Display return tracking information<br>Show success message (Refer to MSG 7).      |

##### 2.1.5.6 Review Product Use Case

###### Use Case Description

| Name               | Review Product                                                                         |
| ------------------ | -------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to submit reviews for products they have purchased.     |
| **Actor**          | Customer                                                                               |
| **Trigger**        | When customer clicks "Write Review" on delivered order.                                |
| **Pre-condition**  | Order must be delivered. Customer must not have reviewed this product from this order. |
| **Post-condition** | Product review is submitted and published (after moderation).                          |

###### Sequence Flow

[sequence-view-order-review-product](../sequence/view-order/review-product.html)

###### Activities Flow

[activity-view-order-review-product](../activity/view-order/review-product.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                         |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Review Form Display:** System shows review form with:<br>- Product name and image<br>- Star rating selector (1-5 stars)<br>- Review title (required, max 100 chars)<br>- Review text (required, min 20 chars, max 1000 chars)<br>- Pros and cons (optional)<br>- Photo upload (up to 5 images, optional)<br>- Checkbox: "I recommend this product"<br>- Submit and Cancel buttons |
| (2)      | BR2     | **Content Validation:** System validates:<br>- Rating is selected<br>- Title is not empty<br>- Review text meets length requirements<br>- No prohibited words or spam content<br>- Images are valid format and size<br>If validation fails, show specific error (Refer to MSG 1).                                                                                                   |
| (3)      | BR3     | **Review Submission:** Upon valid submission:<br>- Create review record in REVIEW table<br>- Link to customer, product, and order<br>- Set status to "Pending" (awaiting moderation)<br>- Upload and process review images<br>- Update product's review statistics<br>- Send confirmation email<br>- Notify moderation team<br>Display success message (Refer to MSG 7).            |

#### 2.1.6 Product Viewing Use Cases

##### 2.1.6.1 View Product Use Case

###### Use Case Description

| Name               | View Product                                                        |
| ------------------ | ------------------------------------------------------------------- |
| **Description**    | This use case allows customers to browse and view product listings. |
| **Actor**          | Customer                                                            |
| **Trigger**        | When customer navigates to product category or home page.           |
| **Pre-condition**  | None (accessible to guests and signed-in users).                    |
| **Post-condition** | Product listing page is displayed.                                  |

###### Sequence Flow

[sequence-view-product-view-product](../sequence/view-product/view-product.html)

###### Activities Flow

[activity-view-product-view-product](../activity/view-product/view-product.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                         |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Product Listing Display:** System shows products in grid/list view with:<br>- Product image (primary)<br>- Product name<br>- Price (with discount if applicable)<br>- Rating (stars and count)<br>- Quick "Add to Cart" button<br>- "Wishlist" icon<br>- Stock status indicator<br>- Promotion badge (if applicable)<br>- Pagination controls (24 products per page)              |
| (2)      | BR2     | **Filtering and Sorting:** System provides:<br>**Filters:**<br>- Category/subcategory<br>- Price range<br>- Brand<br>- Rating (4+ stars, 3+ stars, etc.)<br>- Features/specifications<br>- Availability (In stock, On sale)<br><br>**Sort Options:**<br>- Relevance (default)<br>- Price: Low to High<br>- Price: High to Low<br>- Newest Arrivals<br>- Best Selling<br>- Top Rated |

##### 2.1.6.2 Search Product Use Case

###### Use Case Description

| Name               | Search Product                                                        |
| ------------------ | --------------------------------------------------------------------- |
| **Description**    | This use case allows customers to search for products using keywords. |
| **Actor**          | Customer                                                              |
| **Trigger**        | When customer enters text in search box.                              |
| **Pre-condition**  | None.                                                                 |
| **Post-condition** | Search results are displayed.                                         |

###### Sequence Flow

[sequence-view-product-search-product](../sequence/view-product/search-product.html)

###### Activities Flow

[activity-view-product-search-product](../activity/view-product/search-product.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                    |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Search Interface:** System provides:<br>- Prominent search box in header<br>- Auto-complete suggestions as user types<br>- Recent searches (for signed-in users)<br>- Popular searches<br>- Search button and Enter key support                                                              |
| (2)      | BR2     | **Search Processing:** System performs full-text search:<br>- Searches product name, description, brand, category<br>- Uses relevance scoring algorithm<br>- Handles spelling mistakes (fuzzy matching)<br>- Supports boolean operators (AND, OR, NOT)<br>- Highlights search terms in results |
| (3)      | BR3     | **Results Display:** System shows:<br>- Number of results found<br>- Search query displayed<br>- Products sorted by relevance<br>- Same filters/sorts as View Product<br>- "No results" message with suggestions if empty<br>- Option to clear search                                          |

##### 2.1.6.3 View Product Detail Use Case

###### Use Case Description

| Name               | View Product Detail                                                                   |
| ------------------ | ------------------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to view detailed information about a specific product. |
| **Actor**          | Customer                                                                              |
| **Trigger**        | When customer clicks on a product from listings or search results.                    |
| **Pre-condition**  | Product must exist and be active.                                                     |
| **Post-condition** | Product detail page is displayed.                                                     |

###### Sequence Flow

[sequence-view-product-view-product-detail](../sequence/view-product/view-product-detail.html)

###### Activities Flow

[activity-view-product-view-product-detail](../activity/view-product/view-product-detail.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Product Detail Display:** System shows comprehensive product information:<br><br>**Image Gallery:**<br>- Multiple high-quality images<br>- 360° view (if available)<br>- Zoom functionality<br>- Video (if available)<br><br>**Product Information:**<br>- Full product name<br>- SKU/Model number<br>- Brand (clickable to brand page)<br>- Price with any discounts<br>- Stock availability<br>- Estimated delivery date<br><br>**Purchase Section:**<br>- Quantity selector<br>- Variation selectors (size, color, etc.)<br>- Add to Cart button<br>- Add to Wishlist button<br>- Share buttons (social media)<br><br>**Details Tabs:**<br>- Description<br>- Specifications<br>- Shipping & Returns<br>- Warranty Information |
| (2)      | BR2     | **Dynamic Price Display:** System shows:<br>- Original price (if on sale)<br>- Current price<br>- Discount percentage<br>- Price per unit (if applicable)<br>- Tax information<br>- Bulk purchase discounts (if applicable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

##### 2.1.6.4 View Product Reviews Use Case

###### Use Case Description

| Name               | View Product Reviews                                              |
| ------------------ | ----------------------------------------------------------------- |
| **Description**    | This use case allows customers to read reviews for a product.     |
| **Actor**          | Customer                                                          |
| **Trigger**        | When customer scrolls to reviews section or clicks "Reviews" tab. |
| **Pre-condition**  | Must be on product detail page.                                   |
| **Post-condition** | Product reviews are displayed.                                    |

###### Sequence Flow

[sequence-view-product-view-product-reviews](../sequence/view-product/view-product-reviews.html)

###### Activities Flow

[activity-view-product-view-product-reviews](../activity/view-product/view-product-reviews.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                           |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Reviews Summary Display:** System shows:<br>- Average star rating (large)<br>- Total number of reviews<br>- Rating distribution (5-star: X%, 4-star: Y%, etc.)<br>- Percentage who recommend product<br>- "Write a Review" button (if purchased)                                    |
| (2)      | BR2     | **Individual Reviews Display:** System shows each review with:<br>- Reviewer name (or anonymous)<br>- Verified purchase badge<br>- Star rating<br>- Review title<br>- Review text<br>- Review date<br>- Review images (if any)<br>- Helpful count<br>- "Helpful" and "Report" buttons |
| (3)      | BR3     | **Review Filtering and Sorting:** System provides:<br>**Filters:**<br>- By rating (5 stars, 4 stars, etc.)<br>- Verified purchases only<br>- With images only<br><br>**Sort Options:**<br>- Most Helpful<br>- Most Recent<br>- Highest Rating<br>- Lowest Rating                      |

##### 2.1.6.5 Add Product to Cart Use Case

###### Use Case Description

| Name               | Add Product to Cart                                                         |
| ------------------ | --------------------------------------------------------------------------- |
| **Description**    | This use case allows customers to add products to their shopping cart.      |
| **Actor**          | Customer                                                                    |
| **Trigger**        | When customer clicks "Add to Cart" button.                                  |
| **Pre-condition**  | Product must be in stock. Customer must be signed in (or allow guest cart). |
| **Post-condition** | Product is added to cart and cart count is updated.                         |

###### Sequence Flow

[sequence-view-product-add-product-to-cart](../sequence/view-product/add-product-to-cart.html)

###### Activities Flow

[activity-view-product-add-product-to-cart](../activity/view-product/add-product-to-cart.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                          |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Pre-Add Validation:** System checks:<br>- Product is in stock<br>- Requested quantity ≤ available stock<br>- Product is not discontinued<br>- Variations are selected (if required)<br>If validation fails, show appropriate error.                                                                |
| (2)      | BR2     | **Add to Cart Processing:** System:<br>- Checks if product already in cart<br> _ If yes: Update quantity (existing + new)<br> _ If no: Create new cart item<br>- Validate total quantity against stock and limits<br>- Update CART table<br>- Recalculate cart totals<br>- Update cart icon badge    |
| (3)      | BR3     | **Success Feedback:** System shows:<br>- Success notification/toast<br>- Mini cart preview showing:<br> _ Just-added product<br> _ Cart subtotal<br> _ "View Cart" button<br> _ "Checkout" button<br>- Options to:<br> _ Continue shopping (dismiss)<br> _ View full cart<br> \* Proceed to checkout |

##### 2.1.6.6 View Suggested Products Use Case

###### Use Case Description

| Name               | View Suggested Products                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------- |
| **Description**    | This use case displays product recommendations based on current product or user behavior. |
| **Actor**          | Customer                                                                                  |
| **Trigger**        | Automatically displayed on product detail page.                                           |
| **Pre-condition**  | Must be viewing a product detail page.                                                    |
| **Post-condition** | Related or recommended products are shown.                                                |

###### Sequence Flow

[sequence-view-product-view-suggested-product](../sequence/view-product/view-suggested-product.html)

###### Activities Flow

[activity-view-product-view-suggested-product](../activity/view-product/view-suggested-product.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Recommendation Algorithm:** System generates suggestions based on:<br>- Same category products<br>- Frequently bought together<br>- Customers also viewed<br>- Based on browsing history (signed-in users)<br>- Similar price range<br>- Same brand alternatives                                                                                                                                                                                                              |
| (2)      | BR2     | **Suggestions Display:** System shows multiple sections:<br><br>**"Frequently Bought Together":**<br>- Current product + 2-3 complementary products<br>- Bundle price with discount<br>- "Add all to cart" option<br><br>**"Similar Products":**<br>- 4-6 products in same category<br>- Similar features/price<br>- Horizontal scrollable carousel<br><br>**"Customers Also Viewed":**<br>- Products viewed by others who viewed current product<br>- Grid or carousel display |

#### 2.1.7 Document Management Use Cases

##### 2.1.7.1 Adjust Document Use Case

###### Use Case Description

| Name               | Adjust Document                                                                        |
| ------------------ | -------------------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to manage informational documents (policies, guides, FAQs). |
| **Actor**          | Admin                                                                                  |
| **Trigger**        | When admin clicks on "Documents" in admin panel.                                       |
| **Pre-condition**  | Admin must be authenticated.                                                           |
| **Post-condition** | Document management interface is displayed.                                            |

###### Sequence Flow

[sequence-adjust-document-adjust-document](../sequence/adjust-document/adjust-document.html)

###### Activities Flow

[activity-adjust-document-adjust-document](../activity/adjust-document/adjust-document.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                   |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Document List Display:** System shows documents with:<br>- Document title<br>- Category (Policy, Guide, FAQ, Terms, etc.)<br>- Status (Published, Draft)<br>- Last modified date<br>- Action buttons (Edit, Delete, View)<br>- "Create New Document" button |
| (2)      | BR2     | **Available Operations:** Admin can:<br>- Create new document<br>- Update existing document<br>- Delete document<br>- Search documents<br>- Preview document                                                                                                  |

##### 2.1.7.2 Create Document Use Case

###### Use Case Description

| Name               | Create Document                                                   |
| ------------------ | ----------------------------------------------------------------- |
| **Description**    | This use case allows admin to create new informational documents. |
| **Actor**          | Admin                                                             |
| **Trigger**        | When admin clicks "Create New Document" button.                   |
| **Pre-condition**  | Admin must be authenticated.                                      |
| **Post-condition** | New document is created and published/saved as draft.             |

###### Sequence Flow

[sequence-adjust-document-create-document](../sequence/adjust-document/create-document.html)

###### Activities Flow

[activity-adjust-document-create-document](../activity/adjust-document/create-document.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                  |
| -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Document Editor Display:** System shows form with:<br>- Title field (required)<br>- Category dropdown (required)<br>- Rich text editor for content (required)<br>- Meta description (for SEO)<br>- Featured image upload<br>- Status toggle (Draft/Published)<br>- Save and Cancel buttons |
| (2)      | BR2     | **Content Validation:** System validates:<br>- Title is not empty (max 200 chars)<br>- Category is selected<br>- Content has minimum 50 characters<br>- Images are valid format (JPG, PNG) and size (max 5MB)<br>If invalid, show error (Refer to MSG 1 or MSG 8).                           |
| (3)      | BR3     | **Document Creation:** Upon save:<br>- Generate unique document ID<br>- Process and optimize images<br>- Save content to DOCUMENT table<br>- Generate URL slug from title<br>- Set publication timestamp<br>- Log creation action<br>Display success message (Refer to MSG 7).               |

##### 2.1.7.3 View Document Use Case

###### Use Case Description

| Name               | View Document                                                         |
| ------------------ | --------------------------------------------------------------------- |
| **Description**    | This use case allows customers to read informational documents.       |
| **Actor**          | Customer                                                              |
| **Trigger**        | When customer navigates to help/info section or clicks document link. |
| **Pre-condition**  | Document must be published.                                           |
| **Post-condition** | Document content is displayed.                                        |

###### Sequence Flow

[sequence-view-document-view-document](../sequence/view-document/view-document.html)

###### Activities Flow

[activity-view-document-view-document](../activity/view-document/view-document.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                         |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Document List Display:** System shows:<br>- Document categories with icons<br>- Popular/recent documents<br>- Search box for documents<br>- Breadcrumb navigation                                                                                                 |
| (2)      | BR2     | **Document Content Display:** When document is opened:<br>- Show document title<br>- Display rich content (formatted text, images)<br>- Show last updated date<br>- Related documents section<br>- "Was this helpful?" feedback widget<br>- Print and share options |

#### 2.1.8 Additional Features

##### 2.1.8.1 View Shop Report Use Case

###### Use Case Description

| Name               | View Shop Report                                                           |
| ------------------ | -------------------------------------------------------------------------- |
| **Description**    | This use case allows admin to view comprehensive shop performance reports. |
| **Actor**          | Admin                                                                      |
| **Trigger**        | When admin clicks "Reports" in admin panel.                                |
| **Pre-condition**  | Admin must be authenticated.                                               |
| **Post-condition** | Selected report is displayed with data visualization.                      |

###### Sequence Flow

[sequence-view-shop-report-view-shop-report](../sequence/view-shop-report/view-shop-report.html)

###### Activities Flow

[activity-view-shop-report-view-shop-report](../activity/view-shop-report/view-shop-report.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                                                                    |
| -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Report Types Available:**<br>- Sales Report (revenue, orders, trends)<br>- Product Performance (best sellers, stock levels)<br>- Customer Analytics (new, returning, segments)<br>- Review Statistics (ratings, sentiment)<br>- Traffic Report (visitors, conversions)<br>Each with customizable date ranges |
| (2)      | BR2     | **Data Visualization:** System displays:<br>- Key metrics in dashboard cards<br>- Line/bar charts for trends<br>- Pie charts for distributions<br>- Data tables with export options<br>- Comparison with previous periods<br>- Export to PDF/Excel functionality                                               |

##### 2.1.8.2 Contact Support Use Case

###### Use Case Description

| Name               | Contact Support                                             |
| ------------------ | ----------------------------------------------------------- |
| **Description**    | This use case allows customers to contact customer support. |
| **Actor**          | Customer                                                    |
| **Trigger**        | When customer clicks "Contact Us" or "Help" button.         |
| **Pre-condition**  | None (available to all users).                              |
| **Post-condition** | Support request is submitted or chat session is initiated.  |

###### Sequence Flow

[sequence-contact-support-contact-support](../sequence/contact-support/contact-support.html)

###### Activities Flow

[activity-contact-support-contact-support](../activity/contact-support/contact-support.html)

###### Business Rules

| Activity | BR Code | Description                                                                                                                                                                                                                                                    |
| -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1)      | BR1     | **Support Options Display:**<br>- Live chat widget (if available)<br>- Contact form<br>- FAQ/Help center link<br>- Email address<br>- Phone number<br>- Business hours                                                                                         |
| (2)      | BR2     | **Contact Form Fields:**<br>- Name (required)<br>- Email (required)<br>- Order number (optional)<br>- Subject/Category (dropdown)<br>- Message (required, min 20 chars)<br>- File attachments (optional, max 3 files)<br>- Priority (Normal/Urgent)            |
| (3)      | BR3     | **Support Request Processing:**<br>- Create ticket in support system<br>- Send confirmation email with ticket number<br>- Auto-response with expected reply time<br>- Route to appropriate support team<br>- Display success message with ticket tracking info |

### 2.2 List Description

The Electricilies system utilizes the following main data lists:

| List Code | List Name    | Description                                                                                           |
| --------- | ------------ | ----------------------------------------------------------------------------------------------------- |
| LIST01    | PRODUCT      | Stores all product information including name, description, price, stock, images, and specifications. |
| LIST02    | CATEGORY     | Product categories and subcategories with hierarchical structure.                                     |
| LIST03    | USER         | User accounts including customers, staff, and administrators with authentication credentials.         |
| LIST04    | ORDER        | Customer orders with order details, shipping info, and payment information.                           |
| LIST05    | ORDERDETAILS | Individual items within each order with quantity and price at time of purchase.                       |
| LIST06    | CART         | Shopping cart items for active user sessions.                                                         |
| LIST07    | REVIEW       | Product reviews submitted by verified customers.                                                      |
| LIST08    | DOCUMENT     | Informational documents, policies, and help articles.                                                 |
| LIST09    | INVENTORY    | Product inventory tracking with stock levels and locations.                                           |

### 2.3 View Description

The system implements the following main views:

| View Code | View Name          | Description                                                                       |
| --------- | ------------------ | --------------------------------------------------------------------------------- |
| VIEW01    | Home               | Landing page with featured products, promotions, and category navigation.         |
| VIEW02    | Product List       | Grid/list view of products with filtering and sorting capabilities.               |
| VIEW03    | Product Detail     | Detailed product page with images, specifications, reviews, and purchase options. |
| VIEW04    | Shopping Cart      | Cart page showing selected items with quantity adjustment and checkout options.   |
| VIEW05    | Checkout           | Multi-step checkout process for shipping, payment, and order confirmation.        |
| VIEW06    | Order History      | Customer's order list with search and filter functionality.                       |
| VIEW07    | Order Detail       | Detailed view of a specific order with tracking and action options.               |
| VIEW08    | User Profile       | Customer account management with personal information and preferences.            |
| VIEW09    | Admin Dashboard    | Administrator control panel with statistics and quick actions.                    |
| VIEW10    | Product Management | Staff interface for managing product catalog.                                     |

## 3. Non-functional Requirements

### 3.1 User Access and Security

| Actor Function         | Customer | Staff | Admin |
| ---------------------- | :------: | :---: | :---: |
| View Products          |    X     |   X   |   X   |
| Search Products        |    X     |   X   |   X   |
| Add to Cart            |    X     |       |       |
| Place Orders           |    X     |       |       |
| View Own Orders        |  X(\*)   |       |       |
| Cancel Orders          |  X(\*)   |       |       |
| Return Products        |  X(\*)   |       |       |
| Review Products        |  X(\*)   |       |       |
| Manage Products        |          |   X   |   X   |
| Delete Reviews         |          |   X   |   X   |
| Manage Users           |          |       |   X   |
| View Reports           |          |       |   X   |
| Manage Documents       |          |       |   X   |
| View System Monitoring |          |       |   X   |

**Legend:**

- X: Full permission to perform the action
- X(\*): Permission limited to own items/data only

**Security Requirements:**

- All passwords must be hashed using bcrypt with minimum 10 rounds
- Session tokens must expire after 24 hours of inactivity
- HTTPS must be enforced for all connections
- API endpoints must validate authentication tokens
- Failed login attempts limited to 3 before temporary account lock (15 minutes)
- Sensitive data (payment info) must be encrypted at rest
- SQL injection prevention through parameterized queries
- XSS protection through input sanitization and output encoding
- CSRF tokens required for all state-changing operations

### 3.2 Performance Requirements

**Response Time:**

- Page load time: < 3 seconds for 95% of requests
- API response time: < 500ms for 90% of requests
- Database query time: < 200ms for standard queries
- Search results: < 1 second for product searches

**Scalability:**

- Support minimum 1,000 concurrent users
- Support minimum 10,000 active customer accounts
- Support minimum 50,000 products in catalog
- Database capable of handling 100,000 orders per year
- Cart operations support 500 concurrent transactions

**Availability:**

- 99.5% uptime during business hours
- Scheduled maintenance windows: 2 AM - 4 AM on weekends
- Maximum unplanned downtime: 4 hours per month
- Backup systems with < 15 minutes failover time

**Data Volume:**

- Product images: Max 5MB per image, up to 10 images per product
- Review images: Max 2MB per image, up to 5 images per review
- Database growth rate: Estimated 20% annually
- Daily backup of all transactional data
- Archive old orders after 2 years (keep for compliance)

### 3.3 Implementation Requirements

**Technology Stack:**

- Frontend: React.js, NextJS
- Backend: Go
- Auth: Keycloak
- Database: PostgreSQL
