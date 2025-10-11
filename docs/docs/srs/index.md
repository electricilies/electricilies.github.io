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

### 2.2 List Description

The Electricilies system utilizes the following main data lists:

### 2.3 View Description

## 3. Non-functional Requirements

### 3.1 User Access and Security

| Actor Function | Guest | Customer | Staff | Admin |
| -------------- | :---: | :------: | :---: | :---: |

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
