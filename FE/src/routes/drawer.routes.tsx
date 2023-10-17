import { createDrawerNavigator } from '@react-navigation/drawer'

import TabRoutes from './tab.routes'
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ title: ''}}>
            <Drawer.Screen
                name="home"
                component={TabRoutes}
                options={{
                    drawerLabel: 'titulo'

                }}
            />
            <Drawer.Screen
            name="main"
            component={StackRoutes}
            options={{
                drawerLabel: 'rotasMain' }}
            />

        </Drawer.Navigator>
    )
}