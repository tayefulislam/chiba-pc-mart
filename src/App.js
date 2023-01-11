import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./Pages/Admin/Dashboard/Cart/Cart";

import Products from "./Pages/Admin/Dashboard/Products/Products";
// import AddProducts from "./Pages/Admin/Dashboard/AddProducts/AddProducts";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://chibapcmartdemo.onrender.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.result));
  }, []);

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
