# AETHERION Intelligence Platform - Frontend

Aetherion is a quant-grade, AI-first intelligence platform designed with a hedge fund terminal, research laboratory, and mission-control system aesthetic. It provides a robust interface for institutional and analytical tasks, prioritizing cognitive load control, precision, and intelligence at scale.

## 🚀 Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Utility Components**: `clsx`, `tailwind-merge`, `class-variance-authority`
- **Linting**: ESLint v9

## 📁 Project Structure

The project follows a modular structure focused on scalability and maintainability:

```text
frontend/
├── public/                 # Static assets
├── src/
│   ├── api/                # API service functions (auth, system tasks)
│   ├── assets/             # Core assets (images, logos)
│   ├── components/         # Reusable UI components
│   │   └── layout/         # Layout specific components (Header, Sidebar, TopBar, RightPanel)
│   ├── layouts/            # Page-level layout wrappers (MainLayout)
│   ├── pages/              # Application views/routes
│   │   ├── Analytics.jsx   # Data analytics interface
│   │   ├── Auth.jsx        # Authentication (Login / Request Access)
│   │   ├── Dashboard.jsx   # Primary intelligence dashboard
│   │   ├── Models.jsx      # AI models overview
│   │   └── Research.jsx    # Research and intelligence modules
│   ├── App.jsx             # React Router configuration and Auth context
│   ├── index.css           # Global styles and Tailwind directives
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite build and development configuration
```

## ✨ Key Features

- **Institutional Design System**: Dark-themed UI (deep charcoal, signal cyan) optimized for lower cognitive load and long-term usage.
- **Protected Routing**: In-memory JWT-based authentication context wrapped around protected dashboard routes (`/`, `/analytics`, `/models`, `/research`).
- **Authentication Gateway**: Custom built sliding authentication panel with Login and "Request Access" features.
- **Complex UI Layout**: Main authenticated experience features a unified layout containing a `Sidebar`, `TopBar`, and `RightPanel` for active insights.

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Copy the repository or navigate to this directory (`frontend`).
2. Install the necessary dependencies:

```bash
npm install
```

### Running the Application Locally

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

By default, the application will be available at `http://localhost:5173`. Upon visiting, unauthenticated users will be seamlessly redirected to the `/auth` route to establish a secure session.

## 📜 Scripts Available

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the application for production to the `dist` folder.
- `npm run preview` - Locally preview the production build.
- `npm run lint` - Run ESLint across the codebase.

---

*Core Systems Online • Encrypted Connection • Aetherion Intelligence Platform*
