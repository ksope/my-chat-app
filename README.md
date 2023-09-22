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
Clone repository using command git clone 'https://github.com/ksope/my-chat-app' 

To test the Chat App, you will need set up Expo: However, to setup Expo, you need the following;
1. The correct version of node in your terminal. To make sure, check the version of node you are using cmd: node -v
If the version is not 16.19.0 then enter the following cmds in your terminal;
nvm install 16.19.0
nvm use 16.19.0

2. Expo CLI on your machine by entering the cmd 'npm install -g expo-cli' in your terminal

3. Search for the Expo Go app in the relevant app store for your device (iOS or Android) to run your project on. Download the Expo Go app and setup an expo account here or using the app: https://expo.dev/client. In your terminal, login to Expo using the cmd: 'expo login' and go through the login process. You can see the currently logged-in account by running 'expo whoami'.

4. For Windows users, Install Android Studio as a device emulator here: 'https://developer.android.com/studio'. Follow the documentation on how to install and setup virtual device. For Mac users, use Xcode to use an iOS simulator. The only requirement to set up the simulator is to have Xcode and Xcode Command Line Tools Installed.

To setup brand new project:
Use the npx create-expo-app [your project name] --template
Dependencies
From project root folder, enter cmds to install the needed dependencies for the project:
● npm install --save @react-navigation/native @react-navigation/native-stack
● expo install react-native-screens react-native-safe-area-context
● npm install react-native-gifted-chat --save
● npm install firebase@9.13.0 --save
● expo install @react-native-async-storage/async-storage
● expo install @react-native-community/netinfo
● expo install expo-image-picker
● expo install expo-location
● expo install react-native-maps
● expo install expo-location
● expo install react-native-maps


Setup Of Cloud Database
Create a new Firestore database here:- 'https://firebase.google.com/'
Update the read and write rules while setting the security rules for your database so that you can run queries on the database by editing this line "allow read, write: if false;" to "allow read, write: if true;"
Enable the Anonymous sign-in method (No need to create a 'messages' collection. Firebase will create it for you)

****************************Very Important to generate your own configuration code**************************************
While in FireStore project, navigate to  “Project Settings”. Under the 'General' tab, you’ll find a section called 'Your apps', where you can generate configurations for different platforms. Click the 'Firestore for Web' button (it may be shown as the </> icon). Clicking this button will open a new screen asking you to register your web app, which will connect to the Firestore database you just created.

Fill in name for demo app (i.e., “my-chat-app”), then click Register app to generate the configuration code.

You’ll be presented with two options: 'Use npm' or 'Use a "script" tag'. Select the 'Use npm' option. Copy-paste the 'const firebaseConfig = {...};' code into your 'App.js' file. This code will allow your whole app to connect to your Firestore database.

****************************************************************************************************************************


Setup Cloud Storage on Firebase
Go to 'https://firebase.google.com/products/storage/' and ensure you are signed in. Follow the default settings but update the read and write rules while setting the security rules for your database so that you can run queries on the database by editing this line "allow read, write: if false;" to "allow read, write: if true;"



How To Demo The Chat App:
To demo using a web interface;
Enter cmd: 'npx expo start' from the project root folder, and select the options:
Option 1- Press 'w'. This opens the web interface on your desktop. 
Option 2- Press the 'a' option to test using the Android Emulator (Make sure that the android emulator itself is already running in the background)
option 3- To test on your phone device using the Expo Go app, scan the qr code with your phone using the 'Expo Go' app. 

How To Test offline Functionality:
To test the offline functionality, stop the currently running Expo Metro Bundler, then relaunch it with the --offline flag: expo start --offline   


TECHNICAL: Languages, Libraries, Frameworks, Apps, Database etc.
● Javascript
● React Native
● Firebase (for cloud storage)
● FireStore (Database)
● Expo Go
● Android Emulator (Windows)
