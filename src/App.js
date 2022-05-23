import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.js";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Hola Mundo ItemListContainer" />
    </div>
  );
};

export default App;
