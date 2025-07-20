import { useState, useEffect } from "react";
import "./Bodytext.css";
import Homeb1 from "../../Navbar/Home Button/Homeb1";

export default function BodyText() {
  const phrases = ["Career Guidance", "Your Career Teacher", "To Your Dream"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[index];
    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
      }, speed / 2);
    }

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, speed]);

  return (
    <div className="bodytext">
      <span className="textbig">Welcome to</span>
      <span className="textbig2">{text}<span className="cursor">|</span></span>
      <p className="textsmall">Your journey to a successful career starts here.</p>
      <Homeb1 name="Get Started" />
    </div>
  );
}