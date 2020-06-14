import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Transaction = props => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = props.transaction.amount >= 0 ? "+" : "-";

  return (
    <div>
      <li className={props.transaction.amount >= 0 ? "plus" : "minus"}>
        {props.transaction.text}{" "}
        <span>
          {sign}${numberWithCommas(Math.abs(props.transaction.amount))}
        </span>
        <button
          onClick={() => deleteTransaction(props.transaction._id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};
