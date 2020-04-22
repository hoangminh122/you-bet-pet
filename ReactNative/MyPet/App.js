import React, { Component } from 'react';
import {NativeRouter,Route,Link,Switch} from 'react-router-native'
import Login from './components/loginFace';
import InforUser from './components/InforUser';
import Login1 from './components/auctionSession';
import {View} from 'react-native'
import Demo from './components/demo';
import AuctionSession from './components/auctionSession';

export default class componentName extends Component {
  render() {
    return (
      <NativeRouter>
          <Switch>
            <Route exact path='/sdfs' component={Login} />
            <Route exact path='/' component={Login} />
            <Route exact path='/asdf' component={InforUser} />
            <Route exact path='/auctionSession' component={AuctionSession} />
          </Switch>
      </NativeRouter>
    );
  }
}
