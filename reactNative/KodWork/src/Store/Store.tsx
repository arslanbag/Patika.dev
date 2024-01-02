import { configureStore } from "@reduxjs/toolkit";
import SliceMyFavoriteJobs from "./Slice/slice.myFavorite";
import SliceMySubmitJobs from "./Slice/slice.mySubmit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const Store = configureStore({
    reducer : {
        myFavoriteJobs : SliceMyFavoriteJobs,
        mySubmitJobs : SliceMySubmitJobs
    }
})

export type RootState = ReturnType<typeof Store.getState>;
export const useAppDispatch: () => typeof Store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
