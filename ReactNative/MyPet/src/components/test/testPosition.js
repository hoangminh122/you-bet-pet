import React, { Component } from 'react';
import {View,Text} from 'react-native'
export default class componentName extends Component {
  render() {
    return (
      <View>
          <View style={{width:200,height:200,backgroundColor:'yellow',alignSelf:'center',position:'relative',margin:50}}>
                <View style={{width:20,height:20,top:-10,left:'95%',backgroundColor:'red',borderWidth:1,borderColor:'gray',borderRadius:90}}>
                    <Text style={{fontSize:10,alignSelf:'center',fontWeight:'bold',color:'white'}}>1</Text>
                </View>
          </View>
      </View>
    );
  }
}
