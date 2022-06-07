import React from 'react';
import {View, Text} from 'react-native';

import {Props} from '../../types';

export default function Search({route}: Props) {
  const {params} = route.params;
  return (
    <View>
      <Text>{params.name}</Text>
      <Text>{params.title}</Text>
      <Text>{params.api}</Text>
    </View>
  );
}
