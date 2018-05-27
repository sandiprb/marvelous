import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Home extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
