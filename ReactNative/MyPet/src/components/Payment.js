import React, { Component } from 'react';
import {View,Text, TextInput, TouchableWithoutFeedback,Image, Keyboard,ScrollView, Dimensions,StyleSheet, TouchableOpacity, Alert,FlatList} from 'react-native'
import Header from './header';
import Footer from './footer';
import DatePicker from 'react-native-datepicker'
// import {connect} from 'react-redux'


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
      dataSource:[3],
    }
  }
 
  render() {
    return (
         <DismissKeyboard >
         <View style={styles.container}>
            <Header nameTitle = "Thanh Toan"/>
            <View style={styles.body}>
            <View style = {{ flex:1}}>
                <FlatList
                    style={{height:screen.height,width:screen.width,backgroundColor:'white'}}
                    data={this.state.dataSource}
                    renderItem={({item,index}) =>  
                    <View style={[styles.bodyTop10Object,{height:80}]}>
                        <View style={styles.bodyTop10ObjectStt}>
                        <Text>1</Text>
                        </View>
                        <View style={styles.bodyTop10ObjectImage}>
                        <Image style={styles.bodyTop10ObjectImageChild}></Image>
                        </View>
                        <View style={styles.bodyTop10ObjectInfor}>
                        <View>
                            <Text style={styles.bodyTop10ObjectInforTxt}>jhfghfghf</Text>
                        </View>
                        <View>
                            <Text style={styles.bodyTop10ObjectInforTxt}>200000 đ</Text>
                        </View>
                        </View>
                    </View>
                    } 
                />
            </View>
            <View style = {{ flex:1}}>
                <Text>sdfsdhg</Text>
            </View>
                
            </View>
            <Footer/>
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
        width:screen.width
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
            marginHorizontal:10
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

//  function mapStateToProps(state){
//   return {
//     myUserIdReducer:state.userIdReducer,
//   };
// }
//  export default connect()(CreateSession);