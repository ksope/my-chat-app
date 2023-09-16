Project title: Chat App

Project Description: To build a chat app for mobile devices using React Native. 

More about the Chat App:
The app will provide users with a chat interface and options to share images and their location.


Key Features of Chat App:
● A page where users can enter their name and choose a background color for the chat screen
before joining the chat
● A page displaying the conversation, as well as an input field and submit button.
● The chat must provide users with two additional communication features: sending images
and location data.
● Data gets stored online and offline.

How to Set Up Chat App Project
Clone repository using command git clone https://github.com/ksope/chat-demo 

To test the Chat App, you will need set up Expo: However, to setup Expo, you need the following;
1. The correct version of node in your terminal. To make sure, check the version of node you are using cmd: node -v
If the version is not 16.19.0 then enter the following cmds in your terminal;
nvm install 16.19.0
nvm use 16.19.0

2. Expo CLI on your machine by entering the cmd 'npm install -g expo-cli' in your terminal

3. Search for the Expo Go app in the relevant app store for your device (iOS or Android) to run your project on. Download the Expo Go app and setup an expo account here: https://expo.dev/client

4. Install Android Studio as a device emulator here: https://developer.android.com/studio. Follow the documentation on how to install

To setup brand new project:
Use the npx create-expo-app [your project name] --template
Dependencies
From project root folder, enter cmd: npm install --save @react-navigation/native @react-navigation/native-stack
Run the following command to install the necessary dependencies that react-navigation uses: expo install react-native-screens react-native-safe-area-context

How To Demo the Chat App:
To demo using a web interface;
Enter cmd: 'expo start' from the project root folder, then press 'w'. This opens the web interface on your desktop. To test on your phone, scan the qr code with your phone and this will open the web interface on your phone.

To Demo using an Android Emulator;
Make sure that the android emulator itself is already running in the background
Run the app by navigating to the chat-demo project root folder and using the command: 'expo start' and then presing 'a'

TECHNICAL: Languages, Libraries, Frameworks, etc.
● Javascript
● React Native
