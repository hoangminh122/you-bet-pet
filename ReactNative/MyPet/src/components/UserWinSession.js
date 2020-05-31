import React, { Component } from 'react';
import {View,Text, Dimensions,StyleSheet,TouchableOpacity} from 'react-native'
import Footer from './footer'
import Header from './header'
import firebase from 'firebase'

var screen =Dimensions.get('window');

export default class AuctionSession extends Component {
  constructor(props){
    super(props);
    this.itemRef = firebase.database();
   
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header nameTitle =""/>
        <View style={styles.imagePets}>
          <View style={styles.imageChild}>
            <Text style={[styles.imageText,{fontSize:16}]}>CHÚC MỪNG</Text>
            <Text style={styles.imageText}>Tên người dùng</Text>
            <Text style={styles.imageText}>Chiến thắng phiên đấu giá</Text>
            <Text style={styles.imageText}>Tên phiên đấu giá</Text>
            <Text style={styles.imageText}>xxx.000 đ</Text>
            <TouchableOpacity style={styles.imageTouch}>
                <Text>Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    flex:1,
    backgroundColor:'#F8F8FF'
  },
  imagePets:{
    flex:9,
    // backgroundColor:'#F8F8FF',
    justifyContent:'center',
    alignItems:'center'
  },
    imageChild:{
    //   height:'40%',
      width:'95%',
      backgroundColor:'#ABCDFF'
    },
        imageText:{
            fontSize:13,
            fontWeight:'bold',
            alignSelf:'center'
        },
        imageTouch:{
            backgroundColor:'red',
            borderColor:'white',
            borderWidth:1,
            alignSelf:'center',
            margin:10,
            padding:5,
            borderRadius:5
        }
 });

        


