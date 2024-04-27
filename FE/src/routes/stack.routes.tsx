import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '../screens/Profile';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{title:''}}>
            <Stack.Screen
                name='profile'
                component={Profile}

            />
        </ Stack.Navigator>
    )
}