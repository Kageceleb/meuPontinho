import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '../screens/Profile';
import Login from '../screens/Login';
import DrawerRoutes from './drawer.routes';
import CreateAccount from '../screens/CreateAccount';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
         screenOptions={{title:''}}
         >
            <Stack.Screen
                name='login'
                component={Login}

            />
            <Stack.Screen
                name='createAccount'
                component={CreateAccount}

            />
            <Stack.Screen
                name='main'
                component={DrawerRoutes}

            />
        </ Stack.Navigator>
    )
}