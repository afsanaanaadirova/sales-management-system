import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    statuses: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}
const POSTS_URL = 'http://localhost:3000/statuses';

export const fetchstatuses = createAsyncThunk('statuses/fetchstatuses', async () => {
    const response = await axios.get(POSTS_URL)
    return response.data

})

const statusesSlice = createSlice({
    name: 'statuses',
    initialState,
    reducers: {},
     extraReducers(builder) {
        builder
            .addCase(fetchstatuses.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchstatuses.fulfilled, (state, action) => {
                state.status = 'succeeded'

                const loadedPosts = action.payload.map(status => {
                    return status;
                });

                // Add any fetched posts to the array
                state.statuses = state.statuses.concat(loadedPosts)
            })
            .addCase(fetchstatuses.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})

export const selecetAllstatuses = (state) => state.statuses.statuses;
export const getstatusesStatus = (state) => state.statuses.status;
export const getstatusesError = (state) => state.statuses.error;
export const { changeItemStatus} = statusesSlice.actions

export default statusesSlice.reducer