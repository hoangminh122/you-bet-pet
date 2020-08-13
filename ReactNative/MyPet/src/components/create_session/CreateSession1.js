import React, { Component } from 'react';
import {View,Text,StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Header from '../header_footer/header';
import Footer from '../header_footer/footer'

export default class CreateSession extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Header/>
       
        <View style={styles.body}>
            <View style={{flex:3,flexDirection:'column'}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{flex:1,fontSize:12}}>Name Session</Text>
                    <TextInput style={{margin:5,height:'50%',flex:3,borderWidth:1}} textContentType='URL'/>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{flex:1,fontSize:12}}>Day Start</Text>
                    <TextInput style={{margin:5,height:'50%',flex:3,borderWidth:1}} textContentType='URL'/>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{flex:1,fontSize:12}}>Type of Auction</Text>
                    <TextInput style={{margin:5,height:'50%',flex:3,borderWidth:1}} textContentType='URL'/>
                </View>
                <View style={{flex:2,flexDirection:'row',justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{flex:1,fontSize:12}}>Add friends</Text>
                    <TextInput multiline={true} style={{margin:5,marginTop:10,flex:3,height:"80%",borderWidth:1}} textContentType='URL'/>
                </View>

            </View>
            <View style={{flex:1,flexDirection:'column', borderWidth:1}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{flex:1}}>Video</Text>
                    <TextInput style={{margin:5,height:'50%',flex:3,borderWidth:1}} textContentType='URL'/>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{flex:1}}>Image</Text>
                    <TextInput style={{margin:5,height:'50%',flex:3,borderWidth:1}} textContentType='URL'/>
                </View>
            </View>

        </View>
        <View style={styles.btnCreate}>
            <TouchableOpacity style={{borderColor:'gray',borderWidth:1,padding:5,paddingHorizontal:15}}>
                <Text>Create !</Text>
            </TouchableOpacity>
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
      flex:6,
      backgroundColor:'#DDDDDD',
      flexDirection:'column'
    },
    btnCreate:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
      },
     
   });