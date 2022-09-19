import React from 'react'
import {View} from 'react-native'

function months(props) {
    
    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;
  return (

        <ScrollView>
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    Images.map((image, index) => (
                        <TouchableOpacity key={index} onPress={() =>
                         props.navigation.navigate('Month',{url:image.url} ) }>
                            <Image source={image.url} style={{
                                height: deviceHeight / 2,
                                Width: deviceWidth / 2 - 6,
                                borderRadius: 10, margin: 2
                            }} />
                    <Text
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: 'black',
              fontSize: 19,
              margin: 10,
              borderRadius: 10,
            }}>
            {month}
          </Text>
          </TouchableOpacity>
        ))}
            </View>
         </ScrollView>
  )
}



export default months