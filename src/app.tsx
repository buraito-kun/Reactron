import React from "react"
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";

const root = createRoot(document.body);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<div><h1>💖 Hello World!</h1><p>Welcome to your Electron application.</p></div>} />
    </Routes>
  </HashRouter>
);