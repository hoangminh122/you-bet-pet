import React, { Component } from 'react';
import { View, Text, Image, TextInput, Dimensions, TouchableOpacity, StyleSheet,ScrollView,KeyboardAvoidingView, TouchableHighlight } from 'react-native'
import firebaseConfig from '../../config/ConfigFirebase'
import firebase from 'firebase'
import axios from 'axios'
import Header from '../header_footer/header'

let screen = Dimensions.get('window');

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default class loginEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            sucsess: -1,
            username: '',
            avatar: ''
        }
    }

    getInforUser = async () => {
        axios.get('http://192.168.1.3:3006/user/' + this.state.email, {
            email: this.state.email,
            password: this.state.password
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

        axios.post('http://192.168.1.3:3006/auth/login', {
            email: this.state.email,
            password: this.state.password
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

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <View style={styles.container}  >
                <Header nameTitle='Sign Up' goBack={this.goBack} />
                <ScrollView
                          ref = {scrollView => this._scrollView = scrollView }
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                          pagingEnabled={true}
                          decelerationRate={0}
                          contentOffset ={false}
                        //   scrollEnabled={false}
                          >

        <View style={styles.body}>
                    <Text style={styles.txtTitle}></Text>
                    <TextInput style={[styles.txtInput,{marginTop:20}]} placeholder="Email" 
                        onChangeText={(events) =>
                            this.setState({ email: events })
                        } 
                        value={this.state.email} 
                    />
                    <TouchableOpacity 
                        style={styles.btnLogin}
                         onPress={() => this.loginEmail()}
                    >
                        <Text style={styles.txtLogin}>
                            Next
                        </Text>
                    </TouchableOpacity>
                    
            </View>
            <View style={styles.body}>
            <TextInput secureTextEntry={true} type="text" 
                        style={styles.txtInput} 
                        placeholder="Phone" 
                        onChangeText={(events) =>
                            this.setState({ password: events })
                        } 
                        value={this.state.password} 
                    />
                    <TextInput secureTextEntry={true} type="text" 
                        style={styles.txtInput} 
                        placeholder="User Name" 
                        onChangeText={(events) =>
                            this.setState({ password: events })
                        } 
                        value={this.state.password} 
                    />
                     <TextInput secureTextEntry={true} type="password" 
                        style={styles.txtInput} 
                        placeholder="Password" 
                        onChangeText={(events) =>
                            this.setState({ password: events })
                        } 
                        value={this.state.password} 
                    />
                     <TextInput secureTextEntry={true} type="password" 
                        style={styles.txtInput} 
                        placeholder="Re-password" 
                        onChangeText={(events) =>
                            this.setState({ password: events })
                        } 
                        value={this.state.password} 
                    />
                    <TouchableOpacity 
                        style={styles.btnLogin}
                         onPress={() => this.loginEmail()}
                    >
                        <Text style={styles.txtLogin}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
            </View>
        
                </ScrollView>
                
                 </View>

        );
    }
}
//sds
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#F8F8FF'
    },
    body:{
        flex: 8,
        width: screen.width
    },
        txtTitle:{
            fontSize: 25, 
            fontWeight: '100', 
            marginLeft: 20,
            marginBottom: 10, 
            marginTop: 20, 
            color: 'black',
            alignSelf: 'center', 
        },
        txtInput:{
            height: screen.height / 16, 
            alignSelf: 'stretch', 
            borderRadius: 5, 
            borderBottomWidth: 1, 
            borderColor: 'gray', 
            margin: 5,
            marginHorizontal: 20
        },
        btnLogin:{
            marginTop: 10, 
            borderColor: 'gray', 
            borderRadius: 1, 
            borderWidth: 1, 
            backgroundColor: 'red', 
            padding: 10, 
            marginHorizontal: 20
        },
            txtLogin:{
                textAlign: 'center', 
                color: 'white'
            }
})