import "./Logo.css";
import careerLogo from "../../../assets/career-logo.png";

export default function Logo(){
    return(
               <>
                <img src = {careerLogo} alt = "Career Guidance Logo" className = "logo" />
               </>
    );
}