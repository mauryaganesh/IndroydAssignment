// src/components/MobileScreen.js
import React, { useState } from "react";
import "./index.css";

const MobileScreen = ({
  questions,
  currentQuestionIndex,
  players,
  addPlayer,
  handleAnswerSubmission,
}) => {
  const [name, setName] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const currentQuestion = questions[currentQuestionIndex];

  const handleJoin = () => {
    if (name && !players.includes(name)) {
      addPlayer(name);
      setName("");
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer && name) {
      handleAnswerSubmission(name, selectedAnswer);
      setSelectedAnswer("");
    }
  };

  return (
    <div className="mobile-screen">
      <h1>Join the Game</h1>
      {!players.includes(name) ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button onClick={handleJoin}>Join Game</button>
        </>
      ) : (
        <>
          <h2>{currentQuestion.question}</h2>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={option.charAt(0)}
                  checked={selectedAnswer === option.charAt(0)}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
          <button onClick={handleSubmitAnswer}>Submit Answer</button>
        </>
      )}
    </div>
  );
};

export default MobileScreen;
