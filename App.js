
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Month from './src/Month'
import Months from './src/Months'
import ShowMessage from './src/ShowMessage'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Months} />
        <Stack.Screen name="Month" component={Month} options={Month} Months={Months}/>
        <Stack.Screen name="ShowMessage" component={ShowMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;