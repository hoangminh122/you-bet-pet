import React, { Component } from 'react';
import {Text,View,Image, Dimensions, TouchableOpacity} from 'react-native'
import Header from './header';
import Footer from './footer';

const screen = Dimensions.get('window');
export default class InforUser extends Component {
  render() {
    return (
        <View style={{display:'flex',flexDirection:'column',flex:1,backgroundColor:'#F8F8FF'}}>
        <Header/>
        <View style={{flex:9,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <View style={{flex:5,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <View style={{ flex:1,justifyContent:'center'}}>
                    <Image style={{height:screen.width/8,width:screen.width/8, backgroundColor:'red',borderRadius:90,margin:'10%'}}></Image>
                </View>
                <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start',flexDirection:'row'}}>
                    <Text style={{width:10,height:10,borderRadius:90,borderWidth:1,justifyContent:'center',backgroundColor:'green',borderColor:'green'}}></Text>
                    <Text style={{}}>is Active</Text>
                </View>
                <View style={{flex:1,}}>
                    <Text style={{width:screen.width/1.5, height:50}}>sahdgashsdfsgsgsdsgsdgsdgadsasdghasgddgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggghasgdahsdgashgd</Text>
                </View>
                <View style={{flexDirection:'row',flex:1,width:screen.width/2,justifyContent:'center',alignItems:'center'}}>
                    <View style={{flex:1, backgroundColor:'white', margin:10,borderRadius:90}}>
                        <TouchableOpacity style={{margin:10}} >
                            <Image source={require('../images/phone.png')} style={{height:screen.width/20,width:screen.width/20}}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10,borderRadius:90}}>
                        <TouchableOpacity style={{margin:10}}>
                            <Image  source={require('../images/sms.png')} style={{height:screen.width/20,width:screen.width/20}}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, backgroundColor:'white', margin:10,borderRadius:90}}>
                        <TouchableOpacity style={{margin:10}}>
                            <Image  source={require('../images/chat.png')} style={{height:screen.width/20,width:screen.width/20}}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={{flex:1}}>

                </View>
            </View>
            <View style={{flex:3,flexDirection:'column',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'gray',margin:2}}>
                <View style={{flex:1,flexDirection:'row',alignItems:'flex-start'}}>
                    <Text style={{flex:1,fontSize:15,fontWeight:'bold'}}>Location:</Text>
                    <Text style={{flex:3}}>Linh dong Thu duc</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'flex-start'}}>
                    <Text style={{flex:1,fontSize:15,fontWeight:'bold'}}>Location:</Text>
                    <Text style={{flex:3}}>Linh dong Thu duc</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'flex-start'}}>
                    <Text style={{flex:1,fontSize:15,fontWeight:'bold'}}>Location:</Text>
                    <Text style={{flex:3}}>Linh dong Thu duc</Text>
                </View>
            </View>
          
        </View>
        <Footer/>

      </View>
    );
  }
}

   

