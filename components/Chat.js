import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Chat = ({ route, navigation }) => {
    const { name, color } = route.params; //extract the name & color properties passed through the route prop object

    useEffect(() => {
        navigation.setOptions({
            //update the options configuration for the active screen
            title: name, //set header title
            headerStyle: {
                backgroundColor: color, //set the background color
            },
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text>Hello Screen2!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Chat;
