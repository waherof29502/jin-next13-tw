import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
export interface User {
  id: string;
  name: string;
  friends: string[];
}
export interface Post {
  id: string;
}
export interface authState {
  mode: PaletteMode;
  user: User | null;
  token: string | null;
  posts: Post[];
}
const initialState: authState = {
  mode: 'dark',
  user: null,
  token: null,
  posts: []
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error('user friends non-existent :(');
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post.id === action.payload.post.id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    }
  }
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;
