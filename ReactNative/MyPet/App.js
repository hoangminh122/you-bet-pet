import React, { Component } from 'react';
import {NativeRouter,Route,Link,Switch} from 'react-router-native'
import Login from './src/components/LoginFace';
// import InforUser from './src/components/InforUser';
// import Login1 from './src/components/auctionSession';
// import {View} from 'react-native'
import Demo from './src/components/CreateSession'
import AuctionSession from './src/components/AuctionSession';
import InforAuction from './src/components/InforAuction';


export default class componentName extends Component {
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
