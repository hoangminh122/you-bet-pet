import React, { Component } from 'react';
import {View,Text,Image} from 'react-native'
import {Link} from 'react-router-native'


export default class componentName extends Component {
  render() {
    return (
        <View style={{ flex:1,backgroundColor:'#F8F8FF',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row'}}>
          <Text style={{marginLeft:10,fontSize:20,fontWeight:'bold',color:'#000000',}}>Lượt đấu giá của tôi </Text>
          <Link to={'/'} style={{height:30,width:30,backgroundColor:'red'}}>
            <Image source={require('../images/home.png')}></Image>
          </Link>
          <Link to={'/ok'} style={{height:30,width:30}}>
            <Image source={require('../images/home.png')}></Image>
          </Link>
        </View>
    );
  }
}
