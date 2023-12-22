import React from 'react'
import style from './DetailCard.style'
import { Product } from '../../../models'
import { Image, Linking, Pressable, Text, View } from 'react-native'

export default function DetailCard({product}: any) {
  product = (product as Product)
  return (
    <View style={style.container}>
        <Image style={style.image} 
        source={{uri:product.strMealThumb}}
        />
        <View style={style.viewHeader}>
          <Text style={style.textHeader}>{product.strMeal}</Text>
          <Text style={style.textArea}>{product.strArea}</Text>
        </View>
        <View style={style.viewContent}>
                <Text style={style.textDescription}>{product.strInstructions}</Text>
            
            <Pressable 
              style={style.pressableButton}
              onPress={()=>{Linking.openURL(product.strYoutube)}}
            >
                <Text style={style.textButton}>Watch on Youtube</Text>
            </Pressable>
        </View>
    </View>
  )
}
