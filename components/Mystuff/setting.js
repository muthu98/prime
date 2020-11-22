import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  Modal,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

import  FlashMessage  from "react-native-flash-message";
export default class setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      logoutshow: false,
      clearshow: false,
      popupshow: false,
      list: [
        {
          id: 1,
          first: "Stream & download",
          second: "Manage quality and Wi-Fi",
          clickto: "Stream & download",
          pass: ""

        },
        {
          id: 2,
          first: "Notifications",
          second: "On",
          clickto: "Notifications",
          pass: ""
        },
        {
          id: 3,
          first: "Auto Play",
          second: "Play the next episode automatically",
          clickto: "",
          pass: "toggle"
        },
        {
          id: 4,
          first: "Parental Controls",
          second: "Control what you can watch",
          clickto: "Parental Controls",
          pass: ""
        },
        {
          id: 5,
          first: "Registered devices",
          second: "See all registerted devices",
          clickto: "Your Registered Devices",
          pass: ""
        },
        {
          id: 6,
          first: "Clear video search history",
          second: "",
          clickto: "",
          pass: "clearhistory"
        },
        {
          id: 7,
          first: "Signed in as username",
          second: "Sign out of all Amazon apps",
          clickto: "",
          pass: "logout"
        },
        {
          id: 8,
          first: "Language",
          second: "English",
          clickto: "Language",
          pass: ""
        },
        {
          id: 9,
          first: "Contact us",
          second: "",
          clickto: "Tell us more about your issue",
          pass: ""
        },
        {
          id: 10,
          first: "About & Legal",
          second: "",
          clickto: "About & Legal",
          pass: ""
        },
        {
          id: 11,
          first: "Help",
          second: "",
          clickto: "Help",
          pass: ""
        }
      ]
    };
  }
  seprater = (e) => {
    let value = e
    // console.log(e);
    if (value == "toggle") {
      this.toggleSwitch()
    }
    else if (value == "logout") {

      this.logoutactive()
    }
    else if (value == "clearhistory") {
      this.clear()

    }
  }
  toggleSwitch = () => {
    this.setState({ isEnabled: !this.state.isEnabled })
  }
  logoutactive = () => {
    this.setState({ logoutshow: !this.state.logoutshow })

  }
  clear = () => {
    this.setState({ clearshow: !this.state.clearshow })


    setTimeout(() => {
      this.setState({ clearshow: !this.state.clearshow })

    }, 2000);

  }

  render() {
    return (
      <ScrollView>
        <View style={Style.body} >
          


          {this.state.list.map(value =>

            <TouchableOpacity key={value.id} value={value.pass} onPress={value.pass ? () => this.seprater(value.pass) : () => this.props.navigation.navigate(value.clickto)}  >
              <View style={Style.card}>
                <View style={Style.row} >
                  <Text style={Style.big} >  {value.first} </Text>
                  {value.pass === "toggle" ?
                    <Switch
                      style={Style.toggle}
                      trackColor={{ false: "#415264", true: "#1e7eb0" }}
                      thumbColor={this.state.isEnabled ? "#00a5dd" : "#7d959f"}
                      ios_backgroundColor="#3e3e3e"

                      value={this.state.isEnabled}
                    /> : null
                  }
                </View>

                {value.second != "" ? <Text style={Style.content} > {value.second} </Text> : null}

              </View>
              <Text style={Style.marginline} ></Text>
            </TouchableOpacity>



          )}


          <Modal
            animationType="none"
            transparent={true}
            visible={this.state.logoutshow}
            onDismis={this.logoutactive}
          >
            <TouchableOpacity
              style={Style.wholecontainer}
              activeOpacity={1}
              onPress={this.logoutactive}
            >
              <TouchableWithoutFeedback>
                <View style={Style.modalbody}>
                  <Text style={Style.modalheading}>Confirm sign out</Text>
                  <Text style={Style.modalpara}>
                    Signing out of all Amazon apps also deletes deownloaded videos.
                  </Text>
                  <View style={Style.modalbutton} >
                    <TouchableOpacity onPress={this.logoutactive}>
                      <Text style={Style.modalbuttontext}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={Style.modalbuttontext}>SING OUT</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </Modal>


          <Modal
            animationType="none"
            transparent={true}
            visible={this.state.clearshow}

          >
            <View style={Style.modalbody}> 
            <View style={Style.row} >

          
            <ActivityIndicator size="large" color="#fab631" />
              <Text style={Style.modalheading}>  Clearing Search history... </Text>
              </View>
            </View>
          </Modal>


          <FlashMessage position="bottom" titleProps={{message:"hello"}}  icon="none" autoHide={true} duration={2000} />
   

        </View>
      </ScrollView>
    );
  }
}

const Style = StyleSheet.create({
  body: {
    // alignItems: "center",
    // flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 4,
    // justifyContent: "center",
    backgroundColor: "#0f161e",

  },
  card: {

    paddingTop: 15
  },
  content: {
    color: "#a5b3be",
    paddingLeft: 8,
    paddingTop: 5,
    fontSize: 15,


  },
  big: {
    color: "#e9f3fc",
    // fontWeight:"bold",
    fontSize: 20,

  },
  marginline: {
    borderBottomWidth: .2,
    borderBottomColor: "#c6d0da"
  },
  row: {
    flexDirection: "row"
  },
  toggle: {
    position: "absolute",
    right: 0,
    paddingTop: 30
  },
  wholecontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)"

  },
  modalbody: {
    backgroundColor: "#303030",
    top: "45%",
    marginLeft: 40,
    marginRight: 40,
    padding: 20
  },

  modalheading: {
    color: "#f2f2f2",
    fontSize: 18
  },
  modalpara: {
    color: "#f2f2f2",
    fontSize: 15,
    marginTop: 20,
    marginBottom: 50
  },
  modalbutton: {
    flexDirection: "row",
    position: "absolute",
    right: "6%",
    bottom: "6%",
    marginBottom: 15

  },
  modalbuttontext: {
    color: "#d5954b",
    margin: 5,
    right: 0
  }

})