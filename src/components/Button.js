import { StyleSheet, Pressable, View, Text } from "react-native";

import colors from "../constants/colors";

const Button = ({ onPress, label, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.buttonPressed}
    >
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.75,
  },
  container: {
    padding: 12,
    borderRadius: 8,
  },
  label: {
    color: colors.white,
    textAlign: "center",
  },
});
