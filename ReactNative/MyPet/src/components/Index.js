import React, { Component } from 'react';

import { StyleSheet,Text,View,Image, Dimensions, TouchableOpacity} from 'react-native'
import {LoginManager,AccessToken} from 'react-native-fbsdk'
import firebaseConfig from '../config/ConfigFirebase'
import firebase from 'firebase'
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
          valToken:"",
          isLoadUser:false,
          logged:false
        }
      }
    
    // showButtonLoginFace =()=>{
    //   let arr =[];
    //   if(this.state.valToken !=""){
    //     arr.push(
    //       <Text key="1">ok</Text>
    //     )
    //   }
    //   return arr;
    // }
    onLoginFace = async (tokenValue) => {
      try{
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']).then(
          function (){

          }
        )
        // const tokenData = await AccessToken.getCurrentAccessToken();
        const tokenData = await AccessToken.getCurrentAccessToken();
        // const token = tokenData.accessToken.toString();
        // this.initUser(token);
        const credential = new firebase.auth.FacebookAuthProvider.credential(tokenData);
        const userFace = await firebase.auth().signInWithCredential(credential);
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
        //test thu thoi
        // let arrTest = ["6fg2aw1pNgUg6Ly5tRNsRMMRo5z1","6fg2aw1pNgUg6Ly5tRNsRMMRo5z2","6fg2aw1pNgUg6Ly5tRNsRMMRo5z3"];
        // let random = Math.floor(Math.random()*3);
        // // console.log(random)
        // // console.log("oksd"+arrTest[random])
        // this.props.myClickSaveUserId('USER_ID_SAVE',arrTest[random]);
       //ket thuc test



        this.props.myClickSaveUserId('USER_ID_SAVE',userFace.user.uid);
        //end

       firebase.database().ref('users').child(userFace.user.uid).child('profile').set({
            username: userFace.user.displayName,
            email: userFace.user.email,
            avatar : userFace.user.photoURL
          
          });
         //save state infor user take session
         this.props.myClickSaveInforUser('USER_INFOR_SAVE',{
                                                              username: userFace.user.displayName,
                                                              email: userFace.user.email,
                                                              avatar : userFace.user.photoURL
                                                            })    //use temp, I will fix after
         //end  
         //direction to inforAuction
         this.props.history.push('/inforAuction')
      }
      catch(error){
        //do something here
        console.log("error"+error.message);
      }
    }
   
    
  render() {
    return (
        <View style={(Platform.OS === 'android') ? styles.container : [styles.container,{marginTop:30}]}>
          <View style={styles.body}>
            <View style={styles.bodyChild}>
              <View style={{flex:1, flexDirection:"column",backgroundColor:"#6699FF",borderBottomLeftRadius:90,borderBottomRightRadius:90}}>
              </View>
            {/* start image background index page */}
              <View style={{flex:1,flexDirection:'column',margin:10,backgroundColor:''}}>
                <View style={{flex:4,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                  {/* <LoginButton style={{margin:10,height:50,width:50,borderColor:'gray',borderRadius:90,borderWidth:1}} onLoginFinished={
                    (error,result) =>{
                      if(error){
                        console.log("login has error:"+result.error);
                      } else if (result.isCancelled){
                        console.log("login is cancelled.");
                      }else{
                        this.onLoginFace();
                      }
                    }
                  }
                  onLogoutFinished={()=>console.log("logout")}
                  /> */}
                  <TouchableOpacity style={{padding:5,height:screen.width/6,width:screen.width/6,borderColor:'gray',borderRadius:90,borderWidth:1,backgroundColor:'#F8F8FF',}} onPress={()=>this.onLoginFace()}>
                    <Image style= {{height:screen.width/6,width:screen.width/6,marginRight:100}} source={require('../images/face.png')}>
                    </Image>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Link to={'/loginEmail'} style={{margin:11,height:60,width:60,borderColor:'gray',borderRadius:90,borderWidth:1,backgroundColor:'blue'}}>
                    <Text style={{margin:10}}>Let's Go !</Text>
                  </Link>
                </View>
              </View>
            {/* end image background index page */}
            </View>
          </View>
          {/* <Footer/> */}
                {/*End Body */}
                {/* <Footer/> */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    margin:10,
    display:'flex',
    flexDirection:'column',
    flex:1,
    // height:screen.height-16,
    backgroundColor:'#C6E2FF',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    
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
    height:screen.height-5,
    width:screen.width-5
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