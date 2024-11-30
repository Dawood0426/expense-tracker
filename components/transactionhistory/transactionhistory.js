"use client";
import style from  "./transactionhistory.css"
import { useState } from "react";

export function History({ history, onDeleteTransaction }) {



    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className="d-flex justify-content-center mt-3 mb-4 align-items-center flex-column full-height">
            <h5 className="fw-bold">Transaction History</h5>
            <div>
                <hr className="mt-1 mb-2" style={{ width: "350px" }} />
            </div>
            <ul id="hoverwali" style={{ listStyle: "none", padding: 0, width: "100%" }}>
                {history.map((transaction, index) => (
                    <li id="hoverlist"
                        key={index}
                        className="d-flex justify-content-between"
                        style={{
                            
                            marginBottom: "10px",
                            padding: "10px",
                            borderBottom: "1px solid #dedede",
                            // backgroundColor: "#ffffff"
                            // color: transaction.amount > 0 ? "#b6960a" : "#2da3ad",
                            transition: "background-color 0.3s, color 0.3s",
                            backgroundColor:
                                hoverIndex === index
                                    ? transaction.amount > 0
                                        ? "#b6960a" 
                                        : "#2da3ad"
                                    : "#ffffff",
                        }}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >

                        {hoverIndex === index && (
                            <button
                                onClick={() => onDeleteTransaction(index)}
                                style={{
                                  marginLeft:"-30px",
                                  marginTop:"5%",
                                    transform: "translateY(-50%)",
                                    backgroundColor: "#8a6a66",
                                    border: "none",
                                    color: "white",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                }}
                            >
                                X
                            </button>
                        )}

                        <span className="fw-semibold" >{transaction.description}</span>
                        <span
                            style={{
                                // color: transaction.amount > 0 ? "#b6960a" : "#2da3ad",
                                fontWeight: "bold",
                            }}
                        >
                            ${transaction.amount.toFixed(2)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}