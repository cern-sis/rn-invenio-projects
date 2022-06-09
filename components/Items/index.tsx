import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Layout, Text, ThemeType, useTheme} from '@ui-kitten/components';
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
    <Layout style={styles(theme).flex}>
      <ScrollView style={styles(theme).p20}>
        <Text category="h6" style={styles(theme).textCenter}>
          {item.metadata?.general_title}
        </Text>
        <View style={styles(theme).row}>
          <Text
            category="c1"
            appearance="alternative"
            style={styles(theme).tag1}>
            {item.experiment ||
              item.metadata?.first_author?.full_name ||
              item.metadata?.name?.value}
          </Text>
          <Text
            appearance="alternative"
            category="c1"
            style={styles(theme).tag2}>
            {item.id}
          </Text>
        </View>
        <Card>
          <View style={styles(theme).rowCenter}>
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

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    flex: {flex: 1},
    p20: {padding: 20},
    textCenter: {textAlign: 'center'},
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    tag1: {
      color: theme['color-primary-900'],
      backgroundColor: theme['color-primary-100'],
      borderRadius: 4,
      padding: 5,
    },
    tag2: {
      color: theme['color-info-900'],
      backgroundColor: theme['color-info-100'],
      borderRadius: 4,
      padding: 5,
    },
    tag3: {
      color: theme['color-success-900'],
      backgroundColor: theme['color-success-100'],
      borderRadius: 4,
      padding: 5,
    },
  });

export default Item;
