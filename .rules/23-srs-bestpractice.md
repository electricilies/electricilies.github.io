# SRS Best Practices and Template

## 1. General Principles

*   **Audience:** The document is for Developers (implementation), QA (testing), and Stakeholders (sign-off). Language must be unambiguous.
*   **Global Indexing:** Business Rules (BR) and Messages (MSG) must have unique, incrementing IDs throughout the entire document. **Do not reset** numbering at the start of a new module (e.g., do not start at BR1 again for Module B; continue from where Module A ended).
*   **Pseudocode:** Logic should be written in "General Code" (high-level pseudocode). It should be readable by non-programmers but structured enough to be directly translated into any programming language (Java, C#, Python, etc.).

---

## 2. Document Outline

1.  **Revision History** (Version, Date, Author, Change Description)
2.  **Introduction**
    *   Purpose
    *   Scope
    *   Definitions & Acronyms
3.  **Functional Requirements** (The Core)
    *   *Module A*
        *   Use Case A.1
        *   Use Case A.2
    *   *Module B*
        *   Use Case B.1
4.  **Non-Functional Requirements** (Performance, Security, Reliability)
5.  **Appendix**
    *   **Message List (MSG)**: Centralized list of all system notifications/errors.

---

## 3. Detailed Use Case Writing Guide

For every feature, use the following structure. This is the standard for translating business needs into technical specs.

### [Use Case ID] [Use Case Name]

#### Use Case Description

| Field | Content |
| :--- | :--- |
| **Description** | A concise summary of what the user is doing and why. |
| **Actor** | Who is performing the action (e.g., Admin, Guest, System Timer). |
| **Trigger** | The specific event that starts this use case (e.g., "User clicks 'Checkout' button"). |
| **Pre-condition** | What must be true *before* this starts (e.g., "User is logged in", "Cart is not empty"). |
| **Post-condition** | The state of the system *after* success (e.g., "Order is saved to database", "Email sent"). |

#### Activities Flow
*(Insert Activity Diagram or UI Mockup here labeled with step numbers (1), (2), (3)...)*

#### Business Rules (The Logic Core)

This section maps the visual steps (Activities) to backend logic.

**Columns:**
*   **Activity:** The step number from the diagram/mockup.
*   **BR Code:** Unique ID (e.g., BR-105).
*   **Description:** The logic written in "General Code".

**How to write "General Code" for Business Rules:**
1.  **Displaying Rules:** Describe what data is fetched and shown.
2.  **Validation Rules:** Describe checks performed before processing.
3.  **Processing Rules:** Describe the core data manipulation and storage.

**Example: "Create New Order" Use Case**

| Activity | BR Code | Description |
| :--- | :--- | :--- |
| (1), (2) | **BR-050** | **Displaying Rules:**<br/>The system initializes the Order Form.<br/><br/>customer = session.getCurrentUser()<br/>cartItems = database.getCart(customer.id)<br/><br/>IF cartItems IS EMPTY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayMessage(MSG-020)<br/>&nbsp;&nbsp;&nbsp;&nbsp;redirect(HomePage)<br/><br/>ELSE:<br/>&nbsp;&nbsp;&nbsp;&nbsp;form.display(customer.address)<br/>&nbsp;&nbsp;&nbsp;&nbsp;form.display(cartItems) |
| (3) | **BR-051** | **Validation Rules:**<br/>Triggered when User clicks [Submit Order].<br/><br/>input = form.getData()<br/><br/>IF input.shippingAddress IS EMPTY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-005)<br/>&nbsp;&nbsp;&nbsp;&nbsp;RETURN False<br/><br/>IF input.paymentMethod IS NOT SELECTED:<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-006)<br/>&nbsp;&nbsp;&nbsp;&nbsp;RETURN False<br/><br/>inventoryStatus = database.checkStock(cartItems)<br/>IF inventoryStatus IS "Out of Stock":<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-099)<br/>&nbsp;&nbsp;&nbsp;&nbsp;RETURN False |
| (4), (5) | **BR-052** | **Processing Rules:**<br/>System processes the valid order.<br/><br/>order = createNewOrder()<br/>order.setCustomer(customer)<br/>order.setAddress(input.shippingAddress)<br/><br/>FOR EACH item IN cartItems:<br/>&nbsp;&nbsp;&nbsp;&nbsp;lineItem = createLineItem(item.id, item.price, item.qty)<br/>&nbsp;&nbsp;&nbsp;&nbsp;order.addItem(lineItem)<br/>&nbsp;&nbsp;&nbsp;&nbsp;database.reduceStock(item.id, item.qty)<br/><br/>total = calculateTotal(order)<br/>order.setTotal(total)<br/><br/>TRY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;database.save(order)<br/>&nbsp;&nbsp;&nbsp;&nbsp;emailService.sendConfirmation(customer.email)<br/>&nbsp;&nbsp;&nbsp;&nbsp;displaySuccess(MSG-100)<br/>CATCH Exception:<br/>&nbsp;&nbsp;&nbsp;&nbsp;logError(Exception)<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-500) |

---

## 4. Formatting Guide for Tables

To maintain readability in Markdown tables (especially for the Pseudocode), you must use HTML tags for line breaks and indentation.

### The Syntax
*   **Line Break:** Use `<br/>` to force a new line within a table cell.
*   **Indentation:** Use `&nbsp;` (Non-Breaking Space). Use multiple for deeper indentation (e.g., `&nbsp;&nbsp;&nbsp;&nbsp;`).

### Example Implementation

**Raw Markdown:**
```markdown
| Logic Column |
| :--- |
| IF user.exists():<br/>&nbsp;&nbsp;&nbsp;&nbsp;login(user)<br/>ELSE:<br/>&nbsp;&nbsp;&nbsp;&nbsp;showError() |
```

**Rendered Output:**

| Logic Column |
| :--- |
| IF user.exists():<br/>&nbsp;&nbsp;&nbsp;&nbsp;login(user)<br/>ELSE:<br/>&nbsp;&nbsp;&nbsp;&nbsp;showError() |

---

## 5. Pseudocode Conventions

The above section is for formatting, this section show conventions on writing pseudocode itself.

```
product = createNewProduct(name, description)

category = chooseCategory()
product.setCategory(category)

attributes = selectAttributes()
product.addAttributes(attributes)

options = createOptions(...)
product.addOptions(options)

for each variantInfo in variantInfos:
    variant = createVariant(variantInfo.sku, variantInfo.price, variantInfo.quantity)
    variant.setOptionValues(variantInfo.optionValues)
    product.addVariant(variant)

saveProduct(product)
```

---

## 5. Referencing Standards

### Referencing Activities
When writing Business Rules, map them to the visual flow using the step numbers defined in your Activity Diagram.
*   *Format:* `(1), (2), (5.1)`
*   *Usage:* Place these in the "Activity" column of the BR table.

### Referencing Messages
Never hardcode error text inside the Business Rules (e.g., don't write "Display 'Error 404'"). Instead, reference the Appendix ID.
*   *Format:* `(Refer to MSG-XXX)`
*   *Usage:* Inside the pseudocode logic.

**Example Appendix (Message List):**

| Code | Content | Type |
| :--- | :--- | :--- |
| MSG-001 | Field cannot be empty. | Validation |
| MSG-002 | Record saved successfully. | Notification |
| MSG-003 | Duplicate entry found. | Error |
