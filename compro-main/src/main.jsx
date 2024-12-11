import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import OpportunityPage from "./pages/opportunity";
import WeDoPage from "./pages/wedopage";
import WeArePage from "./pages/weare";
import WhyChooseUsPage from "./pages/chooseuspage";
import ContactPage from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/opportunity",
    element: <OpportunityPage></OpportunityPage>,
  },
  {
    path: "/opportunity",
    element: <OpportunityPage></OpportunityPage>,
  },
  {
    path: "/whatwedo",
    element: <WeDoPage></WeDoPage>,
  },
  {
    path: "/whoweare",
    element: <WeArePage></WeArePage>,
  },
  {
    path: "/whychooseus",
    element: <WhyChooseUsPage></WhyChooseUsPage>,
  },
  {
    path: "/contact",
    element: <ContactPage></ContactPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
