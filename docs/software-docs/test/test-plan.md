---
outline: [1, 5]
linkcolor: blue
geometry:
  - top=2cm
  - bottom=1.5cm
  - left=3cm
  - right=2cm
  - landscape
  - a4paper
---

# TEST PLAN

**Electricilies - Website for Selling Electronic Products**

**Version:** 3.0

**Date:** December 15, 2025

**Project Duration:** November 1, 2025 - December 10, 2025

---

## Document Change History

| Version | Date       | Contributor    | Description                                                                                                                                                                                                                                                   |
| ------- | ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0     | 01/11/2025 | Buggilies Team | Initial test plan creation                                                                                                                                                                                                                                    |
| 2.0     | 30/11/2025 | Buggilies Team | Revised testing strategy: removed frontend unit/integration tests, updated E2E approach with Playwright, updated HPA configurations                                                                                                                           |
| 3.0     | 15/12/2025 | Buggilies Team | Updated backend testing approach: split coverage targets (business logic 60%, application 50%), integration tests to blackbox, expanded module coverage (attribute, category, product, cart, order), performance tests limited to homepage and product detail |

---

## Introduction

### Purpose

This test plan defines the testing strategy, approach, resources, and schedule for the Electricilies e-commerce platform. As a university project with limited time and resources, this plan focuses on critical functionalities while maintaining practical testing standards suitable for academic evaluation.

### Project Overview

**Project Name:** Electricilies - Website for Selling Electronic Products

**Testing Period:** November 1, 2025 - December 10, 2025 (40 days)

**Target Users:** The system is designed for users who are interested in electronic products, including tech enthusiasts, students, and general consumers.

**Reason for Choosing the Topic:** We chose this topic to create a specialized and user-friendly website for selling electronics, providing a convenient and trustworthy shopping experience.

**References:** The project takes inspiration from existing e-commerce platforms such as PCNgon, Tiki, Shopee, and TikTok Shop, but on a smaller scale and with a design and functionality style similar to PCNgon.

### Objectives

**Primary Objectives:**

- Ensure critical user workflows function correctly (login, product viewing, cart operations, orders)
- Achieve backend code coverage targets: Business Logic 60%, Application Layer 50%
- Validate system stability under expected load conditions
- Establish automated testing pipeline for continuous quality assurance

**Secondary Objectives:**

- Identify and document system bottlenecks through performance testing
- Ensure cross-browser compatibility (Chromium, Firefox, WebKit)
- Maintain test documentation for future project iterations

---

## Test Scope

### In Scope

#### Functional Modules

**Backend (Unit Testing - White-box):**

Test business logic layer with isolated unit tests focusing on domain logic validation.

| Module        | Functions                                                                                                                                                          | Test Type |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| **Attribute** | - Create Attribute validation<br>- Update Attribute validation<br>- Delete Attribute validation<br>- List Attributes logic                                         | Unit      |
| **Category**  | - Create Category validation<br>- Update Category validation<br>- Delete Category validation<br>- Category hierarchy logic                                         | Unit      |
| **Product**   | - Create Product validation<br>- Update Product validation<br>- Delete Product validation<br>- Search Product logic<br>- Product-Attribute relationship validation | Unit      |
| **Cart**      | - Add to Cart validation<br>- Update quantity logic<br>- Remove from Cart logic<br>- Price calculation                                                             | Unit      |
| **Order**     | - Create Order validation<br>- Order status transitions<br>- Order item management                                                                                 | Unit      |

**Backend (Integration Testing - Blackbox):**

Test application layer (use cases/services) through API endpoints without knowledge of internal implementation.

| Module        | Functions                                                                                                | Test Type   |
| ------------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| **Attribute** | - CRUD operations via API endpoints<br>- Attribute persistence and retrieval                             | Integration |
| **Category**  | - CRUD operations via API endpoints<br>- Category hierarchy management                                   | Integration |
| **Product**   | - CRUD operations via API endpoints<br>- Product search and filtering<br>- Mock VNPay payment validation | Integration |
| **Cart**      | - Add/remove/update operations via API<br>- Cart persistence                                             | Integration |
| **Order**     | - Order creation via API<br>- Order retrieval and status updates<br>- Mock VNPay integration             | Integration |

**End-to-End System Testing (Black-box Testing):**

| Module              | Functions                                                                                     | Test Level |
| ------------------- | --------------------------------------------------------------------------------------------- | ---------- |
| **ManageAccount**   | - Sign Up<br>- Sign In<br>- Sign Out                                                          | E2E        |
| **ManageAttribute** | - Attribute CRUD operations                                                                   | E2E        |
| **ManageCategory**  | - Category CRUD operations<br>- Category hierarchy management                                 | E2E        |
| **View Product**    | - Browse Products<br>- View Product Details<br>- Search Product                               | E2E        |
| **Manage Product**  | - Add Product<br>- Update Product<br>- Delete Product                                         | E2E        |
| **Manage Cart**     | - Add Product to Cart<br>- Change Product Amount<br>- Remove Product from Cart<br>- View Cart | E2E        |
| **Manage Order**    | - Create Order from Cart<br>- View Order History<br>- Track Order Status                      | E2E        |

#### Test Types

1. **Unit Testing (White-box)**
   - Backend only: Go built-in testing tool with testify
   - Coverage Target: 60% of business logic layer
   - Approach: White-box testing focusing on domain logic validation
   - Modules: Attribute, Category, Product, Cart, Order

2. **Integration Testing (Blackbox)**
   - Backend only: Go testing + Testcontainers + Mock VNPay
   - Focus: Application layer (use cases/services) via API endpoints
   - Tests CRUD and business operations at the API layer
   - Coverage Target: 50% of application layer
   - Modules: Attribute, Category, Product, Cart, Order
   - VNPay mocking required for payment flow testing

3. **End-to-End Testing (System Testing)**
   - Tool: Playwright (separate repository from frontend)
   - Approach: Black-box testing
   - Execution: Against Kubernetes deployment environment (local dev and CI)
   - Critical User Journeys:
     - User registration and login flow
     - Attribute management workflow
     - Category management workflow
     - Product browsing and viewing
     - Product management workflow
     - Cart operations
     - Order creation and tracking

4. **Performance Testing**
   - Tool: Grafana k6 (manual execution)
   - Endpoints: Homepage UI load test, Product detail page load test
   - Target: Max 1s response time, 500 requests/second
   - Kubernetes Testing:
     - Backend Horizontal Pod Autoscaler (HPA) scaling validation
     - Load testing to trigger auto-scaling
     - Verify scaling up (increased load) and scaling down (reduced load)
     - Monitor resource utilization during scaling events

5. **Compatibility Testing**
   - Browser Compatibility:
     - Chromium (primary target)
     - Firefox
     - WebKit
   - Platform: Desktop only (no mobile testing)

6. **Regression Testing**
   - Automated re-execution of all backend unit and integration tests on every push related to Go code
   - CI pipeline validation

### Out of Scope

- Frontend unit testing
- Frontend integration testing
- React component testing
- User Acceptance Testing (no real stakeholders)
- Security penetration testing
- Mobile responsive testing
- Payment gateway live testing (VNPay mock only)
- Disaster recovery testing
- Data migration testing
- Frontend HPA scaling validation (mentioned but not tested)

---

## Test Approach

### Test Levels

#### Unit Testing (Business Logic Layer - White-box)

**Purpose:** Verify business logic validation and domain rules in isolation.

**Approach:**

- **Backend (Go):**
  - Use Go's built-in `testing` package with `testify/assert`
  - Table-driven tests for comprehensive input coverage
  - Parallel test execution with `t.Parallel()`
  - Mock external dependencies using interfaces
  - White-box testing approach
  - Focus on Attribute, Category, Product, Cart, Order domain logic
  - Target Coverage: 60% of business logic

**Execution:**

- Triggered on every `git push` related to Go code
- Run in parallel across OS matrix: Ubuntu, Windows, macOS
- CI caching enabled for dependencies

#### Integration Testing (Application Layer - Blackbox)

**Purpose:** Validate application layer (API endpoints) operations through blackbox testing without knowledge of internal implementation.

**Approach:**

- **Backend (Go + Testcontainers):**
  - Spin up ephemeral PostgreSQL, Redis, Keycloak, mock VNPay containers
  - Seed database with test fixtures
  - Test application layer (use cases/services) via API endpoints
  - Blackbox testing approach - treat API as external interface
  - Group tests using `testify/suite`
  - Focus on Attribute, Category, Product, Cart, Order CRUD operations
  - VNPay payment flow tested with mock implementation
  - Target Coverage: 50% of application layer

**Execution:**

- Triggered on every `git push` related to Go code
- Run on Ubuntu (Linux only for Testcontainers)
- Part of regression testing pipeline

#### End-to-End Testing (System Testing)

**Purpose:** Validate complete user workflows from UI to database using black-box approach.

**Approach:**

- **Tool:** Playwright (separate repository)
- **Testing Approach:** Black-box testing
- **Test Organization:**
  - Critical user journeys as separate test files
  - Page Object Model for maintainability
  - Test fixtures for authentication state
- **Modules Covered:**
  - ManageAccount
  - ManageAttribute
  - ManageCategory
  - View Product
  - Manage Product
  - Manage Cart
  - Manage Order

**Execution:**

- Runs against Kubernetes deployment environment
- Supports both local development and CI execution
- CI trigger: Manual (workflow dispatch)
- Generate video recordings and screenshots on failure
- Upload Playwright HTML report as artifact

#### Performance Testing

**Purpose:** Validate system performance under expected load and backend auto-scaling capabilities.

**Approach:**

- **Tool:** Grafana k6
- **Test Scenarios:**
  1. **Homepage UI Load Test**
     - Gradual ramp-up: 0 → 100 virtual users over 1 minute
     - Sustained load: 100 VUs for 2 minutes
     - Ramp-down: 100 → 0 over 30 seconds
     - Metrics: Response time (p90, p95), throughput, error rate
     - Current performance: avg=2.44s, p95=7.55s, throughput=40 req/s

  2. **Product Detail Page Load Test**
     - Gradual ramp-up: 0 → 50 virtual users over 1 minute
     - Sustained load: 50 VUs for 2 minutes
     - Ramp-down: 50 → 0 over 30 seconds
     - Metrics: Detail page response time, database query performance

  3. **Backend Horizontal Pod Autoscaling (HPA) Test**
     - **Backend HPA Configuration:**
       - Min replicas: 1
       - Max replicas: 3
       - Target CPU utilization: 70%
       - Target Memory utilization: 80%
     - **Test Steps:**
       1. Generate sustained high load (60-70% CPU utilization, 70-80% Memory utilization)
       2. Monitor pod count increase (max replicas: 3)
       3. Verify load distribution across new pods
       4. Reduce load and verify scale-down behavior
       5. Monitor cool-down period (5 minutes default)
     - **Metrics:**
       - Time to scale up (target: < 2 minutes)
       - CPU and Memory utilization across pods
       - Request distribution during scaling
       - Scale-down stability (no thrashing)

**Execution:**

- Manual execution via command line
- Run against Kubernetes dev environment
- Generate HTML report
- Monitor Kubernetes metrics: `kubectl get hpa -w` and Grafana dashboards
- Not integrated in CI pipeline (resource constraints)

**Evidence Collection:**

- k6 HTML report screenshots
- Kubernetes HPA event logs: `kubectl describe hpa backend-hpa`
- Grafana dashboard screenshots showing:
  - CPU and Memory utilization during load
  - Pod count over time
  - Request rate distribution
  - Response time metrics

#### Compatibility Testing

**Purpose:** Ensure the application works correctly across different browsers.

**Approach:**

- **Browser Compatibility:**
  - Playwright projects configured for Chromium, Firefox, WebKit
  - Run E2E tests across all browser engines
  - Verify UI rendering consistency
  - Test JavaScript functionality compatibility

**Execution:**

- Browser tests: Run as part of E2E test suite
- Manual verification: Visual testing on different browsers for critical UI flows

**Scope Limitations:**

- No mobile device testing (out of scope)
- No older browser versions (only latest stable releases)
- No screen reader/accessibility testing (future consideration)

#### Regression Testing

**Purpose:** Ensure new changes don't break existing functionality.

**Approach:**

- Automated re-execution of all backend unit and integration tests on every push related to Go code
- CI pipeline blocks merge if tests fail
- No separate test suite—uses existing backend unit and integration tests

**Execution:**

- Runs automatically as part of CI pipeline for Go code changes
- Results visible in GitHub Actions job summary

### Test Strategy Summary

| Test Level    | Tool                    | Trigger              | Coverage Target               | Pass Criteria                             |
| ------------- | ----------------------- | -------------------- | ----------------------------- | ----------------------------------------- |
| Unit          | Go test, testify        | Every push (Go code) | Business Logic: 60%           | All tests pass                            |
| Integration   | Go + Testcontainers     | Every push (Go code) | Application Layer: 50%        | All tests pass                            |
| E2E           | Playwright              | Manual trigger       | Key user journeys (5 modules) | All critical flows pass                   |
| Compatibility | Playwright              | Manual trigger       | 3 browsers                    | Tests pass on all browsers                |
| Performance   | Grafana k6              | Manual               | Homepage, Product Detail      | p95 < 1s, 500 req/s, HPA scales correctly |
| Regression    | Backend automated tests | Every push (Go code) | All backend                   | All tests pass                            |

---

## Test Environment

### Development Environment

**Local Development:**

- OS: Developer's choice (Windows, macOS, Linux)
- Local Kubernetes: Minikube or Docker Desktop (optional)

**Test Execution:**

- Unit tests: Local machine
- Integration tests: Docker with Testcontainers
- E2E tests: Against Kubernetes deployment environment

### CI/CD Environment

**GitHub Actions Runners:**

- **Backend Tests (Unit + Integration):** GitHub-hosted runners
  - OS Matrix: Linux, Windows, macOS
  - Triggered on every push related to Go code
- **E2E Tests:** Linux with Playwright dependencies
  - Manual trigger (workflow dispatch)
  - Runs against Kubernetes deployment

**Caching Strategy:**

- Go modules: `actions/cache` with `go.sum` key
- Playwright browsers: `actions/cache` with Playwright version key

### Deployment Environment (Test Target)

**Kubernetes Cluster:**

- **Infrastructure:** Single-node Arch Linux machine
  - RAM: 16GB
  - Storage: 256GB SSD
  - CPU: Multi-core (specific model TBD)

**Resource Limits:**

- Backend pods: CPU 500m, RAM 200Mi
- Frontend pods: CPU 500m, RAM 500Mi
- PostgreSQL: CPU 1000m, RAM 1Gi
- Redis: CPU 200m, RAM 256Mi

**Auto-scaling Configuration:**

- **Backend HPA:**
  - Min replicas: 1
  - Max replicas: 3
  - Target CPU utilization: 70%
  - Target Memory utilization: 80%

- **Frontend HPA (mentioned only):**
  - Min replicas: 1
  - Max replicas: 2
  - Target CPU utilization: 70%
  - Target Memory utilization: 70%

- **Metrics Server:** Required for HPA

**Monitoring Stack:**

- Prometheus: Metrics collection
- Grafana: Visualization and dashboards
- Loki: Log aggregation

**Deployment Strategy:**

- GitOps with FluxCD
- Automatic deployment on manual trigger
- E2E tests triggered manually after successful deployment

### Test Data Management

**Backend Test Data:**

- **Unit Tests:** Mock data in test files
- **Integration Tests:**
  - Database seeded with test fixtures (Attribute, Category, Product, Cart, Order)
  - Testcontainers recreates clean database per test suite
  - Mock VNPay service for payment testing

**E2E Test Data:**

- Test users created via API before test run
- Products, attributes, and categories pre-seeded in dev database
- No cleanup required

---

## Test Schedule

### Timeline Overview

- **Total Duration:** 40 days (November 1 - December 10, 2025)
- **Resource Allocation:** ~2 hours/day per team member

| Phase                                    | Duration | Dates     | Activities                                  |
| ---------------------------------------- | -------- | --------- | ------------------------------------------- |
| **Phase 1: Setup**                       | 5 days   | Nov 1-5   | Test infrastructure setup, CI configuration |
| **Phase 2: Backend Unit Testing**        | 10 days  | Nov 6-15  | Write and execute backend unit tests        |
| **Phase 3: Backend Integration Testing** | 8 days   | Nov 16-23 | Write and execute backend integration tests |
| **Phase 4: E2E Testing (Playwright)**    | 7 days   | Nov 24-30 | Write and execute Playwright E2E tests      |
| **Phase 5: Performance Testing**         | 3 days   | Dec 1-3   | Execute k6 load tests and HPA validation    |
| **Phase 6: Finalization**                | 7 days   | Dec 4-10  | Bug fixes, documentation, report generation |

### Detailed Schedule

#### Week 1-2: November 1-15

| Date      | Activity                                              | Owner                                         | Deliverable                                   |
| --------- | ----------------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| Nov 1     | Setup CI workflows for backend                        | Trần Nguyễn Thái Bình                         | `.github/workflows/backend.yml`               |
| Nov 2     | Setup Playwright repository                           | Trần Nguyễn Thái Bình                         | E2E test repository initialized               |
| Nov 3-5   | Configure Codecov integration                         | Trần Nguyễn Thái Bình                         | Codecov badges on README                      |
| Nov 6-7   | Write unit tests for Attribute and Category (backend) | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | Tests for domain logic (Attribute, Category)  |
| Nov 8-10  | Write unit tests for Product, Cart, Order (backend)   | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | Tests for domain logic (Product, Cart, Order) |
| Nov 11-15 | Setup Playwright framework and base tests             | Trần Nguyễn Duy Minh, Đào Duy Vinh            | Playwright config, Page Objects               |

#### Week 3-4: November 16-30

| Date      | Activity                                                 | Owner                                         | Deliverable                                     |
| --------- | -------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------- |
| Nov 16-17 | Setup Testcontainers for integration tests + Mock VNPay  | Trần Nguyễn Thái Bình                         | Integration test suite skeleton with VNPay mock |
| Nov 18-19 | Write integration tests for Attribute and Category (API) | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | Attribute, Category CRUD API tests              |
| Nov 20-22 | Write integration tests for Product, Cart, Order (API)   | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | Product, Cart, Order CRUD API tests             |
| Nov 23    | Integration test review and VNPay mock validation        | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | All integration tests passing                   |
| Nov 24-25 | Write E2E tests for ManageAccount and ManageAttribute    | Trần Nguyễn Duy Minh, Đào Duy Vinh            | Auth and Attribute management E2E tests         |
| Nov 26-27 | Write E2E tests for ManageCategory and View Product      | Trần Nguyễn Duy Minh, Đào Duy Vinh            | Category and Product browsing E2E tests         |
| Nov 28-29 | Write E2E tests for Manage Product and Manage Cart       | Trần Nguyễn Duy Minh, Đào Duy Vinh            | Product management and Cart E2E tests           |
| Nov 30    | Write E2E tests for Manage Order                         | Trần Nguyễn Duy Minh, Đào Duy Vinh            | Order creation and tracking E2E tests           |

#### Week 5-6: December 1-10

| Date     | Activity                                                     | Owner                 | Deliverable                                   |
| -------- | ------------------------------------------------------------ | --------------------- | --------------------------------------------- |
| Dec 1    | Write k6 performance test scripts (homepage, product detail) | Trần Nguyễn Thái Bình | Homepage and product detail load test scripts |
| Dec 2    | Configure HPA for backend deployment                         | Trần Nguyễn Thái Bình | HPA manifest and metrics server setup         |
| Dec 3    | Execute k6 tests and HPA scaling validation                  | Trần Nguyễn Thái Bình | Performance test report, HPA scaling evidence |
| Dec 4-6  | Review test coverage, fix gaps                               | All team              | Coverage meets targets (BL: 60%, AL: 50%)     |
| Dec 7-8  | Generate test summary report                                 | Trần Nguyễn Thái Bình | HTML/PDF test report                          |
| Dec 9-10 | Final documentation and submission                           | All team              | Complete test deliverables                    |

### Milestone Checklist

- [ ] **Nov 5:** CI pipelines operational with backend tests running
- [ ] **Nov 15:** Backend unit tests written for all 5 modules (60% business logic coverage)
- [ ] **Nov 23:** Backend integration tests passing for all 5 modules (50% application layer coverage, VNPay mock validated)
- [ ] **Nov 30:** E2E tests passing for all critical user journeys (7 modules)
- [ ] **Dec 3:** Performance test results documented (homepage + product detail), HPA scaling validated
- [ ] **Dec 10:** Test summary report completed and submitted

---

## Resources and Responsibilities

### Team Structure

| Team Member            | Role                               | User ID  | Responsibilities                                                                                                         |
| ---------------------- | ---------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| Trần Nguyễn Thái Bình  | Project Owner, Backend Dev, DevOps | 23520161 | - Backend unit/integration tests (5 modules)<br>- CI/CD pipeline setup<br>- Performance testing<br>- Test infrastructure |
| Nguyễn Thái Gia Nguyễn | Project Owner, Backend Dev         | 23521049 | - Backend unit/integration tests (5 modules)<br>- VNPay mock implementation<br>- Test data fixtures                      |
| Trần Nguyễn Duy Minh   | Frontend Dev                       | 23520956 | - Playwright E2E tests (7 modules)<br>- Page Object Models                                                               |
| Đào Duy Vinh           | Frontend Dev                       | 23521787 | - Playwright E2E tests (7 modules)<br>- Browser compatibility testing                                                    |

### Responsibility Matrix

| Task                          | Owner              | Reviewer                | Notes                                                                                |
| ----------------------------- | ------------------ | ----------------------- | ------------------------------------------------------------------------------------ |
| **Backend Unit Tests**        | 23520161, 23521049 | Self-review in dev team | Each dev reviews other's code, 60% business logic coverage target                    |
| **Backend Integration Tests** | 23520161, 23521049 | Self-review in dev team | Testcontainers + VNPay mock setup, 50% application layer coverage target             |
| **Playwright E2E Tests**      | 23520956, 23521787 | All team members        | Collaborative review, 7 modules (Account, Attribute, Category, Product, Cart, Order) |
| **Performance Tests**         | 23520161           |                         | Manual execution (homepage + product detail pages)                                   |
| **CI/CD Configuration**       | 23520161           |                         | GitHub Actions workflows                                                             |
| **Test Documentation**        | 23520161           | All team members        | Test plan, summary report                                                            |
| **Code Coverage Monitoring**  | 23520161           | All team members        | Codecov integration (BL: 60%, AL: 50% targets)                                       |

### Communication Channels

- **Daily Standups:** Facebook Messenger
- **Code Reviews:** GitHub Pull Requests
- **Issue Tracking:** Jira
- **CI Status:** GitHub Actions notifications
- **Test Reports:** GitHub Actions artifacts, Codecov status

### Escalation Process

1. **Test Failures:** Developer investigates and fixes within 24 hours
2. **CI Blockers:** Team discussion, escalate to project owner if >1 day
3. **Environment Issues:** DevOps lead (23520161) troubleshoots immediately
4. **Schedule Delays:** Team meeting to reprioritize tasks

---

## Test Deliverables

### Test Artifacts

| Deliverable                  | Format            | Location                                     | Owner               |
| ---------------------------- | ----------------- | -------------------------------------------- | ------------------- |
| **Backend Test Code**        | Go                | Backend repository                           | 23520161, 23521049  |
| **Playwright Test Code**     | TypeScript        | Separate E2E repository                      | 23520956, 23521787  |
| **CI Workflows**             | YAML              | `.github/workflows/` each repo               | 23520161            |
| **Test Data Fixtures**       | Go, JSON          | Backend repository                           | 23520161, 23521049  |
| **VNPay Mock Service**       | Go                | Backend repository                           | 23520161, 23521049  |
| **Test Summary Report**      | HTML/PDF          |                                              | 23520161            |
| **Code Coverage Reports**    | HTML, JSON        | Codecov dashboard                            | Automated (Codecov) |
| **Performance Test Results** | HTML, Screenshots | `tests/k6/reports/`                          | 23520161            |
| **E2E Test Reports**         | HTML              | Playwright HTML Report (GH Actions artifact) | 23520956, 23521787  |

### Test Summary Report

- Artifacts from CI outputs and Codecov
- Screenshots captured during test execution
- PDF of summary report
- Coverage breakdown: Business Logic (60% target), Application Layer (50% target)

### Evidence Collection

**Required Screenshots:**

1. GitHub Actions CI job summary (backend unit + integration tests passing)
2. Codecov dashboard showing backend coverage breakdown (BL: 60%, AL: 50%)
3. Playwright HTML report showing browser matrix (Chromium, Firefox, WebKit)
4. k6 performance test output (homepage + product detail pages)
5. Kubernetes HPA events showing scale-up and scale-down (backend only)
6. Grafana dashboard during load test (CPU, Memory, pods, response times)
7. Sample E2E test video (1-2 critical flows)
8. VNPay mock integration test results

---

## Test Metrics

### Key Performance Indicators

| Metric                                              | Target                                    | Measurement Method      |
| --------------------------------------------------- | ----------------------------------------- | ----------------------- |
| **Backend Unit Test Coverage (Business Logic)**     | 60%                                       | Codecov                 |
| **Backend Integration Test Coverage (Application)** | 50%                                       | Codecov                 |
| **Backend Unit Test Pass Rate**                     | 100%                                      | CI job status           |
| **Integration Test Pass Rate**                      | 100%                                      | CI job status           |
| **E2E Test Pass Rate**                              | 100% (critical paths)                     | Playwright report       |
| **Browser Compatibility**                           | 100% pass on Chromium, Firefox, WebKit    | Playwright projects     |
| **Homepage Response Time (p95)**                    | < 1 second                                | k6 metrics              |
| **Product Detail Response Time (p95)**              | < 1 second                                | k6 metrics              |
| **System Throughput**                               | >= 500 req/s                              | k6 metrics              |
| **Backend HPA Scale-up Time**                       | < 2 minutes to add pods                   | Kubernetes events       |
| **Backend HPA Scale-down Stability**                | No thrashing (stable 5min cool-down)      | Kubernetes HPA logs     |
| **Backend Pod CPU Utilization**                     | Balanced across replicas (variance < 20%) | Prometheus/Grafana      |
| **CI Pipeline Duration**                            | < 15 minutes (unit+integration)           | GitHub Actions insights |
| **Test Execution Frequency**                        | Every commit (Go code)                    | CI trigger logs         |

### Test Execution Metrics

**Tracked in GitHub Actions:**

- Total test count per test level (Unit: 5 modules, Integration: 5 modules)
- Test execution duration
- Module-specific coverage (Attribute, Category, Product, Cart, Order)

**Reporting:**

- Included in final test summary report
- Separate breakdown for business logic vs application layer

---

## Risks and Assumptions

### Assumptions

1. **Development Environment:**
   - Kubernetes cluster remains available and stable throughout testing period
   - No hardware failures on test server
   - Internet connectivity maintained for CI/CD

2. **Team Availability:**
   - Each team member can dedicate ~2 hours/day consistently
   - No extended absences during critical testing phases
   - Team members have necessary skills (Go, Playwright)

3. **Technical Dependencies:**
   - Testcontainers works reliably on Ubuntu CI runners
   - Playwright E2E tests can run against deployed Kubernetes environment
   - FluxCD deployments trigger successfully on merge
   - VNPay mock implementation is reliable

4. **Test Data:**
   - Dev database can be seeded with representative data (5 modules)
   - No need for extensive data cleanup between test runs
   - Test users won't conflict with production (none exists)

5. **External Services:**
   - Keycloak authentication service is stable
   - Redis caching is stable
   - MinIO S3 storage compatible is stable
   - Mock VNPay service for payment testing works reliably

### Risks and Mitigation

| Risk                                | Impact                           | Probability | Mitigation Strategy                                                                                     |
| ----------------------------------- | -------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| **Testcontainers fails on CI**      | High (blocks integration tests)  | Low         | - Test locally first<br>- Use Docker Compose fallback<br>- Document manual testing steps                |
| **Kubernetes cluster downtime**     | High (blocks E2E and deployment) | Low         | - Schedule maintenance windows<br>- Keep local Docker setup as backup<br>- Document recovery steps      |
| **Backend HPA not triggering**      | Medium (performance test fails)  | Medium      | - Test HPA manually before k6 run<br>- Verify metrics server working<br>- Lower CPU threshold if needed |
| **VNPay mock integration issues**   | Medium (integration tests fail)  | Medium      | - Test mock separately<br>- Use fixture data<br>- Document mock behavior                                |
| **Browser compatibility failures**  | Low (limited browser support)    | Low         | - Focus on Chromium as primary<br>- Manual fallback testing                                             |
| **Time constraints**                | Medium (reduced coverage)        | Medium      | - Prioritize critical paths<br>- Focus on high-value tests<br>- Document out-of-scope items             |
| **CI pipeline timeouts**            | Medium (delays feedback)         | Medium      | - Optimize test parallelization<br>- Use CI caching effectively<br>- Split long test suites             |
| **Flaky E2E tests**                 | Medium (false failures)          | High        | - Use Playwright auto-wait<br>- Add explicit waits where needed<br>- Retry failed tests (max 2)         |
| **Multiple module coverage target** | Medium (coverage gaps)           | Medium      | - Prioritize critical modules first<br>- Document coverage per module<br>- Adjust targets if needed     |
| **Team member unavailability**      | Medium (delays schedule)         | Low         | - Cross-train on test areas<br>- Document test approaches<br>- Re-prioritize tasks                      |

### Contingency Plans

**If Backend Test Coverage Falls Short:**

- Prioritize testing critical business logic (Product, Cart, Order CRUD)
- Document untested edge cases for future work
- Focus on happy path coverage first
- Separate coverage by module for visibility

**If Integration Tests Cannot Use Testcontainers:**

- Use Docker Compose for local integration testing
- Document manual setup steps for CI
- Consider mocking database layer as fallback
- Validate VNPay mock separately

**If E2E Tests Are Too Flaky:**

- Reduce E2E test count to 5-7 most critical paths
- Increase timeout values for slower environments
- Allow manual E2E validation as acceptable
- Focus on Account, Product, Cart flows

**If CI Pipeline Exceeds Time Limits:**

- Split tests into multiple parallel jobs (by module)
- Reduce OS matrix (focus on Linux)
- Cache more aggressively
- Split unit and integration tests into separate jobs

**If Schedule Slips:**

- Week 1-2: Focus on backend unit tests (Product, Cart modules)
- Week 3: Reduce integration test scenarios for less critical modules
- Week 4: Accept lower E2E coverage, document gaps
- Adjust performance test scope (homepage only)

---

## Appendix

### Sample Test Cases

#### Backend Unit Test Examples (White-box - Business Logic)

- **Attribute Domain Test:**
  - Test attribute name validation (valid/invalid formats)
  - Test attribute creation with required fields
  - Test attribute update validation
  - Test edge cases (empty strings, special characters, duplicates)

- **Category Domain Test:**
  - Test category creation with hierarchy
  - Test category parent-child relationships
  - Test category name uniqueness validation
  - Test category deletion cascade behavior

- **Product Domain Test:**
  - Test product creation with required fields
  - Test product price validation (positive values only)
  - Test product-attribute relationship
  - Test product search logic
  - Test edge cases (zero quantity, negative prices)

- **Cart Domain Test:**
  - Test adding product to cart
  - Test quantity validation (>0)
  - Test price calculation with multiple items
  - Test cart total computation

- **Order Domain Test:**
  - Test order creation from cart items
  - Test order status state machine
  - Test order item quantity validation
  - Test order total calculation

#### Backend Integration Test Examples (Blackbox - API Layer)

- **Attribute API Test:**
  - POST /api/attributes - CreateAttribute persists to database
  - POST /api/attributes - Rejects duplicate attribute names
  - PUT /api/attributes/{id} - UpdateAttribute modifies database
  - DELETE /api/attributes/{id} - Removes attribute
  - GET /api/attributes - Returns paginated results

- **Category API Test:**
  - POST /api/categories - CreateCategory with parent relationship
  - PUT /api/categories/{id} - UpdateCategory hierarchy
  - DELETE /api/categories/{id} - Cascade delete behavior
  - GET /api/categories - Returns hierarchical structure

- **Product API Test:**
  - POST /api/products - CreateProduct with attributes
  - POST /api/products - Validates attribute references exist
  - PUT /api/products/{id} - UpdateProduct modifies database
  - DELETE /api/products/{id} - Removes product
  - GET /api/products/search - Returns matching results

- **Cart API Test:**
  - POST /api/cart/items - Add product to cart
  - PUT /api/cart/items/{id} - Update quantity
  - DELETE /api/cart/items/{id} - Remove from cart
  - GET /api/cart - Returns cart with totals

- **Order API Test:**
  - POST /api/orders - Create order from cart (mock VNPay)
  - GET /api/orders/{id} - Retrieve order details
  - PUT /api/orders/{id}/status - Update order status
  - GET /api/orders - List user orders

#### E2E Test Examples (Black-box)

- **ManageAccount - User Registration and Login:**
  1. Navigate to signup page
  2. Fill registration form with valid data
  3. Submit form and verify redirect to home
  4. Verify welcome message displays user name
  5. Logout and verify redirect to login
  6. Login with same credentials
  7. Verify successful authentication

- **ManageCategory - Category Management:**
  1. Login as admin user
  2. Navigate to category management page
  3. Create new category
  4. Verify category appears in list
  5. Edit category name
  6. Verify update is reflected
  7. Delete category
  8. Verify category is removed

- **View Product - Product Browsing:**
  1. Navigate to product listing page
  2. Verify products are displayed
  3. Search for specific product
  4. Verify search results
  5. Click on product to view details
  6. Verify product information is displayed

- **Manage Product - Product Management:**
  1. Login as staff user
  2. Navigate to product management page
  3. Click "Add Product" button
  4. Fill product form with all required fields
  5. Upload product images
  6. Submit form and verify success message
  7. Search for newly created product
  8. Edit product details
  9. Save changes and verify update
  10. Delete product and confirm
  11. Verify product no longer appears in list

- **Manage Cart - Cart Operations:**
  1. Login as existing user
  2. Navigate to product listing page
  3. Add product to cart
  4. Verify cart badge updates
  5. Navigate to cart page
  6. Verify product appears with correct quantity
  7. Update quantity
  8. Verify total price updates
  9. Remove product from cart
  10. Verify cart is empty

- **Manage Order - Order Creation and Tracking:**
  1. Login as existing user
  2. Add multiple products to cart
  3. Navigate to cart and proceed to checkout
  4. Verify order summary
  5. Mock payment with VNPay
  6. Verify order creation success
  7. Navigate to order history
  8. Verify order appears with correct status
  9. Click on order to view details
  10. Verify all items and pricing displayed

#### Compatibility Test Examples

- **Browser Compatibility Test:**
  - Run login flow on Chromium, Firefox, WebKit
  - Verify CSS rendering consistency (button styles, layouts)
  - Test form validation across browsers
  - Verify cookie/localStorage behavior
  - Test file upload functionality on each browser

#### Performance Test Examples

- **Homepage Load Test:**
  1. Run k6 script with 0→100 VU ramp-up over 1 minute
  2. Sustain 100 VU for 2 minutes
  3. Monitor p95 response time (target < 1s)
  4. Verify throughput >= 40 req/s (current baseline)
  5. Verify error rate = 0%
  6. Analyze metrics in k6 HTML report

- **Product Detail Page Load Test:**
  1. Run k6 script with product detail endpoint
  2. Ramp-up 0→50 VU over 1 minute
  3. Sustain 50 VU for 2 minutes
  4. Monitor response time and database queries
  5. Verify no N+1 query problems

- **Backend HPA Scaling Test:**
  1. Deploy backend with HPA (min: 1, max: 3, CPU: 70%, Memory: 80%)
  2. Verify initial pod count is 1
  3. Run k6 load test to generate 70% CPU and 80% Memory load
  4. Monitor `kubectl get hpa -w` output
  5. Verify new pods are created within 2 minutes
  6. Check load balancing: `kubectl top pods`
  7. Stop load test
  8. Wait 5 minutes (cool-down period)
  9. Verify pods scale down to 1
  10. Document scaling timeline and resource metrics

### Tools and Technologies Summary

| Category                | Tool/Technology   | Purpose                 |
| ----------------------- | ----------------- | ----------------------- |
| **Unit Testing**        | Go testing        | Backend unit tests      |
|                         | testify/assert    | Test assertions         |
| **Integration Testing** | Testcontainers Go | Ephemeral containers    |
|                         | testify/suite     | Test suite organization |
|                         | Mock VNPay        | Payment mocking         |
| **E2E Testing**         | Playwright        | Browser automation      |
| **Performance Testing** | Grafana k6        | Load testing            |
| **Code Coverage**       | Go coverage       | Native coverage         |
|                         | Codecov           | Coverage reporting      |
| **CI/CD**               | GitHub Actions    | CI pipeline             |
| **Monitoring**          | Prometheus        | Metrics collection      |
|                         | Grafana           | Visualization           |
|                         | Loki              | Log aggregation         |
| **Version Control**     | Git               | Source control          |
|                         | GitHub            | Repository hosting      |

### Glossary

| Term                   | Definition                                                                                      |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| **Blackbox Testing**   | Testing approach where internal implementation is unknown; tests based on requirements          |
| **CI/CD**              | Continuous Integration / Continuous Deployment - automated build, test, and deployment pipeline |
| **Clean Architecture** | Software architecture separating concerns into layers (entities, use cases, interfaces)         |
| **Code Coverage**      | Percentage of code executed by tests                                                            |
| **DDD**                | Domain-Driven Design - software design approach focusing on domain model                        |
| **E2E Testing**        | End-to-End Testing - testing complete user workflows from UI to database                        |
| **Flaky Test**         | Test that intermittently passes and fails without code changes                                  |
| **GitOps**             | Infrastructure and deployment managed through Git commits                                       |
| **HPA**                | Horizontal Pod Autoscaler - Kubernetes feature that automatically scales pods based on metrics  |
| **Integration Test**   | Test that validates interaction between multiple components                                     |
| **JWT**                | JSON Web Token - authentication token format                                                    |
| **k6**                 | Open-source load testing tool by Grafana                                                        |
| **Page Object Model**  | Design pattern for organizing E2E test code                                                     |
| **Playwright**         | Browser automation framework for E2E testing                                                    |
| **Regression Test**    | Re-running existing tests to ensure new changes don't break functionality                       |
| **Table-Driven Test**  | Test pattern using data tables to parameterize test cases                                       |
| **Testcontainers**     | Library for creating ephemeral Docker containers in tests                                       |
| **Test Fixture**       | Predefined test data used across multiple tests                                                 |
| **Unit Test**          | Test that validates individual functions or components in isolation                             |
| **White-box Testing**  | Testing approach where internal implementation is known; tests based on code structure          |

### References

**Testing Frameworks Documentation:**

- Go Testing: <https://pkg.go.dev/testing>
- Testify: <https://github.com/stretchr/testify>
- Playwright: <https://playwright.dev/>
- Testcontainers: <https://golang.testcontainers.org/>

**Tools:**

- Codecov: <https://docs.codecov.com/>
- GitHub Actions: <https://docs.github.com/en/actions>
- Grafana k6: <https://k6.io/docs/>

**Project-Specific:**

- [User Stories](https://electricilies.github.io/software-docs/user-story/)
- [Use cases](https://electricilies.github.io/software-docs/use-case/)
- [Functions List](https://electricilies.github.io/software-docs/function-list/)
- [Activity Diagrams](https://electricilies.github.io/software-docs/activity/)
- [Sequence Diagrams](https://electricilies.github.io/software-docs/sequence/)
- [Electricilies SRS](https://electricilies.github.io/software-docs/srs/)

### Contact Information

| Role                             | Name                   | User ID  | Email                  | Responsibilities                             |
| -------------------------------- | ---------------------- | -------- | ---------------------- | -------------------------------------------- |
| **Project Owner / DevOps Lead**  | Trần Nguyễn Thái Bình  | 23520161 | 23520161@gm.uit.edu.vn | Overall test strategy, CI/CD, infrastructure |
| **Project Owner / Backend Lead** | Nguyễn Thái Gia Nguyễn | 23521049 | 23521049@gm.uit.edu.vn | Backend testing, VNPay mock, code reviews    |
| **Frontend Developer**           | Trần Nguyễn Duy Minh   | 23520956 | 23520956@gm.uit.edu.vn | Playwright E2E tests                         |
| **Frontend Developer**           | Đào Duy Vinh           | 23521787 | 23521787@gm.uit.edu.vn | Playwright E2E tests                         |

**Communication Channels:**

- GitHub Issues: Bug reports and test failures
- GitHub Pull Requests: Code reviews
- Facebook Messenger: Communication
- GitHub Actions: CI/CD notifications

### Approval and Sign-off

This test plan is subject to review and approval by all team members before execution begins.

| Name                   | Signature | Date           |
| ---------------------- | --------- | -------------- |
| Trần Nguyễn Thái Bình  |           | \_\_/\_\_/2025 |
| Nguyễn Thái Gia Nguyễn |           | \_\_/\_\_/2025 |
| Trần Nguyễn Duy Minh   |           | \_\_/\_\_/2025 |
| Đào Duy Vinh           |           | \_\_/\_\_/2025 |

**Approval Status:**

- [ ] Pending Review
- [ ] Approved with Changes
- [ ] Fully Approved

**Revision History:**

- v1.0 (01/11/2025): Initial version created
- v2.0 (30/11/2025): Revised testing strategy - removed frontend unit/integration tests, updated E2E approach, updated HPA configurations
- v3.0 (15/12/2025): Updated backend testing approach - split coverage targets (business logic 60%, application 50%), integration tests to blackbox, expanded module coverage (attribute, category, product, cart, order), VNPay mock integration, performance tests limited to homepage and product detail

### Test Execution Checklist

**Pre-Testing Phase (Nov 1-5):**

- [ ] All team members have reviewed test plan
- [ ] CI/CD pipelines configured in GitHub Actions for backend
- [ ] Codecov integration set up for backend (business logic + application layer reporting)
- [ ] Test data fixtures prepared for 5 modules
- [ ] Testcontainers working on local machines
- [ ] VNPay mock service designed and ready
- [ ] Playwright repository initialized and configured
- [ ] Dev Kubernetes environment stable and accessible
- [ ] Database seeded with initial test data (Attribute, Category, Product, Cart, Order)

**During Testing Phase (Nov 6 - Dec 3):**

- [ ] Backend unit tests written for all 5 modules (60% business logic target)
- [ ] Backend integration tests cover application layer CRUD operations (50% application layer target)
- [ ] VNPay mock service tested and validated
- [ ] E2E tests validate key user journeys (7 modules: Account, Attribute, Category, Product, Cart, Order)
- [ ] All backend tests passing in CI before merge
- [ ] Backend code coverage split documented (Business Logic 60%, Application Layer 50%)
- [ ] Performance tests executed manually (homepage + product detail pages)
- [ ] Backend HPA scaling validated
- [ ] Test failures investigated and fixed within 24 hours
- [ ] Codecov badge updated on README with coverage breakdown

**Post-Testing Phase (Dec 4-10):**

- [ ] All test code committed to repositories
- [ ] CI/CD workflows functioning correctly
- [ ] Test summary report generated with module breakdown
- [ ] Evidence screenshots collected (including VNPay mock validation)
- [ ] Backend code coverage meets split targets (BL: 60%, AL: 50%)
- [ ] Performance test results documented (homepage + product detail)
- [ ] HPA scaling evidence documented
- [ ] Known issues documented in report
- [ ] Final code review completed
- [ ] Documentation updated with module-specific test results
- [ ] Test deliverables ready for submission

---

## Conclusion

This updated test plan provides a comprehensive yet pragmatic approach to testing the Electricilies e-commerce platform within the constraints of a university project. The plan balances academic rigor with practical considerations such as limited time (40 days), small team size (4 members), and resource constraints.

### Key Success Factors

1. **Split Coverage Targets:** Separate targets for business logic (60%) and application layer (50%) provide clear metrics for different test types.

2. **Expanded Module Coverage:** Testing 5 critical modules (Attribute, Category, Product, Cart, Order) ensures comprehensive application coverage.

3. **Blackbox Integration Testing:** API-level integration tests treat the application as a black-box, validating real-world behavior without implementation knowledge.

4. **VNPay Mock Service:** Mock payment implementation enables realistic order flow testing without external dependencies.

5. **Performance Testing Scope:** Limited to homepage and product detail pages focuses effort on critical user paths.

6. **Automated Testing Pipeline:** CI/CD integration ensures backend tests run consistently on every commit, preventing regression bugs.

7. **Clear Testing Approach:** White-box unit testing for business logic and blackbox integration testing for application layer provides comprehensive coverage with appropriate techniques.

8. **Practical Tooling:** Using industry-standard tools (Playwright, Go testing, Testcontainers) with good CI support reduces setup friction.

9. **Clear Responsibilities:** Backend team focuses on unit/integration testing while frontend team focuses on Playwright E2E tests, enabling parallel work.

### Expected Outcomes

By following this test plan, the team will achieve:

- **Quality Assurance:** Critical functionalities (5 backend modules + 7 E2E flows) validated through automated tests
- **Confidence in Changes:** Regression testing prevents breaking existing features
- **Documentation:** Test code serves as executable documentation of expected behavior
- **Learning Experience:** Hands-on experience with professional testing practices and tools
- **Measurable Results:** Code coverage metrics (split by type) and test pass rates provide objective quality indicators

### Beyond the Project

While this test plan is scoped for the December 2025 deadline, the testing infrastructure established will provide ongoing value:

- **Maintainability:** Future features can be tested using the same framework
- **Scalability:** Test suite can grow as the application evolves
- **Best Practices:** Team gains practical testing skills applicable to industry projects
- **Portfolio Quality:** Well-tested code demonstrates professional software development practices

### Final Notes

**Remember:** The goal is not 100% coverage or exhaustive testing of every edge case. For a university project, the focus should be on:

1. Testing what matters (critical user workflows across 5 modules)
2. Demonstrating understanding of testing principles (unit vs integration vs E2E)
3. Building maintainable test code (proper organization and documentation)
4. Automating repetitive testing tasks (CI/CD pipeline)
5. Learning industry-standard tools and practices

**Success is measured by:** Delivering a functional, reasonably well-tested application that meets the core requirements, supported by automated tests that provide confidence in the codebase, with clear separation between business logic testing (60%) and application layer testing (50%).
