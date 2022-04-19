import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import IconButton from "../components/IconButton";
import FormControl from "../components/FormControl";
import Button from "../components/Button";

import { ExpensesContext } from "../context/expenses";

import colors from "../constants/colors";

const ManageExpense = () => {
  const [expense, setExpense] = useState({
    amount: "",
    date: "",
    description: "",
  });
  const [expenseId, setExpenseId] = useState();
  const [buttonLabel, setButtonLabel] = useState("Add");
  const [isEditing, setIsEditing] = useState(false);

  const expensesContext = useContext(ExpensesContext);

  const navigation = useNavigation();
  const route = useRoute();

  const setTitle = () => {
    navigation.setOptions({
      title: route.params?.id ? "Edit Expense" : "Add Expense",
    });
  };

  const getExpense = () => {
    const routeId = route.params?.id;

    if (routeId) {
      setExpenseId(routeId);
      setButtonLabel("Edit");
      setIsEditing(true);

      const data = expensesContext.expenses.find(
        (expense) => expense.id === routeId
      );

      setExpense({
        ...data,
        amount: data.amount.toString(),
        date: new Date(data.date).toISOString().slice(0, 10),
      });
    }
  };

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

    if (isEditing) {
      expensesContext.updateExpense(expenseId, data);
    } else {
      expensesContext.addExpense(data);
    }

    closeModalHandler();
  };

  const deleteHandler = () => {
    expensesContext.deleteExpense(expenseId);

    closeModalHandler();
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
        {isEditing && (
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
            label={buttonLabel}
            color={colors.primary500}
          />
        </View>
      </View>
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
