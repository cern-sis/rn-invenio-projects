import React from 'react';

import Welcome from '../../components/Welcome';
import Search from '../../components/Search';
import Item from '../../components/Items';
import {RootStackParamList} from '../../types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
};

export default Home;
