import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import axios from 'axios';
import {Props} from '../../types';

import {Input, Layout, Card, Text} from '@ui-kitten/components';

import Header from './Header';
import Footer from './Footer';

export default function Search({route, navigation}: Props) {
  const {params} = route.params;
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getInitialData = async (value = '') => {
    try {
      const data = await axios({
        method: 'GET',
        url: `https://cap-test.cern.ch/api/deposits?q=${value}&access_token=IyfcCNQJfy6ho6SSPkf0gfleVSVdk5XpHDOz0hLJEgaqc6DUvVlz05vPIvgY`,
      });
      setItems(data.data.hits.hits);
    } catch (e) {}
  };
  useEffect(() => {
    getInitialData();
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
          style={{marginBottom: 50}}
        />
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
