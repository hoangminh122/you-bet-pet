
import { ToastAndroid } from 'react-native';
import { Sync } from 'realm';

    var SQLite = require('react-native-sqlite-storage');
    if (Platform.OS === 'ios') {
        // db = SQLite.openDatabase({name: '<dbname>.db', createFromLocation: 1}, (open) => {}, (e) => {});
    }
    else {
        var db = SQLite.openDatabase({name : "pets.db", createFromLocation : "~pets.db", location: 'Library'});
    }

    export function saveUserFirebase(name,userIdFirebase,isLive){
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO users(name,userIdFirebase,isLive) VALUES (?,?,?)', [name.toString(),userIdFirebase.toString(),Number.parseInt(isLive)], (tx, results) => {
                // tx.executeSql('INSERT INTO users(name,userIdFirebase,isLive) VALUES (?,?,?)', ["minh","ok",1], (tx, results) => {
                if (results.rowsAffected > 0) {
                    // msg.result = true;
                    // msg.message = 'Create new hero successfully!';
                    ToastAndroid.show('Dang nhap thanh cong',ToastAndroid.SHORT);
                } else {
                    // msg.result = false;
                    // msg.message = 'Create new hero failed!';
                    ToastAndroid.show('Login fail !',ToastAndroid.SHORT);
                }
                // resolve({ result: msg.result, message: msg.message });
            }, (error) => {
                // msg.result = false;
                // msg.message = `${error.message}`;
                // resolve({ result: msg.result, message: msg.message });
            });
        })
    }
    // export  var result = 0
    export  function findUserFirebase(userIdFirebase){
        var result = 0;
          db.transaction((tx) => {
                    let sql = 'SELECT * FROM users WHERE userIdFirebase=?';
                         let a = tx.executeSql(sql,[userIdFirebase.toString()],(tx,results)=>{
                                                let len = results.rows.length;
                                                if(len == 0){
                                                    ToastAndroid.show('Tai khoan chua ton tai',ToastAndroid.SHORT);
                                                    result = 0;
                                                    //  return result;
                                                    // console.log("tai khoan khong ton tai")
                                                }
                                                else{
                                                    // console.log("Dang nhap thanh cong")
                                                    // var row = results.rows.item(0);
                                                    // console.log(row)
                                                    ToastAndroid.show('Tai khoan da ton tai',ToastAndroid.SHORT);
                                                    result = 1;
                                                    // console.log("1:"+result)
                                                    return results.rows.item
                                                    // return result;
                                                }
                                            },(e)=>{
                                                console.log("error")
                                                // return 0;
                                        })
                    })
                    // console.log(a)
                    // console.log("result"+result )
        return  result;
    }