import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Job } from "../../Models";


let initialState: Job[] = []

  const Slice = createSlice({
      name: 'mySubmitJobsSlice',
      initialState: initialState,
      reducers: {
        addSubmitList: (state: Job[], action: PayloadAction<Job>) => {
          const existingIds = state.filter((item : Job) => item.id === action.payload.id);
          if(existingIds.length > 0){return state}
          AsyncStorage.setItem("MySubmitJobsAsyncStorage", JSON.stringify([...state, action.payload]))
          console.log(action.payload.name + " , Adlı iş başvuru listesine eklendi")
          return [...state, action.payload];
        },
        changeStateMySubmit: (state: Job[], action: PayloadAction<Job[]>) => {
          console.log("mySubmitJobs adlı globalState Hafızadan güncellendi");
          return action.payload;
        },
      },
    })

export default Slice.reducer
export const {addSubmitList, changeStateMySubmit} = Slice.actions

