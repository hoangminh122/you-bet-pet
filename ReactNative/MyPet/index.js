/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './components/loginFace'
import Database from './components/database'
import IndexApp from './components/indexApp'
import Email from './components/email'
import CreateSession from './components/createSession'
import Demo from './components/demo'

AppRegistry.registerComponent(appName, () => Demo);
