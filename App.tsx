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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Icon} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as theme} from './theme/custom-theme.json';
import Home from './components/Home';
import Settings from './components/Settings';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
                tabBarIcon: ({color}) => (
                  <Icon
                    name="home-outline"
                    style={{width: 25, height: 25}}
                    fill={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                headerShown: false,
                tabBarIcon: ({color}) => (
                  <Icon
                    name="settings-outline"
                    style={{width: 25, height: 25}}
                    fill={color}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
