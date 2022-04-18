import { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { ExpensesContext } from "../context/expenses";

import NoExpense from "../components/NoExpense";
import Summary from "../components/Summary";
import Expenses from "../components/Expenses";

import { getSubtractedDate } from "../utils/date";

const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);

  const expenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();

    return expense.date >= getSubtractedDate(today, 7) && expense.date <= today;
  });

  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  if (expenses.length === 0) {
    return <NoExpense text="No recent expenses to show." />;
  }

  return (
    <View style={styles.container}>
      <Summary label="Last 7 Days" value={total} />
      <Expenses expenses={expenses} />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
