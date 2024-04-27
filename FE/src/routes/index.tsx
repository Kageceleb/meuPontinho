import { NavigationContainer } from '@react-navigation/native'
import DrawerRoutes from './drawer.routes'
import StackRoutes from './stack.routes'
import { Screen } from 'react-native-screens'
import React from 'react'

export default function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}