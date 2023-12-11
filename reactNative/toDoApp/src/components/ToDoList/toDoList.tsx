import React from 'react'
import { View, Text, TouchableOpacity , Alert } from 'react-native'
import toDoListStyle from './toDoList.style'

function toDoList({toDo,toDoClick, toDoRemove}:any) {
  const toDoListText = toDo.item.check ? toDoListStyle.toDoListTextDo : toDoListStyle.toDoListTextDont
  const toDoRemoveF = () => {
    Alert.alert(
      'Görev Silinsin mi ?',
      '"'+toDo.item.toDoName + '" adlı görev için',
      [
        { text: 'Evet', onPress: () => toDoRemove(toDo.item.id) },
        { text: 'Hayır'},
      ]
    );
  };
  return (
    toDo.item.id !== -1 &&
    <View style={toDoListStyle.toDoListContainer}>
      <TouchableOpacity
        onPress={() => toDoClick(toDo.item.id)}
        onLongPress={() => toDoRemoveF()}
      >
        <Text style={toDoListText}>{toDo.item.toDoName}</Text>
      </TouchableOpacity>
        
    </View>
  )
}

export default toDoList