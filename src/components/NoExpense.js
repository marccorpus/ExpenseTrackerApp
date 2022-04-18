import { StyleSheet, View, Text } from "react-native";

import colors from "../constants/colors";

const NoExpense = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default NoExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});
