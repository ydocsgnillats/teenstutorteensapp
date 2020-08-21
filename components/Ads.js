import {
  AdMobBanner,
} from 'expo-ads-admob';

import React, { Component } from 'react'
import { Text } from 'react-native'

class Ads extends Component {
    render() {
       return (
               <Text>
                <AdMobBanner
                   bannerSize="fullBanner"
                   adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                   onDidFailToReceiveAdWithError={this.bannerError} />
               </Text>
       )
}
}
export default Ads;
