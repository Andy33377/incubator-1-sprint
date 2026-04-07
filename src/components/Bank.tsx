import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { useState } from "react";
import { ADD, GET } from "../features/bankSlice";

export default function Bank() {
  const balance = useSelector((state: RootState) => state.bank.balance);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>Balance: {balance}</h1>

      <input
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button onClick={() => dispatch(ADD(amount))}>ADD</button>
      <button onClick={() => dispatch(GET(amount))}>SET </button>
    </div>
  );
}
