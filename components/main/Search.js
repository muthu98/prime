import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Style.body} >
        <Text style={Style.content} > Search </Text>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  body: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0f161e",

  },
  content: {
    color: "#fff"
  }


})
