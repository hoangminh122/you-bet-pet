import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native'
import {connect} from 'react-redux'
import Word from './Word'
import Filter from './Filter'

class Main extends Component {
    getWordList(){
        const {myFilter,myWords}= this.props;
        if(myFilter == 'MEMORIZED') return myWords.filter(e => e.memorized);
        if(myFilter == 'NEED_PRACTICE') return myWords.filter(e => !e.memorized)
        return myWords;
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'yellow',alignSelf:'stretch',flexDirection:'column'}}>
                {/* <Text> {this.props.myFilter}</Text> */}
                <View style={{flex:10}}>
                    <FlatList
                        data={this.getWordList()}
                        renderItem ={ ({item})=>{
                            return   <Word myWord ={item} />
                        }}
                        keyExtractor = { (item)=>item.id}
                    />
                </View>
            
            <Filter/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        myFilter:state.filterStatus,
        myWords: state.arrWords
    };
}

export default connect(mapStateToProps)(Main);