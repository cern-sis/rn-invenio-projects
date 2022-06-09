import {useStore} from '../../state/search';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeType, useTheme, Text} from '@ui-kitten/components';

export function Methods({params, method}) {
  const theme = useTheme();
  const setSelectedMethod = useStore(state => state.setSelectedMethod);
  const selectedMethod = useStore(state => state.selectedMethod);
  useEffect(() => {
    setSelectedMethod(params.methods[0]);
  }, []);

  return (
    <View style={styles(theme).mr10} key={method}>
      <Text
        appearance="alternative"
        onPress={() => {
          params.methods.length > 1 && setSelectedMethod(method);
        }}
        style={[
          styles(theme).p5,
          selectedMethod === method
            ? styles(theme).activeLabel
            : styles(theme).inactiveLabel,
        ]}>
        {method}
      </Text>
    </View>
  );
}

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    mr10: {
      marginRight: 10,
    },
    p5: {padding: 5},
    activeLabel: {backgroundColor: theme['color-primary-400']},
    inactiveLabel: {backgroundColor: theme['color-info-200']},
  });
