import {View} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';
import React from 'react';

const Header = ({data}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text>{data.title}</Text>
      <Text
        category="c1"
        appearance="alternative"
        style={{
          borderRadius: 4,
          color: theme['color-primary-600'],
          backgroundColor: theme['color-primary-100'],
          padding: 3,
        }}>
        {data.tag}
      </Text>
    </View>
  );
};

export default Header;
