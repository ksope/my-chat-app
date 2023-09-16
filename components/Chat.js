import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Chat = ({ route, navigation }) => {
    const { name, color } = route.params; //extract the name & color properties passed through the route prop object

    useEffect(() => {
        navigation.setOptions({
            title: name,
            headerStyle: {
                backgroundColor: color, //set the background color
            },
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text>Hello {name}</Text>
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
