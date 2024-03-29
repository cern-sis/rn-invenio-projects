import {StyleSheet, View} from 'react-native';
import {Text, useTheme, ThemeType} from '@ui-kitten/components';
import React from 'react';

interface DataProps {
  title: string;
  tag: string;
}

interface StateProps {
  data: DataProps;
}
const Header: React.FC<StateProps> = ({data}) => {
  const theme = useTheme();

  return (
    <View style={styles(theme).wrapper}>
      <Text style={styles(theme).title} category="c1">
        {data.title}
      </Text>
      <Text category="c1" appearance="alternative" style={styles(theme).tag}>
        {data.tag}
      </Text>
    </View>
  );
};

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    wrapper: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      flex: 4,
    },
    tag: {
      borderRadius: 4,
      color: theme['color-primary-600'],
      backgroundColor: theme['color-primary-100'],
      padding: 3,
    },
  });

export default Header;
