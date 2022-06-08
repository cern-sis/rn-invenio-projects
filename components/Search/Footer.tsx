import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@ui-kitten/components';

const Footer = ({onClick}) => {
  return (
    <View style={{alignItems: 'flex-end'}}>
      <Button appearance="ghost" status="info" onPress={onClick}>
        see more
      </Button>
    </View>
  );
};

export default Footer;
