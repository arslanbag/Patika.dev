import React from 'react'
import style from './EmptyFavoriteList.style'
import { View ,Text, TouchableOpacity} from 'react-native'
import  Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function EmptyFavoriteList({navigation} : any) {
    const handle =  function (){
        console.log("aaawww")
        navigation.navigate('JobsDrawer')
    }
  return (
    <View style={style.container}>
        <View style={style.content}>
        <Icon name="drupal" size={45}  color={'#ef5350'}/>  
        <Text style={style.text}>
            Favorite job not found
        </Text>
        <TouchableOpacity onPress={() => handle()}>
            <Text style={style.link}>Click to view jobs List</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
