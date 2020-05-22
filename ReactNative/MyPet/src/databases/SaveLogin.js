
import React, { Component } from 'react';
import {View,Text, TextInputBase, TextInput, TouchableOpacity} from 'react-native'
import { ToastAndroid } from 'react-native';

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name : "pets.db", createFromLocation : "~pets.db", location: 'Library'});
console.log(db)
// var db = SQLite.openDatabase({name:'pets1.db',createFromLocation:'~pets.db'},this.openCB,this.errorCB);
// var db=SQLite.openDatabase({name : "pets.db", createFromLocation : 1}, this.errorCB,this.openCB);
// var db;
// if (Platform.OS === 'ios') {
//     db = SQLite.openDatabase({name: '<dbname>.db', createFromLocation: 1}, (open) => {}, (e) => {});
// }
// else {
//   var  db = SQLite.openDatabase({name: 'pets1.db', createFromLocation: '~/pets.db'});
// }

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name :""        }

    }
    // errorCB = (err) => {
    //     console.log("fail")
    //     ToastAndroid.show("SQL Error: "+err,ToastAndroid);
    // }

    successCB = ()=>{
        console.log("thanh conng")
        ToastAndroid.show("SQL executed fine",ToastAndroid.SHORT);
    }
    // openCB = (err)=>{
    //     console.log("Open database");
    // }
    loginFacebook = () =>{
        // console.log("ok")
        // // if(db != null){
        //     console.log("ket noi")
        //     // console.log(db)
        //     db.transaction((tx) => {
        //         // var sql = 'SELECT * FROM users WHERE name=?';
        //         // console.log("vao")
        //             // tx.executeSql(sql,[this.state.name],(tx,results)=>{
                       
        //             //     var len = results.rows.length;
        //             //     if(len == 0){
        //             //         ToastAndroid.show('Tai khoan khong ton tai',ToastAndroid.SHORT);
        //             //         console.log("tai khoan khong ton tai")
        //             //     }
        //             //     else{
        //             //         console.log("Dang nhap thanh cong")
        //             //         var row = results.rows.item(0);
        //             //         console.log(row)
        //             //         ToastAndroid.show('Dang nhap thanh cong',ToastAndroid.SHORT);
    
        //             //     }
        //             // },(e)=>{
        //             //     console.log(e)
        //             // })


        //         // let name = "minh123";
        //         // let email = "sdsddd";
        //         // let avatar = "sddddd";
        //         // let phone = "13124"
        //         var sql = "INSERT INTO users (name,userIdFirebase) VALUES (?,?)";
        //         tx.executeSql(sql,["minh23","nadsd"],(tx,results)=>{
        //             console.log(tx)
        //             console.log("thanh cong")
        //         })
                  
        //     })
        // }

        db.transaction((tx) => {
            console.log("Asd")
            tx.executeSql('INSERT INTO users(name,userIdFirebase,isLive) VALUES (?,?,?)', ["minh3","awdadasd",1], (tx, results) => {
                if (results.rowsAffected > 0) {
                    // msg.result = true;
                    // msg.message = 'Create new hero successfully!';
                    ToastAndroid.show('Dang nhap thanh cong',ToastAndroid.SHORT);
                } else {
                    // msg.result = false;
                    // msg.message = 'Create new hero failed!';
                    ToastAndroid.show('tao tai khoan that bai ',ToastAndroid.SHORT);
                }
                // resolve({ result: msg.result, message: msg.message });
            }, (error) => {
                // msg.result = false;
                // msg.message = `${error.message}`;
                // resolve({ result: msg.result, message: msg.message });
            });
        })

        // db.transaction((tx) => {
        //             var sql = 'SELECT * FROM users WHERE name=?';
        //             console.log("vao")
        //                 tx.executeSql(sql,[this.state.name],(tx,results)=>{
                           
        //                     var len = results.rows.length;
        //                     if(len == 0){
        //                         ToastAndroid.show('Tai khoan khong ton tai',ToastAndroid.SHORT);
        //                         console.log("tai khoan khong ton tai")
        //                     }
        //                     else{
        //                         console.log("Dang nhap thanh cong")
        //                         var row = results.rows.item(0);
        //                         console.log(row)
        //                         ToastAndroid.show('Dang nhap thanh cong',ToastAndroid.SHORT);
        
        //                     }
        //                 },(e)=>{
        //                     console.log(e)
        //                 })
        //             })
       
    }
    changeUsername =(value) =>{
        this.setState({name:value})
    }
    async componentDidMount(){
        // if(db == null){
        //     db = SQLite.openDatabase({name:'pets1.db',createFromLocation:'~pets.db'});
        // }
    }
    render() {
        console.log(db)
        return (
            <View style={{flex:1}}>
                <Text>ok minh</Text>
                <TextInput style={{borderColor:'gray',borderWidth:1,height:50,width:300}} placeholder="UserName ?" onChangeText = {(value) => this.changeUsername(value)}/>
                <TextInput style={{borderColor:'gray',borderWidth:1,height:50,width:300}} placeholder="UserName ?"/>
               
                    <TouchableOpacity style={{color:'black',backgroundColor:'red',width:100,alignSelf:'center',margin:10}} onPress={()=>this.loginFacebook()
                    
                    }>
                        <Text style={{alignSelf:'center'}}>Click !</Text>
                    </TouchableOpacity>
                
               

            </View>
        )
    };
}