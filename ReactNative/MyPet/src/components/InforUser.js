import React, { Component } from 'react';
import {Text,View,Image, Dimensions,StyleSheet, TouchableOpacity} from 'react-native'
import Header from './header';
import Footer from './footer';
import {connect} from 'react-redux'

const screen = Dimensions.get('window');
class InforUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLive:false,
            username:'',
            email:'',
            avatar:''
        }
    }
    componentDidMount(){
        if(this.props.myUserInforReducer != 0){
            this.setState({
                isLive:true,
                username:this.props.myUserInforReducer.username,
                email:this.props.myUserInforReducer.email,
                avatar:this.props.myUserInforReducer.avatar
            });
        }
    }

    goBack = () => {
        this.props.history.goBack();
        // history.goBack();
    }

    paymentVisa = () => {
        this.props.history.push('/Visa');
    }

    render() {
    return (
        <View style={(Platform.OS === 'android') ? styles.container : [styles.container,{marginTop:30}]}>
        <Header nameTitle = "Thông Tin Người Dùng" goBack = {this.goBack}/>
        <View style={styles.body}>
            <View style={styles.bodyIconUp}>
                <View style={styles.bodyIconUpImageView}>       
                 {/* style={styles.bodyIconUpImageViewChild} */}
                    <Image source={{uri:(this.state.avatar != '')?this.state.avatar :'' }} style={styles.bodyIconUpImageViewChild}></Image>
                </View>
                <View style={styles.bodyIconUpOnlineView}>
                    <Text style={(this.state.isLive)?styles.bodyIconUpOnlineViewIconChild: [styles.bodyIconUpOnlineViewIconChild,{backgroundColor:'red'}]}></Text>
                    <Text >is Active</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',height:100,alignSelf:'stretch',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{flex:1}}>Nerver give Up !!!!! Success .............................3</Text>
                </View>
                <View style={styles.bodyIconUpContactView}>
                    <View style={styles.bodyIconUpContactViewPhone}>
                        <TouchableOpacity style={styles.bodyIconUpContactViewchildTouch} >
                            <Image source={require('../images/phone.png')} style={styles.bodyIconUpContactViewchildTouchImage}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyIconUpContactViewSms}>
                        <TouchableOpacity style={styles.bodyIconUpContactViewchildTouch}>
                            <Image  source={require('../images/sms.png')} style={styles.bodyIconUpContactViewchildTouchImage}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyIconUpContactViewChat}>
                        <TouchableOpacity style={styles.bodyIconUpContactViewchildTouch}>
                            <Image  source={require('../images/chat.png')} style={styles.bodyIconUpContactViewchildTouchImage}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={()=>this.paymentVisa()}>
                        <Text style={{backgroundColor:'red',padding:10, borderRadius:10,color:'white'}}>Thanh Toán</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bodyInforDown}>
                <View style={styles.bodyInforDownView}>
                    <Text style={styles.bodyInforDownViewChildLeft}>Name:</Text>
                    <Text style={styles.bodyInforDownViewChildRight}>{(this.state.username != '')? this.state.username :''}</Text>
                </View>
                <View style={styles.bodyInforDownView}>
                    <Text style={styles.bodyInforDownViewChildLeft}>Phone:</Text>
                    <Text style={styles.bodyInforDownViewChildRight}>0465841783</Text>
                </View>
                <View style={styles.bodyInforDownView}>
                    <Text style={styles.bodyInforDownViewChildLeft}>Email:</Text>
                    <Text style={styles.bodyInforDownViewChildRight}>{(this.state.email != '')? this.state.email :''}</Text>
                </View>
                <View style={styles.bodyInforDownView}>
                    <Text style={styles.bodyInforDownViewChildLeft}>Location:</Text>
                    <Text style={styles.bodyInforDownViewChildRight}>đường 36, Linh dong, Thu duc</Text>
                </View>
            </View>
          
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
        bodyIconUp:{
            flex:5,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        },
            bodyIconUpImageView:{
                flex:1,
                justifyContent:'center'
            },
                bodyIconUpImageViewChild:{
                    height:screen.width/8,
                    width:screen.width/8, 
                    backgroundColor:'red',
                    borderRadius:90,
                    margin:'10%'
                },
            bodyIconUpOnlineView:{
                flex:1,
                alignItems:'flex-start',
                justifyContent:'flex-start',
                flexDirection:'row'
            },
                bodyIconUpOnlineViewIconChild:{
                    width:10,
                    height:10,
                    borderRadius:90,
                    borderWidth:1,
                    justifyContent:'center',
                    marginTop:5,
                    backgroundColor:'green',
                    borderColor:'green'
                },
            bodyIconUpContactView:{
                flexDirection:'row',
                flex:1,
                width:screen.width/2,
                justifyContent:'center',
                alignItems:'center'
            },
                bodyIconUpContactViewPhone:{
                    flex:1, 
                    backgroundColor:'white',
                     margin:10,
                     borderRadius:90
                },
                bodyIconUpContactViewSms:{
                    flex:1,
                    margin:10,
                    borderRadius:90
                },
                bodyIconUpContactViewChat:{
                    flex:1,
                    backgroundColor:'white',
                    margin:10,
                    borderRadius:90
                },
                    bodyIconUpContactViewchildTouch:{
                        margin:10
                    },
                        bodyIconUpContactViewchildTouchImage:{
                            height:screen.width/20,
                            width:screen.width/20
                        },
        bodyInforDown:{
            flex:3,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            borderWidth:0.3,
            borderColor:'black',
            margin:2
        },
            bodyInforDownView:{
                flex:1,
                flexDirection:'row',
                alignItems:'flex-start',
                margin:10
            },
                bodyInforDownViewChildLeft:{
                    flex:1,
                    fontSize:15,
                    fontWeight:'bold'
                },
                bodyInforDownViewChildRight:{

                }
});

function mapStateToProps(state){
    return {myUserInforReducer:state.userInforReducer};
}

export default connect(mapStateToProps)(InforUser);

