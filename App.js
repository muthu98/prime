import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

import Main from './components/Main'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
   

 
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
         
            headerShown:false,
            // headerLeft:<Baricon/>
           
          
          }}
          
        />

      </Stack.Navigator>
    </NavigationContainer>

    );
  }
}

const Style = StyleSheet.create({

  appbody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  navbar: {
    height: "40px"

  }

})
