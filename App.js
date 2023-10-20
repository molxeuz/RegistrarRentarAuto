import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import CarScreen from './components/CarScreen'
import ListCarScreen from './components/ListCarScreen'
import RentScreen from './components/RentScreen'
import ListRentScreen from './components/ListRentScreen'
import { AppProvider } from './AppContext';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false, headerBackVisible: true, }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CarScreen" component={CarScreen} />
          <Stack.Screen name="ListCarScreen" component={ListCarScreen} />
          <Stack.Screen name="RentScreen" component={RentScreen} />
          <Stack.Screen name="ListRentScreen" component={ListRentScreen} />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
}
