import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '@ui-kitten/components';

interface StateProps {
  onClick: () => void;
}

const Footer: React.FC<StateProps> = ({onClick}) => {
  return (
    <View style={styles.align}>
      <Button appearance="ghost" status="info" onPress={onClick}>
        see more
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  align: {
    alignItems: 'flex-end',
  },
});

export default Footer;
