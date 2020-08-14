import React, { Component } from 'react';
//import {NativeRouter,Route,Link,Switch} from 'react-router-native'
//import Login from './src/components/LoginFace';
// import InforUser from './src/components/InforUser';
// import Login1 from './src/components/auctionSession';
// import {View} from 'react-native'
//import Demo from './src/components/CreateSession'
//import AuctionSession from './src/components/AuctionSession';
//import InforAuction from './src/components/InforAuction';
import store from './src/redux/store'
import {Provider} from 'react-redux'
import Main from  './src/Main'

export default class componentName extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
      
    );
  }
}
