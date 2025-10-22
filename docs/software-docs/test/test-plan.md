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

**Version:** 1.0

**Date:** November 1, 2025

**Project Duration:** November 1, 2025 - December 10, 2025

---

## Document Change History

| Version | Date       | Contributor    | Description                |
| ------- | ---------- | -------------- | -------------------------- |
| 1.0     | 01/11/2025 | Buggilies Team | Initial test plan creation |

---

## Introduction

### Purpose

This test plan defines the testing strategy, approach, resources, and schedule for the Electricilies e-commerce platform. As a university project with limited time and resources, this plan focuses on critical functionalities while maintaining practical testing standards suitable for academic evaluation.

### Project Overview

**Project Name:** Electricilies - Website for Selling Electronic Products

**Testing Period:** November 1, 2025 - December 10, 2025 (40 days)

### Objectives

**Primary Objectives:**

- Ensure critical user workflows function correctly (login, product viewing, cart operations)
- Achieve minimum code coverage: Backend 50% (threshold 20%), Frontend 30% (threshold 20%)
- Validate system stability under expected load conditions
- Establish automated testing pipeline for continuous quality assurance

**Secondary Objectives:**

- Identify and document system bottlenecks through performance testing
- Ensure cross-platform compatibility (Linux, Windows, macOS)
- Maintain test documentation for future project iterations

---

## Test Scope

### In Scope

#### Functional Modules

**Note:** Unit tests can be extended to cover additional modules beyond those listed. Integration and E2E tests are restricted to the modules specified below.

| Module              | Functions                                                                                     | Test Levels            |
| ------------------- | --------------------------------------------------------------------------------------------- | ---------------------- |
| **Manage Account**  | - Sign Up<br>- Sign In<br>- Sign Out                                                          | Unit, Integration, E2E |
| **Manage Cart**     | - Add Product to Cart<br>- Change Product Amount<br>- Remove Product from Cart<br>- View Cart | Unit, Integration, E2E |
| **Contact Support** | - Redirect to Facebook page                                                                   | Unit, E2E              |
| **Manage Product**  | - Search Product<br>- Add Product<br>- Update Product<br>- Delete Product<br>- Delete Review  | Unit, Integration      |

#### Test Types

1. **Unit Testing**
   - Backend: Go built-in testing tool
   - Frontend: Vitest
   - Coverage: Backend 50%, Frontend 30%

2. **Integration Testing**
   - Backend: Go testing + Testcontainers
   - Frontend: Vitest + MSW
   - Focus: API endpoints, database operations, service interactions

3. **End-to-End Testing**
   - Tool: Playwright
   - Critical User Journeys:
     - User registration and login flow
     - Product browsing and cart operations
     - Staff product management workflow

4. **Performance Testing**
   - Tool: Grafana k6 (manual execution)
   - Endpoints: Home view, product search
   - Target: Max 1s response time, 500 requests/second

5. **Regression Testing**
   - Automated re-execution of all unit and integration tests on every commit
   - CI pipeline validation

### Out of Scope

- User Acceptance Testing (no real stakeholders)
- Security penetration testing
- Browser compatibility testing (covered by Playwright)
- Mobile responsive testing
- Payment gateway integration testing (hard to test)
- Disaster recovery testing
- Data migration testing

---

## Test Approach

### Test Levels

#### Unit Testing

**Purpose:** Verify individual functions, methods, and components in isolation.

**Approach:**

- **Backend (Go):**
  - Use Go's built-in `testing` package with `testify/assert`
  - Table-driven tests for comprehensive input coverage
  - Parallel test execution with `t.Parallel()`
  - Mock external dependencies using interfaces

- **Frontend (Vitest):**
  - Test React components with React Testing Library
  - Test utility functions and hooks
  - Mock API calls and external dependencies

**Execution:**

- Triggered on every `git push` to main and pull request
- Run in parallel across OS matrix: Ubuntu, Windows, macOS
- Architecture matrix: AMD64, ARM64
- CI caching enabled for dependencies

#### Integration Testing

**Purpose:** Validate interactions between components, services, and external dependencies.

**Approach:**

- **Backend (Go + Testcontainers):**
  - Spin up ephemeral PostgreSQL, Redis, Keycloak containers
  - Seed database with test fixtures
  - Test API endpoints with real dependencies
  - Group tests using `testify/suite`

- **Frontend (Vitest + MSW):**
  - Mock API responses with Mock Service Worker
  - Test API integration and error handling
  - Test state management with API interactions

**Execution:**

- Triggered on every `git push` and pull request
- Run on Ubuntu (Linux only for Testcontainers)
- Separate CI job after unit tests pass

#### End-to-End Testing

**Purpose:** Validate complete user workflows from UI to database.

**Approach:**

- **Tool:** Playwright
- **Test Organization:**
  - Critical user journeys as separate test files
  - Page Object Model for maintainability
  - Test fixtures for authentication state

**Execution:**

- Triggered after successful deployment to Kubernetes dev environment
- Run via GitHub Actions workflow dispatch or post-deployment hook
- Generate video recordings and screenshots on failure
- Upload Playwright HTML report as artifact

#### Performance Testing

**Purpose:** Validate system performance under expected load.

**Approach:**

- **Tool:** Grafana k6
- **Test Scenarios:**
  1. Home view load test
  2. Product search load test

**Execution:**

- Manual execution via command line
- Run against Kubernetes dev environment
- Generate HTML report and screenshots for documentation
- Not integrated in CI pipeline (resource constraints)

#### Regression Testing

**Purpose:** Ensure new changes don't break existing functionality.

**Approach:**

- Automated re-execution of all unit and integration tests on every commit
- CI pipeline blocks merge if tests fail
- No separate test suite—uses existing unit and integration tests

**Execution:**

- Runs automatically as part of CI pipeline
- Results visible in GitHub Actions job summary
- Code coverage regression tracked via Codecov

### Test Strategy Summary

| Test Level  | Tool                              | Trigger                    | Coverage Target             | Pass Criteria                            |
| ----------- | --------------------------------- | -------------------------- | --------------------------- | ---------------------------------------- |
| Unit        | Go test, Vitest                   | Every push/PR              | Backend: 50%, Frontend: 30% | All tests pass, coverage above threshold |
| Integration | Go + Testcontainers, Vitest + MSW | Every push/PR (after unit) | Critical paths              | All tests pass                           |
| E2E         | Playwright                        | Post-deployment            | Key user journeys           | All critical flows pass                  |
| Performance | Grafana k6                        | Manual                     | Home, Search                | p95 < 1s, 500 req/s                      |
| Regression  | All automated tests               | Every push/PR              | All                         | All tests pass                           |

---

## Test Environment

### Development Environment

**Local Development:**

- OS: Developer's choice (Windows, macOS, Linux)
- Local Kubernetes: Minikube or Docker Desktop (optional)

**Test Execution:**

- Unit tests: Local machine
- Integration tests: Docker with Testcontainers
- E2E tests: Against local Next.js dev server or deployed dev environment

### CI/CD Environment

**GitHub Actions Runners:**

- **Unit Tests:** GitHub-hosted runners
  - OS Matrix: linux, windows, macos
  - Arch Matrix: AMD64, ARM64 (where supported)
- **Integration Tests:** linux (Testcontainers requirement)
- **E2E Tests:** linux with Playwright dependencies

**Caching Strategy:**

- Go modules: `actions/cache` with `go.sum` key
- Node modules: `actions/setup-node` with built-in cache
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

**Monitoring Stack:**

- Prometheus: Metrics collection
- Grafana: Visualization and dashboards
- Loki: Log aggregation

**Deployment Strategy:**

- GitOps with FluxCD
- Automatic deployment on manual trigger
- E2E tests triggered via webhook after successful deployment

### Test Data Management

**Backend Test Data:**

- **Unit Tests:** Mock data in test files
- **Integration Tests:**
  - Database seeded
  - Testcontainers recreates clean database per test suite
  - Sample products, users, orders defined in fixtures

**Frontend Test Data:**

- **Unit Tests:** Mock objects in test files
- **Integration Tests:** MSW handlers with predefined responses
- **E2E Tests:**
  - Test users created via API before test run
  - Products pre-seeded in dev database
  - No cleanup

---

## Test Schedule

### Timeline Overview

- **Total Duration:** 40 days (November 1 - December 10, 2025)
- **Resource Allocation:** ~2 hours/day per team member

| Phase                            | Duration | Dates     | Activities                                  |
| -------------------------------- | -------- | --------- | ------------------------------------------- |
| **Phase 1: Setup**               | 5 days   | Nov 1-5   | Test infrastructure setup, CI configuration |
| **Phase 2: Unit Testing**        | 10 days  | Nov 6-15  | Write and execute unit tests                |
| **Phase 3: Integration Testing** | 8 days   | Nov 16-23 | Write and execute integration tests         |
| **Phase 4: E2E Testing**         | 7 days   | Nov 24-30 | Write and execute E2E tests                 |
| **Phase 5: Performance Testing** | 3 days   | Dec 1-3   | Execute k6 load tests                       |
| **Phase 6: Finalization**        | 7 days   | Dec 4-10  | Bug fixes, documentation, report generation |

### Detailed Schedule

#### Week 1-2: November 1-15

| Date      | Activity                                       | Owner                                         | Deliverable                           |
| --------- | ---------------------------------------------- | --------------------------------------------- | ------------------------------------- |
| Nov 1     | Setup CI workflows for backend                 | Trần Nguyễn Thái Bình                         | `.github/workflows/backend.yml`       |
| Nov 2     | Setup CI workflows for frontend                | Trần Nguyễn Thái Bình                         | `.github/workflows/frontend.yml`      |
| Nov 3-5   | Configure Codecov integration                  | Trần Nguyễn Thái Bình                         | Codecov badges on README              |
| Nov 6-8   | Write unit tests for Manage Account (backend)  | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | Tests for signup, login, logout logic |
| Nov 9-11  | Write unit tests for Manage Account (frontend) | Trần Nguyễn Duy Minh, Đào Duy Vinh            | Tests for auth components             |
| Nov 12-13 | Write unit tests for Manage Cart (backend)     | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | Tests for cart operations             |
| Nov 14-15 | Write unit tests for Manage Cart (frontend)    | Trần Nguyễn Duy Minh, Đào Duy Vinh            | Tests for cart components             |

#### Week 3-4: November 16-30

| Date      | Activity                                   | Owner                                         | Deliverable                      |
| --------- | ------------------------------------------ | --------------------------------------------- | -------------------------------- |
| Nov 16-18 | Setup Testcontainers for integration tests | Trần Nguyễn Thái Bình                         | Integration test suite skeleton  |
| Nov 19-20 | Write integration tests for auth endpoints | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | API integration tests            |
| Nov 21-23 | Write integration tests for cart endpoints | Trần Nguyễn Thái Bình, Nguyễn Thái Gia Nguyễn | Cart API integration tests       |
| Nov 24-25 | Setup Playwright E2E framework             | Trần Nguyễn Thái Bình                         | Playwright config and base tests |
| Nov 26-28 | Write E2E tests for auth and cart flows    | Trần Nguyễn Thái Bình, Trần Nguyễn Duy Minh   | Critical user journey tests      |
| Nov 29-30 | Write E2E tests for product and support    | Trần Nguyễn Thái Bình, Trần Nguyễn Duy Minh   | Remaining E2E scenarios          |

#### Week 5-6: December 1-10

| Date     | Activity                             | Owner                 | Deliverable                           |
| -------- | ------------------------------------ | --------------------- | ------------------------------------- |
| Dec 1-2  | Write k6 performance test scripts    | Trần Nguyễn Thái Bình | Load test scripts                     |
| Dec 3    | Execute k6 tests and capture results | Trần Nguyễn Thái Bình | Performance test report (screenshots) |
| Dec 4-6  | Review test coverage, fix gaps       | All team              | Coverage > thresholds                 |
| Dec 7-8  | Generate test summary report         | Trần Nguyễn Thái Bình | HTML/PDF test report                  |
| Dec 9-10 | Final documentation and submission   | All team              | Complete test deliverables            |

### Milestone Checklist

- [ ] **Nov 5:** CI pipelines operational with unit tests running
- [ ] **Nov 15:** Unit test coverage meets minimum thresholds (20% backend, 20% frontend)
- [ ] **Nov 23:** Integration tests passing for critical paths
- [ ] **Nov 30:** E2E tests passing for all critical user journeys
- [ ] **Dec 3:** Performance test results documented
- [ ] **Dec 10:** Test summary report completed and submitted

---

## Resources and Responsibilities

### Team Structure

| Team Member            | Role                               | User ID  | Responsibilities                                                                                                                     |
| ---------------------- | ---------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Trần Nguyễn Thái Bình  | Project Owner, Backend Dev, DevOps | 23520161 | - Backend unit/integration tests<br>- CI/CD pipeline setup<br>- E2E test framework<br>- Performance testing<br>- Test infrastructure |
| Nguyễn Thái Gia Nguyễn | Project Owner, Backend Dev         | 23521049 | - Backend unit/integration tests<br>- API testing<br>- Test data fixtures                                                            |
| Trần Nguyễn Duy Minh   | Frontend Dev                       | 23520956 | - Frontend unit tests<br>- E2E tests (co-author)<br>- Component testing                                                              |
| Đào Duy Vinh           | Frontend Dev                       | 23521787 | - Frontend unit tests<br>- Integration testing with MSW<br>- UI component testing                                                    |

### Responsibility Matrix

| Task                           | Owner              | Reviewer                | Notes                         |
| ------------------------------ | ------------------ | ----------------------- | ----------------------------- |
| **Backend Unit Tests**         | 23520161, 23521049 | Self-review in dev team | Each dev reviews other's code |
| **Frontend Unit Tests**        | 23520956, 23521787 | Self-review in dev team | Each dev reviews other's code |
| **Backend Integration Tests**  | 23520161, 23521049 | Self-review in dev team | Testcontainers setup          |
| **Frontend Integration Tests** | 23520956, 23521787 | Self-review in dev team | MSW setup                     |
| **E2E Tests**                  | 23520161, 23520956 | All team members        | Collaborative review          |
| **Performance Tests**          | 23520161           |                         | Manual execution              |
| **CI/CD Configuration**        | 23520161           |                         | GitHub Actions workflows      |
| **Test Documentation**         | 23520161           | All team members        | Test plan, summary report     |
| **Code Coverage Monitoring**   | 23520161           | All team members        | Codecov integration           |

### Communication Channels

- **Daily Standups:** Facebook Message
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
| **Test Code**                | Go, TypeScript    |                                              | All developers      |
| **CI Workflows**             | YAML              | `.github/workflows/` each repo               | 23520161            |
| **Test Data Fixtures**       | Go, JSON          |                                              | All developers      |
| **Test Summary Report**      | HTML/PDF          |                                              | 23520161            |
| **Code Coverage Reports**    | HTML, JSON        | Codecov dashboard                            | Automated (Codecov) |
| **Performance Test Results** | HTML, Screenshots | `tests/k6/reports/`                          | 23520161            |
| **E2E Test Reports**         | HTML              | Playwright HTML Report (GH Actions artifact) | 23520161, 23520956  |

### Test Summary Report

- Artifacts from CI outputs and Codecov
- Screenshots captured during test execution
- PDF of summary report

### Evidence Collection

**Required Screenshots:**

1. GitHub Actions CI job summary (unit + integration tests passing)
2. Codecov dashboard showing coverage percentages
3. k6 performance test output (terminal + HTML report)
4. Playwright HTML report homepage
5. Sample E2E test video (1-2 critical flows)

---

## Test Metrics

### Key Performance Indicators

| Metric                         | Target                                                          | Measurement Method      |
| ------------------------------ | --------------------------------------------------------------- | ----------------------- |
| **Unit Test Coverage**         | Backend: ≥50% (threshold 20%)<br>Frontend: ≥30% (threshold 20%) | Codecov                 |
| **Unit Test Pass Rate**        | 100%                                                            | CI job status           |
| **Integration Test Pass Rate** | 100%                                                            | CI job status           |
| **E2E Test Pass Rate**         | 100% (critical paths)                                           | Playwright report       |
| **API Response Time (p95)**    | < 1 second                                                      | k6 metrics              |
| **System Throughput**          | ≥ 500 req/s                                                     | k6 metrics              |
| **CI Pipeline Duration**       | < 15 minutes (unit+integration)                                 | GitHub Actions insights |
| **Defect Detection Rate**      | N/A (no baseline)                                               | Manual tracking         |
| **Test Execution Frequency**   | Every commit                                                    | CI trigger logs         |

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
   - Team members have necessary skills (Go, React, Playwright)

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

| Risk                               | Impact                           | Probability | Mitigation Strategy                                                                                |
| ---------------------------------- | -------------------------------- | ----------- | -------------------------------------------------------------------------------------------------- |
| **Testcontainers fails on CI**     | High (blocks integration tests)  | Low         | - Test locally first<br>- Use Docker Compose fallback<br>- Document manual testing steps           |
| **Kubernetes cluster downtime**    | High (blocks E2E and deployment) | Low         | - Schedule maintenance windows<br>- Keep local Docker setup as backup<br>- Document recovery steps |
| **Time constraints**               | Medium (reduced coverage)        | Medium      | - Prioritize critical paths<br>- Focus on high-value tests<br>- Document out-of-scope items        |
| **CI pipeline timeouts**           | Medium (delays feedback)         | Medium      | - Optimize test parallelization<br>- Use CI caching effectively<br>- Split long test suites        |
| **Flaky E2E tests**                | Medium (false failures)          | High        | - Use Playwright auto-wait<br>- Add explicit waits where needed<br>- Retry failed tests (max 2)    |
| **Coverage drops below threshold** | Low (CI fails, but fixable)      | Low         | - Monitor coverage in PRs<br>- Require tests for new code<br>- Refactor to improve testability     |
| **Team member unavailability**     | Medium (delays schedule)         | Low         | - Cross-train on test areas<br>- Document test approaches<br>- Re-prioritize tasks                 |

### Contingency Plans

**If Unit Test Coverage Falls Short:**

- Prioritize testing critical business logic (authentication, cart, checkout)
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
- Reduce OS/architecture matrix (focus on Linux AMD64)
- Cache more aggressively

**If Schedule Slips:**

- Week 1-2: Delay E2E, focus on unit+integration
- Week 3: Reduce E2E scenarios, keep critical paths
- Week 4: Accept lower coverage, document gaps

---

## Appendix

### Sample Test Cases

#### Unit Test Examples

- **Backend - User Domain Test:**
  - Test user email validation (valid/invalid formats)
  - Test password hashing and verification
  - Test user creation with required fields
  - Test user update validation
  - Test edge cases (empty strings, special characters)

- **Frontend - LoginForm Component Test:**
  - Renders email and password input fields
  - Displays validation errors for empty fields
  - Calls onSubmit handler with form data
  - Disables submit button during loading
  - Shows error message on failed login
  - Redirects to dashboard on success

#### Integration Test Examples

- **Backend - Auth Endpoint Test:**
  - POST /auth/signup creates new user in database
  - POST /auth/signup rejects duplicate email
  - POST /auth/login returns JWT token for valid credentials
  - POST /auth/login rejects invalid credentials
  - POST /auth/logout invalidates JWT token
  - Authentication requires valid JWT in headers

- **Frontend - Cart Hook Integration Test:**
  - useCart fetches cart items from API on mount
  - addToCart sends POST request and updates state
  - removeFromCart sends DELETE request and updates state
  - updateQuantity sends PATCH request and recalculates total
  - Handles API errors gracefully with error state

#### E2E Test Examples

- **Critical User Journey 1 - New User Registration and Login:**
  1. Navigate to signup page
  2. Fill registration form with valid data
  3. Submit form and verify redirect to home
  4. Verify welcome message displays user name
  5. Logout and verify redirect to login
  6. Login with same credentials
  7. Verify successful authentication

- **Critical User Journey 2 - Product to Cart Flow:**
  1. Login as existing user
  2. Navigate to product listing page
  3. Search for "laptop" and verify results
  4. Click on product to view details
  5. Select quantity of 2
  6. Click "Add to Cart" button
  7. Verify success notification
  8. Verify cart badge shows count of 2
  9. Navigate to cart page
  10. Verify product appears with correct quantity and price
  11. Update quantity to 3
  12. Verify total price updates correctly
  13. Remove product from cart
  14. Verify cart is empty

- **Critical User Journey 3 - Staff Product Management:**
  1. Login as staff user
  2. Navigate to product management page
  3. Click "Add Product" button
  4. Fill product form with all required fields
  5. Upload product images
  6. Submit form and verify success message
  7. Search for newly created product
  8. Click edit button
  9. Modify product description
  10. Save changes and verify update
  11. Delete product and confirm
  12. Verify product no longer appears in list

### Tools and Technologies Summary

| Category                | Tool/Technology           | Purpose              |
| ----------------------- | ------------------------- | -------------------- |
| **Unit Testing**        | Go testing                | Backend unit tests   |
|                         | testify/assert            | Test assertions      |
|                         | Vitest                    | Frontend unit tests  |
|                         | React Testing Library     | Component testing    |
| **Integration Testing** | Testcontainers Go         | Ephemeral containers |
|                         | MSW (Mock Service Worker) | API mocking          |
| **E2E Testing**         | Playwright                | Browser automation   |
| **Performance Testing** | Grafana k6                | Load testing         |
| **Code Coverage**       | Go coverage               | Native coverage      |
|                         | Vitest coverage (v8)      | JS coverage          |
|                         | Codecov                   | Coverage reporting   |
| **CI/CD**               | GitHub Actions            | CI pipeline          |
| **Monitoring**          | Prometheus                | Metrics collection   |
|                         | Grafana                   | Visualization        |
|                         | Loki                      | Log aggregation      |
| **Version Control**     | Git                       | Source control       |
|                         | GitHub                    | Repository hosting   |

### Glossary

| Term                  | Definition                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| **CI/CD**             | Continuous Integration / Continuous Deployment - automated build, test, and deployment pipeline |
| **Code Coverage**     | Percentage of code executed by tests                                                            |
| **DDD**               | Domain-Driven Design - software design approach focusing on domain model                        |
| **E2E Testing**       | End-to-End Testing - testing complete user workflows from UI to database                        |
| **Flaky Test**        | Test that intermittently passes and fails without code changes                                  |
| **GitOps**            | Infrastructure and deployment managed through Git commits                                       |
| **Integration Test**  | Test that validates interaction between multiple components                                     |
| **JWT**               | JSON Web Token - authentication token format                                                    |
| **k6**                | Open-source load testing tool by Grafana                                                        |
| **MSW**               | Mock Service Worker - API mocking library for frontend tests                                    |
| **Page Object Model** | Design pattern for organizing E2E test code                                                     |
| **Playwright**        | Browser automation framework for E2E testing                                                    |
| **Regression Test**   | Re-running existing tests to ensure new changes don't break functionality                       |
| **Table-Driven Test** | Test pattern using data tables to parameterize test cases                                       |
| **Testcontainers**    | Library for creating ephemeral Docker containers in tests                                       |
| **Test Fixture**      | Predefined test data used across multiple tests                                                 |
| **Threshold**         | Minimum acceptable value for a metric (e.g., coverage threshold)                                |
| **Unit Test**         | Test that validates individual functions or components in isolation                             |
| **Vitest**            | Fast unit testing framework for Vite/Next.js projects                                           |

### References

**Testing Frameworks Documentation:**

- Go Testing: <https://pkg.go.dev/testing>
- Vitest: <https://vitest.dev/>
- Playwright: <https://playwright.dev/>
- React Testing Library: <https://testing-library.com/react>
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
| **Frontend Developer**           | Trần Nguyễn Duy Minh   | 23520956 | 23520956@gm.uit.edu.vn | Frontend testing, E2E tests                  |
| **Frontend Developer**           | Đào Duy Vinh           | 23521787 | 23521787@gm.uit.edu.vn | Frontend testing, component tests            |

**Communication Channels:**

- GitHub Issues: Bug reports and test failures
- GitHub Pull Requests: Code reviews
- Facebook Messenger: Communicate
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
- [Future revisions to be documented here]

### Test Execution Checklist

**Pre-Testing Phase (Nov 1-5):**

- [ ] All team members have reviewed test plan
- [ ] CI/CD pipelines configured in GitHub Actions
- [ ] Codecov integration set up for both repos
- [ ] Test data fixtures prepared
- [ ] Testcontainers working on local machines
- [ ] Playwright installed and configured
- [ ] Dev Kubernetes environment stable and accessible
- [ ] Database seeded with initial test data

**During Testing Phase (Nov 6 - Dec 3):**

- [ ] Unit tests written for all in-scope modules
- [ ] Integration tests cover critical API endpoints
- [ ] E2E tests validate key user journeys
- [ ] All tests passing in CI before merge
- [ ] Code coverage meets minimum thresholds
- [ ] Performance tests executed manually
- [ ] Test failures investigated and fixed within 24 hours
- [ ] Codecov badges updated on README

**Post-Testing Phase (Dec 6-10):**

- [ ] All test code committed to repositories
- [ ] CI/CD workflows functioning correctly
- [ ] Test summary report generated
- [ ] Evidence screenshots collected
- [ ] Code coverage thresholds met
- [ ] Performance test results documented
- [ ] Known issues documented in report
- [ ] Final code review completed
- [ ] Documentation updated
- [ ] Test deliverables ready for submission

---

## Conclusion

This test plan provides a comprehensive yet pragmatic approach to testing the Electricilies e-commerce platform within the constraints of a university project. The plan balances academic rigor with practical considerations such as limited time (40 days), small team size (4 members), and resource constraints.

### Key Success Factors

1. **Automated Testing Pipeline:** CI/CD integration ensures tests run consistently on every commit, preventing regression bugs.

2. **Appropriate Coverage Targets:** Backend 50% and Frontend 30% coverage are achievable yet meaningful targets that focus on critical business logic.

3. **Prioritized Test Levels:** Focus on unit and integration tests (fast feedback) with selective E2E tests (critical paths only) optimizes effort-to-value ratio.

4. **Practical Tooling:** Using industry-standard tools (Playwright, Vitest, Go testing) with good CI support reduces setup friction.

5. **Clear Responsibilities:** Each team member owns specific test areas, enabling parallel work and accountability.

### Expected Outcomes

By following this test plan, the team will achieve:

- **Quality Assurance:** Critical functionalities (authentication, cart, product management) validated through automated tests
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
