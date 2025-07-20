import './Body.css';
import Bodypic from "./Body Picture/Bodypic.jsx";
import BodyText from "./Body Text/Bodytext.jsx";
import Footer from "./Footer/Footer.jsx";

export default function Body(){
  return (
    <div className="body-web">
      <div className="body-web11">
        <div className="body-web1">
          <BodyText />
          <Bodypic />
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}