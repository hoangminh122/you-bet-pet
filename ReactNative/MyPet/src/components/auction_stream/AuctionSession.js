import React, { Component } from 'react';
import {View,Button,Text, Dimensions,StyleSheet, Image,TouchableOpacity,FlatList,TouchableHighlight,Alert, TextInput} from 'react-native'
import Footer from '../header_footer/footer'
import Header from '../header_footer/header'
import Video from 'react-native-video';
import firebase from 'firebase'
import CountDown from 'react-native-countdown-component'
import {connect} from 'react-redux'
import Modal from 'react-native-modalbox'


var screen =Dimensions.get('window');

class AuctionSession extends Component {
  constructor(props){
    super(props);
    this.itemRef = firebase.database();
    this.state = {
      dataSource:[],
      dataSourceAdmin:[],
      repeat :false,
      rate:1,
      volume:1,
      muted:false,
      resizeMode:'contain',
      duration:0.0,
      currentTime:0.0,
      paused:false,
      rateText:'1.0',
      pausedText:'Play',
      hideControls:false,
      arrayByKeyFirebase:[],
      moneyNow:0,
      keySession:this.props.match.params.key,
      dataInforUser:[],
      top3DataSource: new Map(),
      // longTimeSetup:10,                                                                                             //set time long in session
      toggleBtnAuction:true,
      timeFormat:60, 
      endSession:false,
      // moneyNow:0,
      startSession:false,
      time  :0,
      toggleBtnAuctionAdmin:[],
      maxMoney:'',
      peopleWin:false,
      dataPeopleWin:[],
      idPeopleWin:'',
      moneyInput:0
    };
    //sai roi
    this.addDbFlatlist() ;    
    this.listenToggleBtnAuction();
    // this.setValueInitSession()

  }

  // formatTimeCountToInt = (time) => {
  //   let valueSplit = time.split(':');
  //   let resultTime = parseInt(valueSplit[0])*60 +parseInt(valueSplit[1]);
  //   return resultTime;
  // }

  onLoad = (data)=>{                                                                              //method video
    this.setState({duration:data.duration});
  }

  onPress = (data)=>{                                                                             //method video
    this.setState({currentTime:data.currentTime})
  }

  onEnd = ()=>{                                                                                   //method video
    this.setState({pausedText:'Play',paused:true});
    this.video.seek(0);
  }

  // addDB = (key) =>{                                                                               // pull information session from firebase
  //   let arr = [];
  //   let starCountRef = this.itemRef.ref('NewSession').child('Public').child(key);
  //   starCountRef.on('value',function(snapshot){
  //      snapshot.forEach((child)=>{
  //       arr.push(
  //         child.val()                                                                             //chua lam dc, push 1 doi tuong child.key
  //       );
  //      });
  //   })
  //   this.setState({
  //     arrayByKeyFirebase:arr,
  //     moneyNow:arr[2]   //setstate money now 
  //   })
  //   // this.setState({moneyNow:this.state.arrayByKeyFirebase[2]})

  // }

  setToggleBtnAuction =() =>{
    
    if(!this.state.toggleBtnAuction){
      return {width:100,height:35,backgroundColor:'gray',borderRadius:5};
    } else {
      return {width:100,height:35,backgroundColor:'red',borderRadius:5};
    }
  }

  listenToggleBtnAuction = () =>{
    this.itemRef.ref('NewSession').child('Public').child(this.state.keySession).child('admin').on('child_changed',(dataSnapshot) => {         //sai rồi, login bi sai
      // let arrInfor = [];
      // let arr = [];
      // arr.push({
      //   moneyUp:dataSnapshot.val().moneyUp,
      //   _key: dataSnapshot.key
      // })
      // console.log(arr)
      // //get information user
      // let starCountRef = this.itemRef.ref('users').child(dataSnapshot.key).child('profile');
      // starCountRef.on('value',function(snapshot){

      //   arrInfor.push({
      //                   username:snapshot.val().username,
      //                   email   :snapshot.val().email,
      //                   avatar  :snapshot.val().avatar
      //   })
      // })

      // if(arr.length > 0  && arrInfor.length > 0){
      //   this.setState({
      //     dataSource:arr,
      //     dataInforUser:arrInfor
      //   })
      // }
      let arr =[];
      arr.push({
        value:dataSnapshot.val(),
        _key: dataSnapshot.key
      })
      this.setState({
        toggleBtnAuction:dataSnapshot.val()
      })
    })
  }

  getInforUser = async(value) => {
    let result = [];
    await this.itemRef.ref('users').child(value).child('profile').once('value',(snapshot) => {
      result.push({
                      username:snapshot.val().username,
                      email   :snapshot.val().email,
                      avatar  :snapshot.val().avatar
      })
    })
    return await result;
  }
  addDbFlatlist = async(name) =>{    
    // let arr = [];
    // let arrInfor = [];
    try{
      this.itemRef.ref('NewSession').child('Public').child(this.state.keySession).child('moneyUp').on('child_changed',async(dataSnapshot) => {   
        console.log("vao day")                                                                 //get information user take part in session has up money
        //sai rồi, login bi sai
        let arrInfor = [];
        let arr = [];
        arr.push({
          moneyUp:dataSnapshot.val().moneyUp,
          _key: dataSnapshot.key
        })
        //get information user
        console.log("dataSnapshot")
        console.log(dataSnapshot.key)
        console.log("dataSnapshot")

        arrInfor = await this.getInforUser(dataSnapshot.key);
        //  this.itemRef.ref('users').child(dataSnapshot.key).child('profile').on('value',(snapshot) => {
        //   arrInfor.push({
        //                   username:snapshot.val().username,
        //                   email   :snapshot.val().email,
        //                   avatar  :snapshot.val().avatar
        //   })
        // })
  
        if(this.state.dataSource.length === 3) {
          this.state.dataSource.splice(2, 1);
          this.state.dataInforUser.splice(2, 1);
        }
        console.log("arr")
        console.log(arr)
        console.log(arrInfor)
        console.log("arr")

        if(arr.length > 0  && arrInfor.length > 0){
          console.log("Vao day 2")
          let result = [] ;
          let resultInfor = [];
          result.push(arr,...this.state.dataSource);
          result.sort((a,b) => a[0].moneyUp < b[0].moneyUp);
          resultInfor.push(arrInfor,...this.state.dataInforUser);
  
          this.setState({
            dataSource:result,
            dataInforUser:resultInfor
          })
        } else {
          Alert.alert("Lỗi Kết Nối !")
        }
      })
    }
    catch(e){
      Alert.alert("Nguy hiểm "+e)
    }
   
  }
  
  upMoneyClick = (moneykeyUp)=>{
    this.setState({
      moneyNow : parseInt(this.state.moneyNow) +parseInt(moneykeyUp)
    })
  }

  clickButtonAuction =() =>{
    if(!this.state.toggleBtnAuction){
    } else {
        // let name = "6fg2aw1pNgUg6Ly5tRNsRMMRo5z1";
        if(this.props.myUserIdReducer != 0){
        let a = this.itemRef.ref('NewSession').child('Public').child(this.state.keySession).child('moneyUp').child(this.props.myUserIdReducer).update({
        moneyUp:this.state.moneyNow
        
      })
      let b = this.itemRef.ref('NewSession').child('Public').child(this.state.keySession).child('MaxMoney').update({
        maxMoney:this.state.moneyNow,
        peopleWin:this.props.myUserIdReducer
      })
      Alert.alert("up money session completed !.");
    }
    }
  }

  listenPeopleWin = async() => {
    this.itemRef.ref('NewSession').child('Public').child(this.state.keySession).child('MaxMoney').on('value',(dataSnapshot) => {   
      this.setState({
        maxMoney:dataSnapshot.val().maxMoney,
        peopleWin:dataSnapshot.val().peopleWin == this.props.myUserIdReducer ? true:false,
        idPeoplewin:dataSnapshot.val().peopleWin
      })

    })
  }

  listenMaxMoney = () => {
    this.itemRef.ref('NewSession').child('Public').child(this.state.keySession).child('MaxMoney').on('child_changed',(dataSnapshot) => {         //sai rồi, login bi sai
      let arr = [];
      arr.push({
        maxMoney:dataSnapshot.val(),
        _key: dataSnapshot.key
      })
      this.setState({
        moneyNow:dataSnapshot.val(),
      });
     
    })
  }

  setValueInitSession = () =>{
    this.itemRef.ref('NewSession').child('Public').child(this.state.keySession).child('admin').on('value',(dataSnapshot) => {   
      let arr = new Array();
      arr.push({
        minMoney:dataSnapshot.val().minMoney,
        moneyNow:dataSnapshot.val().moneyNow,
        startSession:dataSnapshot.val().startSession,
        time:dataSnapshot.val().time,
        toggleBtnAuction:dataSnapshot.val().toggleBtnAuction,
        _key: dataSnapshot.key
      })

      this.setState({
        timeFormat:this.formatTimeCountToInt(dataSnapshot.val().time),
        moneyNow:dataSnapshot.val().moneyNow,
        dataSourceAdmin:arr
      })
    })

  }

  showTimeCount = () =>{
    if(this.state.dataSourceAdmin.length >0){
     return (
                <CountDown
                size={10}
                // until={this.props.myLongTimeReducer}
                
                until={this.state.timeFormat}
                onFinish={async() => {
                  this.setState({
                    toggleBtnAuction:false
                  })
                  this.listenPeopleWin();
                  if(this.state.peopleWin)
                  {
                    this.openModal1();
                   // this.refs.modal1.open();

                  }
                  let dataPeopleWin= await this.getInforUser(this.props.myUserIdReducer)
                  this.setState({
                    toggleBtnAuction:false,
                    dataPeopleWin
                  })
                  // this.openModal1();
                  // Alert.alert(
                  //   'Chúc Mừng Bạn ',
                  //   'Người chiến thắng !',
                  //   [
                  //     { text: 'Tiếp Tục', onPress: () => console.log('OK Pressed') }
                  //   ],
                  //   { cancelable: false }
                  // );
                }}                  
                digitStyle={{backgroundColor: '#FFF', borderWidth: 1, borderColor: 'white'}}
                digitTxtStyle={{color: 'red'}}
                timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                separatorStyle={{color: 'black'}}
                timeToShow={['H', 'M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
            />
            )
    }
  }

  formatTimeCountToInt = (time) => {
      let valueSplit = time.split(':');
      let resultTime = parseInt(valueSplit[0])*60 +parseInt(valueSplit[1]);
      return resultTime;
    // return 120;
    
  }

  componentDidMount(){
    this.setValueInitSession();
    this.listenMaxMoney();
    // this.setState({                                                                  //sai chua sua
    //   keySession:this.props.match.params.key
    // });
    // if(this.props.myLongTimeReducer > 0)                                                //sai roi
    //   this.setState({
    //     toggleBtnAuction:true
    //   })
    // this.setState({
    //   longTimeSetup:this.props.myLongTimeReducer
    // })
    // this.addDB(this.props.match.params.key);  
                                      //ok dung roi
    
    // if(this.props.myUserIdReducer != '0')                                             //check is login
    //   this.addDB(this.props.myUserIdReducer)


  }

  goBack = () => {
    this.props.history.goBack();
    // history.goBack();
  }

  openModal1() {
    //phien dau gia ket thuc
    console.log("phien dau gia ket thuc");
    this.refs.modal1.open();
  }

  clickBtnInputMoney = () => {
    console.log("vaod")
    if(this.state.moneyInput > this.state.moneyNow) {
       this.setState({
         moneyNow: parseInt(this.state.moneyInput)
       })
       this.refs.modal3.close();
    } else {
      this.refs.modal3.close();
      return false;
    }
    
  }
  render() {
    const temp = this;
    // if(this.state.dataPeopleWin.length>0)
    console.log("moneyInput" +this.state.moneyInput)
    let {arrayByKeyFirebase} =this.state
    return (
      <View style={styles.container}>
        <Header nameTitle ={arrayByKeyFirebase[4]} goBack = {this.goBack}/>
        <View style={styles.imagePets}>
          <View style={styles.imageChild}>
            <TouchableOpacity
            style={{backgroundColor:'yellow',width:'100%',height:"100%"}}
              onPress={() => this.setState({paused:!this.state.paused})}
            >
              <Video
              style={{width:"100%",height:"100%"}}
                
              // source={require('../video/minh.mp4')}
                // source={{uri:'https://www.youtube.com/watch?v=dQHUK2MfXvI'}}
                source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                ref={(ref) => {
                    this.player = ref
                }}  
                repeat={this.state.repeat}
                rate={this.state.rate}
                volume={this.state.volume}
                muted={this.state.muted}
                resizeMode={this.state.resizeMode}
                paused={this.state.paused}
                fullscreen={true}
                resizeMode="cover"
              />
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyTittle}>
            <Text style={styles.bodyTittleTxt}>Người đấu giá </Text>
          </View>
          <View style={styles.bodyTop10}>
           
          <View style={{flex:4,flexDirection:'column'}}>
            <Modal style={[styles.modal, styles.modal3,{padding:10,borderRadius:10,borderWidth:1,borderColor:'red'}]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
              <Text style={[styles.text,{fontWeight:'bold',marginLeft:10}]}>Nhập số Tiền :</Text>
              <TextInput type = "text" placeholder="Money" style={{borderColor:'gray', borderWidth:1,borderRadius:5,margin:10,}} onChangeText ={(e)=>this.setState({ moneyInput: parseInt(e)})} />
              <Button title={`Đồng ý`} onPress={() => this.clickBtnInputMoney()} style={[styles.btn,{color:'white'}]}/>
            </Modal>
            <FlatList
            style={{height:screen.height,width:screen.width,backgroundColor:'white'}}
            data={this.state.dataSource}
            renderItem={({item,index}) =>  
              <View style={[styles.bodyTop10Object,{height:80}]}>
                <View style={styles.bodyTop10ObjectStt}>
                  <Text>{index+1}</Text>
                </View>
                <View style={styles.bodyTop10ObjectImage}>
                  <Image style={styles.bodyTop10ObjectImageChild}></Image>
                </View>
                <View style={styles.bodyTop10ObjectInfor}>
                  <View>
                  {/* {(this.state.dataInforUser.length != 0) ? this.state.dataInforUser[index].username:"sd"} */}
                    <Text style={styles.bodyTop10ObjectInforTxt}>{(this.state.dataInforUser.length != 0) ? this.state.dataInforUser[index][0].username:"sd"}</Text>
                  </View>
                  <View>
                    <Text style={styles.bodyTop10ObjectInforTxt}>{item[0].moneyUp}</Text>
                  </View>
                </View>
              </View>
              } 
            />
          </View>
         {/* button dau gia */}
            <View style={[styles.bodyTop10Object,{margin:5,borderWidth:1}]}>
              <View style={[styles.bodyTop10ObjectStt,{flex:1,borderRightWidth:2}]}>
                <Text style={{fontSize:11,fontWeight:'bold'}}>Thời gian còn lại</Text>
                <View>
                 {this.showTimeCount()}
                </View>
              </View>
              <TouchableOpacity style={[styles.bodyTop10ObjectImage,{flex:1,borderRightWidth:3}]} onPress={() => this.refs.modal3.open()}>
                <Text style={{fontSize:11,fontWeight:'bold'}}>Đấu giá hiện tại</Text>
                <View style={{flexDirection:'row',flex:1,alignItems:'center',alignContent:'center'}}>
                <TouchableHighlight style={{backgroundColor:'gray',width:15,height:15}}>
                  <Image></Image>
                </TouchableHighlight>
                  <Text style={{margin:5,width:"60%",fontSize:12}}>{`${this.state.moneyNow} vnd`}</Text>
                <TouchableHighlight style={{backgroundColor:'red',width:15,height:15,flexDirection:'row',flex:1,alignItems:'center',justifyContent:'center'}} onPress= {() => this.upMoneyClick(100000)}>
                  <Image style={{width:10,height:10,}} source={require('../../images/add.png')}></Image>
                </TouchableHighlight>
                </View>
              </TouchableOpacity>
              <View style={[styles.bodyTop10ObjectInfor,{flex:1}]}>
                <TouchableOpacity style={this.setToggleBtnAuction()} onPress={()=>this.clickButtonAuction()}>
                  <View style={{flex:1,flexDirection:'column',alignSelf:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>Đấu Giá</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
           
           {/* //dau gia */}
           </View>
        </View>
        {/* <Footer/> */}
        <Button title="Lướt lên" onPress={() => this.refs.modal1.open()} style={styles.btn}/>
        
        <Modal
          style={[styles.modal, styles.modal1]}
          ref={"modal1"}
          swipeToClose={this.state.swipeToClose}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}
          >
            <Text style={styles.text}></Text>
            <Button title={`Lướt Xuống`} onPress={() => this.setState({swipeToClose: !this.state.swipeToClose})} style={styles.btn}/>
                <View style={styles.imagePets}>
                  <View style={styles.imageChild}>
                    <Text style={[styles.imageText,{fontSize:16,color:'blue'}]}>CHÚC MỪNG !</Text>
                    <Text style={[styles.imageText,{color:'white'}]}>{this.state.dataPeopleWin.length ? this.state.dataPeopleWin[0].username:''}</Text>
                    <Text style={[styles.imageText,{color:'white'}]}>Chiến thắng vật phẩm</Text>
                    <Text style={[styles.imageText,{color:'white'}]}>Với giá trị</Text>
                    <Text style={[styles.imageText,{color:'red'}]}>{this.state.maxMoney} đ</Text>
                    <TouchableOpacity style={styles.imageTouch} onPress={() => this.refs.modal1.close()}>
                        <Text>Tiếp tục</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imageTouch} onPress={() => this.props.history.push('/payment')}>
                        <Text>Thanh Toán</Text>
                    </TouchableOpacity>
                  </View>
            </View>
        </Modal>
        {/* <Button title="Position" onPress={() => this.refs.modal3.open()} style={styles.btn}/> */}
        

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
  imagePets:{
    flex:3,
    // backgroundColor:'#F8F8FF',
    justifyContent:'center',
    alignItems:'center'
  },
    imageChild:{
      height:'90%',
      width:'90%',
      backgroundColor:'#ABCDFF'
    },
  body:{
    flex:6,
    backgroundColor:'#F8F8FF',
    flexDirection:'column'
  },
    bodyTittle:{
      flex:1.5,
      backgroundColor:'#F8F8FF'
    },
      bodyTittleTxt:{
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold',
        color:'#000000'
      },
    bodyTop10:{
      flex:8.5,
      backgroundColor:'#F8F8FF',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },
      bodyTop10Object:{
        flex:1,
        backgroundColor:'#F8F8FF',
        flexDirection:'row',
        borderRadius:10,borderBottomWidth:1,
        borderLeftWidth:0.2,borderRightWidth:1,
        borderColor:'gray',
        width:'95%',
        height:'100%',
        alignSelf:'center',
        margin:2
      },
        bodyTop10ObjectStt:{
          flex:2,
          justifyContent:'center',
          alignItems:'center'
        },
        bodyTop10ObjectImage:{
          flex:3,
          justifyContent:'center',
          alignItems:'center'
        },
          bodyTop10ObjectImageChild:{
            height:'60%',
            width:'90%',
            backgroundColor:'#ABCDFF'
          },
        bodyTop10ObjectInfor:{
          flex:5,
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column'
        },
        bodyTop10ObjectInforTxt:{
          fontWeight:'bold',
          fontSize:12
        },
        
      
          imageChild:{
          //   height:'40%',
            width:'95%',
            backgroundColor:'#ABCDFF'
          },
              imageText:{
                  fontSize:13,
                  fontWeight:'bold',
                  alignSelf:'center'
              },
              imageTouch:{
                  backgroundColor:'red',
                  borderColor:'white',
                  borderWidth:1,
                  alignSelf:'center',
                  margin:10,
                  padding:5,
                  borderRadius:5
              }
 });


// const mapDispatchToProps = (dispatch) => {
//   return {
//     myClickSaveUserId:clickSaveUserId,
//     myClickSaveInforUser:clickSaveInforUser
    
//   }
// }
function mapStateToProps(state){
  return {
    myUserIdReducer:state.userIdReducer,
    myLongTimeReducer: state.longTimeReducer
  };
}
 export default connect(mapStateToProps)(AuctionSession);
        


//  <View style={{display:'flex',flexDirection:'row',flex:1}}>
//                 <View style={{flex:4,flexDirection:'column'}}>
//                   <FlatList
//                   style={{height:screen.height,width:screen.width,backgroundColor:'white'}}
//                   data={[1,2]}
//                   renderItem={({item,index}) =>  
//                     <View style={[styles.bodyTop10Object,{height:80}]}>
//                       <View style={styles.bodyTop10ObjectStt}>
//                         <Text>{index+1}</Text>
//                       </View>
//                       <View style={styles.bodyTop10ObjectImage}>
//                         <Image style={styles.bodyTop10ObjectImageChild}></Image>
//                       </View>
//                       <View style={styles.bodyTop10ObjectInfor}>
//                         <View>
//                         {/* {(this.state.dataInforUser.length != 0) ? this.state.dataInforUser[index].username:"sd"} */}
//                           <Text style={styles.bodyTop10ObjectInforTxt}>dfgd</Text>
//                         </View>
//                         <View>
//                           <Text style={styles.bodyTop10ObjectInforTxt}>dfg</Text>
//                         </View>
//                       </View>
//                     </View>
//                     } 
//                   />
//                 </View>
//               </View>