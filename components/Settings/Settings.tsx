import {View} from 'react-native';
import React from 'react';
import {Layout, Text, Toggle} from '@ui-kitten/components';

const Settings = () => {
  return (
    <Layout style={{flex: 1, padding: 20}}>
      <View>
        <Text category="label">theme</Text>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 3,
          }}>
          <Text>Light Theme</Text>
          <Toggle checked />
        </View>
      </View>
    </Layout>
  );
};

export default Settings;
