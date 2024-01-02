import React, { useEffect, useState } from 'react'
import {FlatList } from 'react-native'
import style from './MyFavoriteJobsScreen.style'

import JobCard from '../../Component/JobCard'
import {  Job } from '../../Models'
import { useAppDispatch, useAppSelector } from '../../Store/Store'
import { removeFavorite } from '../../Store/Slice/slice.myFavorite'
import EmptyFavoriteList from '../../Component/Tools/EmptyFavoriteList'
import Loading from '../../Component/Tools/Loading'
import Error from '../../Component/Tools/Error'

function MyFavoriteJobsScreen({navigation} : any ) {
  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(false)
  const dispatch = useAppDispatch();
  const myFavoriteJobsStore = useAppSelector((state) => state.myFavoriteJobs);
  
  function toJobDetails ({id , categoriesName} : any ) {
    navigation.navigate("JobDetailScreen", 
    {
        jobId : id, 
        jobCategories : categoriesName
    })
  }


  function handleRemoveFavorite(job : Job){
    dispatch(removeFavorite(job))
  }

  useEffect(() => { const timer = setTimeout(() => {
    setLoading(false);
    }, 2000);
  return () => clearTimeout(timer)
}, []);

  if (loading) 
    return <Loading />;
  

  if (error) 
    return <Error />;
  

  if (myFavoriteJobsStore.length === 0) 
    return <EmptyFavoriteList navigation={navigation} />;
  

  return (
        <FlatList  
          style={style.container}
          data={myFavoriteJobsStore} 
          renderItem={(item) => <JobCard item={item.item} toJobDetails={toJobDetails} removeFavorite={handleRemoveFavorite}/>}
          keyExtractor={(item) => item.id.toString()}
        />
  )
}

export default MyFavoriteJobsScreen