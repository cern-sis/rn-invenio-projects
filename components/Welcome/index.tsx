import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Button, Icon, Layout, Text, useTheme} from '@ui-kitten/components';

import {Props, ProjectProps} from '../../types';

export default function Welcome({navigation}: Props) {
  const theme = useTheme();
  const projects: ProjectProps[] = [
    {
      name: 'cap',
      title: 'CERN Analysis Preservation',
      api: '........',
    },
    {
      name: 'scoap3',
      title: 'SCOAP3',
      api: '........',
    },
    {
      name: 'inspire',
      title: 'Inspire',
      api: '........',
    },
  ];
  return (
    <Layout>
      {projects.map(project => (
        <TouchableWithoutFeedback
          key={project.name}
          onPress={() => navigation.navigate('Search', {params: project})}>
          <View
            style={{
              backgroundColor: theme['color-primary-100'],
              marginTop: 20,
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: theme['color-primary-600']}}>
              {project.title}
            </Text>
            <Icon
              name="chevron-right-outline"
              fill={theme['color-primary-600']}
              style={{width: 32, height: 32}}
            />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </Layout>
  );
}
