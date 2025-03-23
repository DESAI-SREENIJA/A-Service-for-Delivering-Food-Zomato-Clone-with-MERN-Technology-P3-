import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Food Ordering Platform</h1>
      <nav className="mt-4">
        <Link className="mx-2 text-blue-500" to="/restaurants">View Restaurants</Link>
        <Link className="mx-2 text-blue-500" to="/orders">View Orders</Link>
      </nav>
    </div>
  );
};

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/restaurants").then((response) => {
      setRestaurants(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id} className="mt-2 border p-2 rounded">
            {restaurant.name} - {restaurant.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Order Details</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id} className="mt-2 border p-2 rounded">
            {order.foodItem} - {order.restaurant}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
};

export default App;
