# Playwright End-to-End Automation Framework

A robust, scalable, and maintainable End-to-End Test Automation Framework built using Playwright and JavaScript (ES6+), following the Page Object Model (POM) design pattern.

## Target Application
- URL: [https://www.automationpracticehub.com/](https://www.automationpracticehub.com/)

## Framework Architecture
The project follows a standard Page Object Model structure:
- `pages/` : Page Object classes encapsulating locators and actions.
- `tests/ui/` : UI test cases.
- `tests/api/` : API test cases.
- `fixtures/` : Custom Playwright fixtures (e.g., initializing page objects).
- `testData/` : JSON and Excel test data for data-driven testing.
- `utils/` : Reusable helper functions (Excel/JSON readers, etc.).
- `config/` : Environment configurations (like `.env`).
- `screenshots/` & `reports/` : Test artifacts (HTML & Allure reports).
- `.github/workflows/` : GitHub Actions CI/CD configuration.

## Prerequisites
- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Git**

## Installation Steps
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Test Execution

### Running Specific Suites
- **Smoke Tests**: `npm run test:smoke`
- **Regression Tests**: `npm run test:regression`
- **E2E Workflows**: `npm run test:e2e`
- **Negative Tests**: `npm run test:negative`
- **API Tests**: `npm run test:api`
- **Headed Mode**: `npm run test:headed`
- **Debug Mode**: `npm run test:debug`

### Generating and Viewing Reports
**Playwright HTML Report:**
```bash
npm run report
```

**Allure Report:**
```bash
npm run allure:report
```

## Debugging Failed Tests
Playwright is configured to capture **Screenshots, Videos, and Traces** on test failure. You can view these inside the HTML report or use the Playwright UI mode:
```bash
npx playwright test --ui
```

## GitHub Actions CI/CD
The framework includes a GitHub Actions workflow `.github/workflows/playwright.yml`. It will automatically run tests on every push and pull request to the `main` branch. 
Reports (HTML & Allure) are generated and uploaded as artifacts in the pipeline.

## Features Covered
- **Page Object Model**: Clean separation of test logic and page interactions.
- **Data-Driven Testing**: Using JSON files to test multiple scenarios effectively.
- **API Testing Support**: Boilerplate to validate REST API endpoints using Playwright's `APIRequestContext`.
- **Reusable Utilities**: Helpers for File Reading and common operations.
- **Rich Reporting**: Integrated Playwright HTML and Allure Reports.
