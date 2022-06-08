import {ScrollView, View} from 'react-native';
import {Card, Layout, Text, useTheme} from '@ui-kitten/components';
import JSONTree from 'react-native-json-tree';

import React from 'react';
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const Item = ({route}) => {
  const {item} = route.params;
  const theme = useTheme();

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{padding: 20}}>
        <Text category="h6" style={{textAlign: 'center'}}>
          {item.metadata?.general_title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <Text
            category="c1"
            appearance="alternative"
            style={{
              color: theme['color-primary-900'],
              backgroundColor: theme['color-primary-100'],
              borderRadius: 4,
              padding: 5,
            }}>
            {item.experiment}
          </Text>
          <Text
            appearance="alternative"
            category="c1"
            style={{
              color: theme['color-info-900'],
              backgroundColor: theme['color-info-100'],
              borderRadius: 4,
              padding: 5,
            }}>
            {item.id}
          </Text>
          <Text
            category="c1"
            appearance="alternative"
            style={{
              color: theme['color-success-900'],
              backgroundColor: theme['color-success-100'],
              borderRadius: 4,
              padding: 5,
            }}>
            {item.status}
          </Text>
        </View>
        <Card>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text category="label">Created</Text>
              <Text>
                {new Date(item.created).toLocaleString('en-GB', options)}
              </Text>
            </View>
            <View>
              <Text category="label">Updated</Text>
              <Text>
                {new Date(item.updated).toLocaleString('en-GB', options)}
              </Text>
            </View>
          </View>
        </Card>
        <Card>
          <JSONTree data={item.metadata} />
        </Card>
      </ScrollView>
    </Layout>
  );
};

export default Item;
