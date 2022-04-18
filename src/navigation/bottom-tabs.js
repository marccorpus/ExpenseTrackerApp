import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";

import colors from "../constants/colors";

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary500,
        },
        headerTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.primary500,
        },
        tabBarActiveTintColor: colors.accent500,
        tabBarInactiveTintColor: colors.white,
      }}
      sceneContainerStyle={{
        backgroundColor: colors.primary800,
      }}
    >
      <BottomTab.Screen
        name="recent-expenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="hourglass" color={color} size={size} />;
          },
        }}
      />
      <BottomTab.Screen
        name="all-expenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="calendar" color={color} size={size} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
