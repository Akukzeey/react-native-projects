import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './src/ListScreen';
import HomeScreen from "./src/Home";
import ComponentsScreen from "./src/ComponentsScreen";
import ImageScreen from "./src/ImageScreen";
import CounterScreen from "./src/CounterScreen";
import ColourScreen from "./src/components/ColourScreen";
import SquareScreen  from "./src/SquareScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Components" component={ComponentsScreen} />
          <Stack.Screen name="Image" component={ImageScreen} />
          <Stack.Screen name="Counter" component={CounterScreen} />
          <Stack.Screen name="Color" component={ColourScreen} />
          <Stack.Screen name="Square" component={SquareScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
