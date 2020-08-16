import React, { Component } from 'react';
import {View,Text, TextInput, Dimensions, TouchableOpacity, Alert} from 'react-native'
import firebaseConfig from '../../config/ConfigFirebase'
import firebase from 'firebase'
import axios from 'axios'


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

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
            sucsess:-1,
            username:'',
            avatar:''
        }
    }

     getInforUser = async() => {
        axios.get('http://192.168.1.3:3006/user/'+this.state.email,{
            email:this.state.email,
            password:this.state.password
            })
        .then(response => {
            console.log(response.data)
        // this.props.history.push('/inforAuction');
        })
        .catch(error => {
        console.log(error);
        });
    }

    loginEmail = () => {
        
        // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        // .then(()=>{
        //     Alert.alert("Dang nhap thanh cong");
        //     console.log("ok")
        // })
        // .catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ...
        //   });

        axios.post('http://192.168.1.3:3006/auth/login',{
                email:this.state.email,
                password:this.state.password
                })
            .then(response => {
                console.log(response.data)
                this.getInforUser();
                // this.props.myClickSaveUserId('USER_ID_SAVE',userFace.user.uid);
                // //save infor to firebase
                // firebase.database().ref('users').child(userFace.user.uid).child('profile').set({
                //     username: userFace.user.displayName,
                //     email: userFace.user.email,
                //     avatar : userFace.user.photoURL
                  
                //   });
                //   //end


            // this.setState({ sucsess:1 });
            // this.props.history.push('/inforAuction');
            })
            .catch(error => {
            console.log(error);
            });
    }
  render() {
    return (
        <View style={{width:screen.width,flex:1,alignItems:'center',flexDirection:'column',justifyContent:'center'}}  >
            <Text style={{fontSize:25,fontWeight:'bold'}}>Login</Text>
            <TextInput style={{alignSelf:'stretch',borderRadius:5,borderWidth:1,borderColor:'gray',margin:10}} placeholder="email" onChangeText={ (events) =>
                this.setState({email:events})
            }   value={this.state.email}/>
            <TextInput type="password" style={{alignSelf:'stretch',borderRadius:5,borderWidth:1,borderColor:'gray',margin:10}} placeholder="password" onChangeText ={ (events) =>
                this.setState({password:events})
            }  value={this.state.password}/>
       
           <TouchableOpacity style={{borderColor:'gray',borderRadius:10,borderWidth:1,backgroundColor:'#00CC00',padding:10}} onPress={()=> this.loginEmail()}>
               <Text>
                   Login
               </Text>
           </TouchableOpacity>
       
        </View>


    );
  }
}
