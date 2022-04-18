import { StyleSheet, View, Text } from "react-native";

import colors from "../constants/colors";

const Summary = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.amount}>${value.toFixed(2)}</Text>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary50,
    padding: 12,
    borderRadius: 8,
  },
  label: {
    color: colors.primary800,
  },
  amount: {
    color: colors.primary800,
    fontWeight: "bold",
    fontSize: 16,
  },
});
