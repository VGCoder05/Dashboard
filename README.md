# Dashboard (Full-Stack Project)

A full-stack dashboard application built with **React (Vite)** on the client and **Express / Node.js** on the server.
This project includes UI scaffolding, context state management, routing, and basic authentication APIs.

---

## 🧩 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Project Structure](#-project-structure)
4. [Getting Started](#-getting-started)
5. [Available Scripts](#-available-scripts)
6. [API Endpoints](#-api-endpoints)
7. [Future Improvements](#-future-improvements)
8. [Contributing](#-contributing)
9. [License](#-license)

---

## 🔍 Features

* Client app scaffolded with **Vite + React**
* ESLint setup + Tailwind config
* Reusable UI scaffolds (FilterSort, Tags, Button, TagItem) & UI components (Navbar, SearchBar)
* Dashboard component (ProductCatalog) with separate logic & UI files
* Context state management (App context, Search context, Data context, mock data)
* Server built with Express; includes controllers, routes, models, middleware
* Basic authentication & user management APIs
* Error handling middleware and modular structure

---

## 🛠 Tech Stack

| Layer          | Technology / Library                       |
| -------------- | ------------------------------------------ |
| Frontend       | React, Vite, ESLint, Tailwind              |
| State & UI     | Context API + custom components            |
| Backend        | Node.js, Express                           |
| Database       | MongoDB |
| Authentication | JWT / session-based (planned)              |
| Tooling        | npm, ESLint, Vite, Git                     |

---

## 🗂 Project Structure

```
Directory structure:
└───┐
    ├── client/
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package.json
    │   ├── vite.config.js
    │   └── src/
    │       ├── App.css
    │       ├── App.jsx
    │       ├── index.css
    │       ├── main.jsx
    │       ├── components/
    │       │   ├── common/
    │       │   │   ├── Button.jsx
    │       │   │   ├── TagItem.jsx
    │       │   │   ├── Tags.jsx
    │       │   │   ├── FilterSort/
    │       │   │   │   ├── FilterSortLogic.jsx
    │       │   │   │   └── FilterSortUI.jsx
    │       │   │   └── SearchBar/
    │       │   │       ├── DesktopSearchLogic.jsx
    │       │   │       ├── DesktopSearchUI.jsx
    │       │   │       ├── SearchBar.jsx
    │       │   │       └── MobileSearch/
    │       │   │           ├── MobileSearchLogic.jsx
    │       │   │           └── MobileSearchUI.jsx
    │       │   ├── dashboard/
    │       │   │   ├── ProductCatalogPage.jsx
    │       │   │   └── ProductCatalogUI.jsx
    │       │   └── layout/
    │       │       └── Navbar/
    │       │           ├── NavbarLogic.jsx
    │       │           ├── NavbarUI.jsx
    │       │           ├── NavLinkUI.jsx
    │       │           └── Sidebar.jsx
    │       ├── context/
    │       │   ├── Context.jsx
    │       │   ├── ContextProvider.jsx
    │       │   ├── Data.jsx
    │       │   ├── SearchContext.jsx
    │       │   └── Mook data/
    │       │       └── data.js
    │       ├── mainroutes/
    │       │   └── MainRoutes.jsx
    │       └── style/
    │           └── tailwind.config.css
    └── server/
        ├── index.js
        ├── package.json
        └── src/
            ├── app.js
            ├── controllers/
            │   ├── auth.controller.js
            │   └── user.controller.js
            ├── db/
            │   └── db.js
            ├── middleware/
            │   ├── authMiddleware.js
            │   └── errorMiddleware.js
            ├── models/
            │   └── user.model.js
            └── routes/
                └── auth.routes.js

```

* **client/** – frontend application
* **server/** – backend API server
* UI scaffolds and reusable components sit under `client/src/components/`
* Logic (for complex components) under respective files

---

## 🔗 API Endpoints (Examples)

| Method   | Route            | Description                     |
| -------- | ---------------- | ------------------------------- |
| POST     | `/auth/login`    | Authenticate user, return token |
| POST     | `/auth/register` | Register new user               |
| GET      | `/users/me`      | Get current authenticated user  |

