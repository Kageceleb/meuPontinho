import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Feather} from "@expo/vector-icons"
import Main from '../screens/Main'
import Options from '../screens/Options';
import ClockIn from '../screens/ClockIn';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen
            name="main"
            component={Main}
            options={{
                tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size}/>,
                tabBarLabel: 'Inicio'
            }}
            />
            <Tab.Screen
            name="clockIn"
            component={ClockIn}
            options={{
                tabBarIcon: ({color, size}) => <Feather name="clock" color={color} size={36}/>,
                tabBarLabel: 'Ponto'
            }}
            />
            <Tab.Screen
            name="option"
            component={Options}
            options={{
                tabBarIcon: ({color, size}) => <Feather name="plus" color={color} size={size}/>,
                tabBarLabel: 'Opções'

            }}
            />
        
        </Tab.Navigator>
    


    )
    
}