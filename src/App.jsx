import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Blogs from "./pages/Blogs.jsx";
import BlogsOpen from "./pages/BlogsOpen.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/blogs", 
    element: <Blogs />
  },
  {
    path: "/blogsopen", 
    element: <BlogsOpen />
  },
  {
    path: "/careers", 
    element: <Careers />
  },
  {
    path: "/projects", 
    element: <Projects />
  },
  {
    path: "/services", 
    element: <Services />
  },
  {
    path: "/contact", 
    element: <Contact />
  }
]);

export default function App(){
  return <RouterProvider router={router} />;
}