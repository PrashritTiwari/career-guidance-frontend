import "./Nav.css";
import Logo from "./Logo/Logo.jsx";
import Homeb from "./Home Button/Homeb.jsx";
import Homeb1 from "./Home Button/Homeb1.jsx";

export default function Nav() {
  return (
    <div>
      <div className="nav-container">
        <nav className="navbackground">
          <Logo />
          <div className="Homeb-container">
            <Homeb name="Home" to="/" />
            <div className = "questionaries-button">
            <Homeb1 name="Questionaries" to="/questionaries" />
            </div>
          </div>
        </nav>
      </div>
      <div className="Line"></div>
    </div>
  );
}