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
      description:
        'An open source preservation service for physicists to preserve and document the various materials produced in the analysis process',
      api: 'https://cap-test.cern.ch/api/',
      additional:
        '?access_token=IyfcCNQJfy6ho6SSPkf0gfleVSVdk5XpHDOz0hLJEgaqc6DUvVlz05vPIvgY',
      methods: ['deposits'],
    },
    {
      name: 'inspire',
      title: 'Inspire',
      description:
        'INSPIRE is a trusted community hub that helps researchers to share and find accurate scholarly information in high energy physics.',
      api: 'https://inspirehep.net/api/',
      additional: '?sort=mostrecent&size=25&page=1',
      methods: ['literature', 'authors'],
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
            <View style={{flex: 10}}>
              <Text
                category="label"
                style={{color: theme['color-primary-600'], marginBottom: 5}}>
                {project.title}
              </Text>
              <Text category="p2">{project.description}</Text>
            </View>
            <View style={{flex: 1}}>
              <Icon
                name="chevron-right-outline"
                fill={theme['color-primary-600']}
                style={{width: 32, height: 32}}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </Layout>
  );
}
