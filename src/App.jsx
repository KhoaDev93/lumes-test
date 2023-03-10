import { useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
