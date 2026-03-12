interface IProps {
  transactionList: {
    id: string;
    transactionAmount: number;
    transactionDescription: string;
    // transactionTimestamp?
  }[]
}

export function TransactionList({ transactionList }: IProps) {


  return (
    <table>
      <thead>
      </thead>
      <tbody></tbody>
    </table>
  )
}