import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Layout, Text, Toggle} from '@ui-kitten/components';

const Settings = () => {
  return (
    <Layout style={styles.container}>
      <View>
        <Text category="label">theme</Text>
        <View style={styles.wrapper}>
          <Text>Light Theme</Text>
          <Toggle checked />
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
