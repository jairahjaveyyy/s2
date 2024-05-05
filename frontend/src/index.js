import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SignupForm from './pages/signupForm';
import LoginForm from './pages/loginForm';
import Dashboard from './pages/Dashboard';
import StudentPage from './pages/StudentPage';
import AddStudentForm from './components/AddStudentForm';
import ViewStudent from './components/ViewStudent';


const router = createBrowserRouter ([
  {
    path: "/signup",
    element: <SignupForm />
  },
  {
    path: "/login",
    element: <LoginForm/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
  path: "/studentpage",
  element: <StudentPage/>
  },
  {
    path: "/addstudent",
    element: <AddStudentForm/>
    },
    {
      path: "/viewstudent/:id",
      element: <ViewStudent/>
      }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
