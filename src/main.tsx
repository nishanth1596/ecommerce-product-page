import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// import { useState } from "react";
// import Header from "./component/Header/Header";
// import ProductCard from "./component/Product/ProductCard";

// type InitialCartItemProp = {
//   id: number;
//   quantity: number;
// };

// const initialCartItem: InitialCartItemProp[] = [
//   {
//     id: 0,
//     quantity: 0,
//   },
// ];

// function App() {
//   const [cartItem, setCartItem] =
//     useState<InitialCartItemProp[]>(initialCartItem);

//   return (
//     <div className="mx-auto flex h-dvh flex-col items-center">
//       <Header />
//       <main>
//         <ProductCard />
//       </main>
//     </div>
//   );
// }
