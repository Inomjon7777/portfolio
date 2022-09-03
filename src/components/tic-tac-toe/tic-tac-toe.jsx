import React, { useState } from "react";
// tic-tac-toe.scss fayli import qilindi
import styles from "./tic-tac-toe.module.scss";

const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  // cellarni necha marta bosilishini taminlayapti. Bu yerda 9 marta bosilishini taminlayapti
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  //g'olibni aniqlovchi funksiya tuzildi
  const checkForWinner = (squares) => {
    let combos = {
      //gorizontal bo'yicha joylashuv
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      //vertikal bo'yicha joylashuv
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      //diagnol bo'yicha joylashuv
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    // "x" va "o" ni tekshirayapti gorizontal, vertical va diogonal bo'yicha tekshirayapti
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    // Agar kubiklarni allaqachon bosilgan bo'lsa alertda ogohlantiriladi
    if (cells[num] !== "") {
      alert("BU CELL OLDIN BOSILGAN !");
      return;
    }
    let squares = [...cells];

    //Agar "x" bo'lsa "o" ga o'zgartir aks holda "x" ni qaytar
    if (turn === "x") {
      // kubiklarni ichidagi "x" harfini ko'rsatib beradi
      squares[num] = "x";

      //setTurn => Agar "x" bo'lsa o ga o'zgartirib beradi
      setTurn("o");
    } else {
      // kubiklarni ichidagi "o" harfini ko'rsatib beradi
      squares[num] = "o";

      //setTurn => Agar "o" bo'lsa "x" ga o'zgartirib beradi
      setTurn("x");
    }

    checkForWinner(squares);

    //setCells ga argument jo'natildi
    setCells(squares);
  };

  //Bu funksiya yordamida Restart button bosilganda o'yin qaytadan ishga tushadi
  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  //cellarni yaratib berayapti
  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  return (
    <div>
      <table className={styles.table}>
        <p className={styles.turn}>Turn : {turn}</p>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {/* winner ni ko'rsatib beradi */}
      {winner && (
        <>
          <p className={styles.winnerDeterminer}>{winner} is the winner </p>
          <button className={styles.button} onClick={() => handleRestart()}>
            Restart
          </button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
