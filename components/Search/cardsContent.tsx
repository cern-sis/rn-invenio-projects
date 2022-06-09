import React from 'react';
import {View} from 'react-native';
import {Text} from '@ui-kitten/components';
import {styles} from '.';
import {pathOr} from 'ramda';

export function CardContent(params: any, item: any, selectedMethod: string, theme: any) {
  const type = params.name;

  const getCapCard = item => (
    <View>
      <View>
        <Text>Fullname</Text>
        <Text appearance="hint">{item.schema?.fullname}</Text>
      </View>
      <View style={styles(theme).mt20}>
        <Text>Status</Text>
        <Text appearance="hint">{item.status}</Text>
      </View>
    </View>
  );

  const getInspireCard = (item, selectedMethod) => (
    <View>
      {selectedMethod === 'literature' ? (
        <View>
          <Text>Title</Text>
          <Text appearance="hint">
            {item.metadata.titles && item.metadata.titles[0].title}
          </Text>
        </View>
      ) : (
        <View>
          <Text>Name</Text>
          <Text appearance="hint">
            {pathOr('', ['metadata', 'name', 'value'], item)}
          </Text>
        </View>
      )}
      <View style={styles(theme).mt20}>
        <Text>ID</Text>
        <Text appearance="hint">{item.id}</Text>
      </View>
    </View>
  );

  const getScoap3Card = item => {
    console.log(pathOr('No value!', ['metadata', 'dois'], item));
    return (
      <View>
        <View>
          <Text>DOI</Text>
          <Text appearance="hint">
            {pathOr('No value!', ['metadata', 'dois[0]', 'value'], item)}
          </Text>
        </View>
        <View style={styles(theme).mt20}>
          <Text>Publisher</Text>
          <Text appearance="hint">
            {pathOr('No value!', ['metadata', 'abstracts[0]', 'source'], item)}
          </Text>
        </View>
      </View>
    );
  };

  switch (type) {
    case 'cap':
      return getCapCard(item);
    case 'inspire':
      return getInspireCard(item, selectedMethod);
    case 'scoap3':
      return getScoap3Card(item);
    default:
      break;
  }
}
