import { useState } from "react";

import "./App.css";
import Destination from "./Destination/Destination";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

function App() {
  const [page, setPage] = useState("main");
  return (
    <>
      <Navbar />
      <Home />
      {/* <Destination /> */}
    </>
  );
}

export default App;
