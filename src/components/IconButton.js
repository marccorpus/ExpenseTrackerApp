import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, name, color, size }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.buttonPressed}
    >
      <View style={styles.container}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.75,
  },
  container: {
    padding: 8,
  },
});
