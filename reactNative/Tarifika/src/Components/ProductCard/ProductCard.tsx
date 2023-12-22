import React from 'react'
import { Image, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import style from './ProductCard.style'
import {ProductForCategory} from '../../../models'

function ProductCard({productForCategory ,navigation }:any) {
  productForCategory = (productForCategory as ProductForCategory)
  function touchCard (param : string){
    navigation.navigate('ProductDetailScreen', {
        productId: param,
      })
    }
  return (
    <TouchableNativeFeedback
    onPress={() => {touchCard(productForCategory.idMeal)}}//() => {touchCard(item.strCategory)}}
    >
      <View style={style.container}>
          <View style={style.ImageView}>
            { productForCategory.strMealThumb ?
              <Image
                style={style.Image} 
                source={{uri:productForCategory.strMealThumb}}
              />:null
            }
            <View style={style.TextView}>
              <Text numberOfLines={1} ellipsizeMode='tail' style={style.Text}>{productForCategory.strMeal}</Text>
            </View>
          </View>

       </View>
    </TouchableNativeFeedback>
  )
} 

export default ProductCard