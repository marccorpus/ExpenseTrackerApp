import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Expense from "./Expense";

const Expenses = ({ expenses }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("manage-expense", {
                id: item.id,
              })
            }
            style={({ pressed }) => pressed && styles.pressedButton}
          >
            <Expense {...item} />
          </Pressable>
        )}
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
  pressedButton: {
    opacity: 0.75,
  },
});
