import React, { Component } from 'react';

import { StyleSheet,Text,View,ImageBackground,Image, Dimensions, TouchableOpacity, TextInput, CheckBox, Button, Alert} from 'react-native'
import bgImage from '../images/background.jpg'
import logo from '../images/logo.png'
import {LoginManager,LoginButton,AccessToken} from 'react-native-fbsdk'
import token from './token'
import firebaseConfig from '../config/ConfigFirebase'
import firebase from 'firebase'
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-native';
import {saveUserFirebase,findUserFirebase} from '../databases/saveUserLogin'
import {connect} from 'react-redux'
import {clickSaveUserId} from '../redux/action/ActionSaveIdUser'
import {clickSaveInforUser} from '../redux/action/ActionSaveInforUser'


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


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

class LoginFace extends Component {
    constructor(props){
        super(props)
        this.state={
          valToken:token,
          isLoadUser:false,
          logged:false
        }
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
    onLoginFace = async () => {
      try{
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        const tokenData = await AccessToken.getCurrentAccessToken();
        // const token = tokenData.accessToken.toString();
        // this.initUser(token);
        const credential = new firebase.auth.FacebookAuthProvider.credential(token);
        const userFace = await firebase.auth().signInWithCredential(credential);
        // console.log(tokenData)
        console.log(userFace.user.uid)
        // console.log(userFace)
        //save database sqlite some infor 
        try{                                                                                  //when in session , we save state idUserFirebase
            if(findUserFirebase(userFace.user.uid) == 0)
            saveUserFirebase(userFace.user.displayName,userFace.user.uid,'1');
          //end
        }catch(e){
          console.log(e)
        }
        //save state id user Firebase -redux
        this.props.myClickSaveUserId('USER_ID_SAVE',userFace.user.uid);
        //end

       
       
       firebase.database().ref('users').child(userFace.user.uid).child('profile').set({
            username: userFace.user.displayName,
            email: userFace.user.email,
            avatar : userFace.user.photoURL
          
          });
        console.log("ok")
         //save state infor user take session
         this.props.myClickSaveInforUser('USER_INFOR_SAVE',{
                                                              username: userFace.user.displayName,
                                                              email: userFace.user.email,
                                                              avatar : userFace.user.photoURL
                                                            })    //use temp, I will fix after
         //end  
      }
      catch(error){
        //do something here
        console.log("error"+error.message);
      }
    }
   
    
  render() {
    return (
        <View style={styles.container}>
        <Header/>
            {/* <Header/> */}
            {/*Start Body */}
          
          <View style={styles.body}>
         
            <View style={styles.bodyChild}>
              <View style={{flex:1, flexDirection:"column",backgroundColor:""}}>
                <View style={{flex:1,margin:10}}>
                  <Text style={{marginHorizontal:10,color:'black'}}>Tên đăng nhập, địa chỉ email</Text>
                  <TextInput placeholder="Nhập email"  textContentType="emailAddress" style={{borderColor:"gray",borderWidth:1,margin:10,paddingHorizontal:10,borderRadius:10,}}/>
                </View>
                <View style={{flex:1,margin:10}}>
                  <Text style={{marginHorizontal:10,color:'black'}}>Mật Khẩu</Text>
                  <TextInput placeholder="Nhập email"  textContentType="emailAddress" style={{borderColor:"gray",borderWidth:1,margin:10,paddingHorizontal:10,borderRadius:10,}}/>
                </View>
                <View style={{flex:1,justifyContent:'center',marginLeft:10}}>
                  <View style={{flexDirection:"row",flex:1}}>
                    <CheckBox name ="memory"/>
                    <Text style={{marginTop:5}}>Ghi nhớ</Text>
                  </View>
                  <View style={{flex:2,alignItems:'center',width:"100%"}} >
                    <TouchableOpacity style={{borderColor:"gray",flex:1,borderWidth:1,width:"35%",margin:5,justifyContent:'center',backgroundColor:'red',borderRadius:10,alignItems:'center'}} >
                      <Text style={{color:"white"}}>Đăng Nhập</Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>

              </View>
            {/* start image background index page */}
              <View style={{flex:1,flexDirection:'column',margin:10}}>
                <View style={{flex:1,justifyContent:'center',}}>
                  <Text style={{textDecorationLine: "underline"}}>Bạn quên tài khoản mật khẩu ?</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:15,fontWeight:'bold',color:'gray'}}>Others</Text>
                </View>
                <View style={{flex:4,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                  <TouchableOpacity style={{margin:10,height:50,width:50,borderColor:'gray',borderRadius:90,borderWidth:1}} onPress={()=>this.onLoginFace()}>
                    <Image source={require('../images/face.png')}>
                    </Image>
                  </TouchableOpacity>
                  <TouchableOpacity style={{margin:10,height:50,width:50,borderColor:'gray',borderRadius:90,borderWidth:1}}>
                    <Image source={require('../images/google.png')}>
                    </Image>
                  </TouchableOpacity>
                 
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Link to={'/inforAuction'} style={{margin:11,height:60,width:60,borderColor:'gray',borderRadius:90,borderWidth:1,backgroundColor:'blue'}}>
                    <Text style={{margin:10}}>Let's Go !</Text>
                  </Link>
                </View>
                
              </View>
            {/* end image background index page */}
            </View>
          </View>
          <Footer/>
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

function mapStateToProps(state){
    return {myUserIdReducer:state.userIdReducer};
}
// function mapDispatchToProps(dispatch){                             //error cann'y fix !!! help me
//   return {
//     myClickSaveUserId:()=>clickSaveUserId,
//     myClickSaveInforUser: ()=>clickSaveInforUser
//   }
// }

export default connect(mapStateToProps,{myClickSaveUserId:clickSaveUserId,myClickSaveInforUser:clickSaveInforUser})(LoginFace)
// export default connect(mapStateToProps,mapDispatchToProps)(LoginFace)




  {/* <LoginButton onLoginFinished={
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
/> */}

// initUser=(token)=>{
//   fetch(`https://graph.facebook.com/me?fields=email,name,friends&access_token=${token}`)
//   .then((response) =>{
//     response.json()
//       .then((json) =>{
//         console.log("Ádasdasd")
//         console.log(json.name)
//         // Some user object has been set up somewhere, build that user here
//             user.name = json.name
//         //  user.id = json.id
//         //  user.user_friends = json.friends
//         //  user.email = json.email
//         console.log("email"+json.email)
//         //  user.username = json.name
//         //  user.loading = false
//         //  user.loggedIn = true
//         //  user.avatar = setAvatar(json.id)
//         try{  
//            this.setState({
//             valToken:token,
//             isLoadUser:true
//            })
//           }
//           catch(error){
//             console.log(error)
//           }
//   })
// })
//   .catch(()=>{
//     console.log('ERROR GETTING DATA FACEBOOK');
//   })
// }