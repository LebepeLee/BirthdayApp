import React from 'react'
import {View} from 'react-native'
import Messages from './Messages'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

function Month(props) {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
    {
        Messages.map((image, index) => (
            <TouchableOpacity key={index} onPress={() =>
             props.navigation.navigate('ShowMessage',{index:month.index} ) }>
                <Image source={image.url} style={{
                    height: deviceHeight / 3,
                    Width: deviceWidth / 3 - 6,
                    borderRadius: 10, margin: 2
                }} />
            </TouchableOpacity>
        ))
    }
</View>
  )
}

export default Month