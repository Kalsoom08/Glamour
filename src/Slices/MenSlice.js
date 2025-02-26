import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchMenData = createAsyncThunk(
    "mens/fetchMenData",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error("Failed to fetch men's products");
        }
        const data = await response.json();

        return data.filter(item => item.category.includes("men's clothing"));
    }
);

const MenSlice = createSlice({
    name: "mens",
    initialState: {
        menProducts: [],
        loading: false,
        error: null
    },
    reducers: {
        setMenProducts(state, action) {
            state.menProducts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchMenData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(FetchMenData.fulfilled, (state, action) => {
                state.loading = false;
                state.menProducts = action.payload;
            })
            .addCase(FetchMenData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default MenSlice.reducer;
export const { setMenProducts } = MenSlice.actions;
