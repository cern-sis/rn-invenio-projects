import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Layout, Text, Toggle} from '@ui-kitten/components';
import {useStore} from '../../state';

const Settings = () => {
  const setDarkTheme = useStore(state => state.setDarkTheme);
  const darkTheme = useStore(state => state.darkTheme);

  return (
    <Layout style={styles.container}>
      <View>
        <Text category="label">theme</Text>
        <View style={styles.wrapper}>
          <Text>Dark Theme</Text>
          <Toggle onChange={val => setDarkTheme(val)} checked={darkTheme} />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  wrapper: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 3,
  },
});

export default Settings;
