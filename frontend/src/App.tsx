import { FormTransaction } from "./components/form-transaction";

export function App() {

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      height: "100vh"
    }}>
      <FormTransaction />
    </main>
  )
}

