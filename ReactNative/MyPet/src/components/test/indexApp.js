import React, { Component } from 'react';

import { StyleSheet,Text,View,ImageBackground,Image, Dimensions} from 'react-native'
import bgImage from '../images/background.jpg'
import logo from '../images/logo.png'
import {LoginManager,LoginButton,AccessToken} from 'react-native-fbsdk'
import token from '../token'

var screen = Dimensions.get('window');
var user={
  name:"",
  id:"",
  user_friends:"",
  email:"",
  username:"",
  loading:false,
  loggedIn:false,
  avatar:""
}

export default class IndexApp extends Component {
    constructor(props){
        super(props)
        this.state={
          valToken:token,
          isLoadUser:false
        }
      }
    
    initUser=(token)=>{
      fetch(`https://graph.facebook.com/me?fields=email,name,friends&access_token=${token}`)
      .then((response) =>{
        response.json()
          .then((json) =>{
            console.log("Ádasdasd")
            console.log(json.name)
            // Some user object has been set up somewhere, build that user here
                user.name = json.name
            //  user.id = json.id
            //  user.user_friends = json.friends
            //  user.email = json.email
            //  user.username = json.name
            //  user.loading = false
            //  user.loggedIn = true
            //  user.avatar = setAvatar(json.id)
            try{  
               this.setState({
                valToken:token,
                isLoadUser:true
               })
              }
              catch(error){
                console.log(error)
              }
      })
    })
      .catch(()=>{
        console.log('ERROR GETTING DATA FACEBOOK');
      })
    }
    showButtonLoginFace =()=>{
      let arr =[];
      if(this.state.valToken !=""){
        arr.push(
          <Text key="1">ok</Text>
        )
      }
      return arr;
    }
  render() {
    return (
        <View style={styles.container}>
            {/* <Header/> */}
            {/*Start Body */}
          <View style={[styles.body,{flex:1}]}>
                </View>
          <View style={styles.body}>
            <View style={styles.bodyChild}>
            {/* start image background index page */}
              <ImageBackground  
                source={bgImage}
                style={styles.backgroundContainer}
                imageStyle={{resizeMode: 'stretch'}}>
                <View style={styles.txt_logo}>
                  <Image source={logo} style ={styles.logo}></Image>
                </View>
                {/* end logo */}
                {/* start buton login face */}
                <View style={styles.buttonLogin}>
                  <LoginButton onLoginFinished={
                    (error,result) =>{
                      if(error){
                        console.log("login has error:"+result.error);
                      } else if (result.isCancelled){
                        console.log("login is cancelled.");
                      }else{
                        console.log("ádasdaasdasd")
                        AccessToken.getCurrentAccessToken().then(
                          (data) =>{
                            console.log(data.accessToken.toString())
                            const {accessToken} = data;
                            // token=accessToken;
                            try{
                              this.initUser(accessToken);
                            }
                            catch(error){
                              console.log(error)
                            }
                          })
                      }
                    }
                  }
                  onLogoutFinished={()=>console.log("logout")}
                  />
              </View>
              {/* end buton login face */}
            </ImageBackground>
            {/* end image background index page */}
            </View>
          </View>
                {/*End Body */}
                {/* <Footer/> */}
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
    flex:7,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

  },
  bodyChild:{
    flex:1,
    flexDirection:'column',
    height:screen.height,
    width:screen.width
  },
  backgroundContainer : {
    flex : 1,
    width : null,
    height : null,
    justifyContent : 'center',
    alignContent : 'center',
    backgroundColor:'transparent',
    resizeMode: 'stretch'
  },
  logo :{
    width:120,
    height:120
  },
  txt_logo:{
    flexDirection:'row',
    justifyContent : 'center',
    alignContent : 'center',
    flex:3,
    alignItems:'flex-end'
  },
  buttonLogin:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:'20%'
  }
  
});