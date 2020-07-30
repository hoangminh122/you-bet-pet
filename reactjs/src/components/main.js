import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Index from './admin/index'
import Login from './admin/login'
import {BrowserRouter as Router,} from 'react-router-dom'

export default class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/index" exact component = {Index}/> 
                    <Route path="/" exact component = {Login}/>
                </div>
            </Router>
            
        )
    }
}
