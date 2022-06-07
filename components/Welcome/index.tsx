import React from 'react';
import {View, Text, Button} from 'react-native';

import {Props, ProjectProps} from '../../types';

export default function Welcome({navigation}: Props) {
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
    <View>
      <Text>Welcome</Text>
      {projects.map(project => (
        <Button
          key={project.name}
          title={project.title}
          onPress={() => navigation.navigate('Search', {params: project})}
        />
      ))}
    </View>
  );
}
