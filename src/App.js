import "./App.css";
import ProductProvider from "./context/ProductProvider";
import Cart from "./Pages/Admin/Dashboard/Cart/Cart";

import Products from "./Pages/Admin/Dashboard/Products/Products";
// import AddProducts from "./Pages/Admin/Dashboard/AddProducts/AddProducts";

function App() {
  return (
    <div>
      <ProductProvider>
        <div className="grid grid-cols-2">
          <div>
            <Products></Products>
          </div>

          <div>
            <Cart></Cart>
          </div>
        </div>
      </ProductProvider>
    </div>
  );
}

export default App;
