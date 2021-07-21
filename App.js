/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/pages/Home/HomeScreen';
import DocScreen from './src/pages/MedicalDoc/MedicalDocScreen';
import MenuScreen from './src/pages/Menu/MenuScreen';
import HandScreen from './src/pages/ChallengeHand/Hand';
import Results from './src/pages/Results/Results';
import Policy from './src/pages/Policy/Policy';
import Guide from './src/pages/Guide/Guide';
import infoChallenge from './src/pages/infoChallenge/infoChallenge';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Language Menu" component={HomeScreen} />
          <Stack.Screen name="Doc" component={DocScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Hand" component={HandScreen} />
          <Stack.Screen name="Results" component={Results} />
          <Stack.Screen name="Policy" component={Policy} />
          <Stack.Screen name="Guide" component={Guide} />
          <Stack.Screen name="infoChallenge" component={infoChallenge} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
