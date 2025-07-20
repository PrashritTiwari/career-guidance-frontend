import "./Bodypic.css";
import AiImage from '../../../assets/Ai.png';

export default function Bodypic(){
  return (
    <div className="body-pic">
      <img src={AiImage} alt="Career Guidance" className="bodypic" />
    </div>
  );
}