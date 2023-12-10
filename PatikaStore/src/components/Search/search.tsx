import React from 'react'
import { View, TextInput } from 'react-native'
import searchStyle from './search.style'

function search() {
  return (
    <View style={searchStyle.searchView}>
      <TextInput
        placeholder="Ara..."
        placeholderTextColor={'#BFBFBF'}
        style={searchStyle.searchInput}>
      </TextInput>
    </View>
  )
}

export default search