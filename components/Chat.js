import { useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

const Chat = ({ route, navigation }) => {
    const [messages, setMessages] = useState([]);
    const { name, color } = route.params; //extract the name & color properties passed through the route prop object

    //add new messages sent to previous messages sent
    const onSend = (newMessages) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessages)
        );
    };

    //handle how message bubbles are displayed
    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: "a5a869",
                    },
                    left: {
                        backgroundColor: "#C9CAA5",
                    },
                }}
            />
        );
    };

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
            title: name, //set header title
            headerStyle: {
                backgroundColor: color, //set the background color
            },
        });
    }, []);

    return (
        <View>
            <GiftedChat
                messages={messages}
                renderBubble={renderBubble}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
            {Platform.OS === "android" ? (
                <KeyboardAvoidingView behavior="height" /> //avoid bug in older phones where keyboard hides messages in screen for android phones
            ) : null}
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
