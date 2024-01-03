import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sales from "./pages/Sales/Index";
import Invoices from "./pages/Invoices/Index";

import Orders from "./pages/Orders/Index";

import Products from "./pages/Products/Index";
import NewProduct from "./pages/Products/Create";

import Supplies from "./pages/Supplies/Index";
import NewSupply from "./pages/Supplies/Create";

import Units from "./pages/Units/Index";
import NewUnit from "./pages/Units/Create";

import Category from "./pages/Category/Index";
import NewCategory from "./pages/Category/Create";

import Customers from "./pages/Customers/Index";
import NewCustomer from "./pages/Customers/Create";

import Purchases from "./pages/Purchases/Index";
import NewPurchase from "./pages/Purchases/Create";

import Welcome from "./pages/Welcome";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Routes>
      <Route path="/" exact element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/products" element={<Products />} />
      <Route path="/products/create" element={<NewProduct />} />

      <Route path="/sales" element={<Sales />} />

      <Route path="/suppliers" element={<Supplies />} />
      <Route path="/suppliers/create" element={<NewSupply />} />

      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/create" element={<NewCustomer />} />

      <Route path="/purchases" element={<Purchases />} />
      <Route path="/purchases/create" element={<NewPurchase />} />

      <Route path="/units" element={<Units />} />
      <Route path="/units/create" element={<NewUnit />} />

      <Route path="/categories" element={<Category />} />
      <Route path="/categories/create" element={<NewCategory />} />

      <Route path="/invoices" element={<Invoices />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/orders" element={<Orders />} />
      <Route path="/purchases" element={<Purchases />} />
    </Routes>
  );
}

export default App;
