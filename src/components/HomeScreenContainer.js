import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import FetchTopicsData from '../Actions/FetchTopicsData';

class HomeScreenContainer extends Component {

  componentDidMount() {
    this.props.FetchTopicsData();
  }

  render() {
    return (
      <View>
        <Text>
        </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    scoreit:state.scoreit
  }
}
export default connect(mapStateToProps, { FetchTopicsData })(HomeScreenContainer)
