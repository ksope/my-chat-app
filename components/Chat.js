import { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import {
    collection,
    getDocs,
    addDoc,
    onSnapshot,
    query,
    orderBy,
} from "firebase/firestore";

const Chat = ({ route, navigation, db }) => {
    const [messages, setMessages] = useState([]);
    const { name, color, userID } = route.params; //extract the name & color properties passed through the route prop object

    useEffect(() => {
        navigation.setOptions({
            title: name, //set header title
            headerStyle: {
                backgroundColor: color, //set the background color
            },
        });
    }, []);

    //get realtime updates
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc")
        ); // query the messages collection and sort query in descending order
        const unsubMessages = onSnapshot(q, (documentsSnapshot) => {
            let newMessages = [];
            documentsSnapshot.forEach((doc) => {
                newMessages.push({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: new Date(doc.data().createdAt.toMillis()),
                });
            });
            setMessages(newMessages);  //assign to the messages state
        });
        // Clean up code
        return () => {
            if (unsubMessages) unsubMessages();
        };
    }, []); //useEffect hook takes effect when there is a change in the state of messages

    const onSend = (newMessages) => {
        addDoc(collection(db, "messages"), newMessages[0]); //Add new messages to the database and auto-generate an ID
    };

    //handle how message bubbles are displayed
    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: "#a5a869",
                    },
                    left: {
                        backgroundColor: "#C9CAA5",
                    },
                }}
            />
        );
    };

    return (
        <View>
            <GiftedChat
                messages={messages}
                renderBubble={renderBubble}
                onSend={(messages) => onSend(messages)}
                user={{ _id: userID, name }}
            />
            {Platform.OS === "android" ? (
                <KeyboardAvoidingView behavior="height" />
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Chat;
