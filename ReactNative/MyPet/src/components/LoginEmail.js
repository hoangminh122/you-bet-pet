import React, { Component } from 'react';
import {View,Text, TextInput, Dimensions, TouchableOpacity, Alert} from 'react-native'
import firebaseConfig from '../config/ConfigFirebase'
import firebase from 'firebase'


let screen = Dimensions.get('window');

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
export default class loginEmail extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
        }
    }
    loginEmail = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            Alert.alert("Dang nhap thanh cong");
            console.log("ok")
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
  render() {
      console.log(this.state.email)
    return (
        <View style={{width:screen.width,flex:1,alignItems:'center',flexDirection:'column',justifyContent:'center'}}  >
            <TextInput style={{alignSelf:'stretch',borderWidth:1,borderColor:'gray',margin:10}} placeholder="email" onChangeText={ (events) =>
                this.setState({email:events})
            }   value={this.state.email}/>
            <TextInput style={{alignSelf:'stretch',borderWidth:1,borderColor:'gray',margin:10}} placeholder="password" onChangeText ={ (events) =>
                this.setState({password:events})
            }  value={this.state.password}/>
       
           <TouchableOpacity style={{borderColor:'gray',borderWidth:1,backgroundColor:'red',padding:10}} onPress={()=> this.loginEmail()}>
               <Text>
                   Login
               </Text>
           </TouchableOpacity>
       
        </View>


    );
  }
}
