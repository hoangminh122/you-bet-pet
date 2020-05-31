import React, { Component } from 'react';
import {View,Text,Image, StyleSheet, TouchableHighlight,Dimensions} from 'react-native'


var screen =Dimensions.get('window');
export default class componentName extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.iconView}>
            <TouchableHighlight style={styles.linkView}>
              <Text style={[styles.imageUser,{backgroundColor:'gray'}]} >End</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.iconView}>
            <TouchableHighlight style={styles.linkView}>
              <Text style={styles.imageUser}>Start</Text>
            </TouchableHighlight>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    flexDirection:'row'
  },
    iconView:{
      flex:1,
      backgroundColor:'white',
      borderTopWidth:0.5,
      borderColor:'black'
    },
      linkView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
        imageUser:{
          paddingLeft:25,                                                           //can not fix error help
          borderRadius:5,
          padding:5,
          minWidth:screen.width/4,
          backgroundColor:'red',
          borderColor:'white',
          borderWidth:1,
          color:'white'
        
        }
}
 
);