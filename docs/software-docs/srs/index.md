---
outline: [1, 5]
---

**Electricilies - Website for Selling Electronic Products**

## Revision and Signoff Sheet

### Change Record

| Author         | Version | Change reference         | Date       |
| :------------- | :------ | :----------------------- | :--------- |
| Buggilies Team | 0.1.0   | Initial project creation | 19/09/2025 |
| Buggilies Team | 0.2.0   | Update more detail       | 31/10/2025 |
| Buggilies Team | 0.3.0   | Update more detail       | 18/12/2025 |

### Reviewers

| Name                    | Company       | Version | Position        | Date       |
| :---------------------- | :------------ | :------ | :-------------- | :--------- |
| Kevin Nitro             | Electricilies | 0.1.0   | Project Manager | 20/09/2025 |
| Kevin Nitro             | Electricilies | 0.2.0   | Project Manager | 1/11/2025  |
| Kevin Nitro & NTGNguyen | Electricilies | 0.3.0   | Buggilies       | 1/11/2025  |

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


## 2. Functional Requirements

### 2.1 Use Case Description

#### 2.1.1 Adjust Document Use Case

##### 2.1.1.1 Adjust Document

###### *Use Case Description*

| Field | Content |
| :--- | :--- |
| **Description** | This use case allows Administrator to manage inventory documents for tracking stock adjustments, including creating, updating, searching, and deleting adjustment documents. |
| **Actor** | Administrator |
| **Trigger** | When admin selects the Adjust Document function from the management menu. |
| **Pre-condition** | Admin must be authenticated with valid active session and have "Document" permission. |
| **Post-condition** | Document management view is displayed with available actions. |

###### *Activities Flow*

###### *Business Rules*

| Activity | BR Code | Description |
| :--- | :--- | :--- |
| *(1), (2)* | **BR-001** | **Displaying Rules:**<br/>When admin clicks \[DocumentCommand\], the system reinitializes database context by method resetDatabaseContext(), creates new DocumentManagementView with DocumentController as context.<br/><br/>admin = session.getCurrentUser()<br/>IF admin.hasPermission("Document") = FALSE:<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-001)<br/>&nbsp;&nbsp;&nbsp;&nbsp;redirect(HomePage)<br/><br/>ELSE:<br/>&nbsp;&nbsp;&nbsp;&nbsp;documents = database.getDocuments()<br/>&nbsp;&nbsp;&nbsp;&nbsp;view.display(documents) |
| *(3), (3.1), (3.2), (3.3), (3.4)* | **BR-002** | **Action Selection Rules:**<br/>The system provides four document management options.<br/><br/>IF admin selects "Create":<br/>&nbsp;&nbsp;&nbsp;&nbsp;navigate(CreateDocumentView)<br/>&nbsp;&nbsp;&nbsp;&nbsp;ref(BR-004) // Create Document rules<br/><br/>IF admin selects "Delete":<br/>&nbsp;&nbsp;&nbsp;&nbsp;ref(BR-009) // Delete Document rules<br/><br/>IF admin selects "Search":<br/>&nbsp;&nbsp;&nbsp;&nbsp;ref(BR-012) // Search Document rules<br/><br/>IF admin selects "Update":<br/>&nbsp;&nbsp;&nbsp;&nbsp;ref(BR-006) // Update Document rules |

##### 2.1.1.2 Create Document

###### *Use Case Description*

| Field | Content |
| :--- | :--- |
| **Description** | This use case allows Administrator to create a new inventory adjustment document to record stock changes (additions or reductions). |
| **Actor** | Administrator |
| **Trigger** | When admin selects "Create Document" function. |
| **Pre-condition** | Admin must be authenticated with "Document" permission. DocumentManagementView is displayed. |
| **Post-condition** | New document is created in database and inventory quantities are updated accordingly. |

###### *Activities Flow*

###### *Business Rules*

| Activity | BR Code | Description |
| :--- | :--- | :--- |
| *(1), (2)* | **BR-003** | **Displaying Rules:**<br/>When admin clicks \[CreateDocumentButton\], the system displays DocumentDetailView.<br/><br/>view = createDocumentDetailView()<br/>view.clearForm()<br/>products = database.getProducts()<br/>view.displayEmptyForm(products) |
| *(3), (4), (4.1)* | **BR-004** | **Validation Rules (Client-side):**<br/>Triggered when admin enters document detail.<br/><br/>input = form.getData()<br/><br/>IF input.documentType IS EMPTY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-002)<br/>&nbsp;&nbsp;&nbsp;&nbsp;RETURN False<br/><br/>IF input.documentType NOT IN \["IMPORT", "EXPORT", "ADJUSTMENT"\]:<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-003)<br/>&nbsp;&nbsp;&nbsp;&nbsp;RETURN False<br/><br/>IF input.items IS EMPTY OR input.items.length = 0:<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-004)<br/>&nbsp;&nbsp;&nbsp;&nbsp;RETURN False<br/><br/>FOR EACH item IN input.items:<br/>&nbsp;&nbsp;&nbsp;&nbsp;IF item.productVariantId IS EMPTY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-005)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RETURN False<br/>&nbsp;&nbsp;&nbsp;&nbsp;IF item.quantity IS NOT NUMERIC OR item.quantity <= 0:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-006)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RETURN False<br/>&nbsp;&nbsp;&nbsp;&nbsp;IF item.reason IS EMPTY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-007)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RETURN False |
| *(5), (6), (6.1), (6.2), (7.2), (8)* | **BR-005** | **Processing Rules:**<br/>Triggered when admin clicks \[SaveButton\].<br/><br/>input = form.getData()<br/>document = createNewDocument()<br/>document.setType(input.documentType)<br/>document.setCreatedBy(admin.userId)<br/>document.setCreatedAt(currentTimestamp())<br/><br/>TRY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;transaction = database.beginTransaction()<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Validate stock availability for EXPORT/ADJUSTMENT decrease<br/>&nbsp;&nbsp;&nbsp;&nbsp;IF document.type IN \["EXPORT", "ADJUSTMENT"\]:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOR EACH item IN input.items:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;variant = database.getProductVariant(item.productVariantId)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IF item.quantity > variant.quantity:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-008)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transaction.rollback()<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RETURN False<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Save document<br/>&nbsp;&nbsp;&nbsp;&nbsp;database.insert(document)<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Save document items and update inventory<br/>&nbsp;&nbsp;&nbsp;&nbsp;FOR EACH item IN input.items:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;docItem = createDocumentItem()<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;docItem.setDocumentId(document.id)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;docItem.setProductVariantId(item.productVariantId)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;docItem.setQuantity(item.quantity)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;docItem.setReason(item.reason)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;database.insert(docItem)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Update inventory<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IF document.type = "IMPORT":<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;database.updateInventory(item.productVariantId, +item.quantity)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ELSE IF document.type IN \["EXPORT", "ADJUSTMENT"\]:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;database.updateInventory(item.productVariantId, -item.quantity)<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;transaction.commit()<br/>&nbsp;&nbsp;&nbsp;&nbsp;displaySuccess(MSG-009)<br/>&nbsp;&nbsp;&nbsp;&nbsp;view.close()<br/>&nbsp;&nbsp;&nbsp;&nbsp;refreshDocumentList()<br/><br/>CATCH Exception:<br/>&nbsp;&nbsp;&nbsp;&nbsp;transaction.rollback()<br/>&nbsp;&nbsp;&nbsp;&nbsp;logError(Exception)<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-010) |

##### 2.1.1.3 Update Document

###### *Use Case Description*

| Field | Content |
| :--- | :--- |
| **Description** | This use case allows Administrator to edit an existing inventory adjustment document before it is finalized. |
| **Actor** | Administrator |
| **Trigger** | When admin selects "Update Document" function. |
| **Pre-condition** | Admin must be authenticated with "Document" permission. A document must be selected. Document status must be "DRAFT". |
| **Post-condition** | Document information is updated in database and inventory adjustments are recalculated. |

###### *Activities Flow*

###### *Business Rules*

| Activity | BR Code | Description |
| :--- | :--- | :--- |
| *(1), (2), (3)* | **BR-006** | **Displaying Rules:**<br/>When admin selects document to update.<br/><br/>selectedDoc = getSelectedDocument()<br/><br/>IF selectedDoc IS NULL:<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-011)<br/>&nbsp;&nbsp;&nbsp;&nbsp;RETURN<br/><br/>IF selectedDoc.status != "DRAFT":<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-012)<br/>&nbsp;&nbsp;&nbsp;&nbsp;RETURN<br/><br/>docDetails = database.getDocumentDetails(selectedDoc.id)<br/>view.populateForm(docDetails)<br/>view.display() |
| *(4), (5), (5.1)* | **BR-007** | **Validation Rules:**<br/>Triggered when admin enters new document detail.<br/><br/>input = form.getData()<br/>originalDoc = database.getDocument(selectedDoc.id)<br/><br/>// Same validations as BR-004<br/>IF input.items IS EMPTY OR input.items.length = 0:<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-004)<br/>&nbsp;&nbsp;&nbsp;&nbsp;RETURN False<br/><br/>FOR EACH item IN input.items:<br/>&nbsp;&nbsp;&nbsp;&nbsp;IF item.quantity IS NOT NUMERIC OR item.quantity <= 0:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-006)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RETURN False<br/>&nbsp;&nbsp;&nbsp;&nbsp;IF item.reason IS EMPTY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-007)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RETURN False |
| *(6), (7), (7.1), (7.2), (8.2), (9)* | **BR-008** | **Processing Rules:**<br/>Triggered when admin clicks \[SaveButton\] to confirm update.<br/><br/>input = form.getData()<br/>existingDoc = database.getDocument(selectedDoc.id)<br/><br/>TRY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;transaction = database.beginTransaction()<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Revert previous inventory changes<br/>&nbsp;&nbsp;&nbsp;&nbsp;oldItems = database.getDocumentItems(existingDoc.id)<br/>&nbsp;&nbsp;&nbsp;&nbsp;FOR EACH oldItem IN oldItems:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IF existingDoc.type = "IMPORT":<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;database.updateInventory(oldItem.productVariantId, -oldItem.quantity)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ELSE:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;database.updateInventory(oldItem.productVariantId, +oldItem.quantity)<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Delete old items<br/>&nbsp;&nbsp;&nbsp;&nbsp;database.deleteDocumentItems(existingDoc.id)<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Validate new stock levels<br/>&nbsp;&nbsp;&nbsp;&nbsp;IF existingDoc.type IN \["EXPORT", "ADJUSTMENT"\]:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOR EACH item IN input.items:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;variant = database.getProductVariant(item.productVariantId)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IF item.quantity > variant.quantity:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-008)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transaction.rollback()<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RETURN False<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Update document header<br/>&nbsp;&nbsp;&nbsp;&nbsp;existingDoc.setUpdatedBy(admin.userId)<br/>&nbsp;&nbsp;&nbsp;&nbsp;existingDoc.setUpdatedAt(currentTimestamp())<br/>&nbsp;&nbsp;&nbsp;&nbsp;database.update(existingDoc)<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Insert new items and apply inventory changes<br/>&nbsp;&nbsp;&nbsp;&nbsp;FOR EACH item IN input.items:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;docItem = createDocumentItem()<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;docItem.setDocumentId(existingDoc.id)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;docItem.setProductVariantId(item.productVariantId)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;docItem.setQuantity(item.quantity)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;docItem.setReason(item.reason)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;database.insert(docItem)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IF existingDoc.type = "IMPORT":<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;database.updateInventory(item.productVariantId, +item.quantity)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ELSE:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;database.updateInventory(item.productVariantId, -item.quantity)<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;transaction.commit()<br/>&nbsp;&nbsp;&nbsp;&nbsp;displaySuccess(MSG-013)<br/>&nbsp;&nbsp;&nbsp;&nbsp;view.close()<br/>&nbsp;&nbsp;&nbsp;&nbsp;refreshDocumentList()<br/><br/>CATCH Exception:<br/>&nbsp;&nbsp;&nbsp;&nbsp;transaction.rollback()<br/>&nbsp;&nbsp;&nbsp;&nbsp;logError(Exception)<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-010) |

##### 2.1.1.4 Delete Document

###### *Use Case Description*

| Field | Content |
| :--- | :--- |
| **Description** | This use case allows Administrator to delete an inventory adjustment document and revert its inventory changes. |
| **Actor** | Administrator |
| **Trigger** | When admin selects delete document function. |
| **Pre-condition** | Admin must be authenticated with "Document" permission. A document must be selected. Document status must be "DRAFT". |
| **Post-condition** | Document is removed from database and inventory quantities are reverted. |

###### *Activities Flow*

###### *Business Rules*

| Activity | BR Code | Description |
| :--- | :--- | :--- |
| *(1), (2)* | **BR-009** | **Displaying Rules:**<br/>When admin selects document to delete.<br/><br/>selectedDoc = getSelectedDocument()<br/><br/>IF selectedDoc IS NULL:<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-011)<br/>&nbsp;&nbsp;&nbsp;&nbsp;RETURN<br/><br/>IF selectedDoc.status != "DRAFT":<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-014)<br/>&nbsp;&nbsp;&nbsp;&nbsp;RETURN<br/><br/>displayConfirmationDialog(MSG-015) |
| *(2.1), (2.2)* | **BR-010** | **Confirmation Rules:**<br/>System displays confirmation message box.<br/><br/>IF admin clicks "Cancel":<br/>&nbsp;&nbsp;&nbsp;&nbsp;closeDialog()<br/>&nbsp;&nbsp;&nbsp;&nbsp;RETURN<br/><br/>IF admin clicks "Confirm":<br/>&nbsp;&nbsp;&nbsp;&nbsp;proceed to BR-011 |
| *(3), (3.1), (3.2), (4.2), (5)* | **BR-011** | **Processing Rules:**<br/>Triggered when admin confirms delete.<br/><br/>selectedDoc = getSelectedDocument()<br/><br/>TRY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;transaction = database.beginTransaction()<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Validate document can be deleted<br/>&nbsp;&nbsp;&nbsp;&nbsp;IF selectedDoc.status != "DRAFT":<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-014)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transaction.rollback()<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RETURN False<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Revert inventory changes<br/>&nbsp;&nbsp;&nbsp;&nbsp;docItems = database.getDocumentItems(selectedDoc.id)<br/>&nbsp;&nbsp;&nbsp;&nbsp;FOR EACH item IN docItems:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IF selectedDoc.type = "IMPORT":<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;database.updateInventory(item.productVariantId, -item.quantity)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ELSE IF selectedDoc.type IN \["EXPORT", "ADJUSTMENT"\]:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;database.updateInventory(item.productVariantId, +item.quantity)<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Delete document items<br/>&nbsp;&nbsp;&nbsp;&nbsp;database.deleteDocumentItems(selectedDoc.id)<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Delete document<br/>&nbsp;&nbsp;&nbsp;&nbsp;database.deleteDocument(selectedDoc.id)<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;transaction.commit()<br/>&nbsp;&nbsp;&nbsp;&nbsp;displaySuccess(MSG-016)<br/>&nbsp;&nbsp;&nbsp;&nbsp;refreshDocumentList()<br/><br/>CATCH Exception:<br/>&nbsp;&nbsp;&nbsp;&nbsp;transaction.rollback()<br/>&nbsp;&nbsp;&nbsp;&nbsp;logError(Exception)<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayError(MSG-010) |

##### 2.1.1.5 Search Document

###### *Use Case Description*

| Field | Content |
| :--- | :--- |
| **Description** | This use case allows Administrator to search and filter inventory adjustment documents by various criteria. |
| **Actor** | Administrator |
| **Trigger** | When admin enters search criteria in the document management view. |
| **Pre-condition** | Admin must be authenticated with "Document" permission. DocumentManagementView is displayed. |
| **Post-condition** | Filtered list of documents is displayed based on search criteria. |

###### *Activities Flow*

###### *Business Rules*

| Activity | BR Code | Description |
| :--- | :--- | :--- |
| *(1), (2), (3), (4)* | **BR-012** | **Searching Rules:**<br/>Triggered when admin enters search criteria.<br/><br/>criteria = getSearchCriteria()<br/>query = "SELECT * FROM Document WHERE 1=1"<br/><br/>IF criteria.documentType IS NOT EMPTY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;query += " AND type = '" + criteria.documentType + "'"<br/><br/>IF criteria.startDate IS NOT EMPTY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;query += " AND createdAt >= '" + criteria.startDate + "'"<br/><br/>IF criteria.endDate IS NOT EMPTY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;query += " AND createdAt <= '" + criteria.endDate + "'"<br/><br/>IF criteria.status IS NOT EMPTY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;query += " AND status = '" + criteria.status + "'"<br/><br/>IF criteria.createdBy IS NOT EMPTY:<br/>&nbsp;&nbsp;&nbsp;&nbsp;query += " AND createdBy LIKE '%" + criteria.createdBy + "%'"<br/><br/>query += " ORDER BY createdAt DESC"<br/>results = database.executeQuery(query)<br/><br/>IF results.count = 0:<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayInfo(MSG-017)<br/>ELSE:<br/>&nbsp;&nbsp;&nbsp;&nbsp;view.displayResults(results)<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayInfo(MSG-018) |
