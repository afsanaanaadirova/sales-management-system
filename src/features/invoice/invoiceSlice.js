import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    invoices: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}
const POSTS_URL = 'http://localhost:3000/invoices';

export const fetchinvoices = createAsyncThunk('invoices/fetchInvoices', async () => {
    const response = await axios.get(POSTS_URL)
    return response.data

})


const invoicesSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers: {
        invoiceAdded: {
            reducer(state, action) {
                state.invoices.push(action.payload)
            },
            prepare(invoiceNumber, customer,productNumber,totalAmount,status) {
                return {
                    payload: {
                        id: nanoid(),
                        invoiceNumber,
                        customer,
                        productNumber,
                        totalAmount,
                        status
                    }
                }
            }, 
          
        }
    }, 
     extraReducers(builder) {
        builder
            .addCase(fetchinvoices.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchinvoices.fulfilled, (state, action) => {
                state.status = 'succeeded'

                const loadedPosts = action.payload.map(invoice => {
                    return invoice;
                });

                // Add any fetched posts to the array
                state.invoices = state.invoices.concat(loadedPosts)
            })
            .addCase(fetchinvoices.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})

export const selecetAllInvoices = (state) => state.invoices.invoices;
export const getInvoicesStatus = (state) => state.invoices.status;
export const getInvoicesError = (state) => state.invoices.error;
export const { invoiceAdded } = invoicesSlice.actions

export default invoicesSlice.reducer