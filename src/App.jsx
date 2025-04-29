import { useState } from "react";
import quizData from "./components/data/quizData";
import QuizCard from "./components/QuizCard";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState({ frontend: "", backend: "" });
  const [showResult, setShowResult] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);


  const currentQuestion = quizData[current];

  const handleSelect = (type, value) => {
    setSelected({ ...selected, [type]: value });
  };

  const handleSubmit = () => {
    if (!hasSubmitted) {
      const isCorrect =
        selected.frontend === currentQuestion.correctAnswers.frontend &&
        selected.backend === currentQuestion.correctAnswers.backend;
  
      if (isCorrect) setScore((prev) => prev + 1);
      setHasSubmitted(true);
    } else {
      if (current + 1 < quizData.length) {
        setCurrent(current + 1);
        setSelected({ frontend: "", backend: "" });
        setHasSubmitted(false);
      } else {
        setShowResult(true);
      }
    }
  };
  

  return (
    <div className="app">
      <h1>Guess the Stack</h1>
      {showResult ? (
        <div className="result">
          <h2>Game Over</h2>
          <p>Your score: {score} / {quizData.length}</p>
           {/* ✅ Show correct answers after game over */}
          <div className="all-answers">
            <h3>Correct Answers:</h3>
            {quizData.map((question) => (
              <div key={question.id} className="answer-card">
                <h4>{question.appName}</h4>
                <p>Frontend: {question.correctAnswers.frontend}</p>
                <p>Backend: {question.correctAnswers.backend}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <QuizCard
          question={currentQuestion}
          selected={selected}
          onSelect={handleSelect}
          onSubmit={handleSubmit}
          hasSubmitted={hasSubmitted}
        />
      )}
    </div>
  );
}

export default App;
