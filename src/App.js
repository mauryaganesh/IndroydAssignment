import React, { useState, useEffect } from "react";
import QRCodeDisplay from "./components/QRCodeDisplay";
import PlayerList from "./components/PlayerList";
import QuestionDisplay from "./components/QuestionDisplay";
import "./App.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
    correctAnswer: "A",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "A. Charles Dickens",
      "B. Leo Tolstoy",
      "C. William Shakespeare",
      "D. Mark Twain",
    ],
    correctAnswer: "C",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["A. H2O", "B. CO2", "C. O2", "D. N2"],
    correctAnswer: "A",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "A. Pablo Picasso",
      "B. Vincent van Gogh",
      "C. Leonardo da Vinci",
      "D. Claude Monet",
    ],
    correctAnswer: "C",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["A. Earth", "B. Mars", "C. Venus", "D. Jupiter"],
    correctAnswer: "B",
  },
];

function App() {
  const [players, setPlayers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  // Function to validate the answer
  const checkAnswer = (answer) => {
    const playerName = localStorage.getItem("playerName");
    if (answer === currentQuestion.correctAnswer) {
      setMessage(`Congratulations, ${playerName} answered correctly!`);
      updateScore(playerName);
      setTimeout(nextQuestion, 2000); // Move to next question after 2 seconds
    } else {
      setMessage("Incorrect answer. Please try again.");
    }
  };

  // Update player score when answer is correct
  const updateScore = (playerName) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === playerName
          ? { ...player, score: player.score + 1 }
          : player
      )
    );
  };

  // Go to the next question
  const nextQuestion = () => {
    if (currentQuestionIndex >= questions.length - 1) {
      setMessage("Quiz complete! Thanks for playing.");
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setMessage(""); // Clear the message
      localStorage.removeItem("submittedAnswer"); // Clear the submitted answer
      setAnswerSubmitted(false); // Reset the answer submission state
    }
  };

  // Capture submitted answer from mobile and check if it's correct
  useEffect(() => {
    const answer = localStorage.getItem("submittedAnswer");
    if (answer && answerSubmitted) {
      checkAnswer(answer);
    }
  }, [answerSubmitted, checkAnswer]); // Add `checkAnswer` as a dependency

  return (
    <div className="App">
      <h1>KBC Style Quiz</h1>
      <QRCodeDisplay />
      <PlayerList players={players} />
      <QuestionDisplay
        question={currentQuestion}
        onAnswerSubmit={(answer) => {
          setAnswerSubmitted(true);
        }}
      />
      <div className="message">{message}</div>
      {currentQuestionIndex >= questions.length && (
        <div className="score-summary">
          <h2>Final Scores</h2>
          {players.map((player, index) => (
            <p key={index}>
              {player.name}: {player.score} points
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
