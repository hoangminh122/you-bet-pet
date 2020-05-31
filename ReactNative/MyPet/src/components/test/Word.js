import React, { Component } from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect } from 'react-redux'


class Word extends Component {
  
  render() {
    const {en,vn,memorized} =this.props.myWord;
    const textDecorationLine = memorized ? 'line-through':'none';
    return (
        <View style={styles.container}>
            <Text style={{textDecorationLine}}>{en}</Text>
            <Text>{vn}</Text>
            <View style={styles.controller}>
              <TouchableOpacity style={styles.button}>
                <Text>memorized</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text>show</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'gray',
    padding:10,
    margin:10
  },
  controller:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  button:{
    backgroundColor:'#F5F5F5',
    padding:10,
    margin:10
  
  }
})
export default connect()(Word);