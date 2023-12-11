import React from 'react'
import { Button, Text, Touchable, TouchableOpacity, View } from 'react-native'
import addToDoButtonStyle from './addToDoButton.style'

function addToDoButton({addToDoButtonTouch}: any) {
  return (
    <View style ={addToDoButtonStyle.ViewAddToDoButton}>
        <TouchableOpacity
            style ={addToDoButtonStyle.TouchableOpacityAddToDoButton}
            onPress={()=> addToDoButtonTouch()}   
               
        >
            <Text style ={addToDoButtonStyle.TextAddToDoButton}>+</Text>
        </TouchableOpacity>
    </View>
  )
}

export default addToDoButton