import { useState, type SubmitEvent } from "react";

export function FormTransaction() {
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionDescription, setTransactionDescription] = useState("");

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!transactionAmount || !transactionDescription.trim()) return;

    const formData = {
      transactionAmount: transactionAmount,
      transactionDescription: transactionDescription
    }

    try {
      
    } catch (error) {
      
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
      <label htmlFor="transaction-amount">Transaction Amount</label>
      <input id="transaction-amount" type="number" placeholder="Input the transaction amount" value={transactionAmount} onChange={e => setTransactionAmount(Number(e.target.value))} />

      <label htmlFor="transaction-description">Transaction Description</label>
      <input id="transaction-description" type="text" placeholder="Input the transaction description" value={transactionDescription} onChange={e => setTransactionDescription(e.target.value)} />

      <button type="submit" disabled={!transactionAmount || !transactionDescription.trim()}>
        Save
      </button>
    </form>
  )

}