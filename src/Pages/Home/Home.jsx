import './Home.css';
import Nav from "../../Components/Navbar/Nav.jsx";
import Body from "../../Components/Body/Body.jsx";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Nav />
        <Body />
      </div>
    </div>
  );
}