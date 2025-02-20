import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const FetchCategory = createAsyncThunk("AllCategories",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        return response.data;
    
})

const CategorySlice = createSlice({
    name : "categories",
    initialState : {
        CategoriesArray: [],
        loading: false,
        message : ""
    },
    reducers : {
        setCategories: (state, action) => {
            state.CategoriesArray = action.payload;
        }
    },

    extraReducers:(builder)=> {
        builder.addCase(FetchCategory.pending, (state) => {
            state.loading = true;
        })
       .addCase(FetchCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.CategoriesArray = action.payload;
        })
       .addCase(FetchCategory.rejected, (state, action) => {
        state.loading = false;
        state.message = action.error.message;
        })
    },

})

export default CategorySlice.reducer

export const { setCategories } = CategorySlice.actions;