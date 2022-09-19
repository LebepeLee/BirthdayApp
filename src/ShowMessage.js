import React from 'react'
import {View} from 'react-native'


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

function ShowMessage(props) {
  return (
    <View>
    <ImageBackground source={props.route.params.url}
     style={{height:deviceHeight, width:deviceWidth}}/>
</View>
  )
}

export default ShowMessage