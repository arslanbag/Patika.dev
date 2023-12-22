import React, { useState } from 'react'
import { FlatList , Text} from 'react-native'
import {useFetch , apiUri } from '../../Hooks/useFetch'
import CategoryCard from '../../Components/CategoryCard'
import style from './CategoryList.style'

function CategoryListScreen({navigation} : any ) {
  const {data ,loading, error} = useFetch(apiUri.GET_ALL_CATEGORY)

  return (
       <FlatList
       style={style.container}
       data={data.categories}
       renderItem={(item) => <CategoryCard category={item.item} navigation={navigation}/>}
       />

  )
}

export default CategoryListScreen