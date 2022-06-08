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

export default function Search({route, navigation}: Props) {
  const {params} = route.params;
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const theme = useTheme();
  const [selectedMethod, setSelectedMethod] = useState(
    params.methods.length > 0 ? params.methods[0] : '',
  );

  const getInitialData = async (value = '') => {
    try {
      const data = await axios({
        method: 'GET',
        url: `https://cap-test.cern.ch/api/deposits?access_token=IyfcCNQJfy6ho6SSPkf0gfleVSVdk5XpHDOz0hLJEgaqc6DUvVlz05vPIvgY&q=${value}`,
      });
      setItems(data.data.hits.hits);
    } catch (e) {}
  };
  const getInspireData = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `https://inspirehep.net/api/${selectedMethod}?sort=mostrecent&size=25&page=1`,
      });
    } catch (e) {}
  };
  useEffect(() => {
    getInitialData();
    getInspireData();
  }, []);
  useEffect(() => {
    getInitialData(searchValue);
  }, [searchValue]);
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
                onPress={() => setSelectedMethod(method)}
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
            header={<Header item={item} />}
            footer={<Footer onClick={() => navigation.navigate('Item')} />}>
            <View>
              <Text>Fullname</Text>
              <Text appearance="hint">{item.schema.fullname}</Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text>Status</Text>
              <Text appearance="hint">{item.status}</Text>
            </View>
          </Card>
        ))}
      </Layout>
    </ScrollView>
  );
}
