import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
// import ItemListContainer from "./components/itemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemDetailContainer />
    </div>
  );
  //<ItemListContainer greeting="Hola Mundo ItemListContainer" />
};

export default App;
