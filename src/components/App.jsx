import { useState } from "react";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Destination from "./Destination/Destination";
import Crew from "./Crew/Crew";

function App() {
  const [page, setPage] = useState("main");

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Destination /> */}
      <Crew />
    </>
  );
}

export default App;
