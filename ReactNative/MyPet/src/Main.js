import React, { Component } from 'react';
import {NativeRouter,Route,Link,Switch,View,Text} from 'react-router-native'
import Login from './components/LoginFace';
// import InforUser from './src/components/InforUser';
// import Login1 from './src/components/auctionSession';
// import {View} from 'react-native'
import Demo from './components/CreateSession'
import AuctionSession from './components/AuctionSession';
import InforAuction from './components/InforAuction';
import {connect} from 'react-redux'

class Main extends Component {
  render() {
    return (
        <NativeRouter>
          <Switch>
            <Route exact path='/sdfs' component={Login} />
            <Route exact path='/' component={Login} />
            <Route exact path='/inforAuction' component={InforAuction} />
            <Route exact path='/auctionSession/:key' component={AuctionSession} />
            <Route exact path='/ok' component={Demo} />
          </Switch>
        </NativeRouter>
    );
  }
}

export default connect()(Main);