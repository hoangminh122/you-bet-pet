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
      backGround: [styles.bodyTop10Object,{height:screen.height/8}],
      numberClick:0,
      dataSource:[
        {
          name:'VISA',
          icon:'',
          description:'Thẻ tín dụng/ghi nợ '
        },
        {
          name:'NAPAS',
          icon:'',
          description:'Thẻ ghi nợ nội địa ATM '
        }
      ],
    }
  }
 
  clickChoise = (index) =>{
    this.setState({
      backGround : [styles.bodyTop10Object,{height:screen.height/8},{backgroundColor:'gray'}],
      numberClick:index,
    })
    
  }

  render() {
    return (
         <DismissKeyboard >
         <View style={styles.container}>
            <Header nameTitle = "Thanh Toan"/>
            <View style={styles.body}>
            <ScrollView 
                          ref = {scrollView => this._scrollView = scrollView }
                          horizontal={true}
                        //   showsHorizontalScrollIndicator={false}
                          pagingEnabled={true}
                          decelerationRate={1}
                        //   contentOffset ={false}
                          style={{backgroundColor:'blue'}}
                          >
                 <View style={[styles.body,{width:screen.width}]}>
                    <View style = {{ flex:2}}>
                    <FlatList
                        style={{height:screen.height,width:screen.width,backgroundColor:'white'}}
                        data={this.state.dataSource}
                        renderItem={({item,index}) =>  
                        <TouchableOpacity style={this.state.numberClick == index ? this.state.backGround :[styles.bodyTop10Object,{height:screen.height/8}]} key={{index}} onPress={()=>this.clickChoise(index)}>
                            <View style={[styles.bodyTop10ObjectStt]}>
                            <Text>{item.name}</Text>
                            </View>
                            <View style={[styles.bodyTop10ObjectImage,{flex:1.5}]}>
                            {/* <Image style={styles.bodyTop10ObjectImageChild}></Image> */}
                            <Image source={require('../../images/MasterCard.png')} style={styles.bodyTop10ObjectImageChild}></Image>
                            </View>
                            <View style={styles.bodyTop10ObjectInfor}>
                            <View>
                                <Text style={styles.bodyTop10ObjectInforTxt}>{item.description}</Text>
                            </View>
                            </View>
                        </TouchableOpacity>
                        } 
                        keyExtractor={(item, index) => index.toString()}
                    />
                    </View>
                    
                    {/* <TouchableOpacity style = {{ flex:0.3,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:10,margin:10,backgroundColor:'red'}}>
                    <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white',fontWeight:'normal',fontSize:15}}>Thanh Toán</Text>
                    </View>
                    </TouchableOpacity> */}
                 </View>
                 <View style={[styles.body,{width:screen.width}]}>
                    <View style = {{ flex:2}}>
                    <FlatList
                        style={{height:screen.height,width:screen.width,backgroundColor:'white'}}
                        data={[3]}
                        renderItem={({item,index}) =>  
                        <View style={[styles.bodyTop10Object,{height:screen.height/3,flexDirection:'column'}]} key={{index}}>
                            <View style={{flex:1,height:'100%'}}>
                                <Text style={{fontWeight:'bold',marginLeft:5}}>Số thẻ</Text>
                                <TextInput type="text" placeholder="so the" style={{borderWidth:1,borderRadius:10,borderColor:'gray',height:'60%',margin:5}}/>
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{fontWeight:'bold',marginLeft:5}}>Tên chủ thẻ</Text>
                                <TextInput type="text" placeholder="ten chu the" style={{borderWidth:1,borderRadius:10,borderColor:'gray',height:'60%',margin:5}}/>
                            </View>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <Text style={[styles.bodyTop10ObjectInforTxt,{marginLeft:10}]}>Ngày hết hạn</Text>
                                    <TextInput  type="text" placeholder="mm/yy" style={{borderWidth:1,borderRadius:10,borderColor:'gray',height:'60%',margin:5}}/>
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={[styles.bodyTop10ObjectInforTxt,{marginLeft:10}]}>CVV</Text>
                                    <TextInput  type="text" placeholder="mm/yy" style={{borderWidth:1,borderRadius:10,borderColor:'gray',height:'60%',margin:5}}/>
                                </View>
                            </View>
                        </View>
                        } 
                        keyExtractor={(item, index) => index.toString()}
                    />
                    </View>
               
                    <TouchableOpacity style = {{ flex:0.3,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:10,margin:10,backgroundColor:'red'}} onPress={
                      () => {
                        Alert.alert(
                          'Đang xác thực, vui lòng chờ !',
                          '',
                          [
                            { text: 'OK', onPress: () => this.props.history.push('/inforUser') }
                          ],
                          { cancelable: false }
                        );
                      }
                    }>
                    <View style={{flex:0.5,justifyContent:'center',alignItems:'center' }}>
                            <Text style={{color:'white',fontWeight:'normal',fontSize:15}}>Thanh Toán</Text>
                    </View>
                    </TouchableOpacity>
                 </View>

            </ScrollView>
           
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
    backgroundColor:'#F8F8FF',
    height:screen.height
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