import React, { Component } from 'react';
import {View,Text, Dimensions, Image} from 'react-native'
import Footer from './footer'
import Header from './header'

var screen =Dimensions.get('window');

export default class componentName extends Component {
  render() {
    return (
      <View style={{display:'flex',flexDirection:'column',flex:1,backgroundColor:'#F8F8FF'}}>
        <Header/>
        <View style={{flex:3,backgroundColor:'#F8F8FF',justifyContent:'center',alignItems:'center'}}>
          <Image style={{height:'90%',width:'90%',backgroundColor:'#ABCDFF'}}></Image>
        </View>
        <View style={{flex:6,backgroundColor:'#F8F8FF',flexDirection:'column'}}>
          <View style={{flex:1.5,backgroundColor:'#F8F8FF'}}>
            <Text style={{marginLeft:10,fontSize:20,fontWeight:'bold',color:'#000000',}}>Người đấu giá </Text>
          </View>
          <View style={{flex:8.5,backgroundColor:'#F8F8FF',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <View style={{flex:1,backgroundColor:'#F8F8FF',flexDirection:'row',borderRadius:10,borderBottomWidth:1,borderLeftWidth:0.2,borderRightWidth:1,borderColor:'gray',width:'90%',height:'90%',margin:2}}>
              <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                <Text>1.</Text>
              </View>
              <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Image style={{height:'60%',width:'90%',backgroundColor:'#ABCDFF'}}></Image>
              </View>
              <View style={{flex:5,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <View>
                  <Text style={{fontWeight:'bold',fontSize:12}}>Hoang minh</Text>
                </View>
                <View>
                  <Text style={{fontWeight:'bold',fontSize:12}}>70.000 đ</Text>
                </View>
              </View>
            </View>
            <View style={{flex:1,backgroundColor:'#F8F8FF',flexDirection:'row',borderRadius:10,borderBottomWidth:1,borderLeftWidth:0.2,borderRightWidth:1,borderColor:'gray',width:'90%',height:'90%',margin:2}}>
              <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                <Text>2.</Text>
              </View>
              <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Image style={{height:'60%',width:'90%',backgroundColor:'#ABCDFF'}}></Image>
              </View>
              <View style={{flex:5,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <View>
                  <Text style={{fontWeight:'bold',fontSize:12}}>Hoang minh</Text>
                </View>
                <View>
                  <Text style={{fontWeight:'bold',fontSize:12}}>70.000 đ</Text>
                </View>
              </View>
            </View>
            <View style={{flex:1,backgroundColor:'#F8F8FF',flexDirection:'row',borderRadius:10,borderLeftWidth:0.2,borderBottomWidth:1,borderRightWidth:1,borderColor:'gray',width:'90%',height:'90%',margin:2}}>
              <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                <Text>3.</Text>
              </View>
              <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Image style={{height:'60%',width:'90%',backgroundColor:'#ABCDFF'}}></Image>
              </View>
              <View style={{flex:5,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <View>
                  <Text style={{fontWeight:'bold',fontSize:12}}>Hoang minh</Text>
                </View>
                <View>
                  <Text style={{fontWeight:'bold',fontSize:12}}>70.000 đ</Text>
                </View>
              </View>
            </View>
            </View>
        </View>
        <Footer/>
      </View>
    );
  }
}
