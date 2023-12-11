import React from 'react'
import { View, Text } from 'react-native'
import toDoListStyle from './toDoListNotFound.style'

function toDoList() {
  return (
    <View style={toDoListStyle.toDoListNotFoundContainer}>
        <Text style={toDoListStyle.toDoListNotFoundText}>Mevcut Görev Bulunamadı.</Text>
    </View>
  )
}

export default toDoList