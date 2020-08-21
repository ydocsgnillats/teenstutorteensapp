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
        top: -25,
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor:'blue'
    },
    bigbuttontext: {
        textAlign: 'center',
        fontSize: 35,
        color: '#1e233b'
    },
    button: {
        top: 10,
        margin: 10,
        marginBottom: 0,
        marginTop: 0,
        backgroundColor: '#5c79fe99',
        width: '40%',
        height: '50%',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor:'blue'
    },
    button2: {
        bottom: 10,
        margin: 10,
        marginBottom: 0,
        marginTop: 0,
        backgroundColor: '#5c79fe99',
        width: '40%',
        height: '50%',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor:'blue'
    },
    socialButton:{
        margin: 10,
        justifyContent: 'center',
        height: '15%',
        top: -30,
        borderWidth: 2,
        backgroundColor: '#5c79fe99',
        borderRadius: 4,
        borderWidth: 1,
        borderColor:'blue'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        padding: 5,
        color: '#1e233b'
    },
    inputStyle: {
        top:-15,
        borderColor: 'blue',
        borderWidth: 1,
        margin:10,
        padding:10,
        fontSize: 20
    },
    inputStyleFind: {
        borderColor: 'blue',
        borderWidth: 1,
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
        backgroundColor: '#5c79fe99',
        borderRadius: 4,
        borderWidth: 1,
        borderColor:'blue',
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
    ads: {
        top:1,
        bottom:0
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
    sponsor: {
        justifyContent: 'center',
        top: 30,
        padding: 25
    },
    sponsorImg: {
        
    },
    sponsorText: {
        
    },
    find: {
        backgroundColor: 'white'
    }
})

export { styles }
