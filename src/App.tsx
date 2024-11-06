import Recipe$ from "./Interface/Recipe";
import Nav from "./Nav/Nav";
import Recipe from "./Recipe/Recipe";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import NotFound from "./404/NotFound";
import Cart from "./Cart/Cart";

function App() {
 

  return (
    <div>
      <Nav />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      </BrowserRouter>
      footer
    </div>
  );
}

export default App;
