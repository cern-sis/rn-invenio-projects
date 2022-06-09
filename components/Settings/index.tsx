import React from 'react';
import {RootStackParamList} from '../../types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();
import SettingsHome from './Settings';
const Settings = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Preferences" component={SettingsHome} />
    </Stack.Navigator>
  );
};

export default Settings;
