import { StyleSheet, View, FlatList } from "react-native";

import Expense from "./Expense";

const Expenses = ({ expenses }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Expense {...item} />}
      />
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
});
