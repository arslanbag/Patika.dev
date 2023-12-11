import React from 'react'
import { View , Text} from 'react-native'
import headerStyle from './header.style'

export default function index({headerText, headerToDoCount}: any) {
  return (
    <View style={headerStyle.headerContainer}>
        <Text style={headerStyle.headerText}>
          {headerText}
        </Text>
        <Text style={headerStyle.headerToDoCount}>
          {headerToDoCount}
        </Text>
      </View>
  )
}
