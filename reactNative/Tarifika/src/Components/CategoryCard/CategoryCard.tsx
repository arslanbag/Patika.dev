import React from 'react'
import {  Image, Text, TouchableNativeFeedback, View } from 'react-native';
import style from './CategoryCard.style'
import {Category} from '../../../models'

function CategoryCard({category ,navigation }:any) {
  category = (category as Category)
  function touchCard (param : string){
    navigation.navigate('ProductListScreen', {
        categoryName: param,
      })
  }
  return (
    <TouchableNativeFeedback
    onPress={() => {touchCard(category.strCategory)}}//() => {touchCard(item.strCategory)}}
    >
      <View style={style.container}>
          <View style={style.ImageView}>
              <Image
              style={style.Image}
                source={{uri:category.strCategoryThumb}}
              />
          </View>
          <View style={style.TextView}>
              <Text style={style.Text}>{category.strCategory}</Text>
          </View>
       </View>
    </TouchableNativeFeedback>
  )
} 
export default CategoryCard