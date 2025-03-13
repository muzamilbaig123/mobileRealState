import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/components/Login/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./src/components/dashboard/Dashboard";



export default function App () {

  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
          <Stack.Screen name="Dashboard" options={{headerShown: false}} component={Dashboard} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}