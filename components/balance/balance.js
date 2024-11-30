"use client";
import { useState } from "react";
import { Newtransaction } from "../newtransection/newtransaction";
import { History } from "../transactionhistory/transactionhistory";

export function Balance() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [history, setHistory] = useState([]);

  // Handles adding new transactions
  const handleTransaction = (amount, description) => {
    if (amount > 0) {
      setIncome((prevIncome) => prevIncome + amount);
    } else {
      setExpense((prevExpense) => prevExpense + Math.abs(amount));
    }
    setBalance((prevBalance) => prevBalance + amount);

    // Add to the history
    setHistory((prevHistory) => [
      ...prevHistory,
      { description, amount },
    ]);
  };

  // Handles deleting transactions and updating balance/income/expense
  const handleDeleteTransaction = (index) => {
    const transactionToDelete = history[index];

    // Adjust the balance, income, or expense based on the transaction
    setBalance((prevBalance) => prevBalance - transactionToDelete.amount);

    if (transactionToDelete.amount > 0) {
      setIncome((prevIncome) => prevIncome - transactionToDelete.amount);
    } else {
      setExpense((prevExpense) => prevExpense - Math.abs(transactionToDelete.amount));
    }

    // Remove the transaction from the history
    setHistory((prevHistory) => prevHistory.filter((_, i) => i !== index));
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column full-height">
      <h4 className="mt-2 fw-bold">Expense Tracker by Dawood Rana</h4>

      {/* Balance Section */}
      <div>
        <h6 className="fw-bold mt-4 mb-0">CURRENT BALANCE</h6>
        <h2 className="text-center fw-semibold mb-3 mt-0">${balance}.00</h2>
      </div>

      <div
        style={{
          width: "360px",
          height: "90px",
          backgroundColor: "#ffffff",
        }}
        className="d-flex align-items-center mb-4 justify-content-evenly"
      >
        <div>
          <h6 className="mb-0 fw-bold">INCOME</h6>
          <h5 style={{ color: "#b6960a" }} className="text-center fw-bold mt-0">
            ${income}.00
          </h5>
        </div>
        <div
          style={{
            width: "1px",
            height: "50px",
            backgroundColor: "#d3cfcf",
          }}
        ></div>
        <div>
          <h6 className="mb-0 fw-bold">EXPENSE</h6>
          <h5 style={{ color: "#2da3ad" }} className="text-center fw-bold mt-0">
            ${expense}.00
          </h5>
        </div>
      </div>

      {/* History and Newtransaction Components */}
      <History history={history} onDeleteTransaction={handleDeleteTransaction} />
      <Newtransaction onAddTransaction={handleTransaction} />
    </div>
  );
}
