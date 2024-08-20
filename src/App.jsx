// App.jsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import SolutionsPage from "./pages/SolutionsPage";
import ApplicationDev from "./pages/ApplicationDev";
import ODC from "./pages/ODC";
import WorkforceSol from "./pages/WorkforceSol";
import TechExpert from "./pages/TechExpert";
import JobSeekers from "./pages/JobSeekers";
import HireTalent from "./pages/HireTalent";
import Company from "./pages/Company";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/solutions",
        element: <SolutionsPage />,
      },
      {
        path: "/technology-expertise",
        element: <TechExpert />,
      },
      {
        path: "/job-seekers",
        element: <JobSeekers />,
      },
      {
        path: "/hire-talent",
        element: <HireTalent />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/solutions/applicationDevelopment",
        element: <ApplicationDev />,
      },
      {
        path: "/solutions/ODC",
        element: <ODC />,
      },
      {
        path: "/solutions/workforce",
        element: <WorkforceSol />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
