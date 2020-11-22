import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
export default class watchlistcontent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View  style={Style.body} >

<Icon name="plus-circle" size={70} color={"#1178a5"}  />
        <Text style={Style.big} >  Browse now, watch later </Text>
        <Text style={Style.para} > Your Watchlist is shared across all of your devices. </Text>
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
    para: {
      color: "#c6d0da",
      fontSize:13,
      paddingTop:10,
      paddingBottom:10
    }
    ,big:{
      color:"#c6d0da",
      fontSize:20,
      paddingTop:10,
      paddingBottom:10,
      fontWeight:"bold"
    }
  
  
  })