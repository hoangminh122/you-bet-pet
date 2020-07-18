import React, { Component } from 'react'


export default class index extends Component {
   //ssszgsdfsgaf
    render() {
        return (
            <div style={{flex:1,display:'flex',flexDirection:'column',background:'gray',height:window.innerHeight}}>
                <div style={{flex:1.5,background:'#1F1F1F',flexDirection:'column',display:'flex',}}>
                    <div style={{flex:1,background:'#2B2E34'}}>

                    </div>
                    <div style={{flex:2}}>

                    </div>
                    <div style={{flex:1,display:'flex',flexDirection:'row'}}>
                        <div style={{flex:0.4,display:'flex',flexDirection:'row'}}>
                            <Button style={{color:'white',flex:1}}>HOME</Button>
                            <div  style={{color:'white',flex:1}}>ADMIN DETAIL</div>
                            <div  style={{color:'white',flex:1}}>ADMIN DETAIL LIST</div>
                            <div  style={{color:'white',flex:1}}>TRANG CHỦ</div>
                        </div>
                        
                    </div>
                </div>
                <div style={{flex:7,background:'blue'}}>
                    <h1>asdas</h1>
                    <p>ashd</p>
                </div>
                <div style={{flex:2,background:'#1F1F1F'}}>
                    <h1>asdas</h1>
                    <p>ashd</p>
                </div>

            </div>
        )
    }
}
