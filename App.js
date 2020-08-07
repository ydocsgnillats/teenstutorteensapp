import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, ImageBackground, Linking, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { InputFind, InputApply } from './components/Input.js';
import Topimg from './components/Top.js';
import { styles } from './assets/styles';

const backgroundImg = {uri: './assets/about.png'}

function HomeScreen({ navigation }) {
    return(
           <View style={styles.container}>
           <View style={styles.img}>
            < Topimg />
           </View>
           <View style = {styles.home}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('About Us')}>
                    <Text style={styles.buttonText}> About </Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={styles.button}
                   onPress={() => navigation.navigate('Apply to Tutor')}>
                   <Text style={styles.buttonText}> Apply to Tutor </Text>
               </TouchableOpacity>
            </View>
           <View style = {styles.home}>
                <TouchableOpacity
                   style={styles.button}
                   onPress={() => navigation.navigate('Find a Tutor')}>
                   <Text style={styles.buttonText}> Find a Tutor </Text>
                </TouchableOpacity>
            </View>
           <View style = {styles.home}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Social Media')}>
                    <Text style={styles.buttonText}> Social Media </Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={styles.button}
                   onPress={() => navigation.navigate('Sponsors')}>
                   <Text style={styles.buttonText}> Sponsors </Text>
                </TouchableOpacity>
            </View>
        </View>
           );
}

function AboutScreen() {
    return(
           <ImageBackground style={styles.container} source={require("./assets/coffee.png")}>
           <Text style = {{color:'black', fontSize:18, backgroundColor:'#dce1e890', width: '100%', padding:25, top:50}}>Teens Tutor Teens is built upon the wish for high school peers to succeed in the school system. Education is found to be an important element in life in deciding the role the student will have. In order to ensure the best for students, Teens Tutor Teens has implemented leadership and community service to Teens who need aid achieving academic success.  Teens can receive free tutoring from other teens who have proven to be academically exceptional in their community. However, teens who are economically disadvantaged will be given priority. The mission is to provide other teens with the chance to go and thrive at college and to start off life on the right foot.
                </Text>
           </ImageBackground>
           );
}

function ApplyScreen() {
    return(
           <View style={styles.container}>
           <View style={styles.img}>
            < Topimg />
           </View>
           <View style={styles.apply}>
            <InputApply />
           </View>
           </View>
           );
}

function FindScreen() {
    return(
           <View style={styles.container}>
           <View style={styles.img}>
            < Topimg />
           </View>
           <View style={styles.find}>
            <InputFind />
           </View>
           </View>
           );
}

function SocialScreen() {
    return(
           <View style={styles.container}>
           <View style={styles.img}>
               < Topimg />
           </View>
           <View style = {styles.social}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL('https://www.facebook.com/Teenstutorteens-113871120346929')}>
                    <Text style={styles.buttonText}> Facebook </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL('https://www.instagram.com/teenstutorteens/')}>
                    <Text style={styles.buttonText}> Instagram </Text>
                </TouchableOpacity>
            </View>
           <View style = {styles.social}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL('https://twitter.com/explore')}>
                    <Text style={styles.buttonText}> Twitter </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        Linking.openURL('https://www.linkedin.com/company/teens-tutor-teens/')}>
                    <Text style={styles.buttonText}> Linkedin </Text>
                </TouchableOpacity>
            </View>
            </View>
           );
}

function SponsorScreen() {
    return(
           <View style={styles.container}>
           <View style={styles.img}>
            < Topimg />
           </View>
           <View style = {styles.sponsor}>
           </View>
           </View>
           );
}


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name = "Home" component={HomeScreen} />
                <Stack.Screen name = "About Us" component={AboutScreen} />
                <Stack.Screen name = "Apply to Tutor" component={ApplyScreen} />
                <Stack.Screen name = "Find a Tutor" component={FindScreen} />
                <Stack.Screen name = "Social Media" component={SocialScreen} />
                <Stack.Screen name = "Sponsors" component={SponsorScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App;
