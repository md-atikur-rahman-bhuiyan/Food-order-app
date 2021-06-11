import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartHandler, setCartHandler] = useState(false);

  const showCartHandler = () => {
    setCartHandler(true);
  };

  const hideCartHandler = () => {
    setCartHandler(false);
  };

  return (
    <CartProvider>
      {cartHandler && <Cart onClose={hideCartHandler} />}
      <Header onCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
