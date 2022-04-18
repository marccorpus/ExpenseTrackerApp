import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./bottom-tabs";
import ManageExpense from "../screens/ManageExpense";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="bottom-tabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="manage-expense" component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
