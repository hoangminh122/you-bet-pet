import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
// import ReactDOM from 'react-dom';

export default class index extends Component {
   
    componentDidMount(){
    }

    render() {
        return (
            <div style={{flex:1,display:'flex',flexDirection:'column'}}>
                <div style={{flex:2,background:'#1F1F1F',flexDirection:'column',display:'flex',}}>
                    <div style={{flex:1,background:'#2B2E34',display:'flex', flexDirection:'row',}}>
                        <div style={{flex:1,justifyContent:'start',alignItems:'start',display:'flex', flexDirection:'row',}}>
                            <a style={{color:'white',fontSize:10,fontWeight:10,margin:'5px',marginLeft:'60px'}} href={{}}>hoangminh122@gmail.com</a>
                        </div>
                        <div style={{flex:1,flexDirection:'row',display:'flex'}}>
                            <div style={{flex:1 }}>
                                    <form class="">
                                        <input class="" type="" placeholder="Input" aria-label="Search"  style={{border:'0.5px solid gray',background:'#1F1F1F',height:'80%'}}/>
                                        <button class="" type="submit" style={{border:'0.5px solid gray',background:'#1F1F1F',color:'white'}}>Search</button>
                                    </form>
                            </div>
                            <div style={{flex:0.3,color:'white',fontSize:13,fontWeight:10,}}>
                                <i class="fa fa-cloud"></i>
                                <span>Register</span>
                            </div>
                            <div style={{flex:1}}>
                            </div>
                        </div>
                    </div>
                    <div style={{flex:2, display:'flex'}}>
                    <div className="logo" style={{alignItems:'start',padding:'10px',marginLeft:'40px'}}>
                        <img src = {require('../../images/Logo.png')} width="100" height="50" alt="logo" />
                    </div>
                    </div>
                    <div style={{flex:1,display:'flex',flexDirection:'row',borderTop:'0.5px solid gray',padding:'3px'}}>
                        <div style={{flex:0.4,display:'flex',flexDirection:'row'}}>
                            <Button style={{color:'white',flex:1,background:'#1F1F1F',border:'none'}}>HOME</Button>
                            <Button style={{color:'white',flex:1,background:'#1F1F1F',border:'none'}}>ADMIN DETAIL</Button>
                            <Button style={{color:'white',flex:1,background:'#1F1F1F',border:'none'}}>ADMIN DETAIL LIST</Button>
                            <Button style={{color:'white',flex:1,background:'#1F1F1F',border:'none'}}>TRANG CHỦ</Button>
                        </div>
                        
                    </div>
                </div>
                <div style={{flex:0.5,alignItems:'start',display:'flex',flexDirection:'column',background:'#E5E5E5'}}>
                        <div style={{fontWeight:20,fontSize:8,flex:1,paddingLeft:'15px',color:'#176AB6'}}>
                            PAGE >> ADMIN DETAIL
                        </div>
                        <div style={{flex:1,paddingLeft:'15px',color:'#2B2E34'}}>
                            ADMIN DETAIL
                        </div>
                    </div>
                <div style={{flex:2,display:'flex',flexDirection:'column',background:'gray',height:window.innerHeight}}>
                    <div style={{flex:9,background:'#E5E5E5',display:'flex', flexDirection:'column'}}>
                   
                    <div style={{flex:9,padding:'20px',display:'flex'}}>
                        <div style={{background:'#FFFFFF',flex:1,display:'flex',flexDirection:'column'}}>
                            <div style={{flex:1,display:'flex'}}>
                                <div style={{flex:1,height:'100%',justifyContent:'center',alignItems:'center',display:'flex'}}>
                                    <img style={{padding:'10px',background:'blue',height:'90%',width:'90%'}} /> 
                                </div>
                            </div>
                            <div style={{flex:2,display:'flex',flexDirection:'column'}}>
                                <div style={{flex:0.2,alignItems:'start',display:'flex'}}>
                                    <h4>Người đấu giá</h4>
                                </div>
                                <div style={{flex:3,}}>
                                    <PerfectScrollbar style={{height:window.innerHeight/2.5}}>
                                        <div style={{flex:1,display:'flex',flexDirection:'row'}}>
                                            <div style={{flex:1,display:'flex',background:'#FFFFFF',padding:'20px',border:'2px solid gray',borderRadius:10,margin:'10px'}}>
                                                <div style={{flex:0.5,}}>
                                                    1
                                                </div>
                                                <div style={{flex:1,background:'gray'}}>
                                                    <img src ={{}} style={{}}/>
                                                </div>
                                                <div style={{flex:2}}>
                                                    <div>
                                                        Ten nguoi dung
                                                    </div>
                                                    <div>
                                                        20000d 
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex:1,display:'flex',background:'#FFFFFF',padding:'20px',border:'2px solid gray',borderRadius:10,margin:'10px'}}>
                                                <div style={{flex:0.5,}}>
                                                    1
                                                </div>
                                                <div style={{flex:1,background:'gray'}}>
                                                    <img src ={{}} style={{}}/>
                                                </div>
                                                <div style={{flex:2}}>
                                                    <div>
                                                        Ten nguoi dung
                                                    </div>
                                                    <div>
                                                        20000d 
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex:1,display:'flex',background:'#FFFFFF',padding:'20px',border:'2px solid gray',borderRadius:10,margin:'10px'}}>
                                                <div style={{flex:0.5,}}>
                                                    1
                                                </div>
                                                <div style={{flex:1,background:'gray'}}>
                                                    <img src ={{}} style={{}}/>
                                                </div>
                                                <div style={{flex:2}}>
                                                    <div>
                                                        Ten nguoi dung
                                                    </div>
                                                    <div>
                                                        20000d 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{flex:1,display:'flex',flexDirection:'row'}}>
                                            <div style={{flex:1,display:'flex',background:'#FFFFFF',padding:'20px',border:'2px solid gray',borderRadius:10,margin:'10px'}}>
                                                <div style={{flex:0.5,}}>
                                                    1
                                                </div>
                                                <div style={{flex:1,background:'gray'}}>
                                                    <img src ={{}} style={{}}/>
                                                </div>
                                                <div style={{flex:2}}>
                                                    <div>
                                                        Ten nguoi dung
                                                    </div>
                                                    <div>
                                                        20000d 
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex:1,display:'flex',background:'#FFFFFF',padding:'20px',border:'2px solid gray',borderRadius:10,margin:'10px'}}>
                                                <div style={{flex:0.5,}}>
                                                    1
                                                </div>
                                                <div style={{flex:1,background:'gray'}}>
                                                    <img src ={{}} style={{}}/>
                                                </div>
                                                <div style={{flex:2}}>
                                                    <div>
                                                        Ten nguoi dung
                                                    </div>
                                                    <div>
                                                        20000d 
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex:1,display:'flex',background:'#FFFFFF',padding:'20px',border:'2px solid gray',borderRadius:10,margin:'10px'}}>
                                                <div style={{flex:0.5,}}>
                                                    1
                                                </div>
                                                <div style={{flex:1,background:'gray'}}>
                                                    <img src ={{}} style={{}}/>
                                                </div>
                                                <div style={{flex:2}}>
                                                    <div>
                                                        Ten nguoi dung
                                                    </div>
                                                    <div>
                                                        20000d 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </PerfectScrollbar>
                                </div>
                                <div style={{flex:1,border:'1px solid gray',borderRadius:5,margin:'20px',width:'80%',alignSelf:'center',padding:'20px',justifyContent:'center',display:'flex',flexDirection:'row'}}>
                                    <div style={{flex:1,justifyContent:'center',display:'flex',flexDirection:'column',borderRight:'1px solid gray'}}>
                                       <div style={{fontWeight:'bold'}}>
                                           Thời gian còn lại
                                       </div>
                                       <div style={{fontWeight:'bold'}}>
                                           00:00:40
                                       </div>
                                    </div>
                                    <div style={{flex:1,justifyContent:'center',display:'flex',flexDirection:'column',borderRight:'1px solid gray'}}>
                                       <div style={{fontWeight:'bold'}}>
                                           Giá cao nhất hiện tại
                                       </div>
                                       <div style={{fontWeight:'bold'}}>
                                           70000 đ
                                       </div>
                                    </div>
                                    <div style={{flex:1,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
                                        <Button style={{color:'white',padding:'10px',width:'90%',background:'red'}}>Hủy phiên đấu giá</Button>
                                    </div>
                                </div>
                                <div style={{flex:0.5,justifyContent:'flex-end',alignItems:'center',display:'flex',paddingRight:'20px',marginRight:'20px'}}>
                                    <Button style={{background:'black',minWidth:'100px',marginRight:'20px'}}>Start</Button>
                                    <Button style={{background:'red',minWidth:'100px',marginLeft:'20px'}}>End</Button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                </div>
                <div style={{flex:1,background:'#1F1F1F'}}>
                        <p>ashd</p>
                        <p>ashd</p>
                        <p>ashd</p>
                        <p>ashd</p>
                        <p>ashd</p>
                </div>
        </div>
        )
    }
}
