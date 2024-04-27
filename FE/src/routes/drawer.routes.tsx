import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';
import Profile from '../screens/Profile';
import TimeTableView from '../screens/TimeTableView';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen
                name='home'
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    drawerLabel: 'Inicio'
                }}
            />
            <Drawer.Screen
                name='profile'
                component={Profile}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    drawerLabel: 'Perfil'
                }}
            />
            <Drawer.Screen
                name='time table'
                component={TimeTableView}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="book-open" color={color} size={size} />,
                    drawerLabel: 'Ponto'
                }}
            />
        </ Drawer.Navigator>
    )
}