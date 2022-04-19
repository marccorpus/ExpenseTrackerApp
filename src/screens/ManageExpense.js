import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ExpensesContext } from "../context/expenses";

import IconButton from "../components/IconButton";
import ExpenseForm from "../components/ExpenseForm";

import colors from "../constants/colors";

const ManageExpense = () => {
  const [expenseData, setExpenseData] = useState();
  const expensesContext = useContext(ExpensesContext);

  const navigation = useNavigation();
  const route = useRoute();

  const routeId = route.params?.id;

  const setTitle = () => {
    navigation.setOptions({
      title: routeId ? "Edit Expense" : "Add Expense",
    });
  };

  const getExpense = () => {
    if (routeId) {
      const data = expensesContext.expenses.find(
        (expense) => expense.id === routeId
      );

      setExpenseData({
        ...data,
        amount: data.amount.toString(),
        date: new Date(data.date).toISOString().slice(0, 10),
      });
    }
  };

  const closeModalHandler = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setTitle();

    getExpense();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.closeButtonContainer}>
        <IconButton
          name="close"
          color={colors.white}
          size={24}
          onPress={closeModalHandler}
        />
      </View>

      <Text style={styles.title}>Your Expense</Text>

      <ExpenseForm expenseData={expenseData} />
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  closeButtonContainer: {
    alignSelf: "flex-end",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
  },
});
