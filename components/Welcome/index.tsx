import {View, Text} from 'react-native';
import React from 'react';

// Start by adding three boxes
// We should have information about the projects (name, descriprion, later icon)
// create this boxes to be links for another screen
// The next screen should be the search screen
// lets pass the name as parameter to the next screen so we know exactlty which will be the api url

/*
  projects = [
    {
      name: "cap",
      title:"CERN Analysis Preservation",
      api:"........"
    },
    {

    }
  ]
*/
export default function Welcome() {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
}
