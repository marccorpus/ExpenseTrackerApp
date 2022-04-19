import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import { ExpensesContext } from "../context/expenses";

import FormControl from "./FormControl";
import Button from "./Button";

import colors from "../constants/colors";

const ExpenseForm = ({ expenseData, onCloseModal }) => {
  const [expense, setExpense] = useState({
    amount: "",
    date: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    amount: false,
    date: false,
    description: false,
  });

  useEffect(() => {
    setExpense({
      amount: expenseData?.amount || "",
      date: expenseData?.date || "",
      description: expenseData?.description || "",
    });
  }, [expenseData]);

  const expensesContext = useContext(ExpensesContext);

  const textInputChangeHandler = (value, key) => {
    setExpense((prevExpense) => ({ ...prevExpense, [key]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [key]: false }));
  };

  const submitHandler = () => {
    const data = {
      id: Math.random().toString(),
      amount: +expense.amount,
      date: new Date(expense.date),
      description: expense.description,
    };

    const isAmountValid = !isNaN(data.amount) && data.amount > 0;
    const isDateValid = data.date.toString() !== "Invalid Date";
    const isDescriptionValid = data.description.trim().length > 0;

    if (!isAmountValid || !isDateValid || !isDescriptionValid) {
      setErrors({
        amount: !isAmountValid,
        date: !isDateValid,
        description: !isDescriptionValid,
      });

      return;
    }

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
    onCloseModal();
  };

  const hasErrors = errors.amount || errors.date || errors.description;

  return (
    <>
      <View style={styles.row}>
        <FormControl
          containerStyle={{ flex: 1 }}
          label="Amount"
          isError={errors.amount}
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
          isError={errors.date}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            value: expense.date,
            onChangeText: (value) => textInputChangeHandler(value, "date"),
          }}
        />
      </View>
      <FormControl
        label="Description"
        isError={errors.description}
        textInputConfig={{
          multiline: true,
          value: expense.description,
          onChangeText: (value) => textInputChangeHandler(value, "description"),
        }}
        textInputStyle={{ textAlignVertical: "top", minHeight: 100 }}
      />

      {hasErrors && (
        <Text style={styles.errorText}>
          Invalid data. Please check your input values.
        </Text>
      )}

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
  errorText: {
    textAlign: "center",
    color: colors.error50,
    fontSize: 16,
    marginTop: 24,
  },
});
