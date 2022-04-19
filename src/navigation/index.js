import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./bottom-tabs";
import ManageExpense from "../screens/ManageExpense";

import colors from "../constants/colors";

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
        <Stack.Screen
          name="manage-expense"
          component={ManageExpense}
          options={{
            presentation: "modal",
            headerStyle: {
              backgroundColor: colors.primary500,
            },
            headerTintColor: colors.white,
            contentStyle: {
              backgroundColor: colors.primary800,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
