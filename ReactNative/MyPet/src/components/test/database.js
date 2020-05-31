import React, { Component } from 'react';
import {View,Text, TouchableOpacity, TextInput,} from 'react-native'
import firebaseConfig from '../../config/ConfigFirebase'
import firebase from 'firebase'
import ListView from 'deprecated-react-native-listview'

// firebase.initializeApp(firebaseConfig);
export default class componentName extends Component {
    constructor(props){
        super(props);
        this.itemRef = firebase.database();
      this.state = {
        text:'',
        isLoad:false,
        dataSource:  new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })
         
    };

    }
   
    addDB = (name) =>{
      var arr = [];
      this.itemRef.ref('demo').child('demo1').on('child_added',(dataSnapshot)=>{
        arr.push({
          name:dataSnapshot.val().Ngonngu,
          _key:dataSnapshot.key
        })
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(arr)
          
        })
        console.log(arr)
        // console.log(arr.length)
      })
      
      
      // this.itemRef.ref('demo').child('demo1').on('child_added',(dataSnapshot)=>{
      //   console.log(dataSnapshot.key)
      // })
    }
   pushDB = (name)=>{
     this.itemRef.ref('demo').child('demo1').push({
      Ngonngu : this.state.text
     });

   }
  componentDidMount(){
      this.addDB();
  }


  render() {
    // console.log(this.state.dataSource)
    // this.addDB()

    return (
      <View style={{flex:1}}>
      <Text>ádgasg</Text>
      <TextInput
       
       style={{height:100,width:50,borderColor:'gray',borderWidth:1}}
        onChangeText={(event)=>this.setState({text:event})}
        value={this.state.text}

        />
      <TouchableOpacity onPress={()=>this.pushDB(this.state.text)}>
        <Text>sds</Text>
      </TouchableOpacity>
      <ListView style={{height:900,width:100}}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData.name}</Text>}
      />
     
      </View>
    );
  }
}

// // console.log("ok")
      // var arr =[];
      // arr.push(name);
      // console.log(this.state.dataSource.selection.getItems())
      // // console.log(arr)
      //  this.setState({
      //   dataSource:this.state.dataSource.cloneWithRows(arr)
      //  })
      // //  console.log(this.state.dataSource)