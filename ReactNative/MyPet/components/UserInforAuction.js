import React, { Component } from 'react';
import {View,Text } from 'react-native'
import Header from './header';
import Footer from './footer';



export default class componentName extends Component {
  render() {
    return (
      <View style={{display:'flex',flexDirection:'column',flex:1,backgroundColor:'#F8F8FF'}}>
        <Header/>
        <View style={{flex:9,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <View style={{flex:1,alignItems:'center',justifyContent:'center',height:'80%',width:'80%',borderBottomWidth:1}}>
                <Text style={{maxWidth:'40%',fontWeight:'bold',fontSize:13}}>Đang diễn ra</Text>
              </View>
              <View style={{flex:1,alignItems:'center',justifyContent:'center',height:'80%',width:'80%'}}>
                <Text style={{maxWidth:'30%',fontWeight:'bold',fontSize:13}}>Đã thắng</Text>
              </View>
              <View style={{flex:1,alignItems:'center',justifyContent:'center',height:'80%',width:'80%'}}>
                <Text style={{maxWidth:'50%',fontWeight:'bold',fontSize:13}}>Thua</Text>
              </View>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
              <View style={{flex:1,alignItems:'center',borderRightWidth:1,height:'80%',width:'80%',justifyContent:'center',alignItems:'center'}}>
                <Text style={{maxWidth:'80%',fontWeight:'500',fontFamily:'Roboto',fontSize:12}}>Tên phiên đấu giá</Text>
              </View>
              <View style={{flex:1,alignItems:'center',borderRightWidth:1,height:'80%',width:'80%',justifyContent:'center',alignItems:'center'}}>
                <Text style={{maxWidth:'80%',fontWeight:'500',fontFamily:'Roboto',fontSize:12}}>Kết thúc trong (thời gian)</Text>
              </View>
              <View style={{flex:1,alignItems:'center',borderRightWidth:1,height:'80%',width:'80%',justifyContent:'center',alignItems:'center'}}>
                <Text style={{maxWidth:'80%',fontWeight:'500',fontFamily:'Roboto',fontSize:12}}>Mức giá</Text>
              </View>
              <View style={{flex:1,alignItems:'center',height:'80%',width:'80%',justifyContent:'center',alignItems:'center'}}>
                <Text style={{maxWidth:'80%',fontWeight:'500',fontFamily:'Roboto',fontSize:12}}>Tình trạng</Text>
              </View>
            </View>
           
          </View>
          <View style={{flex:3,backgroundColor:'yellow'}}>

          </View>
        </View>
        <Footer/>

      </View>
    );
  }
}
