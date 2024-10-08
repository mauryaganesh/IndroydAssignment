import React from "react";
import "./index.css";

const QuestionDisplay = ({ question, onAnswerSubmit }) => {
  const handleAnswerClick = (answer) => {
    localStorage.setItem("submittedAnswer", answer);
    onAnswerSubmit(answer);
  };

  return (
    <div className="question-display">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerClick(option[0])}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionDisplay;
