import "./App.css";
import Cart from "./Pages/Admin/Dashboard/Cart/Cart";

import Products from "./Pages/Admin/Dashboard/Products/Products";
// import AddProducts from "./Pages/Admin/Dashboard/AddProducts/AddProducts";

function App() {
  console.log("cart");
  return (
    <div className="App">
      <div className="grid grid-cols-2">
        <Products></Products>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
