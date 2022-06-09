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
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useStore} from './state';
import {StatusBar} from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  const darkTheme = useStore(state => state.darkTheme);
  const DarkTheme = {
    dark: true,
    colors: {
      primary: 'rgb(39, 82, 211)',
      background: 'rgb(242, 242, 245)',
      card: 'rgb(35, 43, 67)',
      text: '#fff',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={darkTheme ? {...eva.dark, ...theme} : {...eva.light, ...theme}}>
        <StatusBar barStyle={darkTheme ? 'light-content' : 'dark-content'} />
        <NavigationContainer theme={darkTheme ? DarkTheme : DefaultTheme}>
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
