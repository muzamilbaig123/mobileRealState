import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/components/Login/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./src/components/dashboard/Dashboard";
import Started from "./src/components/started/Started";
import UserScreen from "./src/components/user/UserScreen";



export default function App () {

  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>


          <Stack.Screen name="Started" options={{headerShown: false}} component={Started} />
          <Stack.Screen name="UserScreen" options={{headerShown: false}} component={UserScreen} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
          <Stack.Screen name="Dashboard" options={{headerShown: false}} component={Dashboard} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}