import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LocationScreen from './components/LocationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Location" component={LocationScreen} options={{ title: 'Localização' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
