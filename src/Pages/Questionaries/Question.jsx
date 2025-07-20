import { useState, useEffect, useRef } from "react";
import "./Question.css";
import Nav from "../../Components/Navbar/Nav.jsx";
import "./../../Components/Navbar/Nav.css";

const API_URL = "https://career-guidance-backend-yvaw.onrender.com";

export default function Question() {
  const [sessionId, setSessionId] = useState(null);
  const [question, setQuestion] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [recommendations, setRecommendations] = useState("");
  const inputRef = useRef(null);

  // Start session on page load
  useEffect(() => {
    const startSession = async () => {
      setLoading(true);
      const res = await fetch(`${API_URL}/session`, { method: "POST" });
      const data = await res.json();
      setSessionId(data.session_id);
      setQuestion(data.question);
      setQuestionNumber(data.question_number);
      setAnswers([]);
      setComplete(false);
      setRecommendations("");
      setLoading(false);
    };

    startSession();
  }, []);

  // Submit current answer
  const submitAnswer = async () => {
    if (!answer.trim()) return;

    setLoading(true);
    await fetch(`${API_URL}/answer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id: sessionId, answer }),
    });

    setAnswers([...answers, answer]);
    setAnswer("");

    const res = await fetch(`${API_URL}/question?session_id=${sessionId}`);
    const data = await res.json();

    if (data.status === "complete") {
      setComplete(true);
      setQuestion("");
      fetchRecommendations(); // optional: fetch immediately
    } else {
      setQuestion(data.question);
      setQuestionNumber(data.question_number);
    }

    setLoading(false);
  };

  // Get recommendations
  const fetchRecommendations = async () => {
    setLoading(true);
    const res = await fetch(`${API_URL}/recommend?session_id=${sessionId}`);
    const data = await res.json();
    setRecommendations(data.recommendations);
    setLoading(false);
  };

  return (
    <div className="questionaries-page">
      <Nav />

      <section className="questionaries-hero">
        <h1 className="questionaries-heading animate-fade-in">Career Guidance</h1>
        <p className="questionaries-subtext animate-slide-up">
          Answer each question one by one — your career path awaits!
        </p>
      </section>

      {!complete ? (
        <form
          className="question-form animate-slide-up"
          onSubmit={(e) => {
            e.preventDefault();
            if (!loading) submitAnswer();
          }}
        >
          <div className="question-block">
            <label className="question-label">Question {questionNumber}</label>
            <p className="question-text">{question}</p>
            <textarea
              className="question-textarea"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              required
              disabled={loading}
              ref={inputRef}
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={loading || !answer.trim()}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      ) : (
        <div className="question-submit-message animate-gradient-text">
           All done! Here are your career recommendations:
          <br />
          <br />
          <pre style={{ whiteSpace: "pre-wrap", color: "#111", background: "#fff8", padding: "1rem", borderRadius: "10px" }}>
            {recommendations || "Loading recommendations..."}
          </pre>
        </div>
      )}
    </div>
  );
}