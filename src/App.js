import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";

import React from "react";
import Navigation from "./routes/navigation/navigation.component";

export const Shop = () => {
  return <div>Shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
