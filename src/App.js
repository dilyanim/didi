import React, { useState } from "react";
import Menu from "./components/Menu";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Orders from "./components/Orders";
import Header from "./components/Header";
import Admin from "./components/Admin";

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const addMenuItem = (item) => {
    setMenuItems([...menuItems, item]);
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Menu menuItems={menuItems} />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/admin" element={<Admin onAddMenuItem={addMenuItem} />} />
      </Routes>
    </div>
  );
};

export default App;
