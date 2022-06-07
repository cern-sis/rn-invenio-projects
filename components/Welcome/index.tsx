import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  useTheme,
  ThemeType,
} from '@ui-kitten/components';
import {useStore} from '../../state';

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
  const changeTitle = useStore(state => state.changeTitle);

  return (
    <Layout style={styles(theme).flex}>
      {projects.map(project => (
        <TouchableWithoutFeedback
          key={project.name}
          onPress={() => {
            navigation.navigate('Search', {params: project});
            changeTitle(project.title);
          }}>
          <View>
            <View style={styles(theme).wrapper}>
              <View style={styles(theme).flex10}>
                <Text category="label" style={styles(theme).label}>
                  {project.title}
                </Text>
                <Text category="p2">{project.description}</Text>
              </View>
              <View style={styles(theme).flex}>
                <Icon
                  name="chevron-right-outline"
                  fill={theme['color-primary-600']}
                  style={styles(theme).icon}
                />
              </View>
            </View>
            <Divider />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </Layout>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    flex: {
      flex: 1,
    },
    flex10: {
      flex: 10,
    },
    wrapper: {
      marginVertical: 20,
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    icon: {
      width: 32,
      height: 32,
    },
    label: {color: theme['color-primary-600'], marginBottom: 5},
  });
