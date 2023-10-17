import LoginScreen from "../screens/LoginScreen";
import MainAppScreen from "../screens/MainAppScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function StackRoutes() {

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MainAppScreen" component={MainAppScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}