import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class help extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={Style.body}>
        <Text style={Style.content}> help </Text>
      </View>
    );
  }
}

const Style = StyleSheet.create({
    body: {
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#fff",
  
    },
    content: {
      color: "#000"
    }
  
  
  })
  