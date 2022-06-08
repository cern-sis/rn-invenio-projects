/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Welcome from './components/Welcome';
import Search from './components/Search';
import Item from './components/Items';
import {RootStackParamList} from './types';

import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as theme} from './theme/custom-theme.json';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Item" component={Item} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
