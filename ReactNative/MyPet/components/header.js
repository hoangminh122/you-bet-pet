import React, { Component } from 'react';
import {View,Text,Image} from 'react-native'


export default class componentName extends Component {
  render() {
    return (
        <View style={{ flex:1,backgroundColor:'#F8F8FF',justifyContent:'center',alignItems:'flex-start'}}>
          <Text style={{marginLeft:10,fontSize:20,fontWeight:'bold',color:'#000000',}}>Lượt đấu giá của tôi </Text>
        </View>
    );
  }
}
