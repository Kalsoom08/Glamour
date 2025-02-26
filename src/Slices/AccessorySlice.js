import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchAccessories = createAsyncThunk(
  "accessories/fetchAccessories",
  async () => {
    const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");

    if (!response.ok) {
      throw new Error("Failed to fetch accessories");
    }

    return response.json();
  }
);

const AccessoriesSlice = createSlice({
  name: "accessories",
  initialState: {
    accessoriesArray: [],
    loading: false,
    message: "",
  },
  reducers: {
    setAccessories: (state, action) => {
      state.accessoriesArray = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchAccessories.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchAccessories.fulfilled, (state, action) => {
        state.loading = false;
        state.accessoriesArray = action.payload;
      })
      .addCase(FetchAccessories.rejected, (state, action) => {
        state.loading = false;
        state.message = action.error.message;
      });
  },
});

export default AccessoriesSlice.reducer;
export const { setAccessories } = AccessoriesSlice.actions;
