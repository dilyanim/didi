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
  const [task ,setTask] = useState([])
  function add(){
    const addTask = {
      id:  Date.now(),
      img: menuItems.map(el => el.image),
      name: menuItems.map(el => el.name),
      sum: menuItems.map(el => el.price),
    }
    setTask([...task , addTask]);
  }
  console.log('task',task);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Menu add={add} menuItems={menuItems} />} />
        <Route path="/order" element={<Orders task={task} onAddMenuItem={addMenuItem} />} />
        <Route path="/admin" element={<Admin onAddMenuItem={addMenuItem} />} />
      </Routes>
    </div>
  );
};

export default App;
