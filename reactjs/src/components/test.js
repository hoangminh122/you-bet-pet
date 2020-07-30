// scrollable-component.jsx:
import React,{Component} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

export default class ScrollableComponent extends Component {

  render() {
    return(
        <div>
       <PerfectScrollbar style={{height:'100px',width:'100px'}}>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        <div>ashdfasgf</div>
        </PerfectScrollbar>
        </div>
      
    )
  }

}