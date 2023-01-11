import "./App.css";
import ProductProvider from "./context/ProductProvider";
import Cart from "./Pages/Admin/Dashboard/Cart/Cart";

import Products from "./Pages/Admin/Dashboard/Products/Products";
// import AddProducts from "./Pages/Admin/Dashboard/AddProducts/AddProducts";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <div className="grid grid-cols-2">
          <Products></Products>
          <Cart></Cart>
        </div>
      </ProductProvider>
    </div>
  );
}

export default App;
