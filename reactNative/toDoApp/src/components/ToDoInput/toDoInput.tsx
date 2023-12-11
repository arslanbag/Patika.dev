import React, { useRef }  from 'react'
import { TextInput, View, Text, TouchableOpacity, Alert } from 'react-native'
import ToDoInputStyle from './toDoInput.style'

function toDoInput({cancelButtonTouch,addButtonTouch}: any) {
  const [textValue, setTextValue] = React.useState('');
  const textInputRef = useRef<TextInput>(null);
  const handlePress = () => {
    textValue !== '' ? addButtonTouch(textValue) : Alert.alert("#Görev Adı Boş Bırakılamaz!")
    if (textInputRef.current) {
      textInputRef.current.setNativeProps({text: ''})
    }
  }
  
  return (
    <View style={ToDoInputStyle.toDoInputContainer}>
        <TextInput
        ref={textInputRef}
        style={ToDoInputStyle.ToDoInputStyleInput}
        placeholder="Görev: Bugün Kendini Sev"
        placeholderTextColor="#bcbcbc"
        onChangeText={(keyPress) => {setTextValue(keyPress)}}
      />
      <View style={ToDoInputStyle.ToDoInputStyleButtonContainer}>
        <TouchableOpacity 
          style={ToDoInputStyle.ToDoInputStyleButtonCancel} 
          onPress={() => cancelButtonTouch()}>
          <Text style={ToDoInputStyle.ToDoInputStyleButtonTextCancel}>Çık</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ToDoInputStyle.ToDoInputStyleButtonAdd} 
          onPress={handlePress}>
          <Text style={ToDoInputStyle.ToDoInputStyleButtonTextAdd}>Görev Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default toDoInput