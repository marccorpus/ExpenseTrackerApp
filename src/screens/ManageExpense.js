import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import IconButton from "../components/IconButton";
import FormControl from "../components/FormControl";
import Button from "../components/Button";

import colors from "../constants/colors";

const ManageExpense = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const setTitle = () => {
    navigation.setOptions({
      title: route.params?.id ? "Edit Expense" : "Add Expense",
    });
  };

  const buttonLabel = route.params?.id ? "Update" : "Add";

  const closeModal = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setTitle();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.closeButtonContainer}>
        <IconButton
          name="close"
          color={colors.white}
          size={24}
          onPress={closeModal}
        />
      </View>

      <Text style={styles.title}>Your Expense</Text>

      <View style={styles.row}>
        <FormControl
          containerStyle={{ flex: 1 }}
          label="Amount"
          textInputConfig={{ keyboardType: "decimal-pad" }}
        />
        <View style={styles.spacer10}></View>
        <FormControl
          containerStyle={{ flex: 1 }}
          label="Date"
          textInputConfig={{ placeholder: "YYYY-MM-DD" }}
        />
      </View>
      <FormControl
        label="Description"
        textInputConfig={{ multiline: true }}
        textInputStyle={{ textAlignVertical: "top", minHeight: 100 }}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            onPress={null}
            label={buttonLabel}
            color={colors.primary500}
          />
        </View>
        <View style={styles.spacer10}></View>
        <View style={styles.button}>
          <Button onPress={null} label="Delete" color={colors.error500} />
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
