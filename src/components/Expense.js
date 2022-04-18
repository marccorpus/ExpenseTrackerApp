import { StyleSheet, View, Text } from "react-native";

import colors from "../constants/colors";

const Expense = ({ id, amount, description, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{date.toISOString().slice(0, 10)}</Text>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.amount}>${amount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default Expense;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    padding: 12,
    borderRadius: 8,
  },
  leftContent: {
    maxWidth: "60%",
  },
  description: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color: colors.primary50,
    marginTop: 8,
  },
  rightContent: {
    borderRadius: 8,
    backgroundColor: colors.white,
    padding: 12,
    minWidth: 100,
  },
  amount: {
    color: colors.primary800,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
