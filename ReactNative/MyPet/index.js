/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Login from './src/components/loginFace'
// import Database from './src/components/database'
// import IndexApp from './src/components/indexApp'
// import Email from './src/components/email'
// import CreateSession1 from './components/createSession1'
import Demo from './src/components/CreateSession'
// import Demo from './src/src/components/test/AppDemo'
// import Demo from  './src/src/databases/SaveLogin'
// import Demo from  './src/src/components/AuctionSession'

AppRegistry.registerComponent(appName, () => Demo);
//ok