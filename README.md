# Week 6 Assignment - Testing and Debugging for MERN Application

## Task Overview

This project focuses on implementing comprehensive testing strategies and debugging techniques for a MERN stack application. The main objectives include:

- Setting up testing environments for both client and server using Jest, React Testing Library, Supertest, and Cypress.
- Writing unit tests for utility functions, React components, middleware, Redux reducers/actions, and custom hooks.
- Creating integration tests for API endpoints and database operations.
- Developing end-to-end tests for critical user flows such as registration, login, CRUD operations, navigation, and error handling.
- Implementing debugging techniques including global error handling middleware on the server, React error boundaries on the client, logging strategies, and performance monitoring.
- Ensuring high code coverage and application reliability through thorough testing.

## Project Structure

- `client/`: Contains React client application, components, and client-side tests.
- `server/`: Contains Express server, API endpoints, middleware, and server-side tests.
- Testing scripts and dependencies are configured in both client and server package.json files.
- Test database setup script included for integration testing.

## How to Run Tests

- Use the provided npm scripts in the client and server directories to run unit, integration, and end-to-end tests.
- Example commands:
  - `pnpm --filter ./client test`
  - `pnpm --filter ./server test`
  - `pnpm --filter ./client test:e2e` (for Cypress tests)

## Debugging

- Global error handler middleware is implemented on the server.
- React error boundaries are implemented on the client.
- Additional debugging tools and strategies can be added as needed.

This setup aims to improve the reliability, stability, and maintainability of the MERN application through effective testing and debugging practices.
