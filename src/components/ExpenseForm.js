import { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ExpensesContext } from "../context/expenses";

import FormControl from "./FormControl";
import Button from "./Button";

import colors from "../constants/colors";

const ExpenseForm = ({ expenseData }) => {
  const [expense, setExpense] = useState({
    amount: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    setExpense({
      amount: expenseData?.amount || "",
      date: expenseData?.date || "",
      description: expenseData?.description || "",
    });
  }, [expenseData]);

  const expensesContext = useContext(ExpensesContext);
  const navigation = useNavigation();

  const textInputChangeHandler = (value, key) => {
    setExpense((prevExpense) => ({ ...prevExpense, [key]: value }));
  };

  const submitHandler = () => {
    const data = {
      id: Math.random().toString(),
      amount: +expense.amount,
      date: new Date(expense.date),
      description: expense.description,
    };

    if (expenseData) {
      expensesContext.updateExpense(expenseData.id, data);
    } else {
      expensesContext.addExpense(data);
    }

    closeModalHandler();
  };

  const deleteHandler = () => {
    expensesContext.deleteExpense(expenseData.id);

    closeModalHandler();
  };

  const closeModalHandler = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.row}>
        <FormControl
          containerStyle={{ flex: 1 }}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            value: expense.amount,
            onChangeText: (value) => textInputChangeHandler(value, "amount"),
          }}
        />
        <View style={styles.spacer10}></View>
        <FormControl
          containerStyle={{ flex: 1 }}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            value: expense.date,
            onChangeText: (value) => textInputChangeHandler(value, "date"),
          }}
        />
      </View>
      <FormControl
        label="Description"
        textInputConfig={{
          multiline: true,
          value: expense.description,
          onChangeText: (value) => textInputChangeHandler(value, "description"),
        }}
        textInputStyle={{ textAlignVertical: "top", minHeight: 100 }}
      />

      <View style={styles.buttonContainer}>
        {expenseData && (
          <>
            <View style={styles.button}>
              <Button
                onPress={deleteHandler}
                label="Delete"
                color={colors.error500}
              />
            </View>
            <View style={styles.spacer10}></View>
          </>
        )}

        <View style={styles.button}>
          <Button
            onPress={submitHandler}
            label={expenseData ? "Edit" : "Add"}
            color={colors.primary500}
          />
        </View>
      </View>
    </>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 24,
  },
  spacer10: {
    width: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  button: {
    flex: 1,
  },
});
