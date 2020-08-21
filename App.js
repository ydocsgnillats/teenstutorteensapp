import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, ImageBackground, Linking, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ads from './components/Ads.js';
import Topimg from './components/Top.js';
import { styles } from './assets/styles';
import { ApplyForm } from './components/Apply.js';
import { FindForm } from './components/Find.js';
import { AdMobInterstitial } from 'expo-ads-admob';

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
                   style={styles.bigbutton}
                   onPress={() => navigation.navigate('Find a Tutor')}>
                   <Text style={styles.bigbuttontext}> Find a Tutor </Text>
                </TouchableOpacity>
            </View>
           <View style = {styles.home}>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => navigation.navigate('Social Media')}>
                    <Text style={styles.buttonText}> Social Media </Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={styles.button2}
                   onPress={() => navigation.navigate('Sponsors')}>
                   <Text style={styles.buttonText}> Sponsors </Text>
                </TouchableOpacity>
            </View>
                <View style={styles.ads}>
                    < Ads />
           </View>
        </View>
           );
}

function AboutScreen() {
    return(
           <ImageBackground style={styles.container} source={require("./assets/about.png")}>
           <Text style = {{color:'black', fontSize:20, backgroundColor:'#dce1e899', width: '100%', padding:25, top:50}}>Teens Tutor Teens is built upon the wish for high school peers to succeed in the school system. Education is found to be an important element in life in deciding the role the student will have. In order to ensure the best for students, Teens Tutor Teens has implemented leadership and community service to Teens who need aid achieving academic success.  Teens can receive free tutoring from other teens who have proven to be academically exceptional in their community. However, teens who are economically disadvantaged will be given priority. The mission is to provide other teens with the chance to go and thrive at college and to start off life on the right foot.
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
            < ApplyForm />
           </View>
           </View>
           );
}

function FindScreen() {
    // AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/6300978111");
    // AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
    return(
           <View style={styles.container}>
           <View style={styles.img}>
            < Topimg />
           </View>
           <View style={styles.find}>
            < FindForm />
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
                    style={styles.socialButton}
                    onPress={() => Linking.openURL('https://www.facebook.com/Teenstutorteens-113871120346929')}>
                    <Text style={styles.buttonText}> Facebook </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => Linking.openURL('https://www.instagram.com/teenstutorteens/')}>
                    <Text style={styles.buttonText}> Instagram </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => Linking.openURL('https://twitter.com/TeensTutorTeens')}>
                    <Text style={styles.buttonText}> Twitter </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.socialButton}
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
           <View>
                <View style = {styles.sponsor}>
                    <Image style = {styles.sponsorImg} source={require('./assets/google.png')} />
                    <Text style = {styles.sponsorText}>Google Grants Recipient</Text>
           
                    <Image style = {styles.sponsorImg} source={require('./assets/microsoft.png')} />
                    <Text style = {styles.sponsorText}>Microsoft</Text>
                </View>
                <View style = {styles.sponsor}>
                    <Image style = {styles.sponsorImg} source={require('./assets/walmart.png')} />
                    <Text style = {styles.sponsorText}>Walmart</Text>
           
                    <Image style = {styles.sponsorImg} source={require('./assets/volunteer.png')} />
                    <Text style = {styles.sponsorText}>Presidential Volunteer Award</Text>
                </View>
                <View style = {styles.sponsor}>
                    <Image style = {styles.sponsorImg} source={require('./assets/favorite.png')} />
                    <Text style = {styles.sponsorText}>Staff Favorite</Text>
           
                    <Image style = {styles.sponsorImg} source={require('./assets/vetted.png')} />
                    <Text style = {styles.sponsorText}>Vetted</Text>
                </View>
                <View style = {styles.sponsor}>
                    <Image style = {styles.sponsorImg} source={require('./assets/guidestar.png')} />
                    <Text style = {styles.sponsorText}>Guidestar</Text>
           
                    <Image style = {styles.sponsorImg} source={require('./assets/invictus.png')} />
                    <Text style = {styles.sponsorText}>Invictus</Text>
                </View>
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
