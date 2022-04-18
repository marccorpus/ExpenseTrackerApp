import { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { ExpensesContext } from "../context/expenses";

import NoExpense from "../components/NoExpense";
import Summary from "../components/Summary";
import Expenses from "../components/Expenses";

const AllExpenses = () => {
  const expensesContext = useContext(ExpensesContext);

  const expenses = expensesContext.expenses;

  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  if (expenses.length === 0) {
    return <NoExpense text="No expenses to show." />;
  }

  return (
    <View style={styles.container}>
      <Summary label="Total" value={total} />
      <Expenses expenses={expenses} />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
