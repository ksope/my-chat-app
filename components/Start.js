import { useState } from "react";
//import Firebase authentication handle
import { getAuth, signInAnonymously } from "firebase/auth";
import {
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Image,
    textInput,
} from "react-native";
import image from "../assets/BackgroundImage.png";
import icon from "../assets/person1.png";

const Start = ({ navigation }) => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");

    const screenBackgroundColors = {
        a: "#090C08",
        b: "#474056",
        c: "#8A95A5",
        d: "#B9C6AE",
    };
    const auth = getAuth(); //Initialize Firebase Authentication handler
    const signInUser = () => {
        signInAnonymously(auth)
            .then((result) => {
                navigation.navigate("Chat", {
                    userID: result.user.uid,
                    name: name,
                    color: color,
                });
                Alert.alert("Signed in Successfully!");
            })
            .catch((error) => {
                Alert.alert("Unable to sign in, try later again.");
            });
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.imagePic}
            >
                <Text style={styles.titleText}>Welcome</Text>
                <View style={styles.innerContainer}>
                    <View style={styles.sectionStyle}>
                        <Image source={icon} style={styles.imageStyle} />
                        <TextInput
                            style={styles.textInput}
                            value={name}
                            onChangeText={setName}
                            placeholder="Type your username here"
                        />
                    </View>
                    <View style={styles.box2}>
                        <Text style={[styles.lightGrey, styles.poppinsText]}>
                            Choose Background Color:
                        </Text>
                        {/* coloured buttons to set color of background for the Chat screen */}
                        <View style={styles.colorPicker}>
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel="Color option black"
                                accessibilityHint="Lets you choose a background color for the chat screen."
                                accessibilityRole="button"
                                style={[
                                    styles.circle,
                                    {
                                        backgroundColor:
                                            screenBackgroundColors.a,
                                    },
                                ]}
                                onPress={() =>
                                    setColor(screenBackgroundColors.a)
                                }
                            ></TouchableOpacity>
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel="Color option grey"
                                accessibilityHint="Lets you choose a background color for the chat screen."
                                accessibilityRole="button"
                                style={[
                                    styles.circle,
                                    {
                                        backgroundColor:
                                            screenBackgroundColors.b,
                                    },
                                ]}
                                onPress={() =>
                                    setColor(screenBackgroundColors.b)
                                }
                            ></TouchableOpacity>
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel="Color option light blue"
                                accessibilityHint="Lets you choose a background color for the chat screen."
                                accessibilityRole="button"
                                style={[
                                    styles.circle,
                                    {
                                        backgroundColor:
                                            screenBackgroundColors.c,
                                    },
                                ]}
                                onPress={() =>
                                    setColor(screenBackgroundColors.c)
                                }
                            ></TouchableOpacity>
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel="Color option light green"
                                accessibilityHint="Lets you choose a background color for the chat screen."
                                accessibilityRole="button"
                                style={[
                                    styles.circle,
                                    {
                                        backgroundColor:
                                            screenBackgroundColors.d,
                                    },
                                ]}
                                onPress={() =>
                                    setColor(screenBackgroundColors.d)
                                }
                            ></TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        accessible={true}
                        accessibilityLabel="Go to chat screen"
                        accessibilityHint="Takes you to group chat."
                        accessibilityRole="button"
                        style={styles.button}
                        onPress={signInUser}
                    >
                        <Text style={styles.textStyle}>Start Chatting</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

{
    /* styling for rendered UI */
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        height: "44%",
        width: "88%",
        backgroundColor: "#fff",
        alignItems: "center",
        marginBottom: 24,
        justifyContent: "space-around",
        position: "relative",
    },
    imagePic: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    textInput: {
        padding: 15,
        width: "100%",
        margin: "0 0 0 30",
        fontFamily: "sans-serif",
        color: "#bcbcbc",
    },
    button: {
        alignItems: "center",
        width: "88%",
        backgroundColor: "#757083",
        padding: 10,
        height: 50,
        justifyContent: "center",
        border: "none",
        borderRadius: 5,
        position: "absolute",
        left: "6%",
        bottom: "6%",
    },
    titleText: {
        fontFamily: "sans-serif",
        fontSize: 45,
        fontWeight: "600",
        color: "#fff",
        alignItems: "center",
        marginTop: 48,
    },
    circle: {
        position: "relative",
        height: 40,
        width: 40,
        borderRadius: 50,
        margin: 3,
    },
    selectedCircle: {
        padding: 10,
    },
    textStyle: {
        color: "#fff",
        fontFamily: "sans-serif",
        fontWeight: "400",
    },

    box2: {
        alignItems: "flex-start",
        gap: 10,
        position: "absolute",
        left: "6%",
        top: "35%",
    },
    colorPicker: {
        flex: 4,
        flexDirection: "row",
        alignSelf: "flex-start",
        alignItems: "center",
        width: "100%",
        gap: 18,
    },
    grey: {
        color: "#5b5b5b",
    },
    lightGrey: {
        color: "#757083",
        opacity: 0.5,
    },
    poppinsText: {
        fontFamily: "sans-serif",
    },
    sectionStyle: {
        flexDirection: "row",
        width: "88%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 0.5,
        borderColor: "#5b5b5b",
        borderRadius: 5,
        margin: 10,
        position: "absolute",
        left: "6%",
        top: "6%",
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: "stretch",
        alignItems: "center",
        color: "#fff",
    },
});

export default Start;
