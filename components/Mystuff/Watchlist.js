import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
    TextInput
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';

import Watchlistcontent from './watchlistcontent'
export default class Watchlist extends Component {
    constructor(props) {
        super(props);
        this.state = {

            arrow: true,
            modalshow: false
        };
    }

    arrowchange = () => {
        let arrow = this.state.arrow
        let modalshow = this.state.modalshow
        this.setState({ arrow: !arrow, modalshow: !modalshow })

    }

    render() {
        return (
            <>

                <View style={Style.body} >

                    <View style={Style.row} >

                        <Icon name="user-circle" size={50} color={"#2498d3"} />


                        <Text style={Style.content}>
                            Username {this.state.value}
                        </Text>
                        {this.state.arrow ?
                            <Icon name="angle-down" size={28} color={"#a2b5bc"} style={Style.downicon} onPress={this.arrowchange} />
                            :
                            <Icon name="angle-up" size={28} color={"#a2b5bc"} style={Style.downicon} onPress={this.arrowchange} />

                        }
                        <Icon name="cog" size={25} color={"#a2b5bc"} style={Style.setting} onPress={() => this.props.navigation.navigate('Settings')} />


                    </View>

                 


                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalshow}
                        onDismis={this.arrowchange}


                    >

                        <TouchableOpacity
                            style={Style.wholecontainer}
                            activeOpacity={1}
                            onPress={this.arrowchange}
                        >

                            <TouchableWithoutFeedback>


                                <View style={Style.modalbody}>
                                    <View style={Style.body} >

                                        <View style={Style.row} >

                                            <Icon name="user-circle" size={50} color={"#2498d3"} />


                                            <Text style={Style.content}>
                                                Username {this.state.value}
                                            </Text>
                                            {this.state.arrow ?
                                                <Icon name="angle-down" size={28} color={"#a2b5bc"} style={Style.downicon} onPress={this.arrowchange} />
                                                :
                                                <Icon name="angle-up" size={28} color={"#a2b5bc"} style={Style.downicon} onPress={this.arrowchange} />

                                            }



                                        </View>
                                    </View>

                                    <View style={Style.modalrow}>
                                        <Icon name="child" size={28} color={"#a2b5bc"} style={Style.downicon} onPress={this.arrowchange} />
                                        <Text style={Style.modaltext}>Kids</Text>

                                    </View>


                                    <Text style={Style.modalline}></Text>

                                    <View style={Style.modalrow}>
                                        <Icon name="plus" size={28} color={"#a2b5bc"} style={Style.downicon} onPress={this.arrowchange} />
                                        <Text style={Style.modaltext}>Create profile</Text>
                                    </View>
                                    <View style={Style.modalrow}>
                                        <Icon name="pencil" size={28} color={"#a2b5bc"} style={Style.downicon} onPress={this.arrowchange} />
                                        <Text style={Style.modaltext}>Manage profiles</Text>
                                    </View>
                                    <View style={Style.modalrow}>
                                        <Icon name="info-circle" size={28} color={"#a2b5bc"} style={Style.downicon} onPress={this.arrowchange} />
                                        <Text style={Style.modaltext}>Learn more about profiles</Text>
                                    </View>

                                </View>

                            </TouchableWithoutFeedback>

                        </TouchableOpacity>


                    </Modal>
                </View>



                <Tab.Navigator
                    initialRouteName="watchlistcotent"
                    swipeEnabled={false}

                    tabBarOptions={{
                        activeTintColor: '#e9f0f6',
                        labelStyle: {
                            fontSize: 12,

                        },
                        indicatorStyle: {

                            backgroundColor: "#c6d0da",
                            width: 90,
                            left: "39%",


                        },
                        indicatorContainerStyle: {
                            borderBottomWidth: .5,
                            borderBottomColor: "#c6d0da",
                            backgroundColor: '#0f161e',

                        }

                    }}
                >


                    <Tab.Screen

                        name="watchlistcotent"
                        component={Watchlistcontent}
                        options={{
                            tabBarLabel: 'Watchlist',



                        }}
                    />





                </Tab.Navigator>

            </>
        );
    }
}

const Style = StyleSheet.create({
    body: {
        // padding: 35,
        paddingTop: 35,
        paddingBottom: 10,
        paddingLeft: 30,
        backgroundColor: "#0f161e",

    },
    wholecontainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)"
        // backgroundColor: "red",

    },
    modalbody: {
        backgroundColor: "#0f161e",
        paddingBottom:20

    },
    modalrow: {
        paddingLeft: 35,
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 5
    },
    content: {
        color: "#c6d0da",
        fontSize: 20,
        marginLeft: 15,
        marginRight: 8,
        paddingTop: 10

    },
    row: {
        flexDirection: "row"
    },
    downicon: {
        paddingTop: 10,

    },
    setting: {

        position: "absolute",
        right: "6%",
        paddingTop: 12
    },
    flowcontent: {
        color: "#c6d0da",
        paddingLeft: 40,
        // paddingStart:40,
        marginTop: 80,
        // paddingTop:70,
        position: "absolute",
        zIndex: 999,
        backgroundColor: "#0f161e",



    },
    modaltext: {
        color: "#c6d0da",
        paddingTop: 15,
        paddingLeft: 20
    },
    modalline: {
        borderBottomColor: "#c6d0da",
        borderBottomWidth: .2,
        width: "100%",

    },

})
