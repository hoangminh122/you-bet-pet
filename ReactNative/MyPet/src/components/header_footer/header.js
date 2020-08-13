import React, { Component } from 'react';
import {View,Text, TouchableHighlight,Image, TouchableOpacity} from 'react-native'
// import {Link} from 'react-router-native'
// import { useHistory } from 'react-native-dom';

// let history = useHistory();
export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      nameTitle:'Lượt đấu giá của tôi ',
      isBack: true
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
  goBack = () => {
    // this.props.history.goBack();
    // history.goBack();
  }

  render() {
    const {goBack} = this.props;
    return (
        <View style={{ flex:1,backgroundColor:'#F8F8FF',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row'}}>
          <TouchableOpacity style={{margin:13,width:30,height:30}} onPress ={() => goBack()}>
            <Image source ={require('../../images/back.png')}/>
          </TouchableOpacity>
          <Text style={{margin:10,fontSize:20,fontWeight:'bold',color:'#000000'}}>{this.changeTitleName(this.props.nameTitle)}</Text>
        </View>
    );
  }
}
