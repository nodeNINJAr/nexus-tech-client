

---

# **Nexus Tech – Employee Management System**  

![Nexus Tech](https://your-logo-url.com/logo.png)  

## 🚀 Introduction  

**Nexus Tech** is a comprehensive **Employee Management System (EMS)** designed to streamline HR and administrative operations. The platform enables businesses to manage employees efficiently while ensuring:  

- ✅ **Seamless Workflows**  
- ✅ **Secure Role-Based Access Control**  
- ✅ **Robust Data Management**  

This application provides powerful tools to manage employee records, track performance, handle payroll, and facilitate smooth communication within an organization.  

---

## 📑 Table of Contents  

- [**Nexus Tech – Employee Management System**](#nexus-tech--employee-management-system)
  - [🚀 Introduction](#-introduction)
  - [📑 Table of Contents](#-table-of-contents)
  - [Website Details](#website-details)
  - [🌟 Features](#-features)
  - [🛠 Tech Stack](#-tech-stack)
  - [📥 Installation](#-installation)
    - [**Prerequisites**](#prerequisites)
    - [**Steps**](#steps)
  - [▶️ Usage](#️-usage)
  - [📜 Available Scripts](#-available-scripts)
  - [⚙️ Environment Variables](#️-environment-variables)
    - [**Firebase Configuration**](#firebase-configuration)
  - [🛠 Troubleshooting](#-troubleshooting)
  - [🤝 Contributing](#-contributing)

---

## Website Details

- **Website Name**: Nexus Tech
- **Admin Email**: suzume99@gmail.com 
- **Admin Password**: Pa$$w0rd! 
- **Live Site URL Firebase**: [https://nexustech-b3673.web.app](https://nexustech-b3673.web.app)
- **Live Site URL Netlify**: [https://nexustechweb.netlify.app](https://nexustechweb.netlify.app)
## 🌟 Features  

✅ **Employee Records Management** – Store and manage employee details securely.  
✅ **Role-Based Access Control (RBAC)** – Assign different access levels to employees, HR, and admins.  
✅ **Real-Time Data Sync** – Uses Firebase for authentication and database management.  
✅ **Payroll & Attendance Tracking** – Keep records of attendance, leaves, and payroll.  
✅ **Advanced Search & Filters** – Easily find employees with powerful search tools.  
✅ **Modern UI** – Designed with Ant Design and Tailwind CSS for an intuitive user experience.  
✅ **Interactive Dashboards** – Visualize employee performance and company statistics with Recharts.  
✅ **Secure API Requests** – Uses Axios to handle secure data communication.  

---

## 🛠 Tech Stack  

| Technology  | Purpose |
|-------------|---------|
| **React**   | Frontend Framework |
| **Vite**    | Development & Build Tool |
| **Ant Design** | UI Components |
| **Tailwind CSS** | Styling |
| **React Query** | State Management |
| **React Router** | Navigation |
| **Axios** | API Communication |
| **Firebase** | Authentication & Realtime Database |
| **Recharts** | Data Visualization |
| **ImageBB API** | Image Uploading |

---

## 📥 Installation  

### **Prerequisites**  

- **Node.js (>=16.0.0)**  
- **npm or yarn package manager**  

### **Steps**  

1. Clone the repository:  
   ```sh
   git clone https://github.com/nodeNINJAr/nexus-tech-client
   cd nexus-tech-client
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Start the development server:  
   ```sh
   npm run dev
   ```  

---

## ▶️ Usage  

- Run `npm run dev` to start the local development server.  
- Use `npm run build` to create an optimized production build.  
- Run `npm run preview` to preview the production build locally.  
- Use `npm run lint` to check for coding style issues.  

---

## 📜 Available Scripts  

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint for code quality |

---

## ⚙️ Environment Variables  

Create a `.env` file in the root directory and configure the required environment variables:  

```env
VITE_apiKey=your-firebase-api-key
VITE_authDomain=your-firebase-auth-domain
VITE_projectId=your-firebase-project-id
VITE_storageBucket=your-firebase-storage-bucket
VITE_messagingSenderId=your-firebase-messaging-sender-id
VITE_appId=your-firebase-app-id
VITE_base_url=your-backend-api-url
VITE_imagebb_api_key=your-imagebb-api-key
```

### **Firebase Configuration**  
The Firebase config should be set up as follows in your project:  

```js
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey, 
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId, 
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId, 
};
```

For detailed Firebase setup, refer to [Firebase Docs](https://firebase.google.com/docs).

---

## 🛠 Troubleshooting  

- **Port Conflicts?**  
  Change the port by running:  
  ```sh
  vite --port 3001
  ```  
- **Dependency Issues?**  
  Delete `node_modules` and reinstall:  
  ```sh
  rm -rf node_modules package-lock.json && npm install
  ```  
- **Environment Variables Not Loading?**  
  Ensure that your `.env` file is correctly formatted and included in `.gitignore`.  

---

## 🤝 Contributing  

We welcome contributions! Follow these steps:  

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature-branch`)  
3. Commit your changes (`git commit -m "Add new feature"`)  
4. Push to the branch (`git push origin feature-branch`)  
5. Open a Pull Request  

