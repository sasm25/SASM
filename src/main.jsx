import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import About from "./assets/Contact/Contact.jsx";
import Home from "./Component/Pages/Home.jsx";
import OrganizingCommittee from "./Component/Pages/Organizing-Committee.jsx";
import ImpDates from "./Component/Pages/ImpDates.jsx";
import Registration from "./Component/Pages/Registration.jsx";
import Contact from "./assets/Contact/Contact.jsx";

// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load("particles-js", "assets/particles.json", function () {
// 	console.log("callback - particles.js config loaded");
// });

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="imp-dates" element={<ImpDates />} />
      <Route path="registration" element={<Registration />} />
      <Route path="org-committee" element={<OrganizingCommittee />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
