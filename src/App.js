import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productsdetails from "./components/Products/Productsdetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<Productsdetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
