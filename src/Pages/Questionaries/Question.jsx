import { useState, useEffect, useRef } from "react";
import "./Question.css";
import Nav from "../../Components/Navbar/Nav.jsx";
import "./../../Components/Navbar/Nav.css";
import ReactMarkdown from 'react-markdown';

// Use environment variable for API URL, fallback to Render URL if not set
const API_URL = import.meta.env.VITE_API_URL || "https://career-guidance-backend-yvaw.onrender.com";

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
          {recommendations ? (
            <div className="recommendations-markdown-container left-align-markdown">
              <ReactMarkdown
                components={{
                  h3: ({node, ...props}) => <h3 style={{color: '#4f0563', marginTop: '1.5em', textAlign: 'left'}} {...props} />,
                  ul: ({node, ...props}) => <ul style={{marginLeft: '1.5em', marginBottom: '1em', textAlign: 'left'}} {...props} />,
                  li: ({node, ...props}) => <li style={{marginBottom: '0.5em', textAlign: 'left'}} {...props} />,
                  strong: ({node, ...props}) => <strong style={{color: '#5e0996'}} {...props} />,
                  p: ({node, ...props}) => <p style={{marginBottom: '0.7em', textAlign: 'left'}} {...props} />,
                  em: ({node, ...props}) => <em style={{color: '#333'}} {...props} />,
                  code: ({node, ...props}) => <code style={{background: '#f4f4f4', padding: '2px 4px', borderRadius: '4px'}} {...props} />,
                }}
              >{recommendations}</ReactMarkdown>
            </div>
          ) : (
            <div style={{color: '#888', fontStyle: 'italic'}}>Loading recommendations...</div>
          )}
        </div>
      )}
    </div>
  );
}