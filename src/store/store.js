import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./slice/auth";
import { fiscaliaSlice } from "./slice/fiscalia";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        fiscalia: fiscaliaSlice.reducer,
    }
});
