import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Job } from "../../Models";



let initialState: Job[] = []

  const Slice = createSlice({
      name: 'myFavoriteJobsSlice',
      initialState: initialState,
      reducers: {
        addFavorite: (state: Job[], action: PayloadAction<Job>) => {
          const existingIds = state.filter((item : Job) => item.id === action.payload.id);
          if(existingIds.length > 0){return state}
          AsyncStorage.setItem("MyFavoriteJobsAsyncStorage", JSON.stringify([...state, action.payload]))
          console.log(action.payload.name + " , Adlı iş favorilere eklendi")
          return [...state, action.payload];
        },
        removeFavorite: (state: Job[], action: PayloadAction<Job>) => {
          const updatedState = state.filter((item: Job) => item.id !== action.payload.id);
          AsyncStorage.setItem("MyFavoriteJobsAsyncStorage", JSON.stringify(updatedState));
          console.log(action.payload.name + " , Adlı iş favorilerden kaldırıldı")
          return updatedState;
        },
        changeStateMyFavorite: (state: Job[], action: PayloadAction<Job[]>) => {
          console.log("MyFavoriteJobs adlı globalState Hafızadan güncellendi");
          return action.payload;
        },
      },
    })

export default Slice.reducer
export const {addFavorite, removeFavorite, changeStateMyFavorite} = Slice.actions





