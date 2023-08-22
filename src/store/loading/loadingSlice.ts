import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface LoadingState {
  isGlobalLoading: boolean;
}

const initialState: LoadingState = {
  isGlobalLoading: false
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setGlobalLoading: (state, action: PayloadAction<boolean>) => {
      state.isGlobalLoading = action.payload;
    }
  }
});

export const { setGlobalLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
