import React, { Component } from 'react';
import { View } from 'react-native';
import CountDown from 'react-native-countdown-component'

export default class countDown extends Component {
  render() {
    return (
        <View style={{width:100,height:50}}>
            <CountDown
                size={10}
                until={1000}
                onFinish={() => alert('Finished')}
                // digitStyle={{backgroundColor: 'gray', borderWidth: 2, borderColor: 'gray'}}
                // digitTxtStyle={{color: 'gray'}}
                // timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                // separatorStyle={{color: 'gray'}}
                timeToShow={['H', 'M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
            />
        </View>
        
    );
  }
}
