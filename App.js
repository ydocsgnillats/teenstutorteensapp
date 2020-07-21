import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, ImageBackground, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 
    },
    container: {
        paddingTop: 15,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    secondcontainer: {
        paddingTop: 5,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    button: {
        width: 100,
        height: 80,
        backgroundColor: '#DDDDDD',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center',
        flex: 1,
        padding: 10,
        color: 'grey',
        fontSize: 20,
        alignItems: 'center'
    },
    bigmiddle: {
        width: 220,
        height: 90,
        backgroundColor: '#DDDDDD',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        padding: 15,
        color: 'black',
        fontSize: 15
    }
})

function HomeScreen({ navigation }) {
    return (
        <View style={[styles.center, { top: 30 }]}>
            <View style={styles.container}>
                <Image
                    source={require('./assets/tttlogo.png')} />
            </View>
            <View style={styles.container}>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('About')}>
                        <Text style={styles.buttonText}> About </Text>
                    </TouchableOpacity>
                </View>
                <Text>      </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL('https://www.teenstutorteens.com/become-a-tutor.html')}>
                    <Text style={styles.buttonText}> Apply to Tutor </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bigmiddle}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL('https://www.teenstutorteens.com/get-tutored.html')}>
                    <Text style={styles.buttonText}> Find a Tutor </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Social')}>
                        <Text style={styles.buttonText}> Social Media </Text>
                    </TouchableOpacity>
                </View>
                <Text>      </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Sponsor')}>
                    <Text style={styles.buttonText}> Sponsors </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text>ADS GO HERE</Text>
            </View>
        </View>
    )
}

function AboutScreen() {
    return (
      <View style = {styles.container}>
      <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('./assets/aboutbg.png')}>
      <View>
        <Text style = {styles.text}>Teens Tutor Teens is built upon the wish for high school peers to succeed in the school system. Education is found to be an important element in life in deciding the role the student will have. In order to ensure the best for students, Teens Tutor Teens has implemented leadership and community service to Teens who need aid achieving academic success.  Teens can receive free tutoring from other teens who have proven to be academically exceptional in their community. However, teens who are economically disadvantaged will be given priority. The mission is to provide other teens with the chance to go and thrive at college and to start off life on the right foot. 
        Visit us at: https://www.teenstutorteens.com
        </Text>
      </View>      
      </ImageBackground>
      </View>
  );
}

function FindScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Find Screen</Text>
    </View>
  );
}

function SocialScreen() {
    return (
        <View style={styles.center}>
            <View style={styles.container}>
                <Image
                    source={require('./assets/tttlogo.png')} />
            </View>
            <View style={styles.container}>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Linking.openURL('https://www.facebook.com/Teenstutorteens-113871120346929')}>
                        <Text style={styles.buttonText}> Facebook </Text>
                    </TouchableOpacity>
                </View>
                <Text>      </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL('https://www.instagram.com/teenstutorteens/')}>
                    <Text style={styles.buttonText}> Instagram </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.secondcontainer}>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Linking.openURL('https://twitter.com/explore')}>
                        <Text style={styles.buttonText}> Twitter </Text>
                    </TouchableOpacity>
                </View>
                <Text>      </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL('https://www.linkedin.com/company/teens-tutor-teens/')}>
                    <Text style={styles.buttonText}> LinkedIn </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function SponsorScreen() {
  return (
    <View style={styles.center}>
      <View style={styles.container}>
        <Image
          source={require('./assets/tttlogo.png')} />
      </View>
      <Text>Sponsor Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Find" component={FindScreen} />
        <Stack.Screen name="Social" component={SocialScreen} />
        <Stack.Screen name="Sponsor" component={SponsorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
