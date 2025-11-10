# 🏠 Home — Remote Application

The **Home** microfrontend is built with [React](https://react.dev/) and [Rsbuild](https://modernjs.dev/rsbuild) using [Module Federation](https://module-federation.io/).

This module integrates into the **Chrome Host application** and displays a list of services.

---

## 🚀 Overview

The **Home App** consumes shared components, hooks, and utilities exposed by the **Chrome Host Application**.

### 🔧 Features
- 🏠 **Cloud entry point** — serves as the main entry point to the cloud platform, providing users with access to available services.
- 📋 **ervice catalog** — displays a comprehensive list of all services accessible to the current user.
- 💬 **Service descriptions** — each service includes a short description to help users understand its purpose and functionality.
- 🔗 **Quick access** — allows users to easily navigate to specific services directly from the main interface.
- 🔗 **Shared UI and logic** imported from the Host app
- 🧩 **Microfrontend integration** using Module Federation

---

## 🧱 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [React 18+](https://react.dev/) |
| Bundler | [Rsbuild](https://modernjs.dev/rsbuild) |
| Microfrontends | [Module Federation](https://module-federation.io/) |
| UI Library | [shadcn/ui](https://ui.shadcn.com/) *(imported from Host)* |
| Forms | [react-hook-form](https://react-hook-form.com/) *(via Host hooks)* |
| Validation | [Zod](https://zod.dev/) *(via Host hooks)* |
| Global State | [Redux](https://redux.js.org/) *(via Host store)* |

---

## ⚠️ Important Note

> **This remote application cannot run independently.**  
> It must always be loaded and executed within the **Chrome Host application** context.  
> The Host provides authentication, global routing, shared UI components, and state management — all of which are required for Home to function properly.

---

## ⚙️ Installation & Local Development

### 1. Clone the repository

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables

Before starting the app, you need to create a local environment file.
Copy the example file:

```bash
cp .env.example .env.local
```
Open .env.local and provide valid values for all keys (API endpoints, etc.).

### 4. Start the development server
```bash
npm run dev
```

The app will be available at:
http://localhost:8080

