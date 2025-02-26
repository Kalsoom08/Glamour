import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from './src/Slices/CategorySlice'
import AccessoriesSlice from "./src/Slices/AccessorySlice";
import MenSlice from './src/Slices/MenSlice'
import WomenSlice from './src/Slices/WomenSlice'

const store = configureStore({
    reducer:{
      categories : CategorySlice,
      accessories: AccessoriesSlice,
      mens: MenSlice,
      womens: WomenSlice

    }
})

export default store;