import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";

import ExpensesContextProvider from "./src/context/expenses";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <Navigation />
      </ExpensesContextProvider>
    </>
  );
}
