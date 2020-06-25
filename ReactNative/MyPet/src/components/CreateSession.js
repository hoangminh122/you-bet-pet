import React, { Component } from 'react';
import {View,Text, TextInput, TouchableWithoutFeedback,Image, Keyboard,ScrollView, Dimensions,StyleSheet, TouchableOpacity, Alert} from 'react-native'
import Header from './header';
import DatePicker from 'react-native-datepicker'
import firebase from 'firebase'
import {connect} from 'react-redux'


const screen = Dimensions.get('window');

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

class CreateSession extends Component {
  constructor(props){
    super(props)
    this.state = {
      pageShow: 1,
      nameSession:"",
      date:"",
      timeStart:"",
      email:"",
      arrEmail:[],
      moneyInit:''
    }
    this.itemRef = firebase.database();
  }
 
  addEmailFriends = ()=>{
        this.setState({
           arrEmail: [...this.state.arrEmail,this.state.email],
           email:""
         })
  }

  setOffsetPage = (page)=>{
    let ischeckNull = true ;                                            //check input is null
    switch(page){
      case 1:
        break;
      case 2:
        if(this.state.nameSession == "") return;                        //fail clean code ,help!!!!
        break;
      case 3:
        if(this.state.date == "" || this.state.timeStart == "") return ;
        break;
      case 4:
        if(this.state.arrEmail.length <= 0) return ;
        break;
      default:
        break;
    }
    this._scrollView.scrollTo({x: screen.width*page, y: 0, animated: true});
    this._scrollView.setNativeProps({ scrollEnabled: false });
  }

  CreateOneNewSession =() =>{
    if(this.state.moneyInit != ""){
      this.itemRef.ref('NewSession').child('Public').push({
        create:{
          nameSession:this.state.nameSession,
          date:this.state.date,
          timeStart:this.state.timeStart,
          // email:this.state.email,
          arrEmail:this.state.arrEmail,
          moneyInit:this.state.moneyInit,
          owner: this.props.myUserIdReducer
        }
      })
      Alert.alert("Create new session completed !.");
      this.props.history.push('/inforAuction')
      //go to page Infor session
    }
    return ;
  }

  goBack = () => {
    this.props.history.goBack();
    // history.goBack();
  }

  render() {
    return (
         <DismissKeyboard >
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
                          scrollEnabled={false}
                          >
                <View style={styles.viewScene1}>
                  <View style = {{flex:2}}>
                  <Image source={require('../images/pets.png')}/>
                  </View>
                  <View style = {styles.viewBody}>
                    <Text style={{flex:1,fontWeight:'bold'}}>Join Auction </Text>
                    <Text  style={{flex:2,fontSize:12,color:'gray'}}> Honey, let's get ready to make a move !</Text>
                    <TouchableOpacity onPress={(event) => this.setOffsetPage(1)} style={styles.touchBody}>
                      <Text style={styles.btnNext}>Next</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.viewScene1}>
                  <View style={styles.viewBody2}>
                    <View style={styles.viewNameSession}> 
                      <Text style={{fontWeight:'bold'}}> Name Session ?</Text>
                    </View>
                    <View style={styles.viewInput}>
                      <TextInput
                        style={{flex:1,borderBottomWidth:1}}
                        placeholder="Create Name"
                        placeholderTextColor="gray"
                        onChangeText = { (name) =>this.setState({nameSession:name})}
                      />
                    </View>
                    <View style={{flex:1}}></View>
                  </View>
                  <View style={[styles.viewBody2,{flex:1}]}>
                    <TouchableOpacity onPress={(event) => this.setOffsetPage(2)} style={styles.touchBody}>
                      <Text style={styles.btnNext}>Next</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex:5}}>
                  </View>
                </View>
                <View style={styles.viewScene3}>
                  <View style={styles.viewBody2}>
                      <View style={[styles.viewBody2,{flex:2}]}> 
                        <Text style={{fontWeight:'bold'}}> Set Time Auction Session ?</Text>
                      </View>
                      <View style={styles.viewDateTimePicker}>
                        <View style={{flex:1}}>
                          <DatePicker
                            style={{width: 200}}
                            date={this.state.date}
                            mode="date"
                            placeholder="Date Auction"
                            format="YYYY-MM-DD"
                            minDate="2020-05-01"
                            maxDate="2025-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                              dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                              },
                              dateInput: {
                                marginLeft: 36
                              }
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                            />
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                          <DatePicker
                              style={{width: 110}}
                              date={this.state.timeStart}
                              mode="time"
                              placeholder= "Time start"
                              format="HH:mm"
                              confirmBtnText="Confirm"
                              cancelBtnText="Cancel"
                              customStyles={{
                                dateIcon: {
                                  position: 'absolute',
                                  left: 0,
                                  top: 4,
                                  marginLeft: 0
                                },
                                dateInput: {
                                  marginLeft: 36
                                }
                              }}
                              onDateChange={(date) => {this.setState({timeStart: date})}}
                              />
                        </View>
                      </View>
                      <View style={{flex:1}}></View>
                    </View>
                    <View style={[styles.viewBody2,{flex:1}]}>
                      <TouchableOpacity onPress={(event) => this.setOffsetPage(3)} style={styles.touchBody}>
                        <Text style={styles.btnNext}>Next</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex:5}}>
                    </View>
                </View>
                <View style={styles.viewScene3}>
                  <View style={[styles.viewBody2,{flex:9,width:screen.width}]}>
                      <View style={[styles.viewBody2,{flex:1,width:screen.width}]}> 
                        <Text style={{fontWeight:'bold'}}> Add friends Session ?</Text>
                      </View>
                      <View style={styles.viewEmailBody}>
                        <View style={styles.viewEmail}>
                            <View style={styles.viewEmailChild}>
                              <TextInput
                                  style={styles.emailInput}
                                  placeholder="Please enter a valid email address"
                                  placeholderTextColor="gray"
                                  onSubmitEditing={this.searchSubmit}
                                  textContentType="emailAddress"
                                  value={this.state.email}
                                  onChangeText ={(name)=>{
                                    this.setState({email:name});
                                  }}
                                  onSubmitEditing={()=>this.addEmailFriends()
                                  } 
                              />
                            </View> 
                        </View>
                      </View>
                                                                                                                          {/* CANNOT FIX BORDER FOR EMAIL MANY */}
                      <ScrollView style={styles.viewShowEmail}>                                                                       
                        <View style={styles.emailShowTxt}>
                        {this.state.arrEmail.map((email,index)=>{
                          return(
                                 <View style={{margin:2,borderWidth:1,borderColor:'black',padding:5}}>
                                    <Text>
                                      {email}
                                    </Text>
                                  </View>
                                  )
                        })}
                        </View>
                      </ScrollView>
                    </View>
                    <View style={[styles.viewBody2,{flex:1.3}]}>
                      <TouchableOpacity onPress={(event) => this.setOffsetPage(4)} style={styles.touchBody}>
                        <Text style={styles.btnNext}>Next</Text>
                      </TouchableOpacity>
                    </View>
                  
                    <View style={{flex:5}}>
                    </View>
                </View>
                <View style={styles.viewScene3}>
                  <View style={styles.viewBody2}>
                      <View style={[styles.viewBody2,{flex:2}]}> 
                        {/* <Text style={{fontWeight:'bold'}}></Text> */}
                         <TextInput
                            style={{borderBottomWidth:1,height:30}}
                            placeholder="Money init "
                            placeholderTextColor="gray"
                            onChangeText ={ (value) =>this.setState({moneyInit:value})}
                          />           
                      </View>
                      <View style={styles.viewLetGo}>
                        <View style={{flex:1}}>
                              <Text style={styles.letGoTxt}>Let's Go !</Text>
                        </View>
                      </View>
                      <View style={{flex:1}}></View>
                    </View>
                    <View style={[styles.viewBody2,{flex:1}]}>
                      <TouchableOpacity onPress= {() =>this.CreateOneNewSession()} style={styles.touchBody}>
                        <Text style={styles.btnNext}>Next</Text>
                      </TouchableOpacity>
                    </View>
                  
                    <View style={{flex:5}}>
                    </View>
                </View>

              </ScrollView>
            </View>
           
        </View>
      </DismissKeyboard>
      
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
    backgroundColor:'#C6E2FF',
    flexDirection:'column'
  },
  btnCreate:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
     
    },
  viewScene1:{
    height:screen.height/1.5,
    width:screen.width,
    flex:1,
    flexDirection:'column'
  },
    viewBody:{
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    },
      touchBody:{
        backgroundColor:'blue',
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        width:screen.width/1.1,
        borderColor:'white',
        borderRadius:5
      },
        btnNext:{
          fontSize:12,
          color:'white'
        },
    viewBody2:{
      flex:5,
      justifyContent:'center',
      alignItems:'center'
    },
      viewLetGo:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin:10
      },
        letGoTxt:{
          fontSize:14,
          fontWeight:'bold',
          color:'#000000'
        },
      viewNameSession:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
      },
      viewInput:{
        flex:1,
        flexDirection:'row',
        margin:10
      },
      viewDateTimePicker:{
        flex:1,
        flexDirection:'row',
        margin:10
      },
      viewShowEmail:{
        flex:1,
        width:screen.width,
        height:screen.height/4.5
      },
        emailShowTxt:{
          flex:1,
          borderWidth:1,
          borderColor:'white',
          marginHorizontal:10,
          marginBottom:2
        },
      viewEmailBody:{
        flex:1,
        flexDirection:'column',
        width:screen.width
      },
        viewEmail:{
          flex:1,
          flexDirection:'column',
          width:screen.width
        },
          viewEmailChild:{
            flex:4,
            marginHorizontal:10,
            margin:10
          },
            emailInput:{
              borderColor:'white',
              height:30,
              borderBottomWidth:1
            },
  viewScene3:{
    height:screen.height/1.5,
    width:screen.width
  }
   
 });

 function mapStateToProps(state){
  return {
    myUserIdReducer:state.userIdReducer,
  };
}
 export default connect(mapStateToProps)(CreateSession);