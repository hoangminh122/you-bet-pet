import React, { Component, Children } from 'react';
import {View,Text, TextInput, TouchableWithoutFeedback, Keyboard,ScrollView, Dimensions,StyleSheet, TouchableOpacity, DatePicker, DateTimePicker} from 'react-native'
import Header from './header';

const screen = Dimensions.get('window');

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default class componentName extends Component {
  constructor(props){
    super(props)
    this.state = {
      pageShow: 1
    }
    // this.setOffsetPage =this.setOffsetPage.bind(this);
    // this.setOffsetPage(0);
  }
 
  setOffsetPage = (page)=>{
    this._scrollView.scrollTo({x: screen.width*page, y: 0, animated: true});
    this._scrollView.setNativeProps({ scrollEnabled: false });
   
  }
  render() {
    return (
      <DismissKeyboard>
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
                  </View>
                  <View style = {{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{flex:1,fontWeight:'bold'}}>Join Auction </Text>
                    <Text  style={{flex:2,fontSize:12,color:'gray'}}> Honey, let's get ready to make a move !</Text>
                    <TouchableOpacity onPress={(event) => this.setOffsetPage(1)} style={{backgroundColor:'blue',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',borderWidth:1,width:screen.width/1.1,borderColor:'white',borderRadius:5}}>
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
                      />
                    </View>
                    <View style={{flex:1}}></View>
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity onPress={(event) => this.setOffsetPage(2)} style={{backgroundColor:'blue',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',borderWidth:1,width:screen.width/1.1,borderColor:'white',borderRadius:5}}>
                      <Text style={{fontSize:12,color:'white'}}>Next</Text>
                    </TouchableOpacity>
                  </View>
                 
                  <View style={{flex:3}}>
                  </View>
                </View>
                <View style={{height:screen.height/1.5,width:screen.width,backgroundColor:'green'}}>
                  <View style={{flex:5,justifyContent:'center',alignItems:'center'}}>
                      <View style={{flex:2,justifyContent:'center',alignItems:'center'}}> 
                        <Text style={{fontWeight:'bold'}}> Set Time Auction Session ?</Text>
                      </View>
                      <View style={{flex:1,flexDirection:'row',margin:10}}>
                        
                        <Text>sg</Text>
                        <DateTimePicker 
                            style={{width: 200}}
                            date={Date.now}
                            placeholder="select date"/>
                      </View>
                      <View style={{flex:1}}></View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <TouchableOpacity style={{backgroundColor:'blue',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',borderWidth:1,width:screen.width/1.1,borderColor:'white',borderRadius:5}}>
                        <Text style={{fontSize:12,color:'white'}}>Next</Text>
                      </TouchableOpacity>
                    </View>
                  
                    <View style={{flex:3}}>
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
    backgroundColor:'#DDDDDD',
    flexDirection:'column'
  },
  btnCreate:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
     
    },
   
 });
