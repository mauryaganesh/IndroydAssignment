// src/components/ComputerScreen.js
import React from "react";
import "./index.css";

const ComputerScreen = ({
  questions,
  currentQuestionIndex,
  players,
  playerAnswers,
  winner,
}) => {
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="computer-screen">
      <h1>KBC-Style Quiz Game</h1>
      <h2>Question:</h2>
      <p>{currentQuestion.question}</p>
      <ul className="options">
        {currentQuestion.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <h3>Players' Answers:</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player}: {playerAnswers[player] || "No answer yet"}
          </li>
        ))}
      </ul>
      {winner && (
        <div className="winner">
          <h2>Congratulations, {winner}!</h2>
        </div>
      )}
    </div>
  );
};

export default ComputerScreen;
