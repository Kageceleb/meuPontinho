import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Options} from '../screens/Options';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="options"
                component={Options}
            />
        </Tab.Navigator>
    )
}