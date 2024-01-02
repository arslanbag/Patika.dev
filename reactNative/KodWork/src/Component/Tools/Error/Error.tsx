import React from 'react'
import style from './Error.style'
import { Text, TouchableOpacity, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'


function Error({navigation} : any) {
    const handle =  function (){
        console.log("aaawww")
        navigation.navigate('JobsDrawer')
    }
  return (
    <View style={style.container}>
    <View style={style.content}>
        <View style={style.partOne}>
            <View style={style.indicatorView}>
                <Icon name="emoticon-sad-outline" size={48} color={'#ef5350'} />
            </View>
            <View style={style.textView}>
                <Text style={style.text}>Opps! an error occurred.</Text>
            </View>
        </View>
        <View style={style.partTwo}>
            <TouchableOpacity onPress={() => handle()}>
                <Text style={style.link}>Click to Main Screen</Text>
            </TouchableOpacity>
        </View>
    </View>

</View>
  )
}

export default Error