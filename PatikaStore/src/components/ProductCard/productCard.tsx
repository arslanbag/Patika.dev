import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import productCardStyle from './productCard.style'

function productCard({product} : any) {
  return (
      <TouchableOpacity style={productCardStyle.productCardContainer}>
        <View  style={productCardStyle.productCardImageContainer}>
          <Image style={productCardStyle.productCardImage}  source={{uri:product.imgURL}}/>
        </View>
        <Text style={productCardStyle.productCardTitle}>{product.title}</Text>
        <Text style={productCardStyle.productCardPrice}>{product.price}</Text>
        {product.inStock ? "" :   <Text style={productCardStyle.productCardStock}>STOK YOK</Text>}
      
      </TouchableOpacity>
  )
}

export default productCard