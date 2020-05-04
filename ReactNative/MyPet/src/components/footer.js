import React, { Component } from 'react';
import {View,Text,Image} from 'react-native'


export default class componentName extends Component {
  render() {
    return (
        <View style={{ flex:1,backgroundColor:'#F8F8FF',flexDirection:'row'}}>
          <View style={{flex:1,backgroundColor:'gray',borderWidth:1}}>
              <Image style={{}}></Image>
          </View>
          <View style={{flex:1,backgroundColor:'gray',borderWidth:1}}>
              <Image style={{}}></Image>
          </View>
          <View style={{flex:1,backgroundColor:'gray',borderWidth:1}}>
              <Image style={{}}></Image>
          </View>
          <View style={{flex:1,backgroundColor:'gray',borderWidth:1}}>
              <Image style={{}}></Image>
          </View>
        </View>
    );
  }
}
