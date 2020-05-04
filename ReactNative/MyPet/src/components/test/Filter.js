import React, { Component } from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {clickShowAll} from '../../redux/action/actionCreators'

class Filter extends Component {
    constructor(props){
        super(props);


    }

    changeStateClick =(name)=>{
        this.props.myClickBtn(name);
    }
    changeColorClick = (name)=>{
        console.log(name +"="+this.props.myFilterStatus +"is")
        if(name == this.props.myFilterStatus){
            return { color:'red'};
        }
        else 
            return {color:'black'};
    }
  render() {
    return (
        <View style={{ backgroundColor:'#583C3C',flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <TouchableOpacity onPress ={()=> this.changeStateClick('FILTER_SHOW_ALL')}>
                <Text style={this.changeColorClick('SHOW_ALL')}> SHOW All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=> this.changeStateClick('FILTER_MEMORIZED')}>
                <Text style={this.changeColorClick('MEMORIZED')}> MEMORIZED</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress ={()=> this.changeStateClick('FILTER_NEED_PRACTICE')}>
                <Text style={this.changeColorClick('NEED_PRACTICE')}> NEED PRACTICE</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

function mapStateToProps(state){
    return {myFilterStatus:state.filterStatus}
}

const styles = StyleSheet.create({
    colorTxtButton:{
        color:'black'
    }
});
export default connect(mapStateToProps,{myClickBtn:clickShowAll})(Filter);
