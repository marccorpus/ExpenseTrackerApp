import { useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ExpensesContext } from "../context/expenses";

import IconButton from "../components/IconButton";
import ExpenseForm from "../components/ExpenseForm";

import colors from "../constants/colors";

const ManageExpense = () => {
  const expensesContext = useContext(ExpensesContext);

  const navigation = useNavigation();
  const route = useRoute();

  const routeId = route.params?.id;

  const expenseData = expensesContext.expenses.find(
    (expense) => expense.id === routeId
  );

  const closeModalHandler = () => {
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      title: routeId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, routeId]);

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

      <ExpenseForm expenseData={expenseData} onCloseModal={closeModalHandler} />
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
