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
            <Text style={styles.linkView}>Trang chu</Text>
          </View>
          <View style={styles.iconView}>
            <Link to={'/inforAuction'} style={styles.linkView}>
              <Image source={require('../images/danh-sach-phien.png')}></Image>
            </Link>
            <Text style={styles.linkView}>Quan ly</Text>
          </View>
          <View style={styles.iconView}>
            <Link to={'/createSession'} style={styles.linkView}>
              <Image source={require('../images/tao-phien.png')}></Image>
            </Link>
            <Text style={styles.linkView}>Tao Phien</Text>
          </View>
          <View style={styles.iconView}>
            <Link to={'/inforUser'} style={styles.linkView}>
              <Image style={styles.imageUser} source={require('../images/user.png')}></Image>
            </Link>
            <Text style={styles.linkView}>Tai khoan</Text>
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
      backgroundColor:'#F8F8FF',
      borderTopWidth:0.2,
      borderColor:'gray'
    },
      linkView:{
        justifyContent:'center',
        margin:10,
        marginBottom:5,
        // alignSelf:'stretch',
        alignSelf:'center',
      },
        imageUser:{
          borderColor:'white',
          borderWidth:1
        }
}
 
);