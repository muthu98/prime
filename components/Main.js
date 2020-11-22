import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';



import Home from './main/Home'
import Search from './main/Search'
import Downloads from './main/Downloads'
import Mystuff from './main/Mystuff'
import { color } from 'react-native-reanimated';


const Tab = createBottomTabNavigator();
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
componentDidUpdate() {
//  console.log( getFocusedRouteNameFromRoute() );
// console.log("hi");
// console.log(this.props.route);
}


  render() {
    // console.log("hi");
    // console.log(this.props.route.state )
    return (
   
      <Tab.Navigator
        initialRouteName="home"
       
        tabBarOptions={{
          // activeTintColor: 'red',
          tabStyle: {
       
       
        
          },
          style:{
            backgroundColor: "#00061b",
            height: 65,
            borderTopWidth:0
         
     

          },
          
          
          
        }}
  
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({focused }) => <View style={Style.homebody}>
               <Icon name="home" size={25}  color={focused ? "#2498d3" :"#a5a5a5"}
                
                 />
  
               <Text style={{ color: focused? "#2498d3" : "#9c9c9c" }}  >Home</Text>
            </View>,
            tabBarLabel: "",
            
          }}
          // options={{

          //   tabBarIcon: ({focused }) => <View style={Style.homebody}>
          //     <Icon name="home" size={25}  color={focused ? "#2498d3" :"#a5a5a5"}
              
          //     />

          //     <Text style={{ color: focused? "#2498d3" : "#9c9c9c" }}  >Home</Text>
          //   </View>,
          //   tabBarLabel: "",
          
          
           
            

          // }}
        />

        <Tab.Screen
          name="search"
          component={Search}

          options={{

            tabBarLabel: "",
            tabBarIcon: ({ focused }) => <View style={Style.homebody}>
              <Icon name="search" size={25} color={focused ? "#2498d3" :"#a5a5a5"} />

              <Text style={{ color: focused ? "#2498d3" :"#a5a5a5"}} >Find</Text>
            </View>

          }}

        />



        <Tab.Screen
          name="downloads"
          component={Downloads}

          options={{

            tabBarLabel: "",
            tabBarIcon: ({ focused}) => <View style={Style.homebody}>
              <Icon name="download" size={25} color={focused ? "#2498d3" :"#a5a5a5"} />

              <Text style={{ color:focused ? "#2498d3" :"#a5a5a5" }} >Downloads</Text>
            </View>

          }}

        />

        <Tab.Screen
          name="mystuff"
          component={Mystuff}

          options={{

            tabBarLabel: "",
            tabBarIcon: ({ focused }) => <View style={Style.homebody}>
              <Icon name="user-circle" size={25} color={focused ? "#2498d3" :"#a5a5a5"} />

              <Text style={{ color: focused ? "#2498d3" :"#a5a5a5" }} >My Stuff</Text>
            </View>

          }}

        />

      </Tab.Navigator>
    );
  }
}

const Style = StyleSheet.create({
  homebody: {
    alignItems: "center",
    
    
  }


})
