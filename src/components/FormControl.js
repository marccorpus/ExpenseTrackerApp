import { StyleSheet, View, Text, TextInput } from "react-native";

import colors from "../constants/colors";

const FormControl = ({
  containerStyle,
  label,
  textInputConfig,
  textInputStyle,
  isError,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, isError && styles.labelError]}>{label}</Text>
      <TextInput
        {...textInputConfig}
        style={[
          styles.textInput,
          textInputStyle,
          isError && styles.textInputError,
        ]}
      />
    </View>
  );
};

export default FormControl;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  label: {
    color: colors.white,
  },
  labelError: {
    color: colors.error500,
  },
  textInput: {
    backgroundColor: colors.primary50,
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    fontSize: 16,
    color: colors.primary800,
  },
  textInputError: {
    backgroundColor: colors.error50,
  },
});
