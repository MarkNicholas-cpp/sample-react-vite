import Greet from "../Greet/Greet";
import "./Nav.css";
function Nav() {
  const name = "Maya";
  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">🔍</div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <div className="right-section">
        <input type="text" placeholder="Search..." />
        <a href='/login' className="login-btn">Login</a>
        <button className="signup-btn">Sign-up</button>
        <button title="Greetings" type="button" className="greeting">
          <Greet name={name}></Greet>
        </button>
      </div>
    </nav>
  );
}
export default Nav;
