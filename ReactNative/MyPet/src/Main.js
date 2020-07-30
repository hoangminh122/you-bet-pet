import React, { Component } from 'react';
import {NativeRouter,Route,Link,Switch,View,Text} from 'react-router-native'
import Login from './components/Index';
import LoginEmail from './components/LoginEmail';
import InforUser from './components/InforUser';
// import Login1 from './src/components/auctionSession';
// import {View} from 'react-native'
import Demo from './components/CreateSession'
import AuctionSession from './components/AuctionSession';
import AdminAuctionSession from './components/admin/AuctionSession';
import InforAuction from './components/InforAuction';
import {connect} from 'react-redux'
import CreateSession from './components/CreateSession';
import Payment from './components/Payment';
import PaymentVisa from './components/PaymentVisa'

class Main extends Component {
  render() {
    return (
        <NativeRouter>
          <Switch>
            <Route exact path='/createSession' component={CreateSession} />
            <Route exact path='/' component={Login} />
            <Route exact path='/inforAuction' component={InforAuction} />
            <Route exact path='/auctionSession-admin/:key' component={AdminAuctionSession} />
            <Route exact path='/auctionSession/:key' component={AuctionSession} />
            <Route exact path='/inforUser' component={InforUser} />
            <Route exact path='/Visa' component={PaymentVisa}/>
            <Route exact path='/loginEmail' component={LoginEmail}/>
          </Switch>
        </NativeRouter>
    );
  }s
}

export default connect()(Main);