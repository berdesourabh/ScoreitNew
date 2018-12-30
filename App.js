import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import { HomeScreenContainer } from './src/components';
import ApplicationTitle from './src/common/ApplicationTitle';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <ImageBackground
          source={require('./src/imgs/cricketimg1.jpg')}
          style={styles.appContainer}
        >
          <View>
          <ApplicationTitle />
          <HomeScreenContainer />
        </View>
        </ImageBackground>
      </Provider>
    );
  }
}

  const styles = StyleSheet.create({
    appContainer: {
      flex:1,
      width: '100%',
      height:'100%',
    },

  });

