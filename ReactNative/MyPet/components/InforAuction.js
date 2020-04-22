import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native'
import Header from './header';
import Footer from './footer';

export default class InforAution extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.body}>
          <View style={styles.headerBody}>
            <View style={styles.rowTitleBody}>
              <View style={[styles.colTitleBody,{borderRightWidth:0,borderBottomWidth:1}]}>
                <Text style={styles.txtColTitleBodyUp}>Đang diễn ra</Text>
              </View>
              <View style={{flex:1,alignItems:'center',justifyContent:'center',height:'80%',width:'80%'}}>
                <Text style={styles.txtColTitleBodyUp}>Đã thắng</Text>
              </View>
              <View style={{flex:1,alignItems:'center',justifyContent:'center',height:'80%',width:'80%'}}>
                <Text style={styles.txtColTitleBodyUp}>Thua</Text>
              </View>
            </View>
            <View style={styles.rowTitleBody}>
              <View style={styles.colTitleBody}>
                <Text style={styles.txtColTitleBodyDown}>Tên phiên đấu giá</Text>
              </View>
              <View style={styles.colTitleBody}>
                <Text style={styles.txtColTitleBodyDown}>Kết thúc trong (thời gian)</Text>
              </View>
              <View style={styles.colTitleBody}>
                <Text style={styles.txtColTitleBodyDown}>Mức giá</Text>
              </View>
              <View style={[styles.colTitleBody,{borderRightWidth:0}]}>
                <Text style={styles.txtColTitleBodyDown}>Tình trạng</Text>
              </View>
            </View>
          </View>
          <View style={styles.footerBody}>
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
  headerBody:{
    flex:2,
    justifyContent:'center',
    alignItems:'center'
  },
  footerBody:{
    flex:3,
    backgroundColor:'yellow'
  },
  rowTitleBody:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
    colTitleBody:{
      flex:1,
      borderRightWidth:1,
      height:'80%',width:'80%',
      justifyContent:'center',
      alignItems:'center'
    },
      txtColTitleBodyUp:{
        maxWidth:'40%',
        fontWeight:'bold',
        fontSize:13
      },
      txtColTitleBodyDown:{
        maxWidth:'80%',
        fontWeight:'500',
        fontFamily:'Roboto',
        fontSize:12
      }

});
