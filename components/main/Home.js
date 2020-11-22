import React, { Component } from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


import Icon from 'react-native-vector-icons/FontAwesome';

import Homecontent from "../Home/Homecontent"
import Tvshows from '../Home/Tvshow'
import Movie from '../Home/Movie'
import Kids from '../Home/Kids'

import { TabBar } from 'react-native-tab-view';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidUpdate() {
    //  console.log( getFocusedRouteNameFromRoute() );
  
  
  
    }
 
  render() {
    // console.log("hi router");
    // console.log(this.props.route);
    return (
    

     <>

     <View style={Style.body}>
     <Image
        
          style={Style.image}
          source={require('../../image/prime1.png')}
        
      
      />
     </View>
     
      <Tab.Navigator
      initialRouteName="homecontent"
      
      swipeEnabled={false}
      
      tabBarOptions={{
        activeTintColor: '#e9f0f6',
        labelStyle: {
           fontSize: 12,
          },

        style: { 
          backgroundColor: '#0f161e',
          // borderBottomColor:"#fff"
          
        },   
        indicatorStyle:{
          // borderBottomColor:"#fff",
          backgroundColor:"#fff"
        } ,
        showIcon:true,
        // scrollEnabled:true
        
        
      
      
       
     
      
      }}
    > 

    
      <Tab.Screen
      
        name="homecontent"
        component={Homecontent}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="tvshow"
        component={Tvshows}
        options={{ tabBarLabel: 'TV Shows' }}
      />
      <Tab.Screen
        name="movie"
        component={Movie}
        options={{ tabBarLabel: 'Movie' }}
      />
        <Tab.Screen
        name="kids"
        component={Kids}
        options={{ tabBarLabel: 'Kids' ,}}
        
      />
      
 
    </Tab.Navigator>

    </>

   
    );
  }
}

const Style = StyleSheet.create({
  body: {
      alignItems: "center",
      backgroundColor: "#0f161e",
      padding:0
 

  },
  image:{
   
  }




})
