import React, { Component } from 'react';
import {View,Text,Image, StyleSheet} from 'react-native'
import {Link} from 'react-router-native'

export default class componentName extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.iconView}>
            <Link to={'/'} style={styles.linkView}>
              <Image source={require('../images/home.png')}></Image>
            </Link>
          </View>
          <View style={styles.iconView}>
            <Link to={'/'} style={styles.linkView}>
              <Image source={require('../images/notify.png')}></Image>
            </Link>
          </View>
          <View style={styles.iconView}>
            <Link to={'/'} style={styles.linkView}>
              <Image source={require('../images/home.png')}></Image>
            </Link>
          </View>
          <View style={styles.iconView}>
            <Link to={'/'} style={styles.linkView}>
              <Image style={styles.imageUser} source={require('../images/user.png')}></Image>
            </Link>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8F8FF',
    flexDirection:'row'
  },
    iconView:{
      flex:1,
      backgroundColor:'#42E7C9',
      borderWidth:0.5,
      borderColor:'black'
    },
      linkView:{
        flex:1,
        justifyContent:'center',
        alignSelf:'center'
      },
        imageUser:{
          borderColor:'white',
          borderWidth:1
        }
}
 
);