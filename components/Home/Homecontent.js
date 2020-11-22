import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, FlatList } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class homecontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree"
            ],
            showimages: [
                {
                    id: 1,
                    name: require("../../image/download.png")
                },
                {
                    id: 2,
                    name: require("../../image/image.png")
                },
                {
                    id: 3,
                    name: require("../../image/prime.png")
                },
                {
                    id: 4,
                    name: require("../../image/prime.png")
                },
                {
                    id: 5,
                    name: require("../../image/prime.png")
                },
                {
                    id: 6,
                    name: require("../../image/prime.png")
                },
                {
                    id: 7,
                    name: require("../../image/prime.png")
                },


            ],
            data: [
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    title: 'First Item',
                },
                {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    title: 'Second Item',
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    title: 'Third Item',
                },
            ],
        };
    }
    // componentDidMount() {

    //     console.log();
    //     console.log(windowHeight*.13);
    // }
    showcontent = ({ item }) => {

        return (
            <View style={{ flex: 2, margin: 5, width: windowWidth *.42, height: windowHeight*.13, borderWidth: 1, borderColor: "#ffff", borderRadius: 10 }} >
                {/* <Image source={item.name} style={{ flex: 1, resizeMode: "cover", height: null, width: null,borderRadius: 10  }} /> */}
            </View>
        )
    }

    render() {
        return (
            <View style={Style.body} >
                {/* <Text style={Style.content}> homecontent </Text> */}
                <SliderBox
                    sliderBoxHeight={windowHeight*.23}
                    autoplay={true}
                    circleLoop={true}
                    images={this.state.images}

                />

                <View style={{ marginLeft: 15, marginTop: 20 }} >


                    <Text style={{ color: "#ffff", fontSize: 20, fontWeight: "bold", marginBottom: 3 }} > Watch next TV and movies</Text>
                    <FlatList
                        data={this.state.showimages}
                        renderItem={this.showcontent}
                        keyExtractor={item => item.id.toString()}
                        horizontal={true}
                        decelerationRate={0}
                        snapToInterval={windowWidth*.42}
                        bounces={false}
                    />
                </View>



            </View>
        );
    }
}

const Style = StyleSheet.create({
    body: {
        // alignItems: "center",
        flex: 1,
        //    justifyContent: "center",
        backgroundColor: "#0f161e",

    },
    content: {
        color: "#fff"
    }


})

