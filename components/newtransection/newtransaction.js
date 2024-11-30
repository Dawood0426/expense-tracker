"use client";
import style from "./new.css"
import { useState } from "react";

export function Newtransaction({ onAddTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionAmount = parseFloat(amount);
    if (!isNaN(transactionAmount)) {
      onAddTransaction(transactionAmount , description);
    }
    setDescription("");
    setAmount("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column full-height">
      <h5 className="fw-bold  ">Add New Transaction</h5>
      <hr className="mt-1" style={{ width: "350px" }} />
      <div style={{ width: "100%" }}>
        <form onSubmit={handleSubmit}>
          <h6 className="fw-bold">Description</h6>
          <input id="first"
            className="mb-2 rounded-1 border-0"
            style={{
              width: "100%",
              outline: "1px solid #dedede",
              height: "40px",
            }}
            type="text"
            placeholder="Detail of Transaction"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <h6 className="fw-bold">Transaction Amount</h6>
          <input id="second"
            className="mb-2 rounded-1 border-0"
            style={{
              width: "100%",
              outline: "1px solid #dedede",
              height: "40px",
            }}
            type="number"
            placeholder="Dollar Value of Transaction"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            type="submit"
            className="border-0 fw-bold text-white"
            style={{
              width: "100%",
              backgroundColor: "#b0c4de",
              height: "40px",
            }}
          >
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
}
