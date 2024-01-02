import React from 'react'
import style from './Loading.style'
import { Text, View } from 'react-native'
import { ActivityIndicator} from 'react-native'


export default function Loading() {
  return (
    <View style={style.container}>
        <View style={style.content}>
            <View style={style.indicatorView}>
                <ActivityIndicator size={50} color={'#ef5350'} />
            </View>
            <View style={style.textView}>
                <Text style={style.text}>Loading..</Text>
            </View>
        </View>
       
    </View>
  )
}
