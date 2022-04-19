import { useEffect } from "react";
import { Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const ManageExpense = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const setTitle = () => {
    navigation.setOptions({
      title: route.params?.id ? "Edit Expense" : "Add Expense",
    });
  };

  useEffect(() => {
    setTitle();
  }, []);

  return <Text>Manage Expense Screen</Text>;
};

export default ManageExpense;
