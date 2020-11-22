import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


import Watchlist from '../Mystuff/Watchlist'
import Setting from '../Mystuff/setting'


///import setting content
import Stream from '../setting/Stream&download'
import Notification from '../setting/Notification'
import Parentalconrol from '../setting/ParentalControls'
import RegisteredDevices from '../setting/Registereteddevics'
import Language from '../setting/Language'
import Contactus from '../setting/Contactus'
import About from '../setting/About'
import Help from '../setting/help'

import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();



export default class Mystuff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      navigator: [
        {
          id: 1,
          name: "Settings",
          component: Setting
        },
        {
          id: 2,
          name: "Notifications",
          component: Notification
        },
        {
          id: 3,
          name: "Stream & download",
          component: Stream
        },
        {
          id: 4,
          name: "Parental Controls",
          component: Parentalconrol
        },
        {
          id: 5,
          name: "Your Registered Devices",
          component: RegisteredDevices,
          whitethem: 1
        },
        {
          id: 6,
          name: "Language",
          component: Language,
        },
        {
          id: 7,
          name: "Tell us more about your issue",
          component: Contactus,
        },
        {
          id: 8,
          name: "About & Legal",
          component: About,
        },
        {
          id: 9,
          name: "Help",
          component: Help,
          whitethem: 1
        },
      ]

    };
  }



  render() {
    return (

      <Stack.Navigator
        initialRouteName="watchlist"



        screenOptions={{

          animationEnabled: false,
          // gestureDirection:"horizontal-inverted" ,



        }}
      >
        <Stack.Screen name="watchlist" component={Watchlist}

          options={{
            headerShown: false,
          }}
        />


        {this.state.navigator.map(value =>

          <Stack.Screen key={value.id} name={value.name} component={value.component}

            options={value.whitethem ? {
              headerTitleAlign: "left" ,
              headerStyle: {
          backgroundColor: "#fff",
              },
              headerTitleStyle: {
          color: "#000",
                fontWeight: "bold",
                fontSize: 18
              },
              headerLeft: ""



            }:

        {
          headerTitleAlign:   "center",
              headerStyle: {
          backgroundColor: "#0f161e",
              },
              headerTitleStyle: {
          color: "#c6d0da",
                fontWeight: "bold",
                fontSize: 18
              },
              headerLeft: ""



            }


          }
          />

        )}

      </Stack.Navigator>



    );
  }
}

