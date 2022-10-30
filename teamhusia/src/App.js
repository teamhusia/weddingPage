import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Contact from "./components/Contact";
import Invitation from "./components/Invitation";
import ProgressiveBackground from "./components/ProgressiveBackground";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Invitation />
    },
    {
      path: "/roadmap",
      element: <Roadmap />
    },
    {
      path: "/team",
      element: <Team />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]);
  return (
    <div>
      <ProgressiveBackground
        fullImageSrc="/stars-edited.jpg"
        miniatureSrc="/stars-edited-small.jpg"
      >
        <RouterProvider router={router} />
      </ProgressiveBackground>
    </div>
  );
}

export default App;
