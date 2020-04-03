import React, { Component } from 'react';
import {NativeRouter,Route,Link,Switch} from 'react-router-native'
import Login from './components/loginFace';
import Login1 from './components/auctionSession';
import {View} from 'react-native'

export default class componentName extends Component {
  render() {
    return (
      <NativeRouter>
          <Switch>
            <Route exact path='/' component={Login} />
          </Switch>
      </NativeRouter>
    );
  }
}
