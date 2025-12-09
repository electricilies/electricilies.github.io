# List Description

## List 01 - User

| #   | Column Name       | Column Type         | Label             | Editable (Yes/No) | Mandatory (Yes/No) | Default Value | Description                                   | Design Solution | Extracting UT | Per-Processing UT | Transforming UT | Post-Processing UT | Comment |
| --- | ----------------- | ------------------- | ----------------- | ----------------- | ------------------ | ------------- | --------------------------------------------- | --------------- | ------------- | ----------------- | --------------- | ------------------ | ------- |
| 1   | ID                | Single line Of Text | User ID           | No                | Yes                |               | Unique identifier for the user (UUID).        |                 |               |                   |                 |                    |         |
| 2   | Name              | Single line Of Text | Full Name         | Yes               | Yes                |               | User's full name.                             |                 |               |                   |                 |                    |         |
| 3   | Email             | Single line Of Text | Email             | Yes               | Yes                |               | User's email address.                         |                 |               |                   |                 |                    |         |
| 4   | Password          | Password            | Password          | Yes               | Yes                |               | Hashed password for authentication.           |                 |               |                   |                 |                    |         |
| 5   | Role              | Drop-Down List      | Role              | Yes               | Yes                | Customer      | User role (Customer, Staff, Admin).           |                 |               |                   |                 |                    |         |
| 6   | Status            | Drop-Down List      | Status            | Yes               | Yes                | Active        | Account status (Active, Inactive, Suspended). |                 |               |                   |                 |                    |         |
| 7   | Registration Date | Date Time           | Registration Date | No                | Yes                | Current Date  | Date when the account was created.            |                 |               |                   |                 |                    |         |
| 8   | Last Login        | Date Time           | Last Login        | No                | No                 |               | Timestamp of the last successful login.       |                 |               |                   |                 |                    |         |

| #   | Rule Name        | Rule Description                                                                                                               |
| --- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Validation Rules | Email must be in a valid format. Password must meet complexity requirements (min 8 chars, mixed case, numbers, special chars). |
| 2   | Unique Rules     | Email must be unique across the system.                                                                                        |

## List 03 - Product

| #   | Column Name    | Column Type         | Label         | Editable (Yes/No) | Mandatory (Yes/No) | Default Value | Description                                 | Design Solution | Extracting UT | Per-Processing UT | Transforming UT | Post-Processing UT | Comment |
| --- | -------------- | ------------------- | ------------- | ----------------- | ------------------ | ------------- | ------------------------------------------- | --------------- | ------------- | ----------------- | --------------- | ------------------ | ------- |
| 1   | ID             | Single line Of Text | Product ID    | No                | Yes                |               | Unique identifier for the product (UUID).   |                 |               |                   |                 |                    |         |
| 2   | Name           | Single line Of Text | Name          | Yes               | Yes                |               | Name of the product (3-200 characters).     |                 |               |                   |                 |                    |         |
| 3   | Description    | Multi line of Text  | Description   | Yes               | Yes                |               | Detailed description of the product.        |                 |               |                   |                 |                    |         |
| 4   | Category       | Drop-Down List      | Category      | Yes               | Yes                |               | Product category.                           |                 |               |                   |                 |                    |         |
| 5   | Price          | Number              | Price         | Yes               | Yes                |               | Unit price of the product (> 0).            |                 |               |                   |                 |                    |         |
| 6   | Stock Quantity | Number              | Stock         | Yes               | Yes                | 0             | Available quantity in stock.                |                 |               |                   |                 |                    |         |
| 7   | SKU            | Single line Of Text | SKU           | Yes               | Yes                |               | Stock Keeping Unit identifier.              |                 |               |                   |                 |                    |         |
| 8   | Brand          | Single line Of Text | Brand         | Yes               | No                 |               | Brand name of the product.                  |                 |               |                   |                 |                    |         |
| 9   | Status         | Drop-Down List      | Status        | Yes               | Yes                | Active        | Product status (Active, Inactive, Deleted). |                 |               |                   |                 |                    |         |
| 10  | Created Date   | Date Time           | Created Date  | No                | Yes                | Current Date  | Date when the product was added.            |                 |               |                   |                 |                    |         |
| 11  | Modified Date  | Date Time           | Modified Date | No                | Yes                | Current Date  | Date when the product was last updated.     |                 |               |                   |                 |                    |         |

| #   | Rule Name        | Rule Description                                  |
| --- | ---------------- | ------------------------------------------------- |
| 1   | Validation Rules | Price must be positive. SKU must be alphanumeric. |
| 2   | Unique Rules     | SKU must be unique.                               |

## List 06 - Cart

| #   | Column Name | Column Type         | Label       | Editable (Yes/No) | Mandatory (Yes/No) | Default Value | Description                                 | Design Solution | Extracting UT | Per-Processing UT | Transforming UT | Post-Processing UT | Comment |
| --- | ----------- | ------------------- | ----------- | ----------------- | ------------------ | ------------- | ------------------------------------------- | --------------- | ------------- | ----------------- | --------------- | ------------------ | ------- |
| 1   | ID          | Single line Of Text | Cart ID     | No                | Yes                |               | Unique identifier for the cart item (UUID). |                 |               |                   |                 |                    |         |
| 2   | Customer ID | Single line Of Text | Customer ID | No                | Yes                |               | ID of the customer who owns the cart.       |                 |               |                   |                 |                    |         |
| 3   | Product ID  | Single line Of Text | Product ID  | Yes               | Yes                |               | ID of the product added to cart.            |                 |               |                   |                 |                    |         |
| 4   | Quantity    | Number              | Quantity    | Yes               | Yes                | 1             | Quantity of the product (1-100).            |                 |               |                   |                 |                    |         |
| 5   | Added Date  | Date Time           | Added Date  | No                | Yes                | Current Date  | Date when the item was added to cart.       |                 |               |                   |                 |                    |         |

| #   | Rule Name        | Rule Description                                                                               |
| --- | ---------------- | ---------------------------------------------------------------------------------------------- |
| 1   | Validation Rules | Quantity must be greater than 0 and less than or equal to 100. Quantity must not exceed stock. |

## List 07 - Order

| #   | Column Name      | Column Type         | Label            | Editable (Yes/No) | Mandatory (Yes/No) | Default Value | Description                                                                       | Design Solution | Extracting UT | Per-Processing UT | Transforming UT | Post-Processing UT | Comment |
| --- | ---------------- | ------------------- | ---------------- | ----------------- | ------------------ | ------------- | --------------------------------------------------------------------------------- | --------------- | ------------- | ----------------- | --------------- | ------------------ | ------- |
| 1   | ID               | Single line Of Text | Order ID         | No                | Yes                |               | Unique identifier for the order (UUID).                                           |                 |               |                   |                 |                    |         |
| 2   | Customer ID      | Single line Of Text | Customer ID      | No                | Yes                |               | ID of the customer who placed the order.                                          |                 |               |                   |                 |                    |         |
| 3   | Order Date       | Date Time           | Order Date       | No                | Yes                | Current Date  | Date when the order was placed.                                                   |                 |               |                   |                 |                    |         |
| 4   | Status           | Drop-Down List      | Status           | Yes               | Yes                | Pending       | Current status of the order (Pending, Processing, Shipped, Delivered, Cancelled). |                 |               |                   |                 |                    |         |
| 5   | Total Amount     | Number              | Total Amount     | No                | Yes                |               | Total monetary value of the order.                                                |                 |               |                   |                 |                    |         |
| 6   | Shipping Address | Multi line of Text  | Shipping Address | No                | Yes                |               | Address where the order will be delivered.                                        |                 |               |                   |                 |                    |         |
| 7   | Billing Address  | Multi line of Text  | Billing Address  | No                | Yes                |               | Address for billing purposes.                                                     |                 |               |                   |                 |                    |         |
| 8   | Payment Method   | Drop-Down List      | Payment Method   | No                | Yes                |               | Method used for payment (COD, VNPAY, MOMO, ZALOPAY).                              |                 |               |                   |                 |                    |         |
| 9   | Tracking Number  | Single line Of Text | Tracking Number  | Yes               | No                 |               | Shipping tracking number provided by carrier.                                     |                 |               |                   |                 |                    |         |

| #   | Rule Name        | Rule Description                                                             |
| --- | ---------------- | ---------------------------------------------------------------------------- |
| 1   | State Rules      | Order status flow must be followed (e.g., Pending -> Processing -> Shipped). |
| 2   | Validation Rules | Total amount must match sum of order items.                                  |

## List 08 - Order Item

| #   | Column Name | Column Type         | Label      | Editable (Yes/No) | Mandatory (Yes/No) | Default Value | Description                                   | Design Solution | Extracting UT | Per-Processing UT | Transforming UT | Post-Processing UT | Comment |
| --- | ----------- | ------------------- | ---------- | ----------------- | ------------------ | ------------- | --------------------------------------------- | --------------- | ------------- | ----------------- | --------------- | ------------------ | ------- |
| 1   | ID          | Single line Of Text | Item ID    | No                | Yes                |               | Unique identifier for the order item.         |                 |               |                   |                 |                    |         |
| 2   | Order ID    | Single line Of Text | Order ID   | No                | Yes                |               | ID of the parent order.                       |                 |               |                   |                 |                    |         |
| 3   | Product ID  | Single line Of Text | Product ID | No                | Yes                |               | ID of the product ordered.                    |                 |               |                   |                 |                    |         |
| 4   | Quantity    | Number              | Quantity   | No                | Yes                |               | Quantity ordered.                             |                 |               |                   |                 |                    |         |
| 5   | Unit Price  | Number              | Unit Price | No                | Yes                |               | Price per unit at the time of order.          |                 |               |                   |                 |                    |         |
| 6   | Subtotal    | Number              | Subtotal   | No                | Yes                |               | Calculated subtotal (Quantity \* Unit Price). |                 |               |                   |                 |                    |         |

## List 09 - Review

| #   | Column Name  | Column Type         | Label        | Editable (Yes/No) | Mandatory (Yes/No) | Default Value | Description                              | Design Solution | Extracting UT | Per-Processing UT | Transforming UT | Post-Processing UT | Comment |
| --- | ------------ | ------------------- | ------------ | ----------------- | ------------------ | ------------- | ---------------------------------------- | --------------- | ------------- | ----------------- | --------------- | ------------------ | ------- |
| 1   | ID           | Single line Of Text | Review ID    | No                | Yes                |               | Unique identifier for the review.        |                 |               |                   |                 |                    |         |
| 2   | Product ID   | Single line Of Text | Product ID   | No                | Yes                |               | ID of the product being reviewed.        |                 |               |                   |                 |                    |         |
| 3   | Customer ID  | Single line Of Text | Customer ID  | No                | Yes                |               | ID of the customer who wrote the review. |                 |               |                   |                 |                    |         |
| 4   | Rating       | Number              | Rating       | Yes               | Yes                |               | Star rating (1-5).                       |                 |               |                   |                 |                    |         |
| 5   | Content      | Multi line of Text  | Content      | Yes               | No                 |               | Text content of the review.              |                 |               |                   |                 |                    |         |
| 6   | Created Date | Date Time           | Created Date | No                | Yes                | Current Date  | Date when the review was submitted.      |                 |               |                   |                 |                    |         |

| #   | Rule Name        | Rule Description                                       |
| --- | ---------------- | ------------------------------------------------------ |
| 1   | Validation Rules | Rating must be an integer between 1 and 5.             |
| 2   | Permission Rules | Customer must have purchased the product to review it. |

## List 11 - Document

| #   | Column Name        | Column Type         | Label           | Editable (Yes/No) | Mandatory (Yes/No) | Default Value | Description                                      | Design Solution | Extracting UT | Per-Processing UT | Transforming UT | Post-Processing UT | Comment |
| --- | ------------------ | ------------------- | --------------- | ----------------- | ------------------ | ------------- | ------------------------------------------------ | --------------- | ------------- | ----------------- | --------------- | ------------------ | ------- |
| 1   | ID                 | Single line Of Text | Document ID     | No                | Yes                |               | Unique identifier for the document.              |                 |               |                   |                 |                    |         |
| 2   | Title              | Single line Of Text | Title           | Yes               | Yes                |               | Title of the document.                           |                 |               |                   |                 |                    |         |
| 3   | Category           | Drop-Down List      | Category        | Yes               | Yes                |               | Document category (e.g., Guide, Policy).         |                 |               |                   |                 |                    |         |
| 4   | Content            | Rich Text           | Content         | Yes               | Yes                |               | Full content of the document (HTML).             |                 |               |                   |                 |                    |         |
| 5   | Target Audience    | Checkbox            | Target Audience | Yes               | Yes                |               | Roles allowed to view (Customer, Staff, Admin).  |                 |               |                   |                 |                    |         |
| 6   | Status             | Drop-Down List      | Status          | Yes               | Yes                | Draft         | Document status (Draft, Published, Deleted).     |                 |               |                   |                 |                    |         |
| 7   | Created Date       | Date Time           | Created Date    | No                | Yes                | Current Date  | Date when the document was created.              |                 |               |                   |                 |                    |         |
| 8   | Last Modified Date | Date Time           | Last Modified   | No                | Yes                | Current Date  | Date when the document was last edited.          |                 |               |                   |                 |                    |         |
| 9   | Author ID          | Single line Of Text | Author          | No                | Yes                |               | ID of the admin who created/edited the document. |                 |               |                   |                 |                    |         |

## Note

- Column type: Label, Single line Of Text, Multi line of Text, Date Time, Number, Checkbox, Radio Button, Drop-Down List, Address Book, Rich Text, Button, Hyperlink, Attachment, Password, Color Picker, Section, Tab Control, Grid View, View Dialog, Image, Table
- UT: Unit Test
