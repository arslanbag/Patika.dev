import React from 'react'
import { View, Text } from 'react-native'
import headerStyle from './header.style'

function header({headerText} : any) {
  return (
    <View style={headerStyle.headerView}>
      <Text style={headerStyle.headerText}>{headerText}</Text>
    </View>
  )
}

export default header