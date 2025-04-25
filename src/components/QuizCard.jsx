const QuizCard = ({ question, selected, onSelect, onSubmit, hasSubmitted }) => {
    return (
      <div className="quiz-card">
        <h2>{question.appName}</h2>
        <p>{question.description}</p>
  
        <div>
          <h4>Frontend:</h4>
          {question.options.frontend.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="frontend"
                value={option}
                checked={selected.frontend === option}
                onChange={() => onSelect("frontend", option)}
              />
              {option}
            </label>
          ))}
        </div>
  
        <div>
          <h4>Backend:</h4>
          {question.options.backend.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="backend"
                value={option}
                checked={selected.backend === option}
                onChange={() => onSelect("backend", option)}
              />
              {option}
            </label>
          ))}
        </div>
      
      {/* ✅ Show correct answers after submission */}
      {hasSubmitted && (
        <div className="answers">
          <p>✅ Correct Frontend: {question.correctAnswers.frontend}</p>
          <p>✅ Correct Backend: {question.correctAnswers.backend}</p>
        </div>
      )}
  
      <button
        onClick={onSubmit}
        disabled={!selected.frontend || !selected.backend}
      >
        {hasSubmitted ? "Next Question" : "Submit Guess"}
      </button>
      </div>
    );
  };
  
  export default QuizCard;
  