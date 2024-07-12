import React from "react";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { FirebaseProvider } from "./context/AuthContext/AuthContext";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <FirebaseProvider>
        <AppRouter />
      </FirebaseProvider>
    </BrowserRouter>
  );
};

export default App;