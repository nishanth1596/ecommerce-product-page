import { useState } from "react";
import Header from "./component/Header/Header";
import ProductCard from "./component/Product/ProductCard";

type InitialCartItemProp = {
  id: number;
  quantity: number;
};

const initialCartItem: InitialCartItemProp[] = [
  {
    id: 0,
    quantity: 0,
  },
];

function App() {
  const [cartItem, setCartItem] =
    useState<InitialCartItemProp[]>(initialCartItem);

  function handleIncreaseItem(newItem: InitialCartItemProp) {
    setCartItem((prevItems) => [...prevItems, newItem]);
  }

  function handleDecreaseItem(newItem: InitialCartItemProp) {
    setCartItem((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className="mx-auto flex h-dvh flex-col items-center">
      <Header />
      <main>
        <ProductCard
          onDecreaseItem={handleDecreaseItem}
          onIncreaseItem={handleIncreaseItem}
          cartItem={cartItem}
        />
      </main>
    </div>
  );
}

export default App;
