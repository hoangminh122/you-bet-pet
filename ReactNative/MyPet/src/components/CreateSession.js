import React, { Component, Children } from 'react';
import {View,Text, TextInput, TouchableWithoutFeedback,Image, Keyboard,ScrollView, Dimensions,StyleSheet, TouchableOpacity, Alert} from 'react-native'
import Header from './header';
import DatePicker from 'react-native-datepicker'
import firebase from 'firebase'

const screen = Dimensions.get('window');

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default class CreateSession extends Component {
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
    switch(page){
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
      default:
        break;

    }
    this._scrollView.scrollTo({x: screen.width*page, y: 0, animated: true});
    this._scrollView.setNativeProps({ scrollEnabled: false });
   
  }
  CreateOneNewSession =() =>{
    this.itemRef.ref('NewSession').child('Public').push({
      nameSession:this.state.nameSession,
      date:this.state.date,
      timeStart:this.state.timeStart,
      // email:this.state.email,
      arrEmail:this.state.arrEmail,
      moneyInit:this.state.moneyInit
    })
    Alert.alert("Create new session completed !.");
  }

  render() {
    console.log(this.state.arrEmail)
    return (
         <DismissKeyboard >
         <View style={styles.container}>
            <Header/>
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
                <View style={{height:screen.height/1.5,width:screen.width,flex:1,flexDirection:'column'}}>
                  <View style = {{flex:2}}>
                  <Image source={require('../images/pets.png')}/>
                  </View>
                  <View style = {{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{flex:1,fontWeight:'bold'}}>Join Auction </Text>
                    <Text  style={{flex:2,fontSize:12,color:'gray'}}> Honey, let's get ready to make a move !</Text>
                    <TouchableOpacity onPress={(event) => this.setOffsetPage(1)} style={{backgroundColor:'red',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',borderWidth:1,width:screen.width/1.1,borderColor:'white',borderRadius:5}}>
                      <Text style={{fontSize:12,color:'white'}}>Next</Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>
                <View style={{height:screen.height/1.5,width:screen.width,flex:1,flexDirection:'column'}}>
                  
                  <View style={{flex:5,justifyContent:'center',alignItems:'center'}}>
                    <View style={{flex:2,justifyContent:'center',alignItems:'center'}}> 
                      <Text style={{fontWeight:'bold'}}> Name Session ?</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',margin:10}}>
                      <TextInput
                        style={{flex:1,borderBottomWidth:1}}
                        placeholder="Create Name"
                        placeholderTextColor="gray"
                        onChangeText = { (name) =>this.setState({nameSession:name})}
                      />
                    </View>
                    <View style={{flex:1}}></View>
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity onPress={(event) => this.setOffsetPage(2)} style={{backgroundColor:'red',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',borderWidth:1,width:screen.width/1.1,borderColor:'white',borderRadius:5}}>
                      <Text style={{fontSize:12,color:'white'}}>Next</Text>
                    </TouchableOpacity>
                  </View>
                 
                  <View style={{flex:5}}>
                  </View>
                </View>
                <View style={{height:screen.height/1.5,width:screen.width}}>
                  <View style={{flex:5,justifyContent:'center',alignItems:'center'}}>
                      <View style={{flex:2,justifyContent:'center',alignItems:'center'}}> 
                        <Text style={{fontWeight:'bold'}}> Set Time Auction Session ?</Text>
                      </View>
                      <View style={{flex:1,flexDirection:'row',margin:10}}>
                        
                        <View style={{flex:1}}>
                          <DatePicker
                            style={{width: 200}}
                            date={this.state.date}
                            mode="date"
                            placeholder="Date Auction"
                            format="YYYY-MM-DD"
                            minDate="2020-05-01"
                            maxDate="2020-06-01"
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
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <TouchableOpacity onPress={(event) => this.setOffsetPage(3)} style={{backgroundColor:'red',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',borderWidth:1,width:screen.width/1.1,borderColor:'white',borderRadius:5}}>
                        <Text style={{fontSize:12,color:'white'}}>Next</Text>
                      </TouchableOpacity>
                    </View>
                  
                    <View style={{flex:5}}>
                    </View>
                </View>
                <View style={{height:screen.height/1.5,width:screen.width}}>
                  <View style={{flex:9,justifyContent:'center',alignItems:'center',width:screen.width}}>
                      <View style={{flex:1,width:screen.width,justifyContent:'center',alignItems:'center'}}> 
                        <Text style={{fontWeight:'bold'}}> Add friends Session ?</Text>
                      </View>
                      <View style={{flex:1,flexDirection:'column',margin:10}}>
                        
                        <View style={{flex:1,flexDirection:'column',width:screen.width}}>
                            <View style={{flex:4,marginHorizontal:10}}>
                              <TextInput
                                  style={{borderColor:'white',height:30,borderBottomWidth:1}}
                                  placeholder="Please enter a valid email address"
                                  placeholderTextColor="gray"
                                  onSubmitEditing={this.searchSubmit}
                                  textContentType="emailAddress"
                                  value={this.state.email}
                                  onChangeText ={(name)=>{
                                    this.setState({email:name});
                                  }}
                                  onSubmitEditing={()=>this.addEmailFriends()  // called only when multiline is false
                                  } 
                              />
                            </View> 
                            
                        </View>
                         
                      </View>
                      <View style={{flex:1,width:screen.width,}}>
                        <Text style={{flex:1,borderWidth:1,borderColor:'white',marginHorizontal:10,marginBottom:2}}>email</Text>
                      </View>
                    </View>
                    <View style={{flex:1.3,justifyContent:'center',alignItems:'center'}}>
                      <TouchableOpacity onPress={(event) => this.setOffsetPage(4)} style={{backgroundColor:'red',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',borderWidth:1,width:screen.width/1.1,borderColor:'white',borderRadius:5}}>
                        <Text style={{fontSize:12,color:'white'}}>Next</Text>
                      </TouchableOpacity>
                    </View>
                  
                    <View style={{flex:5}}>
                    </View>
                </View>
                <View style={{height:screen.height/1.5,width:screen.width}}>
                  <View style={{flex:5,justifyContent:'center',alignItems:'center'}}>
                      <View style={{flex:2,justifyContent:'center',alignItems:'center'}}> 
                        {/* <Text style={{fontWeight:'bold'}}></Text> */}
                         <TextInput
                            style={{borderBottomWidth:1,height:30}}
                            placeholder="Money init "
                            placeholderTextColor="gray"
                            onChangeText ={ (value) =>this.setState({moneyInit:value})}
                          />           
                      </View>
                      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',margin:10}}>
                        
                        <View style={{flex:1}}>
                              <Text style={{fontSize:14,fontWeight:'bold',color:'#000000'}}>Let's Go !</Text>
                        </View>
                       
                      </View>
                      <View style={{flex:1}}></View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <TouchableOpacity onPress= {() =>this.CreateOneNewSession()} style={{backgroundColor:'red',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',borderWidth:1,width:screen.width/1.1,borderColor:'white',borderRadius:5}}>
                        <Text style={{fontSize:12,color:'white'}}>Finish !</Text>
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
   
 });
