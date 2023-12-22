import React from 'react'
import style from './ProductDetailScreen.style'
import {useFetch , apiUri } from '../../Hooks/useFetch'
import DetailCard from '../../Components/DetailCard';
import { FlatList } from 'react-native';

export default function ProductDetailScreen({ route} : any) {
  const {productId } = route.params;
  const {data ,loading, error} = useFetch(apiUri.GET_PRODUCT_BYID+productId)

  return (
    <FlatList
    style={style.container}
    data={data.meals}
    renderItem={(item) => <DetailCard product={item.item}/>}
    />
  )
}
