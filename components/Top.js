import React, { Component } from 'react'
import { View, Image } from 'react-native'

class Topimg extends Component {
    render() {
       return (
               <View>
                   <Image
                        source={require('../assets/tttlogo.png')} />
               </View>
       )
}
}
export default Topimg;
