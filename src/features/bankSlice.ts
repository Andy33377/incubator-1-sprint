import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface BankState {
  balance: number;
}

const initialState: BankState = {
  balance: 100,
};

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    ADD: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    GET: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload;
    },
  },
});

export const { ADD, GET } = bankSlice.actions;
export default bankSlice.reducer;
