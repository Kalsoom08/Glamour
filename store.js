import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from './src/Slices/CategorySlice'

const store = configureStore({
    reducer:{
      categories : CategorySlice
    }
})

export default store;