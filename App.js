// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";
// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//initialize connection to Firestore
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    disableNetwork,
    enableNetwork,
} from "firebase/firestore";
//detect whether user is online or offline
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import {getStorage} from "firebase/storage";
// Create the navigator
const Stack = createNativeStackNavigator();

import { LogBox, Alert } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]); //prevent deprecated error message from appearing

export default function App() {
    const connectionStatus = useNetInfo();

    useEffect(() => {
        if (connectionStatus.isConnected === false) {
            Alert.alert("Connection Lost!");
            disableNetwork(db);
        } else if (connectionStatus.isConnected === true) {
            enableNetwork(db);
        }
    }, [connectionStatus.isConnected]); //track connection and display alert and disable fireStore database connection if connection is lost and reconnect when connection is restored

    const firebaseConfig = {
        apiKey: "AIzaSyBTRTniwDNVMDstvhiaHBGlRokNbL2iYhE",
        authDomain: "chat-app-3546a.firebaseapp.com",
        projectId: "chat-app-3546a",
        storageBucket: "chat-app-3546a.appspot.com",
        messagingSenderId: "26443162518",
        appId: "1:26443162518:web:cfcf2be3e7b7d8e0e973b7",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    const storage = getStorage(app);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="Chat">
                    {(props) => (
                        <Chat
                            isConnected={connectionStatus.isConnected}
                            db={db}
                            storage={storage}
                            {...props}
                        />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
