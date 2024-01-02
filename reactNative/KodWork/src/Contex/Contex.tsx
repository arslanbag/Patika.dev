import React, {  useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Job } from '../Models';
import { changeStateMyFavorite } from '../Store/Slice/slice.myFavorite';
import { changeStateMySubmit } from '../Store/Slice/slice.mySubmit';
import { useAppDispatch } from '../Store/Store';

const Contex = ({ children } : any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    function asynLoading  (storageName : string , sliceFunc : any) {
      AsyncStorage.getItem(storageName).then((getItem) => {
        const item = JSON.parse(getItem || "[]") as Job[]
        try {
          if(item.length > 0){
            dispatch(sliceFunc(item));
          }else{
            AsyncStorage.setItem(storageName, JSON.stringify([]))
          }   
        } catch (error) {
            console.log(error)
        }  
    })

    }
    asynLoading("MyFavoriteJobsAsyncStorage", changeStateMyFavorite )
    asynLoading("MySubmitJobsAsyncStorage", changeStateMySubmit )

  } , [])
  return <React.Fragment>{children}</React.Fragment>;
}

export default Contex