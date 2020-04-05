import React, { Component } from 'react';
import {NativeRouter,Route,Link,Switch} from 'react-router-native'
import Login from './components/loginFace';
import InforUser from './components/InforUser';
import Login1 from './components/auctionSession';
import {View} from 'react-native'

export default class componentName extends Component {
  render() {
    return (
      <NativeRouter>
          <Switch>
            <Route exact path='/sds' component={Login} />
            <Route exact path='/' component={InforUser} />
          </Switch>
      </NativeRouter>
    );
  }
}
