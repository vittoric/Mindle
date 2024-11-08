<div> 
  <h1 style="font-size: 48px;">The Cube</h1>
  <img src="/readme_files/logo.png" alt="Borg Cube" style="width:200px;"/>
  <h2>The Power of Communication</h2>
</div>

[Notion](https://laser-ceder-d9d.notion.site/The-Cube-11d5f4662ac480d0828ec375fe756703)

[Trello](https://trello.com/invite/b/670aba9470a9b86de3dfa03e/ATTIdd7100019a1a68b8bdbf54705f91a93c1417170D/kanban-the-cube)

[Excalidraw](https://excalidraw.com/#json=I1oFwNo_sxPZKHEG_Fv8f,ztBUfNzdr91IlUrPmtIk4Q)

[Postman](https://planetary-satellite-124930.postman.co/collection/31213720-dc67b730-d2b0-47ab-a363-34e2dc5b0131?source=rip_markdown)

---

Tech Stack

[FastApi](https://fastapi.tiangolo.com/) - Backend

[NGINX](https://nginx.org/en/docs/) - Reverse Proxy

[Next.js](https://nextjs.org/docs) - Frontend

[Docker](https://docs.docker.com/guides/) - Containers

## 1. Overview

Welcome to **TheBorg** repository! This project is a **proof of concept** designed to demonstrate how we can efficiently manage and execute a structured software development process using Kanban workflows.

While the goal includes building a simple demo app, our primary focus is on creating a well-organized environment with established best practices for task management, documentation, and workflow structure.

This document serves as the central source of truth for our project plan, detailing team structure, project breakdown, key milestones, and communication protocols.

### Project Focus:
- **Kanban-Driven Development**: The main objective is to establish a strong and clear workflow using Kanban principles. Success will be measured by our ability to maintain proper documentation and workflow processes throughout the project's lifecycle, ensuring that new team members can easily integrate if needed.

- **Proof of Concept App**: The secondary goal is to develop a simple web application that showcases a demo of team coordination activities, with one user ("the Brain") controlling the interaction of a group of users via scripted scenarios.


### App Concept:

The app will consist of the following basic features:

- **User Login**: Authentication using either email/password or third-party OAuth (Google, GitHub, school login).

- **Scripted Demo**: The "Client" user selects a script (e.g., "Play Murder Mystery") and invites participants using a QR code. Participants 
scan the code on their mobile devices and are directed to the demo page.

- **WebSocket Communication**: All participants are connected via WebSockets for real-time interaction. The Brain directs tasks, and participants follow instructions without direct communication.
  
The goal is to demonstrate how users, acting as "drones," can complete individual tasks that contribute to a larger goal without speaking to each other, using only the app’s interface and instructions from the Brain.

### Core Deliverables:

1. **Well-Documented Workflow**: Establishing a structured, Kanban-based workflow that ensures transparency and adaptability within the team.

2. **Demo Application**: A simple, functional web app with login and real-time interaction through scripted scenarios, showcasing the ability to code new prompts and demos into the system.


**Project Timeline**: 14/10/2024 - 15/11/2024

**Duration**: 4 weeks

<br>

## 2. Table of Contents

1. [Overview](#1-overview)  
2. [Table of Contents](#2-table-of-contents)  
3. [Goals](#3-goals)  
4. [Team Structure](#4-team-structure)  
5. [Project Breakdown](#5-project-breakdown)  
&nbsp;&nbsp;&nbsp;&nbsp;5.1. [Backend Development](#51-backend-development)  
&nbsp;&nbsp;&nbsp;&nbsp;5.2. [Frontend Development](#52-frontend-development)  
&nbsp;&nbsp;&nbsp;&nbsp;5.3. [Design](#53-design)  
6. [Milestones & Deadlines](#6-milestones--deadlines)  
7. [Workflow & GitHub Guidelines](#7-workflow--github-guidelines)  
&nbsp;&nbsp;&nbsp;&nbsp;7.1. [Branching Strategy](#71-branching-strategy)  
&nbsp;&nbsp;&nbsp;&nbsp;7.2. [Pull Request Rules](#72-pull-request-rules)  
&nbsp;&nbsp;&nbsp;&nbsp;7.3. [Commit Messages](#73-commit-messages)  
8. [Communication & Meetings](#8-communication--meetings)  
9. [Risks & Contingencies](#9-risks--contingencies)  
10. [Future Updates](#10-future-updates)

<br>

## 3. Goals

1. **Establish a Structured Development Environment**
   - Set up a clear, well-documented Kanban board.
   - Implement processes that emphasize communication, documentation, and organization.
   - Ensure that team members can seamlessly integrate and hand off tasks.

2. **Develop a Proof-of-Concept Application**
   - Build a simple demo website with user authentication (via email/password or OAuth options).
   - Create a WebSocket-based communication system that allows users to interact in real-time.
   - Implement scripted scenarios (e.g., "murder mystery") to showcase the app’s functionality.

3. **Focus on Team Organization & Workflow**
   - Prioritize creating detailed documentation and workflows for each aspect of development.
   - Ensure that the project is set up in a way that allows for seamless handoffs and onboarding of new team members.
   - Encourage best practices for code review, task management, and collaboration.

4. **Complete and Demonstrate a Functioning Prototype**
   - By the end of 4 weeks, the goal i

<br>

## 4. Team Structure

| Name         | Role                   | Responsibilities                                   |
|--------------|------------------------|----------------------------------------------------|
| [Name]  | Project Manager         | Overall project management and coordination        |
| [David2]     | Lead Developer (Backend) | Lead development of backend API and WebSocket integration |
| [Vica ]     | Lead Developer (Frontend) | Lead development of frontend components and UI    |
| [David 1]     | Lead Designer           | Lead design and user experience (UI/UX)           |
| [G]     | Backend Developer 1     | Support backend development, focus on user authentication |
| [Name]     | Backend Developer 2     | Support backend development, focus on WebSocket communication |
| [Osmani]     | Frontend Developer 1    | Support frontend development, focus on user interface elements |
| [Name]     | Frontend Developer 2    | Support frontend development, focus on integration with backend APIs |
| [Gabriel]     | Documentation Specialist | Maintain documentation, workflows, and Kanban board |
| [Nacho]     | QA Tester               | Responsible for testing, QA processes, and feedback |

### Explanation of the Structure

- **Lead Roles**: Assign lead roles for backend, frontend, and design. This ensures that there are clear points of leadership for each major area of the project, allowing for focused development and design.

- **Support Developers**: The remaining developers can be assigned to support roles, focusing on specific tasks within their respective areas. This way, they can collaborate closely with the leads and ensure that the development process is smooth and efficient.

- **Documentation Specialist**: Having a dedicated role for documentation ensures that all processes, decisions, and workflows are well documented, which is critical for your goal of creating a structured environment that is easy for new team members to integrate into.

- **QA Tester**: It's essential to have someone focused on testing to maintain quality and ensure the application meets the expected standards.

<br>

## 5. Project Breakdown

### 5.1. Backend Development

#### Tech Stack:
- **Framework**: FastAPI
- **WebSockets**: Websockets
- **Server**: Uvicorn
- **Reverse Proxy**: Nginx (with SSL)
- **Database**: SQLite Local or Postgres Docker
- **Password Hashing**: bcrypt
- **Allowed Packages**: `fastapi[standard]`, `uvicorn`, `python-jose[cryptography]` (JWT), `bcrypt`, `pydantic`, `sqlmodel` (for ORM), `psycopg2-binary` (POSTGRES), `httpx` (for async HTTP requests).

#### Development Timeline:

- **Week 1: User Authentication and Basic API Setup**
  - **Task 1:** Create API endpoints for user registration (POST /register) and user login (POST /login).
    - **Details:**
      - **Registration Endpoint (`/register`)**:
        - Accepts a JSON body with user information (e.g., `{"username": "user", "password": "pass"}`).
        - Uses bcrypt to hash passwords before storing them.
        - Returns success status and user ID upon successful registration.
      - **Login Endpoint (`/login`)**:
        - Accepts a JSON body with credentials.
        - Returns an authentication token (if implementing JWT later) or user details on successful login.
  
  - **Task 2:** Set up initial database schema for users using SQLAlchemy (design and implement tables).
    - **Details**: Create a `User` model with fields for `id`, `username`, and `password_hash`. Run initial migrations (if using a migration tool) to set up the database.

- **Week 2: Enhance API and Introduce WebSocket Basics**
  - **Task 3:** Implement additional API endpoints for user profile management (GET /profile, PUT /profile).
    - **Details:**
      - **Profile Retrieval Endpoint (`/profile`)**:
        - Fetch user details using the authenticated user's ID.
      - **Profile Update Endpoint (`/profile`)**:
        - Allows users to update their username and password.
  
  - **Task 4:** Set up WebSocket server using Socket.IO with FastAPI (basic connection handling).
    - **Details:**
      - Create a simple WebSocket endpoint for establishing connections.
      - Allow users to join a specific room based on their scenario (e.g., `/murdermystery/19`).
      - Log connection and disconnection events to track active users.

- **Week 3: Develop Scenarios and Security Enhancements**
  - **Task 5:** Develop API endpoints for managing scripted scenarios (CRUD operations).
    - **Details:**
      - **Create Scenarios Endpoint (POST /scenarios)**:
        - Accepts a JSON body to create a new scenario.
      - **Get Scenarios Endpoint (GET /scenarios)**:
        - Returns a list of scenarios for users to choose from.
  
  - **Task 6:** Implement authentication middleware and CORS settings to secure API routes.
    - **Details:** 
      - Ensure sensitive routes require proper authentication. Use FastAPI’s dependency injection to apply authentication checks.
      - Configure CORS to allow requests from your frontend application.

- **Week 4: Nginx Setup and Final Testing**
  - **Task 7:** Configure Nginx as a reverse proxy for FastAPI with SSL support.
    - **Details:**
      - Set up Nginx to handle HTTPS and forward requests to the FastAPI app running on Uvicorn.
      - Create a self-signed certificate for testing or use Let's Encrypt for production.
  
  - **Task 8:** Conduct performance testing on API endpoints and WebSocket connections.
    - **Details:** 
      - Use tools like Locust or Apache Benchmark to simulate load on your endpoints and WebSocket connections.
      - Optimize based on results, ensuring smooth performance during the demo.

<br>

### 5.2. Frontend Development

#### Tech Stack:
- **Framework**: React/Next.js
- **Routing**: React Router
- **State Management**: Redux or Context API (optional based on complexity)
- **UI Library**: Tailwind CSS or Material-UI (for styling)
- **Component Library**: ui.shadcn.com/ui.aceternity.com
- **HTTP Client**: Axios (for API requests)
- **WebSockets**: Websockets

#### Development Timeline:

- **Week 1: User Authentication UI**
  - **Task 1:** Develop UI components for user registration and login forms.
    - **Details:**
      - Create responsive forms with input validation.
      - Ensure accessibility standards are met.
  - **Task 2:** Create basic layout for the main application (navigation, footer).
    - **Details:**
      - Implement a navigation bar that adapts based on user authentication status.
      - Add a footer with links to help and privacy policy.

- **Week 2: Scenario Management UI**
  - **Task 3:** Implement UI for displaying active scripted scenarios (scenario selection page).
    - **Details:**
      - Create a grid or list view of available scenarios.
      - Allow users to select a scenario to join.
  - **Task 4:** Create UI for user onboarding (introduction to app features).
    - **Details:**
      - Develop an onboarding flow that guides users through the app features.
      - Include tooltips or modals for explanations.

- **Week 3: Routing and API Integration**
  - **Task 5:** Integrate frontend routing using React Router for seamless navigation.
    - **Details:**
      - Set up routes for the registration, login, scenario selection, and onboarding pages.
  - **Task 6:** Connect frontend forms to backend API for user authentication.
    - **Details:**
      - Use Axios to handle API requests for login and registration.
      - Implement error handling for API responses.

- **Week 4: Mobile Optimization and User Experience**
  - **Task 7:** Develop mobile-friendly design for QR code scanning page.
    - **Details:**
      - Ensure the QR code scanning interface is responsive and user-friendly.
      - Optimize for both camera access and scanning experience.
  - **Task 8:** Create user feedback and error handling UI components (modals, notifications).
    - **Details:**
      - Implement toast notifications for success/error messages.
      - Design modal dialogs for confirmation and alerts.

<br>

### 5.3. Design

#### Development Timeline:

- **Week 1: User Flows and Style Guide**
  - **Task 1:** Create wireframes for user registration and login flows.
    - **Details:**
      - Focus on user experience and accessibility.
      - Include annotations for interactions.
  - **Task 2:** Develop an initial style guide outlining colors, fonts, and basic components.
    - **Details:**
      - Establish typography hierarchy and color palette.
      - Define button styles, input fields, and other UI elements.

- **Week 2: Game Screen and Mockups**
  - **Task 3:** Design the layout for the game screen and scenario selection.
    - **Details:**
      - Create layouts that are intuitive and engaging for users.
  - **Task 4:** Create high-fidelity mockups of key UI components.
    - **Details:**
      - Use design tools (e.g., Figma, Sketch) to produce detailed mockups.
      - Prepare assets for handoff to development.

- **Week 3: Asset Development and Usability Testing**
  - **Task 5:** Develop assets (icons, buttons, backgrounds) needed for the application.
    - **Details:**
      - Ensure consistency with the style guide and branding.
  - **Task 6:** Conduct usability testing on mockups and gather feedback.
    - **Details:**
      - Use tools like Maze or UserTesting to collect user feedback.
      - Iterate on designs based on findings.

- **Week 4: Finalization and Documentation**
  - **Task 7:** Finalize the style guide with detailed specifications for all UI components.
    - **Details:**
      - Include design tokens, spacing, and component behaviors.
  - **Task 8:** Create design documentation to guide developers during implementation.
    - **Details:**
      - Document design rationale and provide usage guidelines for each component.

<br>

### 5.4. Testing & QA

#### Development Timeline:

- **Week 1: Test Case Development**
  - **Task 1:** Develop test cases for user registration and login workflows.
    - **Details:**
      - Include edge cases and error handling scenarios.
  - **Task 2:** Set up testing environment and tools (e.g., Jest, Mocha).
    - **Details:**
      - Configure the testing framework and integrate with CI/CD pipeline.

- **Week 2: Usability and API Testing**
  - **Task 3:** Conduct usability testing on UI components (registration, login).
    - **Details:**
      - Gather qualitative feedback from users to identify pain points.
  - **Task 4:** Perform manual testing of backend API endpoints.
    - **Details:**
      - Validate responses and error codes for all endpoints.

- **Week 3: Automated and Performance Testing**
  - **Task 5:** Implement automated testing for critical API endpoints (integration tests).
    - **Details:**
      - Ensure all critical functionality is covered by tests.
  - **Task 6:** Conduct performance testing on the WebSocket server.
    - **Details:**
      - Use tools like Artillery or Locust to simulate load and identify bottlenecks.

- **Week 4: Reporting and Documentation**
  - **Task 7:** Prepare a testing report summarizing findings and recommendations.
    - **Details:**
      - Highlight key issues and areas for improvement.
  - **Task 8:** Review and finalize testing documentation for future reference.
    - **Details:**
      - Ensure documentation is clear and comprehensive for onboarding.

- **[Team Lead]** in charge: [Name]

<br>

### 5.5. Documentation

#### Development Timeline:

- **Week 1: API and Onboarding Documentation**
  - **Task 1:** Set up a documentation structure for API endpoints and usage.
    - **Details:**
      - Use tools like Swagger or Postman to document APIs.
  - **Task 2:** Document the onboarding process for new team members.
    - **Details:**
      - Create a guide that outlines roles, responsibilities, and project structure.

- **Week 2: User Guides and Design Documentation**
  - **Task 3:** Create user guides for the application (registration, participation).
    - **Details:**
      - Ensure guides are user-friendly and accessible.
  - **Task 4:** Maintain documentation for design decisions and style guide.
    - **Details:**
      - Record reasons for design choices to aid future development.

- **Week 3: Task Management and Testing Processes**
  - **Task 5:** Regularly update the Kanban board with tasks and progress.
    - **Details:**
      - Ensure transparency and track progress efficiently.
  - **Task 6:** Document the testing processes and results from usability testing.
    - **Details:**
      - Capture insights and recommendations for improvements.

- **Week 4: Finalization and Retrospective**
  - **Task 7:** Review and finalize all project documentation for the demo.
    - **Details:**
      - Ensure all documentation is polished and accurate.
  - **Task 8:** Create a project retrospective document summarizing lessons learned.
    - **Details:**
      - Reflect on successes, challenges, and areas for future improvement.

<br>

## 6. Milestones & Deadlines

| Milestone                     | Deadline   | Description                                                                                                  |
|-------------------------------|------------|--------------------------------------------------------------------------------------------------------------|
| **Milestone 1: Design**       | **Week 2** | Finalize the design and wireframes, including UI components and style guides for the application.           |
| - Task 1: Create wireframes for user registration and login flows.            | Week 1 | Visual representation of user registration and login processes.                                           |
| - Task 2: Develop initial style guide outlining colors, fonts, and basic components. | Week 1 | Establishing design consistency across the application.                                                    |
| - Task 3: Design layout for the game screen and scenario selection.          | Week 2 | Designing user interactions for the game experience.                                                      |
| - Task 4: Create high-fidelity mockups of key UI components.                 | Week 2 | Detailed representations of UI elements for development.                                                  |
|                               |            |                                                                                                              |
| **Milestone 2: Backend**      | **Week 4** | Complete the backend API development and testing, ensuring robust functionality and security.                |
| - Task 1: Create API endpoints for user registration and login.              | Week 1 | Implementation of user authentication endpoints.                                                           |
| - Task 2: Set up initial database schema for users.                         | Week 1 | Establishing user model and database structure.                                                           |
| - Task 3: Develop API endpoints for managing scripted scenarios.             | Week 3 | CRUD operations for game scenarios.                                                                         |
| - Task 4: Implement authentication middleware and CORS settings.            | Week 3 | Enhancing security and access control for the API.                                                         |
|                               |            |                                                                                                              |
| **Milestone 3: Frontend**     | **Week 4** | Build and finalize the frontend components, ensuring a seamless user experience.                             |
| - Task 1: Develop UI components for user registration and login forms.       | Week 1 | Building foundational components for user authentication.                                                 |
| - Task 2: Create UI for displaying active scripted scenarios.                | Week 2 | Interface for scenario selection for users.                                                               |
| - Task 3: Integrate frontend routing for seamless navigation.               | Week 3 | Implementing routing for better user experience.                                                           |
| - Task 4: Create user feedback and error handling UI components.            | Week 4 | Developing modals and notifications for user interaction.                                                 |
|                               |            |                                                                                                              |
| **Milestone 4: QA**            | **Week 4** | Conduct thorough testing and ensure all components function correctly, with a focus on user experience.    |
| - Task 1: Develop test cases for user registration and login workflows.      | Week 1 | Establishing a testing foundation for user flows.                                                         |
| - Task 2: Conduct usability testing on UI components.                       | Week 2 | Gathering feedback on user interactions.                                                                    |
| - Task 3: Implement automated testing for critical API endpoints.           | Week 3 | Ensuring backend reliability through integration tests.                                                    |
| - Task 4: Prepare testing report summarizing findings.                     | Week 4 | Documenting testing outcomes and recommendations for improvements.                                          |


---

## 7. Workflow & GitHub Guidelines

### 7.1. Branching Strategy (Git-Flow)

The Git Flow branching model will be adopted for this project, which promotes organized development practices. The key branches will include:

- **Main Branch (`main`)**
  - This branch contains production-ready code.
  - All merges to this branch must be done through pull requests (PRs) and approved by at least one reviewer.

- **Development Branch (`develop`)**
  - This branch serves as an integration branch for features.
  - The latest development changes will be merged here before they are pushed to the `main` branch.

- **Feature Branches (`feature/[task-name]`)**
  - Each new feature or task will be developed in its own feature branch, named using the format `feature/[task-name]`.
  - Example: `feature/user-authentication`
  - Feature branches will be created from the `develop` branch.

- **Bugfix Branches (`bugfix/[issue-name]`)**
  - For fixing bugs, create a branch using the format `bugfix/[issue-name]`.
  - Example: `bugfix/login-error`
  - These branches should also be created from the `develop` branch.

- **Release Branches (`release/[version-number]`)**
  - When preparing for a new production release, create a release branch named `release/[version-number]`.
  - Example: `release/1.0.0`
  - This branch is for final bug fixes and preparing metadata before merging into `main`.

- **Hotfix Branches (`hotfix/[issue-name]`)**
  - For urgent fixes that need to go directly to production, create a hotfix branch named `hotfix/[issue-name]`.
  - Example: `hotfix/security-patch`
  - These branches are created from the `main` branch.

### 7.2. Pull Request (PR) Rules

To maintain high code quality and collaboration, follow these PR guidelines:

- **PR Creation**
  - All code changes must go through a pull request to ensure peer review.
  - Provide a descriptive title and detailed description of the changes made, including relevant issue links.

- **Review Process**
  - At least one reviewer must approve the PR before it can be merged into the `develop` or `main` branches.
  - Reviewers should check for code quality, adherence to project standards, and potential impacts on other parts of the application.

- **Conflict Resolution**
  - If there are merge conflicts, resolve them locally before requesting a review.
  - Ensure that the latest changes from `develop` are merged into the feature branch prior to merging the PR.

- **Merging**
  - Use the “Squash and merge” strategy to keep commit history clean and concise.
  - Ensure that no failing tests exist before merging.

### 7.3. Commit Messages

Follow a clear and consistent format for commit messages to enhance readability and traceability:

- **Format**
[type] (scope): [subject] [body] [footer]

- **Types**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

- **Example Commit Message**
```feat(auth): add JWT authentication Implemented JSON Web Token authentication for user login. Closes #45```

### 7.4. Branch Management Best Practices

- **Regular Updates**
- Regularly pull the latest changes from the `develop` branch into your feature branch to minimize merge conflicts.

- **Feature Toggles**
- For large features that take time to develop, consider using feature toggles to integrate code that is not yet complete but will be available in the future.

- **Cleanup**
- After merging, delete the feature branch to keep the repository clean.

- **Documentation**
- Maintain clear documentation for any new features, including how to use them and any relevant configurations.


<br>

## 8. Communication & Meetings

- We’ll be using **Discord** for daily communication. This will allow for real-time messaging and quick collaboration.
- Important files, including `.env` and other sensitive documents, will be shared via **Notion.so** to ensure secure access and version control.
- For visual design collaboration, we can use **Excalidraw** for quick sketches or **Figma** for detailed designs.

## Meeting Schedule

- **Weekly Meetings:**
  - **Monday Meeting:** 1 hour to discuss progress, roadblocks, and plans for the week.
  - **Midweek Update:** 15 minutes for a quick check-in on project status.
  - **Friday Wrap-up:** Short meeting to summarize the week and plan for the next.

- All meetings can be conducted in-person or remotely. 

### Meeting Etiquette

- All team members are expected to be **on time** and have a computer available during meetings.
- If several team members are together on campus, each should have their own computer; sharing a single computer during meetings is not allowed. This ensures that everyone can participate fully and access necessary documents and tools.

## Suggestions

- Any additional tools or methods for communication or collaboration are welcome. Please share your thoughts and preferences so we can enhance our workflow together.

<br>

## 9. Risks & Contingencies

The following risks have been identified and will be actively monitored throughout the project lifecycle:

- **Tight Deadlines**: 
  - **Mitigation Strategy**: We will adopt an agile development approach with daily stand-ups to assess progress and address blockers promptly. Regular sprint planning sessions will help ensure tasks are manageable within the timeframe.

- **Scope Creep**: 
  - **Mitigation Strategy**: Any proposed new features or changes to the project scope will be discussed during the weekly meetings. All changes must receive approval from the team lead and be documented to maintain clarity on project objectives.

- **Communication Gaps**: 
  - **Mitigation Strategy**: Using Discord for daily communication will help facilitate quick exchanges of information. Regular check-ins during meetings will ensure everyone is aligned and aware of ongoing tasks.

- **Technical Challenges**: 
  - **Mitigation Strategy**: Encourage team members to raise any technical issues or uncertainties as they arise. We will also schedule code review sessions to foster knowledge sharing and collective problem-solving.

- **Resource Availability**: 
  - **Mitigation Strategy**: Monitor team members' availability and workload closely. If a member is unavailable, tasks will be redistributed among the team to ensure continuity.

By implementing these strategies, we aim to minimize risks and ensure the successful delivery of the project.

<br>

## 10. Future Updates

This README will be continuously updated as the project progresses. Any changes to the workflow, team, or project structure will be reflected here.

---
