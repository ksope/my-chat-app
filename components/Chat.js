import { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { GiftedChat, Bubble, InputToolbar } from "react-native-gifted-chat";
import {
    collection,
    getDocs,
    addDoc,
    onSnapshot,
    query,
    orderBy,
} from "firebase/firestore";
import CustomActions from "./CustomActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MapView from "react-native-maps";

const Chat = ({ route, navigation, db, isConnected, storage }) => {
    const { name, color, userID } = route.params; //extract the name & color properties passed through the route prop object
    const [messages, setMessages] = useState([]);

    //declare listener
    let unsubMessages;
    //get realtime updates
    useEffect(() => {
        navigation.setOptions({
            title: name, //set header title
            headerStyle: {
                backgroundColor: color, //set the background color
            },
        });

        //if online, get messages from FireStore database else if offline, get messages from AsyncStorage
        if (isConnected === true) {
            // unregister current onSnapshot() listener to avoid registering multiple listeners when
            // useEffect code is re-executed.
            if (unsubMessages) unsubMessages();
            unsubMessages = null;
            const q = query(
                collection(db, "messages"),
                orderBy("createdAt", "desc")
            ); // query the messages collection and sort query in descending order
            unsubMessages = onSnapshot(q, (documentsSnapshot) => {
                let newMessages = [];
                documentsSnapshot.forEach((doc) => {
                    newMessages.push({
                        id: doc.id,
                        ...doc.data(),
                        createdAt: new Date(doc.data().createdAt.toMillis()),
                    });
                });
                cacheMessages(newMessages);
                setMessages(newMessages); //assign to the messages state
            });
        } else loadCachedMessages();
        // Clean up code
        return () => {
            if (unsubMessages) unsubMessages();
        };
    }, [isConnected]); //useEffect hook takes effect when there is a change in the state of messages

    const cacheMessages = async (messagesToCache) => {
        try {
            await AsyncStorage.setItem("messages", JSON.stringify(newMessages));
        } catch (error) {
            console.log(error.message);
        }
    };

    //load messages from AsyncStorage
    const loadCachedMessages = async () => {
        const cachedMessages = (await AsyncStorage.getItem("messages")) || [];
        setMessages(JSON.parse(cachedMessages));
    };

    const onSend = (newMessages) => {
        addDoc(collection(db, "messages"), newMessages[0]); //Add new messages to the database and auto-generate an ID
    };

    //disable the InputToolbar when there is no connection
    const renderInputToolbar = (props) => {
        if (isConnected) return <InputToolbar {...props} />;
        else return null;
    };

    //create a circle button
    const renderCustomActions = (props) => {
        return <CustomAction storage={storage} {...props} />;
    };

    //check if current message contains location data
    const renderCustomView = (props) => {
        const { currentMessage } = props;
        if (currentMessage.location) {
            return (
                <MapView
                    style={{
                        width: 150,
                        height: 100,
                        borderRadius: 13,
                        margin: 3,
                    }}
                    region={{
                        latitude: currentMessage.location.latitude,
                        longitude: currentMessage.location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            );
        }
        return null;
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
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                renderBubble={renderBubble}
                onSend={(messages) => onSend(messages)}
                user={{ _id: userID, name }}
                renderInputToolbar={renderInputToolbar}
                renderActions={renderCustomActions}
                renderCustomView={renderCustomView}
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
