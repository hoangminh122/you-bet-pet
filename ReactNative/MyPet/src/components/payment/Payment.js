import React, { Component } from 'react';
import {View,Text, TextInput, TouchableWithoutFeedback,Image, Keyboard,ScrollView, Dimensions,StyleSheet, TouchableOpacity, Alert,FlatList} from 'react-native'
import Header from '../header_footer/header';
import Footer from '../header_footer/footer';
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
      dataSource:[3,4],
    }
  }
 
  render() {
    return (
         <DismissKeyboard >
         <View style={styles.container}>
            <Header nameTitle = "Thanh Toan"/>
            <View style={styles.body}>
            <View style = {{ flex:2}}>
                <FlatList
                    style={{height:screen.height,width:screen.width,backgroundColor:'white'}}
                    data={this.state.dataSource}
                    renderItem={({item,index}) =>  
                    <View style={[styles.bodyTop10Object,{height:screen.height/8}]} key={{index}}>
                        <View style={[styles.bodyTop10ObjectStt]}>
                        <Text>1</Text>
                        </View>
                        <View style={styles.bodyTop10ObjectImage}>
                        <Image style={styles.bodyTop10ObjectImageChild}></Image>
                        </View>
                        <View style={styles.bodyTop10ObjectInfor}>
                        <View>
                            <Text style={styles.bodyTop10ObjectInforTxt}>Pet-362</Text>
                        </View>
                        <View>
                            <Text style={styles.bodyTop10ObjectInforTxt}>582.500.00 đ</Text>
                        </View>
                        </View>
                    </View>
                    } 
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style = {{ flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-end'}}>
              <View style={{flex:0.5,flexDirection:'column',width:screen.width/2}}>
                <View style={{flex:1,}}>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <Text style={{flex:1}}>Tạm tính </Text>
                    <Text style={{flex:1}}>1165.000.00 đ</Text>
                  </View>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                  <Text  style={{flex:1}}>Phụ phí</Text>
                  <Text  style={{flex:1}}> 3.250.00đ</Text>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                  <Text style={{flex:1}} >Tổng cộng</Text>
                  <Text  style={{flex:1,color:'red',fontWeight:'bold'}}>1168.250.00đ</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style = {{ flex:0.5,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:10,margin:10,backgroundColor:'red'}}>
              <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white',fontWeight:'normal',fontSize:15}}>Thanh Toán</Text>
              </View>
            </TouchableOpacity>
                
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
        }
 });
//  function mapStateToProps(state){
//   return {
//     myUserIdReducer:state.userIdReducer,
//   };
// }
//  export default connect()(CreateSession);