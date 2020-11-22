import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Style.body}>
        <Text style={Style.content}> Notification </Text>
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
