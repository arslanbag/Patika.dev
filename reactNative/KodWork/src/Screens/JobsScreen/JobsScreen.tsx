import React from 'react'
import { FlatList } from 'react-native'
import style from './JobsScreen.style'

import {useFetch , apiUri} from '../../Hooks/useFetchJobs'
import JobCard from '../../Component/JobCard'
import {  JobsList } from '../../Models'
import Loading from '../../Component/Tools/Loading'
import Error from '../../Component/Tools/Error'



function JobsScreen({navigation} : any ) {
  const {data,loading, error} = useFetch(apiUri.GET_JOBS_BYPAGE+'a')
  const jobs  = (data as JobsList)

  function toJobDetails ({id , categoriesName} : any ) {
    navigation.navigate("JobDetailScreen", 
    {
        jobId : id, 
        jobCategories : categoriesName
    })
  }

  return (
    <>
  {loading ?  <Loading /> :
  error ?  <Error /> :
    <FlatList  
      style={style.container}
      data={jobs.results} 
      renderItem={(item) => <JobCard item={item.item} toJobDetails={toJobDetails}/>}
    />
  }
  </>
  )
}

export default JobsScreen