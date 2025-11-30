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

**Version:** 2.0

**Date:** November 30, 2025

**Project Duration:** November 1, 2025 - December 10, 2025

---

## Document Change History

| Version | Date       | Contributor    | Description                                                                                                                         |
| ------- | ---------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1.0     | 01/11/2025 | Buggilies Team | Initial test plan creation                                                                                                          |
| 2.0     | 30/11/2025 | Buggilies Team | Revised testing strategy: removed frontend unit/integration tests, updated E2E approach with Playwright, updated HPA configurations |

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

- Ensure critical user workflows function correctly (login, product viewing, cart operations)
- Achieve minimum code coverage: Backend 40% (unit + integration combined)
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

**Backend (White-box Testing):**

| Module        | Functions                                                                                       | Test Levels       |
| ------------- | ----------------------------------------------------------------------------------------------- | ----------------- |
| **Attribute** | - Create Attribute<br>- Update Attribute<br>- Delete Attribute<br>- List Attributes             | Unit, Integration |
| **Product**   | - Create Product<br>- Update Product<br>- Delete Product<br>- List Products<br>- Search Product | Unit, Integration |

**End-to-End System Testing (Black-box Testing):**

| Module              | Functions                                                                                     | Test Level |
| ------------------- | --------------------------------------------------------------------------------------------- | ---------- |
| **ManageAccount**   | - Sign Up<br>- Sign In<br>- Sign Out                                                          | E2E        |
| **ManageAttribute** | - Attribute CRUD operations                                                                   | E2E        |
| **View Product**    | - Browse Products<br>- View Product Details<br>- Search Product                               | E2E        |
| **Manage Product**  | - Add Product<br>- Update Product<br>- Delete Product                                         | E2E        |
| **Manage Cart**     | - Add Product to Cart<br>- Change Product Amount<br>- Remove Product from Cart<br>- View Cart | E2E        |

#### Test Types

1. **Unit Testing**
   - Backend only: Go built-in testing tool with testify
   - Coverage: Combined with integration tests for 40% target
   - Approach: White-box testing focusing on business logic

2. **Integration Testing**
   - Backend only: Go testing + Testcontainers
   - Focus: Application layer (use cases/services) in Domain-Driven Design + Clean Architecture
   - Tests CRUD operations at the application layer, not HTTP controllers
   - Coverage: Combined with unit tests for 40% target

3. **End-to-End Testing (System Testing)**
   - Tool: Playwright (separate repository from frontend)
   - Approach: Black-box testing
   - Execution: Against Kubernetes deployment environment (local dev and CI)
   - Critical User Journeys:
     - User registration and login flow
     - Attribute management workflow
     - Product browsing and viewing
     - Product management workflow
     - Cart operations

4. **Performance Testing**
   - Tool: Grafana k6 (manual execution)
   - Endpoints: Home view, product search
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
- Payment gateway integration testing (hard to test)
- Disaster recovery testing
- Data migration testing
- Frontend HPA scaling validation (mentioned but not tested)

---

## Test Approach

### Test Levels

#### Unit Testing

**Purpose:** Verify individual functions, methods, and business logic in isolation.

**Approach:**

- **Backend (Go):**
  - Use Go's built-in `testing` package with `testify/assert`
  - Table-driven tests for comprehensive input coverage
  - Parallel test execution with `t.Parallel()`
  - Mock external dependencies using interfaces
  - White-box testing approach
  - Focus on Attribute and Product domain logic

**Execution:**

- Triggered on every `git push` related to Go code
- Run in parallel across OS matrix: Ubuntu, Windows, macOS
- CI caching enabled for dependencies

#### Integration Testing

**Purpose:** Validate interactions between application layer components and external dependencies.

**Approach:**

- **Backend (Go + Testcontainers):**
  - Spin up ephemeral PostgreSQL, Redis, Keycloak containers
  - Seed database with test fixtures
  - Test application layer (use cases/services) directly
  - Does NOT test HTTP controller layer
  - Group tests using `testify/suite`
  - White-box testing approach
  - Focus on Attribute and Product CRUD operations

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
  - View Product
  - Manage Product
  - Manage Cart

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
  1. **Home view load test**
     - Gradual ramp-up: 0 → 500 virtual users over 2 minutes
     - Sustained load: 500 VUs for 5 minutes
     - Ramp-down: 500 → 0 over 1 minute
     - Metrics: Response time (p95, p99), throughput, error rate

  2. **Product search load test**
     - Simulate realistic search queries
     - Mixed load: 200 VUs for product listing + 300 VUs for search
     - Duration: 5 minutes sustained
     - Metrics: Search response time, database query performance

  3. **Backend Horizontal Pod Autoscaling (HPA) test**
     - **Backend HPA Configuration:**
       - Min replicas: 1
       - Max replicas: 3
       - Target CPU utilization: 70%
       - Target Memory utilization: 80%
     - **Frontend HPA Configuration (mentioned only, not tested):**
       - Min replicas: 1
       - Max replicas: 2
       - Target CPU utilization: 70%
       - Target Memory utilization: 70%
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

| Test Level    | Tool                    | Trigger              | Coverage Target        | Pass Criteria                             |
| ------------- | ----------------------- | -------------------- | ---------------------- | ----------------------------------------- |
| Unit          | Go test, testify        | Every push (Go code) | Combined 40% (backend) | All tests pass                            |
| Integration   | Go + Testcontainers     | Every push (Go code) | Combined 40% (backend) | All tests pass                            |
| E2E           | Playwright              | Manual trigger       | Key user journeys      | All critical flows pass                   |
| Compatibility | Playwright              | Manual trigger       | 3 browsers             | Tests pass on all browsers                |
| Performance   | Grafana k6              | Manual               | Home, Search           | p95 < 1s, 500 req/s, HPA scales correctly |
| Regression    | Backend automated tests | Every push (Go code) | All backend            | All tests pass                            |

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
  - Database seeded with test fixtures
  - Testcontainers recreates clean database per test suite
  - Sample attributes and products defined in fixtures

**E2E Test Data:**

- Test users created via API before test run
- Products and attributes pre-seeded in dev database
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

| Date      | Activity                                  | Owner                                         | Deliverable                      |
| --------- | ----------------------------------------- | --------------------------------------------- | -------------------------------- |
| Nov 1     | Setup CI workflows for backend            | Trần Nguyễn Thái Bình                         | `.github/workflows/backend.yml`  |
| Nov 2     | Setup Playwright repository               | Trần Nguyễn Thái Bình                         | E2E test repository initialized  |
| Nov 3-5   | Configure Codecov integration             | Trần Nguyễn Thái Bình                         | Codecov badges on README         |
| Nov 6-8   | Write unit tests for Attribute (backend)  | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | Tests for attribute domain logic |
| Nov 9-11  | Write unit tests for Product (backend)    | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | Tests for product domain logic   |
| Nov 12-15 | Setup Playwright framework and base tests | Trần Nguyễn Duy Minh, Đào Duy Vinh            | Playwright config, Page Objects  |

#### Week 3-4: November 16-30

| Date      | Activity                                         | Owner                                         | Deliverable                      |
| --------- | ------------------------------------------------ | --------------------------------------------- | -------------------------------- |
| Nov 16-18 | Setup Testcontainers for integration tests       | Trần Nguyễn Thái Bình                         | Integration test suite skeleton  |
| Nov 19-20 | Write integration tests for Attribute            | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | Attribute CRUD integration tests |
| Nov 21-23 | Write integration tests for Product              | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | Product CRUD integration tests   |
| Nov 24-25 | Write E2E tests for ManageAccount                | Trần Nguyễn Duy Minh, Đào Duy Vinh            | Auth flow E2E tests              |
| Nov 26-27 | Write E2E tests for ManageAttribute              | Trần Nguyễn Duy Minh, Đào Duy Vinh            | Attribute management E2E tests   |
| Nov 28-29 | Write E2E tests for View Product, Manage Product | Trần Nguyễn Duy Minh, Đào Duy Vinh            | Product E2E tests                |
| Nov 30    | Write E2E tests for Manage Cart                  | Trần Nguyễn Duy Minh, Đào Duy Vinh            | Cart E2E tests                   |

#### Week 5-6: December 1-10

| Date     | Activity                                    | Owner                 | Deliverable                                   |
| -------- | ------------------------------------------- | --------------------- | --------------------------------------------- |
| Dec 1    | Write k6 performance test scripts           | Trần Nguyễn Thái Bình | Load test scripts                             |
| Dec 2    | Configure HPA for backend deployment        | Trần Nguyễn Thái Bình | HPA manifest and metrics server setup         |
| Dec 3    | Execute k6 tests and HPA scaling validation | Trần Nguyễn Thái Bình | Performance test report, HPA scaling evidence |
| Dec 4-6  | Review test coverage, fix gaps              | All team              | Coverage meets 40% target                     |
| Dec 7-8  | Generate test summary report                | Trần Nguyễn Thái Bình | HTML/PDF test report                          |
| Dec 9-10 | Final documentation and submission          | All team              | Complete test deliverables                    |

### Milestone Checklist

- [ ] **Nov 5:** CI pipelines operational with backend tests running
- [ ] **Nov 15:** Backend unit tests written for Attribute and Product
- [ ] **Nov 23:** Backend integration tests passing for Attribute and Product
- [ ] **Nov 30:** E2E tests passing for all critical user journeys
- [ ] **Dec 3:** Performance test results documented, HPA scaling validated
- [ ] **Dec 10:** Test summary report completed and submitted

---

## Resources and Responsibilities

### Team Structure

| Team Member            | Role                               | User ID  | Responsibilities                                                                                             |
| ---------------------- | ---------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| Trần Nguyễn Thái Bình  | Project Owner, Backend Dev, DevOps | 23520161 | - Backend unit/integration tests<br>- CI/CD pipeline setup<br>- Performance testing<br>- Test infrastructure |
| Nguyễn Thái Gia Nguyễn | Project Owner, Backend Dev         | 23521049 | - Backend unit/integration tests<br>- Test data fixtures                                                     |
| Trần Nguyễn Duy Minh   | Frontend Dev                       | 23520956 | - Playwright E2E tests<br>- Page Object Models                                                               |
| Đào Duy Vinh           | Frontend Dev                       | 23521787 | - Playwright E2E tests<br>- Browser compatibility testing                                                    |

### Responsibility Matrix

| Task                          | Owner              | Reviewer                | Notes                         |
| ----------------------------- | ------------------ | ----------------------- | ----------------------------- |
| **Backend Unit Tests**        | 23520161, 23521049 | Self-review in dev team | Each dev reviews other's code |
| **Backend Integration Tests** | 23520161, 23521049 | Self-review in dev team | Testcontainers setup          |
| **Playwright E2E Tests**      | 23520956, 23521787 | All team members        | Collaborative review          |
| **Performance Tests**         | 23520161           |                         | Manual execution              |
| **CI/CD Configuration**       | 23520161           |                         | GitHub Actions workflows      |
| **Test Documentation**        | 23520161           | All team members        | Test plan, summary report     |
| **Code Coverage Monitoring**  | 23520161           | All team members        | Codecov integration           |

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
| **Test Summary Report**      | HTML/PDF          |                                              | 23520161            |
| **Code Coverage Reports**    | HTML, JSON        | Codecov dashboard                            | Automated (Codecov) |
| **Performance Test Results** | HTML, Screenshots | `tests/k6/reports/`                          | 23520161            |
| **E2E Test Reports**         | HTML              | Playwright HTML Report (GH Actions artifact) | 23520956, 23521787  |

### Test Summary Report

- Artifacts from CI outputs and Codecov
- Screenshots captured during test execution
- PDF of summary report

### Evidence Collection

**Required Screenshots:**

1. GitHub Actions CI job summary (backend unit + integration tests passing)
2. Codecov dashboard showing backend coverage percentage
3. Playwright HTML report showing browser matrix (Chromium, Firefox, WebKit)
4. k6 performance test output (terminal + HTML report)
5. Kubernetes HPA events showing scale-up and scale-down (backend only)
6. Grafana dashboard during load test (CPU, Memory, pods, response times)
7. Sample E2E test video (1-2 critical flows)

---

## Test Metrics

### Key Performance Indicators

| Metric                               | Target                                    | Measurement Method      |
| ------------------------------------ | ----------------------------------------- | ----------------------- |
| **Backend Code Coverage**            | >= 40% (unit + integration)               | Codecov                 |
| **Backend Unit Test Pass Rate**      | 100%                                      | CI job status           |
| **Integration Test Pass Rate**       | 100%                                      | CI job status           |
| **E2E Test Pass Rate**               | 100% (critical paths)                     | Playwright report       |
| **Browser Compatibility**            | 100% pass on Chromium, Firefox, WebKit    | Playwright projects     |
| **API Response Time (p95)**          | < 1 second                                | k6 metrics              |
| **System Throughput**                | >= 500 req/s                              | k6 metrics              |
| **Backend HPA Scale-up Time**        | < 2 minutes to add pods                   | Kubernetes events       |
| **Backend HPA Scale-down Stability** | No thrashing (stable 5min cool-down)      | Kubernetes HPA logs     |
| **Backend Pod CPU Utilization**      | Balanced across replicas (variance < 20%) | Prometheus/Grafana      |
| **CI Pipeline Duration**             | < 15 minutes (unit+integration)           | GitHub Actions insights |
| **Test Execution Frequency**         | Every commit (Go code)                    | CI trigger logs         |

### Test Execution Metrics

**Tracked in GitHub Actions:**

- Total test count per test level
- Test execution duration

**Reporting:**

- Included in final test summary report

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

4. **Test Data:**
   - Dev database can be seeded with representative data
   - No need for extensive data cleanup between test runs
   - Test users won't conflict with production (none exists)

5. **External Services:**
   - Keycloak authentication service is stable
   - Redis caching is stable
   - MinIO S3 storage compatible is stable
   - No breaking changes in third-party libraries during testing period

### Risks and Mitigation

| Risk                               | Impact                           | Probability | Mitigation Strategy                                                                                     |
| ---------------------------------- | -------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| **Testcontainers fails on CI**     | High (blocks integration tests)  | Low         | - Test locally first<br>- Use Docker Compose fallback<br>- Document manual testing steps                |
| **Kubernetes cluster downtime**    | High (blocks E2E and deployment) | Low         | - Schedule maintenance windows<br>- Keep local Docker setup as backup<br>- Document recovery steps      |
| **Backend HPA not triggering**     | Medium (performance test fails)  | Medium      | - Test HPA manually before k6 run<br>- Verify metrics server working<br>- Lower CPU threshold if needed |
| **Browser compatibility failures** | Low (limited browser support)    | Low         | - Focus on Chromium as primary<br>- Manual fallback testing                                             |
| **Time constraints**               | Medium (reduced coverage)        | Medium      | - Prioritize critical paths<br>- Focus on high-value tests<br>- Document out-of-scope items             |
| **CI pipeline timeouts**           | Medium (delays feedback)         | Medium      | - Optimize test parallelization<br>- Use CI caching effectively<br>- Split long test suites             |
| **Flaky E2E tests**                | Medium (false failures)          | High        | - Use Playwright auto-wait<br>- Add explicit waits where needed<br>- Retry failed tests (max 2)         |
| **Team member unavailability**     | Medium (delays schedule)         | Low         | - Cross-train on test areas<br>- Document test approaches<br>- Re-prioritize tasks                      |

### Contingency Plans

**If Backend Test Coverage Falls Short:**

- Prioritize testing critical business logic (Attribute and Product CRUD)
- Document untested edge cases for future work
- Focus on happy path coverage first

**If Integration Tests Cannot Use Testcontainers:**

- Use Docker Compose for local integration testing
- Document manual setup steps for CI
- Consider mocking database layer as fallback

**If E2E Tests Are Too Flaky:**

- Reduce E2E test count to 3-5 most critical paths
- Increase timeout values for slower environments
- Allow manual E2E validation as acceptable

**If CI Pipeline Exceeds Time Limits:**

- Split tests into multiple parallel jobs
- Reduce OS matrix (focus on Linux)
- Cache more aggressively

**If Schedule Slips:**

- Week 1-2: Focus on backend unit tests
- Week 3: Reduce integration test scenarios
- Week 4: Accept lower E2E coverage, document gaps

---

## Appendix

### Sample Test Cases

#### Backend Unit Test Examples (White-box)

- **Attribute Domain Test:**
  - Test attribute name validation (valid/invalid formats)
  - Test attribute creation with required fields
  - Test attribute update validation
  - Test edge cases (empty strings, special characters, duplicates)

- **Product Domain Test:**
  - Test product creation with required fields
  - Test product price validation (positive values only)
  - Test product-attribute relationship
  - Test product search logic
  - Test edge cases (zero quantity, negative prices)

#### Backend Integration Test Examples (White-box)

- **Attribute Application Layer Test:**
  - CreateAttribute use case persists attribute to database
  - CreateAttribute rejects duplicate attribute names
  - UpdateAttribute modifies existing attribute
  - DeleteAttribute removes attribute from database
  - ListAttributes returns paginated results

- **Product Application Layer Test:**
  - CreateProduct use case persists product with attributes
  - CreateProduct validates attribute references exist
  - UpdateProduct modifies existing product
  - DeleteProduct removes product from database
  - SearchProduct returns matching results

#### E2E Test Examples (Black-box)

- **ManageAccount - User Registration and Login:**
  1. Navigate to signup page
  2. Fill registration form with valid data
  3. Submit form and verify redirect to home
  4. Verify welcome message displays user name
  5. Logout and verify redirect to login
  6. Login with same credentials
  7. Verify successful authentication

- **ManageAttribute - Attribute CRUD Flow:**
  1. Login as admin user
  2. Navigate to attribute management page
  3. Create new attribute
  4. Verify attribute appears in list
  5. Edit attribute name
  6. Verify update is reflected
  7. Delete attribute
  8. Verify attribute is removed

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

#### Compatibility Test Examples

- **Browser Compatibility Test:**
  - Run login flow on Chromium, Firefox, WebKit
  - Verify CSS rendering consistency (button styles, layouts)
  - Test form validation across browsers
  - Verify cookie/localStorage behavior
  - Test file upload functionality on each browser

#### Performance Test Examples

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
| **Black-box Testing**  | Testing approach where internal implementation is unknown; tests based on requirements          |
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
| **Project Owner / Backend Lead** | Nguyễn Thái Gia Nguyễn | 23521049 | 23521049@gm.uit.edu.vn | Backend testing, code reviews                |
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

### Test Execution Checklist

**Pre-Testing Phase (Nov 1-5):**

- [ ] All team members have reviewed test plan
- [ ] CI/CD pipelines configured in GitHub Actions for backend
- [ ] Codecov integration set up for backend
- [ ] Test data fixtures prepared
- [ ] Testcontainers working on local machines
- [ ] Playwright repository initialized and configured
- [ ] Dev Kubernetes environment stable and accessible
- [ ] Database seeded with initial test data

**During Testing Phase (Nov 6 - Dec 3):**

- [ ] Backend unit tests written for Attribute and Product
- [ ] Backend integration tests cover application layer CRUD operations
- [ ] E2E tests validate key user journeys (ManageAccount, ManageAttribute, View Product, Manage Product, Manage Cart)
- [ ] All backend tests passing in CI before merge
- [ ] Backend code coverage meets 40% target
- [ ] Performance tests executed manually
- [ ] Backend HPA scaling validated
- [ ] Test failures investigated and fixed within 24 hours
- [ ] Codecov badge updated on README

**Post-Testing Phase (Dec 4-10):**

- [ ] All test code committed to repositories
- [ ] CI/CD workflows functioning correctly
- [ ] Test summary report generated
- [ ] Evidence screenshots collected
- [ ] Backend code coverage meets 40% target
- [ ] Performance test results documented
- [ ] HPA scaling evidence documented
- [ ] Known issues documented in report
- [ ] Final code review completed
- [ ] Documentation updated
- [ ] Test deliverables ready for submission

---

## Conclusion

This test plan provides a comprehensive yet pragmatic approach to testing the Electricilies e-commerce platform within the constraints of a university project. The plan balances academic rigor with practical considerations such as limited time (40 days), small team size (4 members), and resource constraints.

### Key Success Factors

1. **Automated Testing Pipeline:** CI/CD integration ensures backend tests run consistently on every commit related to Go code, preventing regression bugs.

2. **Appropriate Coverage Targets:** Backend 40% coverage (unit + integration combined) is an achievable yet meaningful target that focuses on critical business logic.

3. **Clear Testing Approach:** White-box testing for backend (unit + integration) and black-box testing for E2E provides comprehensive coverage with appropriate techniques.

4. **Practical Tooling:** Using industry-standard tools (Playwright, Go testing, Testcontainers) with good CI support reduces setup friction.

5. **Clear Responsibilities:** Backend team focuses on white-box testing while frontend team focuses on Playwright E2E tests, enabling parallel work.

### Expected Outcomes

By following this test plan, the team will achieve:

- **Quality Assurance:** Critical functionalities (Attribute, Product, Account, Cart) validated through automated tests
- **Confidence in Changes:** Regression testing prevents breaking existing features
- **Documentation:** Test code serves as executable documentation of expected behavior
- **Learning Experience:** Hands-on experience with professional testing practices and tools
- **Measurable Results:** Code coverage metrics and test pass rates provide objective quality indicators

### Beyond the Project

While this test plan is scoped for the December 2025 deadline, the testing infrastructure established will provide ongoing value:

- **Maintainability:** Future features can be tested using the same framework
- **Scalability:** Test suite can grow as the application evolves
- **Best Practices:** Team gains practical testing skills applicable to industry projects
- **Portfolio Quality:** Well-tested code demonstrates professional software development practices

### Final Notes

**Remember:** The goal is not 100% coverage or exhaustive testing of every edge case. For a university project, the focus should be on:

1. Testing what matters (critical user workflows)
2. Demonstrating understanding of testing principles
3. Building maintainable test code
4. Automating repetitive testing tasks
5. Learning industry-standard tools and practices

**Success is measured by:** Delivering a functional, reasonably well-tested application that meets the core requirements, supported by automated tests that provide confidence in the codebase.
