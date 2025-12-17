import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Destination from "./Destination/Destination";
import Crew from "./Crew/Crew";

function App() {
  const [page, setPage] = useState("main");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
