import { createSlice } from "@reduxjs/toolkit";

export const fiscaliaSlice = createSlice({
    name: 'fiscalia',
    initialState: {
        fiscalias: [],
        cantidad: null,
        totalPaginas: null,
        loading: false,
        fiscaliaIndividual:{}
    },
    reducers: {
        fiscaliasCredentials: (state, { payload }) => {
            state.fiscalias = payload.fiscalias;
            state.cantidad = payload.cantidad;
            state.totalPaginas = payload.totalPaginas;
            state.loading = false;
        },
        fiscaliaIndividualCredentials: (state, {payload}) => {
            state.fiscaliaIndividual = payload.fiscalia
            state.loading = false;
        },
        isLoading: (state) => {
            state.loading = true;
        },
        loaded: (state) => {
            state.loading = false;
        }
    }
});

// Action creators are generated for each case reducer function
export const { fiscaliasCredentials, isLoading, loaded, fiscaliaIndividualCredentials } = fiscaliaSlice.actions;