import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import axios from 'axios';
import {Props} from '../../types';

import {
  Input,
  Layout,
  Card,
  Text,
  Spinner,
  useTheme,
} from '@ui-kitten/components';

import Header from './Header';
import Footer from './Footer';
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
export default function Search({route, navigation}: Props) {
  const {params} = route.params;
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const theme = useTheme();
  const [selectedMethod, setSelectedMethod] = useState(params.methods[0]);

  const getInitialData = async (value = '') => {
    const url = params.api + selectedMethod + params.additional + '&q=' + value;
    try {
      const data = await axios({
        method: 'GET',
        url,
      });
      setItems(data.data.hits.hits);
    } catch (e) {}
  };

  // update data when user comes to the screen
  useEffect(() => {
    getInitialData();
  }, []);

  // update data when user searches for a term
  useEffect(() => {
    getInitialData(searchValue);
  }, [searchValue, selectedMethod]);

  const getHeaderText = item => {
    const type = params.name;
    const headerChoices = {
      cap: item.metadata.general_title || 'Untitled',
      inspire: item.metadata?.authors && item.metadata?.authors[0].full_name,
    };

    return {
      title: headerChoices[type],
      tag: new Date(item.created).toLocaleString('en-GB', options),
    };
  };

  const getCardContent = item => {
    const type = params.name;

    const choices = {
      cap: (
        <View>
          <View>
            <Text>Fullname</Text>
            <Text appearance="hint">{item.schema?.fullname}</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text>Status</Text>
            <Text appearance="hint">{item.status}</Text>
          </View>
        </View>
      ),
      inspire: (
        <View>
          {selectedMethod == 'literature' ? (
            <View>
              <Text>Title</Text>
              <Text appearance="hint">
                {item.metadata.titles && item.metadata.titles[0].title}
              </Text>
            </View>
          ) : (
            <View>
              <Text>Name</Text>
              <Text appearance="hint">{item.metadata?.name?.value}</Text>
            </View>
          )}
          <View style={{marginTop: 20}}>
            <Text>ID</Text>
            <Text appearance="hint">{item.id}</Text>
          </View>
        </View>
      ),
    };

    return choices[type];
  };

  return (
    <ScrollView>
      <Layout style={{padding: 20}}>
        <Input
          placeholder="Search..."
          status="primary"
          value={searchValue}
          onChangeText={setSearchValue}
          style={{marginBottom: 20}}
        />
        {items.length == 0 && (
          <View style={{alignItems: 'center'}}>
            <Spinner size="large" />
          </View>
        )}
        <View style={{marginBottom: 50, flexDirection: 'row'}}>
          {params.methods.map(method => (
            <View style={{marginRight: 10}} key={method}>
              <Text
                appearance="alternative"
                onPress={() =>
                  params.methods.length > 1 && setSelectedMethod(method)
                }
                style={{
                  padding: 5,
                  backgroundColor:
                    selectedMethod == method
                      ? theme['color-primary-400']
                      : theme['color-info-200'],
                }}>
                {method}
              </Text>
            </View>
          ))}
        </View>
        {items.map((item, index) => (
          <Card
            style={{marginBottom: 20}}
            key={index}
            header={<Header data={getHeaderText(item)} />}
            footer={
              <Footer onClick={() => navigation.navigate('Item', {item})} />
            }>
            {getCardContent(item)}
          </Card>
        ))}
      </Layout>
    </ScrollView>
  );
}
