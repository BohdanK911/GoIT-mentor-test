import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import githubApi from 'api';

const initialState = {
  isLoading: false,
  githubData: null
};

export const getRepos = createAsyncThunk('github/getRepos', async (searchQuery, thunkAPI) => {
  const response = await githubApi.getRepos(searchQuery.search, searchQuery.page);

  return response.data;
});

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getRepos.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(getRepos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.githubData = action.payload;
    });

    builder.addCase(getRepos.rejected, (state, action) => {
      state.isLoading = false;
    });
  }
});

export default githubSlice.reducer;
