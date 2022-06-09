import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {
  Input,
  Layout,
  Card,
  Text,
  Spinner,
  useTheme,
  ThemeType,
} from '@ui-kitten/components';

import {Props} from '../../types';
import Header from './Header';
import Footer from './Footer';
import {useStore} from '../../state/search';
import {CardContent} from './cardsContent';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
export default function Search({route, navigation}: Props) {
  const {params} = route.params;
  const theme = useTheme();
  const [selectedMethod, setSelectedMethod] = useState(params.methods[0]);
  const [serchParam, setSearchParam] = useState('');
  const data = useStore(state => state.data);
  const fetch = useStore(state => state.fetch);
  const loader = useStore(state => state.loader);
  const errorMessage = useStore(state => state.errorMessage);

  const url =
    params.api + selectedMethod + params.additional + '&q=' + serchParam;
  useEffect(() => {
    fetch(url);
  }, [url]);

  const getHeaderText = item => {
    const type = params.name;
    const headerChoices = {
      cap: item.metadata.general_title || 'Untitled',
      inspire:
        selectedMethod === 'literature'
          ? item.metadata?.authors && item.metadata?.authors[0].full_name
          : item.metadata?.name?.value,
    };

    return {
      title: headerChoices[type],
      tag: new Date(item.created).toLocaleString('en-GB', options),
    };
  };

  return (
    <Layout style={styles(theme).p20}>
      <Input
        placeholder="Search..."
        status="primary"
        value={serchParam}
        onChangeText={setSearchParam}
        style={styles(theme).mb20}
      />
      {loader ? (
        <View style={styles(theme).center}>
          <Spinner size="large" />
        </View>
      ) : (
        <>
          <View style={styles(theme).methods}>
            {params.methods.map(method => (
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
            ))}
          </View>
          <ScrollView>
            {errorMessage ? (
              <Text>{errorMessage}</Text>
            ) : (
              <>
                {data.map((item, index) => (
                  <Card
                    style={styles(theme).mb20}
                    key={index}
                    header={<Header data={getHeaderText(item)} />}
                    footer={
                      <Footer
                        onClick={() => navigation.navigate('Item', {item})}
                      />
                    }>
                    {CardContent(params, item, selectedMethod, theme)}
                  </Card>
                ))}
              </>
            )}
          </ScrollView>
        </>
      )}
    </Layout>
  );
}

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    mb20: {
      marginBottom: 20,
    },
    mr10: {
      marginRight: 10,
    },
    methods: {marginBottom: 20, flexDirection: 'row'},
    center: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    p20: {padding: 20, flex: 1},
    p5: {padding: 5},
    activeLabel: {backgroundColor: theme['color-primary-600']},
    inactiveLabel: {backgroundColor: theme['color-primary-200']},
    mt20: {marginTop: 20},
  });
