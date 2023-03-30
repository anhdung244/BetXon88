import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainApp from "./modules";
function App() {
  return (
    <BrowserRouter>
      <MainApp></MainApp>
    </BrowserRouter>
  );
}

export default App;
