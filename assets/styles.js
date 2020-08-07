import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    img: {
        width: '100%',
        height: '25%',
        aspectRatio: 1,
        right: 100
    },
    bgImg: {
        flex:1,
        width: '100%',
        height: '100%'
    },
    button: {
        margin: 10,
        backgroundColor: 'grey',
        width: '40%'
    },
    buttonText: {
        textAlign: 'center',
        padding: 15,
        fontSize: 15
    },
    ads: {
        
    },
    inputArea: {
        margin: 2,
        padding: 5,
        borderColor: 'grey',
        borderWidth: 1,
        width: '50%'
    },
    submitBtn: {
        justifyContent: 'center',
        width: '50%',
        height: '15%',
        margin: 10,
        backgroundColor: 'grey',
    },
    home: {
        top: 30,
    },
    about: {
        justifyContent: 'center',
        top: 50,
        padding: 25,
        color:'grey'
    },
    apply: {
        justifyContent: 'center',
        top: 30,
        padding: 25
    },
    social: {
        justifyContent: 'center',
        top: 30,
        padding: 25
    },
    sponsors: {
        justifyContent: 'center',
        top: 30,
        padding: 25
    },
    find: {
        justifyContent: 'center',
        padding: 10
    }
})

export { styles }
