import React, { Component } from 'react';
import {View,Text,Image} from 'react-native'
import {Link} from 'react-router-native'


export default class componentName extends Component {
  constructor(props){
    super(props);
    this.state = {
      nameTitle:'Lượt đấu giá của tôi '
    }
  }
  // componentDidMount(){           
  //   console.log("ok"+this.props.nameTitle)
  //   if(this.props.nameTitle !=undefined)
  //     this.setState({nameTitle:this.props.nameTitle})
  // }
  changeTitleName = (name) =>{                                                //code tam , chua fix loi dc 
    if(name != undefined)
      return name;
    else
      return this.state.nameTitle;
  }
  render() {
   
    return (
        <View style={{ flex:1,backgroundColor:'#F8F8FF',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row'}}>
          <Text style={{margin:10,fontSize:20,fontWeight:'bold',color:'#000000'}}>{this.changeTitleName(this.props.nameTitle)}</Text>
        </View>
    );
  }
}
