import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Hola Mundo ItemListContainer"} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Hola Mundo ItemListContainer"} />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
