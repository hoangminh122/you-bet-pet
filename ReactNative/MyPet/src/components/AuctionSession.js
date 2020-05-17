import React, { Component } from 'react';
import {View,Text, Dimensions,StyleSheet, Image,TouchableOpacity,FlatList,TouchableHighlight} from 'react-native'
import Footer from './footer'
import Header from './header'
import Video from 'react-native-video';


var screen =Dimensions.get('window');

export default class AuctionSession extends Component {
  constructor(props){
    super(props);
    this.state = {
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
    };

  }
  onLoad = (data)=>{
    this.setState({duration:data.duration});
  }

  onPress = (data)=>{
    this.setState({currentTime:data.currentTime})
  }
  onEnd = ()=>{
    this.setState({pausedText:'Play',paused:true});
    this.video.seek(0);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.imagePets}>
          <View style={styles.imageChild}>
            {/* <TouchableOpacity
            style={{backgroundColor:'yellow',width:'100%',height:"100%"}}
              onPress={() => this.setState({paused:!this.state.paused})}
            >
              <Video
              style={{width:"100%",height:"100%"}}
                
                source={require('../components/test/big_buck_bunny.mp4')}
                // source={{uri:'https://www.youtube.com/watch?v=dQHUK2MfXvI'}}
                ref={(ref) => {
                    this.player = ref
                }}  
                repeat={this.state.repeat}
                rate={this.state.rate}
                volume={this.state.volume}
                muted={this.state.muted}
                resizeMode={this.state.resizeMode}
                paused={this.state.paused}
              
              />
            </TouchableOpacity> */}

          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyTittle}>
            <Text style={styles.bodyTittleTxt}>Người đấu giá 1</Text>
          </View>
          <View style={styles.bodyTop10}>

          <View style={{flex:4,flexDirection:'column'}}>
            <FlatList
            style={{height:screen.height,width:screen.width,backgroundColor:'white'}}
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'Jackson'},
              {key: 'Jackson'},
              {key: 'Jackson'},
              {key: 'Jackson'},
              {key: 'Jackson'},
              {key: 'Jackson'},
              {key: 'Jackson'},
              {key: 'Jackson'},
              {key: 'Jackson'},
             
            
            ]}
            renderItem={({item}) =>  
              <View style={[styles.bodyTop10Object,{height:80}]}>
                <View style={styles.bodyTop10ObjectStt}>
                  <Text>1.</Text>
                </View>
                <View style={styles.bodyTop10ObjectImage}>
                  <Image style={styles.bodyTop10ObjectImageChild}></Image>
                </View>
                <View style={styles.bodyTop10ObjectInfor}>
                  <View>
                    <Text style={styles.bodyTop10ObjectInforTxt}>Hoang minh</Text>
                  </View>
                  <View>
                    <Text style={styles.bodyTop10ObjectInforTxt}>70.000 đ</Text>
                  </View>
                </View>
              </View>
              } 
            />
          </View>
         
            <View style={[styles.bodyTop10Object,{margin:5,borderWidth:1}]}>
              <View style={[styles.bodyTop10ObjectStt,{flex:1,borderRightWidth:2}]}>
                <Text style={{fontSize:11,fontWeight:'bold'}}>Thời gian còn lại</Text>
                <Text>00:00:40</Text>
              </View>
              <View style={[styles.bodyTop10ObjectImage,{flex:1,borderRightWidth:3}]}>
                <Text style={{fontSize:11,fontWeight:'bold'}}>Đấu giá hiện tại</Text>
                <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
                <TouchableHighlight style={{backgroundColor:'gray',width:15,height:15}}>
                  <Image></Image>
                </TouchableHighlight>
                  <Text style={{margin:5}}>70000 đ</Text>
                <TouchableHighlight style={{backgroundColor:'red',width:15,height:15}}>
                  <Image></Image>
                </TouchableHighlight>
                </View>
              </View>
              <View style={[styles.bodyTop10ObjectInfor,{flex:1}]}>
                <TouchableOpacity style={{width:100,height:35,backgroundColor:'red',borderRadius:5}}>
                  <View style={{flex:1,flexDirection:'column',alignSelf:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>Đấu Giá</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
           
           {/* //dau gia */}
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

        


