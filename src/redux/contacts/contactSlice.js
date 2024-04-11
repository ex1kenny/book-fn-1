import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContact,
  addContact,
  deleteContact,
  patchContact,
} from "./operations.js";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContact.rejected, () => {})
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(patchContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(patchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) return action.payload;
          return item;
        });
      }),
});

export const contactReducer = contactsSlice.reducer;
