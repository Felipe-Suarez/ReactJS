import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CartContextProvider from "./components/CartContext";
import Navbar from "./components/navbar/Navbar.js";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Ubication from "./components/ubication/Ubication";
import About from "./components/about/About";

const App = () => {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenido a nuestra Aplicacion Web!"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Categoria"} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/ubication" element={<Ubication />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to='/' />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
};

export default App;
