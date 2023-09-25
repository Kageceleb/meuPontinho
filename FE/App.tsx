import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainAppScreen from './MainAppScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainAppScreen" component={MainAppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
