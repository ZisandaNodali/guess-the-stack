const QuizCard = ({ question, selected, onSelect, onSubmit, hasSubmitted }) => {
  return (
    <div className="quiz-card">
      <h2>{question.appName}</h2>
      <p>{question.description}</p>

      <div>
        <h4>Frontend:</h4>
        {question.options.frontend.map((option, index) => (
          <label
            key={option}
            className={`option-button ${selected.frontend === option ? 'selected' : ''}`}
          >
            <span className="option-label">{String.fromCharCode(65 + index)}</span>
            <input
              type="radio"
              name="frontend"
              value={option}
              checked={selected.frontend === option}
              onChange={() => onSelect("frontend", option)}
              hidden
            />
            {option}
          </label>
        ))}
      </div>

      <div>
        <h4>Backend:</h4>
        {question.options.backend.map((option, index) => (
          <label
            key={option}
            className={`option-button ${selected.backend === option ? 'selected' : ''}`}
          >
            <span className="option-label">{String.fromCharCode(65 + index)}</span>
            <input
              type="radio"
              name="backend"
              value={option}
              checked={selected.backend === option}
              onChange={() => onSelect("backend", option)}
              hidden
            />
            {option}
          </label>
        ))}
      </div>

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