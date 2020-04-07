import React, { Component } from 'react';
import {Text,View,Image, Dimensions, TouchableOpacity} from 'react-native'
import Header from './header';
import Footer from './footer';

const screen = Dimensions.get('window');
export default class InforUser extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Header/>
        <View style={styles.body}>
            <View style={styles.bodyIconUp}>
                <View style={styles.bodyIconUpImageView}>
                    <Image style={styles.bodyIconUpImageViewChild}></Image>
                </View>
                <View style={styles.bodyIconUpOnlineView}>
                    <Text style={styles.bodyIconUpOnlineViewIconChild}></Text>
                    <Text >is Active</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{width:screen.width/1.5, height:50}}>sahdgashsdfsgsgsdsgsdgsdgadsasdghasgddgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggghasgdahsdgashgd</Text>
                </View>
                <View style={styles.bodyIconUpContactView}>
                    <View style={styles.bodyIconUpContactViewPhone}>
                        <TouchableOpacity style={styles.bodyIconUpContactViewchildTouch} >
                            <Image source={require('../images/phone.png')} style={styles.bodyIconUpContactViewchildTouchImage}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyIconUpContactViewSms}>
                        <TouchableOpacity style={styles.bodyIconUpContactViewchildTouch}>
                            <Image  source={require('../images/sms.png')} style={styles.bodyIconUpContactViewchildTouchImage}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyIconUpContactViewChat}>
                        <TouchableOpacity style={styles.bodyIconUpContactViewchildTouch}>
                            <Image  source={require('../images/chat.png')} style={styles.bodyIconUpContactViewchildTouchImage}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={{flex:1}}>

                </View>
            </View>
            <View style={styles.bodyInforDown}>
                <View style={styles.bodyInforDownView}>
                    <Text style={styles.bodyInforDownViewChildLeft}>Location:</Text>
                    <Text style={styles.bodyInforDownViewChildRight}>Linh dong Thu duc</Text>
                </View>
                <View style={styles.bodyInforDownView}>
                    <Text style={styles.bodyInforDownViewChildLeft}>Location:</Text>
                    <Text style={styles.bodyInforDownViewChildRight}>Linh dong Thu duc</Text>
                </View>
                <View style={styles.bodyInforDownView}>
                    <Text style={styles.bodyInforDownViewChildLeft}>Location:</Text>
                    <Text style={styles.bodyInforDownViewChildRight}>Linh dong Thu duc</Text>
                </View>
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
    body:{
        flex:9,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
        bodyIconUp:{
            flex:5,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        },
            bodyIconUpImageView:{
                flex:1,
                justifyContent:'center'
            },
                bodyIconUpImageViewChild:{
                    height:screen.width/8,
                    width:screen.width/8, 
                    backgroundColor:'red',
                    borderRadius:90,
                    margin:'10%'
                },
            bodyIconUpOnlineView:{
                flex:1,
                alignItems:'flex-start',
                justifyContent:'flex-start',
                flexDirection:'row'
            },
                bodyIconUpOnlineViewIconChild:{
                    width:10,
                    height:10,
                    borderRadius:90,
                    borderWidth:1,
                    justifyContent:'center',
                    backgroundColor:'green',
                    borderColor:'green'
                },
            bodyIconUpContactView:{
                flexDirection:'row',
                flex:1,
                width:screen.width/2,
                justifyContent:'center',
                alignItems:'center'
            },
                bodyIconUpContactViewPhone:{
                    flex:1, 
                    backgroundColor:'white',
                     margin:10,
                     borderRadius:90
                },
                bodyIconUpContactViewSms:{
                    flex:1,
                    margin:10,
                    borderRadius:90
                },
                bodyIconUpContactViewChat:{
                    flex:1,
                    backgroundColor:'white',
                    margin:10,
                    borderRadius:90
                },
                    bodyIconUpContactViewchildTouch:{
                        margin:10
                    },
                        bodyIconUpContactViewchildTouchImage:{
                            height:screen.width/20,
                            width:screen.width/20
                        },
        bodyInforDown:{
            flex:3,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            borderWidth:1,
            borderColor:'gray',
            margin:2
        },
            bodyInforDownView:{
                flex:1,
                flexDirection:'row',
                alignItems:'flex-start'
            },
                bodyInforDownViewChildLeft:{
                    flex:1,
                    fontSize:15,
                    fontWeight:'bold'
                },
                bodyInforDownViewChildRight:{

                }
    });




