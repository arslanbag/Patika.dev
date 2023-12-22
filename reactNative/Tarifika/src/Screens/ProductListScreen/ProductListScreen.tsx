import React from 'react'
import { FlatList, Text } from 'react-native'
import ProductCard from '../../Components/ProductCard'
import {useFetch , apiUri } from '../../Hooks/useFetch'
import style from './ProductListScreen.style'

export default function ProductListScreen({ navigation, route} : any) {
  const {categoryName } = route.params;
  const {data ,loading, error} = useFetch(apiUri.GET_PRODUCTS_BYCATEGORY+categoryName)

  return (
    <FlatList
      style={style.container}
      data={data.meals}
      renderItem={(item) => <ProductCard productForCategory={item.item} navigation={navigation}/>}
      />

  )
}
