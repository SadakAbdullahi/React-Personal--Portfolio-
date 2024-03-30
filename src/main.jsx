import React from 'react'
import ReactDOM from 'react-dom/client'
// import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Pages/Home.jsx'
import './global.css';
import AboutPage from './Pages/AboutPage.jsx'
import SkillsPage from './Pages/SkillsPage.jsx';
import ProjectPage from './Pages/ProjectPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: "*",
//     element: <Home/>,
//   },
//   {
//     path: "./Pages/AboutPage.jsx",
//     element: <AboutPage/>,
//   },
//   {
//     path: "./Pages/SkillPage.jsx",
//     element: <SkillsPage/>,
//   },
//   {
//     path: "./Pages/ProjectPage.jsx",
//     element: <ProjectPage/>,
//   },
//   {
//     path: "./Pages/contactPage.jsx",
//     element: <ContactPage/>,
//   },
  

// ]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Home />
    <AboutPage/>
    <SkillsPage/>
    <ProjectPage/>
    <ContactPage/>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
