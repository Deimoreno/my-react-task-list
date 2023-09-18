import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";

// Importar los componentes de forma diferida (lazy)
const HomePage = lazy(() => import("./pages/HomePage"));
const TaskPage = lazy(() => import("./pages/TaskPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Task-List" element={<TaskPage />} />
            <Route path="/AboutUs" element={<AboutUsPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;