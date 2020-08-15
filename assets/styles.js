import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        flex: 1,
    },
    img: {
        width: '100%',
        height: '25%',
        aspectRatio: 1,
        right: 100,
        top: -24
    },
    bgImg: {
        flex:1,
        width: '100%',
        height: '100%'
    },
    bigbutton: {
        backgroundColor: '#5c79fe99',
        width: '85%',
        height: '85%',
        top: -15,
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 2,
        borderColor:'#5c79fe75'
    },
    bigbuttontext: {
        textAlign: 'center',
        fontSize: 35,
        color: '#1e233b',
        fontFamily: 'AmericanTypewriter'
    },
    button: {
        margin: 10,
        backgroundColor: '#5c79fe99',
        width: '40%',
        height: '50%',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 2,
        borderColor:'#5c79fe50'
    },
    socialButton:{
        margin: 10,
        justifyContent: 'center',
        height: '15%',
        top: -20,
        borderRadius: 6,
        borderWidth: 2,
        backgroundColor: '#5c79fe99',
        borderRadius: 6,
        borderWidth: 2,
        borderColor:'#5c79fe75'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 19,
        padding: 5,
        color: '#1e233b',
        fontFamily: 'AmericanTypewriter'
    },
    inputStyle: {
        top:-15,
        borderColor: '#5c79fe',
        borderWidth: 2,
        margin:10,
        padding:10,
        fontSize: 20
    },
    inputStyleFind: {
        borderColor: '#5c79fe',
        borderWidth: 2,
        margin:2,
        padding:5,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        top:5,
        left: 35,
        fontSize: 15
    },
    submitStyle: {
        width: '50%',
        height: '10%',
        backgroundColor: 'grey',
        backgroundColor: '#5c79fe99',
        borderRadius: 6,
        borderWidth: 2,
        borderColor:'#5c79fe75',
        justifyContent:'center',
        alignItems: 'center',
        left: 85,
        top: 10
    },
    home: {
        top: 25,
        justifyContent: 'center',
        flex: 2,
        flexDirection: 'row'
    },
    about: {
        justifyContent: 'center',
        top: 50,
        padding: 25,
        color:'grey'
    },
    apply: {
        top: 30,
        padding: 25
    },
    social: {
        justifyContent: 'center',
        top: 30,
        padding: 10
    },
    sponsors: {
        justifyContent: 'center',
        top: 30,
        padding: 25
    },
    find: {
        backgroundColor: 'white'
    }
})

export { styles }
