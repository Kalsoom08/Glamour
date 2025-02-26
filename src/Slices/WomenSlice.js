import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchWomenData = createAsyncThunk(
    "womens/fetchWomenData",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error("Failed to fetch Women's products");
        }
        const data = await response.json();

        return data.filter(item => item.category === "women's clothing");
    }
);

const WomenSlice = createSlice({
    name: "womens",
    initialState: {
        WomenProducts: [],
        loading: false,
        error: null
    },
    reducers: {
        setWomenProducts(state, action) {
            state.WomenProducts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchWomenData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(FetchWomenData.fulfilled, (state, action) => {
                state.loading = false;
                state.WomenProducts = action.payload;
            })
            .addCase(FetchWomenData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default WomenSlice.reducer;
export const { setWomenProducts } = WomenSlice.actions;
