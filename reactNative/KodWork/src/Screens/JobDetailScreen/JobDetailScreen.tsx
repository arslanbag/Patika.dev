import React from 'react'
import { useFetch, apiUri } from '../../Hooks/useFetchJobs'
import { Job } from '../../Models'
import { View } from 'react-native'

import style from './JobDetailScreen.style'
import JobDetailCard from '../../Component/JobDetailCard'

import { useAppDispatch, useAppSelector } from '../../Store/Store'
import { addFavorite , removeFavorite , changeStateMyFavorite} from '../../Store/Slice/slice.myFavorite'
import { addSubmitList, changeStateMySubmit } from '../../Store/Slice/slice.mySubmit'
import Loading from '../../Component/Tools/Loading'
import Error from '../../Component/Tools/Error'


function JobDetailScreen({navigation, route} :any) {
  const {data, loading, error} = useFetch(apiUri.GET_JOB_BYID+ route.params.jobId)
  const job  = (data as Job)
  const dispatch = useAppDispatch();
  const myFavoriteJobsStore = useAppSelector((state) => state.myFavoriteJobs);
  const mySubmitJobsStore = useAppSelector((state) => state.mySubmitJobs);
  let isFavorite = isInList(myFavoriteJobsStore)
  let isSubmit = isInList(mySubmitJobsStore)

  function handleAddFavorite(){
    dispatch(addFavorite(job))
  }

  function handleRemoveFavorite(){
    dispatch(removeFavorite(job))
  }

  function handleAddSubmitList(){
    dispatch(addSubmitList(job))
  }

  function isInList(store : any , returnVal = false ){
    const checkList = store.filter((item : Job) => item.id === job.id)
    if(checkList.length > 0){ returnVal = true}
    return returnVal
  }
 
  return (
    <>
      {loading ?  <Loading/> :
          error ? <Error /> : 
        <View style={style.container}>
          <JobDetailCard job={job} handles={{handleAddFavorite , handleRemoveFavorite, handleAddSubmitList, isFavorite, isSubmit}} />
        </View>
      }
    </>
    )

}

export default JobDetailScreen