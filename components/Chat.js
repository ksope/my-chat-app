import { useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const Chat = ({ route, navigation }) => {
    const [messages, setMessages] = useState([]);
    const { name, color } = route.params; //extract the name & color properties passed through the route prop object


    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Hello and welcome to the group chat",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "React Native",
                    avatar: "https://placeimg.com/140/140/any",
                },
            },
            {
                _id: 2,
                text: "I have entered the Chat",
                createdAt: new Date(),
                system: true,
            },
        ]);
    }, []);

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
