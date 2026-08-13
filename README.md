# 🔐 React Dynamic Form & Authentication System

A modern, responsive, client-side authentication application built with **React 19**, **Vite**, **Formik**, and **Yup**. It features dynamic form handling, real-time schema validation, user registration, credential verification, local storage persistence, and a personalized user dashboard.

---

## 🚀 Features

- **📝 Dynamic Form Handling**: Powered by **Formik** for seamless form state management, touch tracking, and error handling.
- **🛡️ Real-time Schema Validation**: Integrated with **Yup** for robust field validation (email syntax, password strength, password confirmation matching).
- **👤 User Registration**: Allows new users to create accounts with automatic duplicate email checking.
- **🔑 Secure Authentication Flow**: Verifies user credentials against local records and creates active user sessions.
- **📊 User Dashboard**: Displays logged-in user details, dynamic avatar initials, active status indicator, and secure session logout.
- **💾 Local Storage Persistence**: Stores user account data and session states locally in the browser.
- **🎨 Responsive UI**: Clean aesthetics with customized styling, responsive card containers, and visual error feedback.
- **⚡ Lightning Fast HMR**: Built on **Vite 8** for instantaneous Hot Module Replacement and quick build times.

---

## 🛠️ Tech Stack

- **Core Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Form Management**: [Formik](https://formik.org/)
- **Validation**: [Yup](https://github.com/jquense/yup)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling & UI**: Custom CSS & [Bootstrap 5](https://getbootstrap.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Linter**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

---

## 📁 Project Structure

```text
Dynamic_Form/
├── public/                # Static public assets
├── src/
│   ├── assets/            # App images and static media
│   ├── components/        # Feature components
│   │   ├── CreateAccount.jsx  # User registration form with Formik & Yup
│   │   ├── Dashboard.jsx      # Authenticated user dashboard & logout
│   │   └── Login.jsx          # Login form and session initialization
│   ├── App.css            # Component and layout specific styles
│   ├── App.jsx            # Main app router component
│   ├── index.css          # Global CSS reset & base theme rules
│   └── main.jsx           # React app entry point
├── .gitignore             # Git ignored files
├── index.html             # HTML entry file
├── package.json           # Project metadata & dependencies
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration file
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bdarshan3007/Dynamic_Form.git
   cd Dynamic_Form
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with HMR. |
| `npm run build` | Bundles the application for production deployment in `dist/`. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs **Oxlint** to check code quality and formatting. |

---

## 📋 Form Validation Schemas

### Registration (`CreateAccount.jsx`)
- **Full Name**: Required, minimum 2 characters, maximum 100 characters.
- **Email**: Required, valid email format.
- **Password**: Required, length between 4 and 12 characters.
- **Confirm Password**: Required, must match the Password field.

### Login (`Login.jsx`)
- **Email**: Required, valid email format.
- **Password**: Required, length between 4 and 12 characters.

---

## 🤝 Author

Crafted with ❤️ by **Darshan** (`Bdarshan3007`)
