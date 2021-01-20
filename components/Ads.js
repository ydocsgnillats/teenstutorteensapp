import {
  AdMobBanner, AdMobInterstitial
} from 'expo-ads-admob';

import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Ads extends Component {
    render() {
       return (
               <Text>
                <AdMobBanner
                   bannerSize="fullBanner"
                   adUnitID="ca-app-pub-2773378604183047/9245998736" // Test ID, Replace with your-admob-unit-id
                   onDidFailToReceiveAdWithError={this.bannerError} />
               </Text>
       )
}
}

//interstitial "ca-app-pub-2773378604183047/5446354521"