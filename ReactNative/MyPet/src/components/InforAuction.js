import React, { Component } from 'react';
import {View,Text,StyleSheet, Dimensions,ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native'
import Header from './header';
import Footer from './footer';
import firebase from 'firebase'
import ListView from 'deprecated-react-native-listview'
import {Link} from 'react-router-native'
import {connect} from 'react-redux'
import {clickSaveKeyAuction} from '../redux/action/ActionSaveKeyLogined'
// import {saveUserFirebase,findUserFirebase} from '../databases/saveUserLogin'                       //can't fix error warming

import { ToastAndroid } from 'react-native';
import { Sync } from 'realm';

const screen = Dimensions.get('window')

var SQLite = require('react-native-sqlite-storage');
if (Platform.OS === 'ios') {
    // db = SQLite.openDatabase({name: '<dbname>.db', createFromLocation: 1}, (open) => {}, (e) => {});
}
else {
        var db = SQLite.openDatabase({name : "pets.db", createFromLocation : "~pets.db", location: 'Library'});
}
class ListViewItem extends Component {
  render(){
    return(
            <View style={styles.listView}>
              <View style={styles.listViewCol}>
                <Text>{this.props.rowData.nameSession} </Text>
              </View>
              <View style={styles.listViewCol}>
                <Text></Text>
              </View>
              <View style={styles.listViewCol}>
                <Text>{this.props.rowData.moneyInit}</Text>
              </View>
              <View style={styles.listViewCol}>
                <Text>Đang diễn ra</Text>
              </View>
            </View>
    )
  }
}
class InforAution extends Component {
  constructor(props){
    super(props);
    this.itemRef = firebase.database();
    this.state={
      dataSource:  new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }

  addDB = (name) =>{
    let arr = [];
    this.itemRef.ref('NewSession').child('Public').on('child_added',(dataSnapshot) => {
      arr.push({
        owner:dataSnapshot.val().create.owner,
        nameSession:dataSnapshot.val().create.nameSession,
        date       :dataSnapshot.val().create.date,
        timeStart  :dataSnapshot.val().create.timeStart,
        arrEmail   :dataSnapshot.val().create.arrEmail,
        moneyInit  :dataSnapshot.val().create.moneyInit,
        _key: dataSnapshot.key
      })
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(arr)
      })
    })
  }

  componentDidMount(){
    this.addDB();
  }
  
  findUserFirebase = (userIdFirebase)=>{                                                              //not use package, error!!!!
    var result = 0;
      db.transaction((tx) => {
                let sql = 'SELECT * FROM users WHERE userIdFirebase=?';
                // console.log("vao")
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
                                    console.log("uujj")
                                    console.log(a)
                })
                // console.log(a)
                // console.log("result"+result )
    return  result;
  }

  directToAuction = (key,owner) => {
    this.props.myClickSaveKeyAuction('AUCTION_KEY_SAVE',key)     
    console.log("test")
    console.log(this.props.myUserIdReducer)   
    console.log(owner)       
    console.log(this.props.myUserIdReducer === owner)  
    console.log("test")          
                                   //Save key session is running 
    if(this.props.myUserIdReducer === owner){                                 //test
      let url='/auctionSession-admin/'+key;                                                                           //error cannot use param sercure
      this.props.history.push(url)
    } else {
      let url='/auctionSession/'+key;
      this.props.history.push(url)
    }
   
  }

  goBack = () => {
    this.props.history.goBack();
    // history.goBack();
  }

  render() {
    console.log("id: "+this.props.myUserIdReducer)
    console.log("login cua:"+this.findUserFirebase(this.props.myUserIdReducer))
    return (
      <View style={styles.container}>
        <Header goBack = {this.goBack}/>
        <View style={styles.body}>
        <ScrollView 
                          ref = {scrollView => this._scrollView = scrollView }
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                          pagingEnabled={true}
                          decelerationRate={0}
                          contentOffset ={false}
                          >
          <View style={[styles.body,{width:screen.width}]}>
            <View style={styles.headerBody}>
              <View style={styles.rowTitleBody}>
                <View style={[styles.colTitleBody,{borderRightWidth:0,borderBottomWidth:3,borderColor:'gray'}]}>
                 
                  <View style={[styles.txtColTitleBodyUp,{position:'relative'}]}>
                    <View style={styles.iconNotifyView}>
                        <Text style={styles.iconNotifyTxt}>1</Text>
                    </View>
                    <Text>Đang diễn ra</Text>
                  </View>
                </View>
                <View style={[styles.colTitleBody,{borderRightWidth:0}]}>
                  <Text style={styles.txtColTitleBodyUp}>Đã thắng</Text>
                </View>
                <View style={[styles.colTitleBody,{borderRightWidth:0}]}>
                  <Text style={styles.txtColTitleBodyUp}>Thua</Text>
                </View>
              </View>
              <View style={styles.rowTitleBody}>
                <View style={styles.colTitleBody}>
                  <Text style={styles.txtColTitleBodyDown}>Tên phiên đấu giá</Text>
                </View>
                <View style={styles.colTitleBody}>
                  <Text style={styles.txtColTitleBodyDown}>Kết thúc trong (thời gian)</Text>
                </View>
                <View style={styles.colTitleBody}>
                  <Text style={styles.txtColTitleBodyDown}>Mức giá</Text>
                </View>
                <View style={[styles.colTitleBody,{borderRightWidth:0}]}>
                  <Text style={styles.txtColTitleBodyDown}>Tình trạng</Text>
                </View>
              </View>
            </View>
            <View style={styles.footerBody}>
              <ListView style={{width:screen.width}}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => {
                          // let url='/auctionSession/'+rowData._key;                          //sai clean code chua biet cach khac phuc
                          return  <TouchableOpacity onPress={() => this.directToAuction(rowData._key,rowData.owner)} >                                                   
                                    <ListViewItem rowData = {rowData}></ListViewItem>
                                  </TouchableOpacity>
                        }
                         }
              />
            </View>
          </View>
          <View style={[styles.body,{width:screen.width}]}>
            <View style={styles.headerBody}>
              <View style={styles.rowTitleBody}>
                <View style={[styles.colTitleBody,{borderRightWidth:0}]}>
                  <Text style={styles.txtColTitleBodyUp}>Đang diễn ra</Text>
                </View>
                <View style={[styles.colTitleBody,{borderRightWidth:0,borderBottomWidth:3,borderColor:'gray'}]}>
                  <View style={[styles.txtColTitleBodyUp,{position:'relative'}]}>
                    <View style={styles.iconNotifyView}>
                        <Text style={styles.iconNotifyTxt}>1</Text>
                    </View>
                    <Text>Đã thắng</Text>
                  </View>
                </View>
                <View style={[styles.colTitleBody,{borderRightWidth:0}]}>
                  <Text style={styles.txtColTitleBodyUp}>Thua</Text>
                </View>
              </View>
              <View style={styles.rowTitleBody}>
                <View style={styles.colTitleBody}>
                  <Text style={styles.txtColTitleBodyDown}>Tên phiên đấu giá</Text>
                </View>
                <View style={styles.colTitleBody}>
                  <Text style={styles.txtColTitleBodyDown}>Kết thúc trong (thời gian)</Text>
                </View>
                <View style={styles.colTitleBody}>
                  <Text style={styles.txtColTitleBodyDown}>Mức giá</Text>
                </View>
                <View style={[styles.colTitleBody,{borderLeftWidth:0}]}>
                  <Text style={styles.txtColTitleBodyDown}>Tình trạng</Text>
                </View>
              </View>
            </View>
            <View style={styles.footerBody}>
             
            </View>
          </View>
          <View style={[styles.body,{width:screen.width}]}>
            <View style={styles.headerBody}>
              <View style={styles.rowTitleBody}>
                <View style={[styles.colTitleBody,{borderRightWidth:0}]}>
                  <Text style={styles.txtColTitleBodyUp}>Đang diễn ra</Text>
                </View>
                <View style={[styles.colTitleBody,{borderRightWidth:0}]}>
                  <Text style={styles.txtColTitleBodyUp}>Đã thắng</Text>
                </View>
                <View style={[styles.colTitleBody,{borderRightWidth:0,borderBottomWidth:3,borderColor:'gray'}]}>
                  <View style={[styles.txtColTitleBodyUp,{position:'relative'}]}>
                    <View style={styles.iconNotifyView}>
                        <Text style={styles.iconNotifyTxt}>1</Text>
                    </View>
                    <Text>Thua</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rowTitleBody}>
                <View style={styles.colTitleBody}>
                  <Text style={styles.txtColTitleBodyDown}>Tên phiên đấu giá</Text>
                </View>
                <View style={styles.colTitleBody}>
                  <Text style={styles.txtColTitleBodyDown}>Kết thúc trong (thời gian)</Text>
                </View>
                <View style={styles.colTitleBody}>
                  <Text style={styles.txtColTitleBodyDown}>Mức giá</Text>
                </View>
                <View style={[styles.colTitleBody,{borderRightWidth:0}]}>
                  <Text style={styles.txtColTitleBodyDown}>Tình trạng</Text>
                </View>
              </View>
            </View>
            <View style={styles.footerBody}>
             
            </View>
          </View>
         
       </ScrollView>

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
  headerBody:{
    flex:2,
    justifyContent:'center',
    alignItems:'center'
  },
  footerBody:{
    flex:3,
    // backgroundColor:'yellow'
  },
    listView:{
      margin:2,
      backgroundColor:'#F8F8FF',
      borderBottomWidth:2,
      borderRadius:5,
      borderColor:'gray',
      borderRightWidth:2,
      borderColor:'gray',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      height:screen.width/4
    },
      listViewCol:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
  rowTitleBody:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
    colTitleBody:{
      flex:1,
      borderRightWidth:0.8,
      height:'60%',width:'80%',
      justifyContent:'center',
      alignItems:'center'
    },
      txtColTitleBodyUp:{
        maxWidth:'40%',
        fontWeight:'bold',
        fontSize:13
      },
        iconNotifyView:{
          width:15,
          height:15,
          top:-5,
          left:"80%",
          backgroundColor:'red',
          borderWidth:1,
          borderColor:'white',
          borderRadius:90,
          position:'absolute'
        },
          iconNotifyTxt:{
            fontSize:8,
            alignSelf:'center',
            fontWeight:'bold',
            color:'white'
          },
      txtColTitleBodyDown:{
        maxWidth:'80%',
        fontWeight:'500',
        fontFamily:'Roboto',
        fontSize:12
      }

});

function mapStateToProps(state){
  return {
    myUserIdReducer:state.userIdReducer,
  };
}
export default connect(mapStateToProps,{myClickSaveKeyAuction:clickSaveKeyAuction})(InforAution);