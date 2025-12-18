# SRS (Software Requirements Specification)

- Need to based on sequence diagrams in `docs/software-docs/sequence/*/*.md`
- Need to based on activity diagrams in `docs/software-docs/activity/*/*.md`
- Database schema in `docs/software-docs/database/index.md`
  > This is very important for querying rules

## Context from code

- Use vectorcode if available in your context
- the project root for backend is `~/projects/electricies/backend`
  - For querying rules, query from sql file
- the project root for frontend is `~/projects/electricies/frontend`

## Modules

- The modules that is in our code, can be retrieved is:

- adjust-document
  - [-] adjust-document
  - [-] create-document
  - [-] delete-document
  - [-] search-document
  - [-] update-document
- contact-support
  - [-] contact-support
- manage-account
  - [ ] delete-account
  - [ ] edit-profile
  - [ ] link-account-with-third-party
  - [ ] manage-account
  - [ ] recover-account
  - [ ] reset-password
  - [ ] sign-in
  - [ ] sign-out
  - [ ] sign-up
- manage-cart
  - [x] change-product-amount
  - [x] manage-cart
  - [x] purchase
  - [x] remove-product-from-cart
- manage-product
  - [x] add-product
  - [x] delete-product
  - [x] delete-review
  - [x] manage-product
  - [x] search-product
  - [x] update-product
- manage-user
  - [ ] change-user-roles
  - [ ] delete-user
  - [ ] manage-user
  - [ ] search-user
  - [-] view-customer-report
  - [-] view-staff-report
- view-customer-self-report
  - [-] view-customer-self-report
- view-document
  - [-] view-document
- view-order
  - [-] cancel-order
  - [-] return-product
  - [-] review-product
  - [x] search-order
  - [x] view-order-detail
  - [x] view-order
- view-product
  - [-] add-product-to-cart
  - [x] search-product
  - [x] view-product-detail
  - [-] view-product-reviews
  - [x] view-product
  - [x] view-suggested-product
- view-shop-report
  - [-] view-shop-report
- view-staff-self-report
  - [-] view-staff-self-report
- view-system-monitoring
  - [ ] view-system-monitoring

explain:

- `[x]` is in our code, vectorised, can be searched
- `[-]` is in our code, but haven't been implemented yet, or not vectorised
- `[ ]` is not in our code, handled by third-party services (e.g., Keycloak for auth, payment gateway, monitoring services, etc.)

## Tech stack

### Backend

- Language: Go (Golang) 1.25.5
- Framework: Gin (REST API)
- Authentication: Keycloak + JWT (via gocloak library)
- Database: PostgreSQL with pgx driver
- Search: ParadeDB (for product/user/document full-text search)
- File Storage: AWS S3 (MinIO alternative for local/dev)
- Caching: Redis
- Payment: VNPay integration (govnpay library)
- Testing: Go testing with testcontainers (PostgreSQL, Redis, Minio, Keycloak)
- Documentation: Swagger/OpenAPI with swag
- Transaction Management: transactor with pgx
- Monitoring: Prometheus client
- Logging: Zap with lumberjack rotation
- Architecture: Clean Architecture, Domain driven design (DDD) principles

### Frontend

- Framework: Next.js 15.5.7 with React 19.1.0
- Language: TypeScript
- Authentication: NextAuth.js 5.0.0-beta
- UI Components: shadcn/ui with Radix UI primitives
- Styling: Tailwind CSS 4 with custom animations
- Form Management: React Hook Form with Zod validation
- HTTP Client: SWR (stale-while-revalidate)
- Animation: Framer Motion
- Icons: Lucide React
- Notifications: Sonner (toast system)
- Phone Input: react-phone-number-input
- Testing: Vitest with jsdom and React Testing Library
- Code Quality: ESLint, Prettier, lint-staged
- Git Hooks: Husky with commitlint

### Infrastructure

- Container Orchestration: Kubernetes
- CI/CD: GitHub Actions
- Monitoring Stack:
  - Metrics: Prometheus
  - Logs: Loki
  - Visualization: Grafana
  - Log Collection: Grafana Alloy (agent)

## Outline for eletricilies project

```
1. Introduction
 1.1 Purpose
 1.2 Scope
 1.3 Intended Audiences and Document Organization
 1.4 References

2. Functional Requirements

2.1.1 Manage Account
-   2.1.1.1 Delete Account
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.1.2 Edit Profile
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.1.3 Link Account with Third Party
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.1.4 Manage Account
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.1.5 Recover Account
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.1.6 Reset Password
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.1.7 Sign In
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.1.8 Sign Out
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.1.9 Sign Up
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.1.2 Contact Support
-   2.1.2.1 Contact Support
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.1.3 Adjust Document
-   2.1.3.1 Adjust Document
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.3.2 Create Document
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.3.3 Delete Document
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.3.4 Search Document
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.3.5 Update Document
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.1.4 Manage Cart
-   2.1.4.1 Change Product Amount
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.4.2 Manage Cart
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.4.3 Purchase
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.4.4 Remove Product from Cart
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.1.5 Manage Product
-   2.1.5.1 Add Product
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.5.2 Delete Product
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.5.3 Delete Review
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.5.4 Manage Product
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.5.5 Search Product
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.5.6 Update Product
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.1.6 Manage User
-   2.1.6.1 Change User Roles
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.6.2 Delete User
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.6.3 Manage User
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.6.4 Search User
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.6.5 View Customer Report
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.6.6 View Staff Report
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.1.7 View Customer Self Report
-   2.1.7.1 View Customer Self Report
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.1.8 View Document
-   2.1.8.1 View Document
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.1.9 View Order
-   2.1.9.1 Cancel Order
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.9.2 Return Product
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.9.3 Review Product
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.9.4 Search Order
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.9.5 View Order Detail
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.9.6 View Order
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.1.10 View Product
-   2.1.10.1 Add Product to Cart
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.10.2 Search Product
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.10.3 View Product Detail
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.10.4 View Product Reviews
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.10.5 View Product
 -   Use Case Description
 -   Activities Flow
 -   Business Rules
-   2.1.10.6 View Suggested Product
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.1.11 View Shop Report
-   2.1.11.1 View Shop Report
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.1.12 View Staff Self Report
-   2.1.12.1 View Staff Self Report
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.1.13 View System Monitoring
-   2.1.13.1 View System Monitoring
 -   Use Case Description
 -   Activities Flow
 -   Business Rules

2.2. List description
  Empty here

2.3. View Description
  Empty here

3. Non-functional Requirements
 3.1 User Access and Security
 3.2 Performance Requirements
 3.3 Implementation Requirements

4. Other Requirements
 4.1 Archive Function
 4.2 Security Audit Function
 4.3 System Design
     4.3.1 Architecture Layers
     4.3.2 Database Tables
     4.3.3 Technical Stack

5. Appendixes
 5.1 Glossary
 5.2 Messages
 5.3 Issues List
```

The srs file is in `./docs/software-docs/srs/index.md`

### Example

the `./assets/WMS_SRS-shorten.md` file contains an example of SRS outline. But it isn't adapt with the best practices, just reference it as an syntax, outline example
