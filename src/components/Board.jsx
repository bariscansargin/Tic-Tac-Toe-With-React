import React, { useEffect, useState } from "react";
import "./Board.css";
import Square from "./Square";

const Board = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [value, setValue] = useState("X");
  const [winner, setWinner] = useState(null);
  const boardUpdater = [...board];

  const clickHandler = (id) => {
    const emptyIndex = indexIsEmpty(id, boardUpdater);

    if (emptyIndex && !winner) {
      valueChanger();
      boardUpdater[id] = value;
      setBoard(boardUpdater);
    }

    setWinner(checkWinner(boardUpdater));
  };

  const resetHandler = () => {
    setBoard(new Array(9).fill(null));
    setValue("X");
    setWinner(null);
  };
  const valueChanger = () => {
    setValue((value) => {
      if (value === "X") {
        return "O";
      }
      return "X";
    });
  };
  const indexIsEmpty = (id, board) => {
    return board[id] === null;
  };

  const checkWinner = (board) => {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  const boardRendering = () => {};
  return (
    <>
      {winner && (
        <h1 style={{ color: winner === "X" ? "#19A7CE" : "#FFD95A" }}>
          Winner = {winner}
        </h1>
      )}
      <div className="board">
        {board.map((boardValue, idx) => {
          return (
            <Square
              key={idx}
              id={idx}
              clickHandler={clickHandler}
              value={boardValue}
            />
          );
        })}
      </div>
      <button className="reset-button" onClick={resetHandler}>
        RESET BOARD
      </button>
    </>
  );
};

export default Board;
