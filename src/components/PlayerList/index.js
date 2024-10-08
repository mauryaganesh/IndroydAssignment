import React from "react";
import "./index.css";

const PlayerList = ({ players }) => {
  return (
    <div className="player-list">
      <h2>Players</h2>
      {players.length > 0 ? (
        players.map((player, index) => <p key={index}>{player.name}</p>)
      ) : (
        <p>No players joined yet.</p>
      )}
    </div>
  );
};

export default PlayerList;
