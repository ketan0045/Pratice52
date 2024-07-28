import "./App.css";
import Cards from "./components/Cards";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/card" element={<Cards />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
