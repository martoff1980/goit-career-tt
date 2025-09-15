/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = { location: '', form: '', features: [] };
const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setLocation(state, { payload }) {
			state.location = payload;
		},
		setForm(state, { payload }) {
			state.form = payload;
		},
		toggleFeature(state, { payload }) {
			const i = state.features.indexOf(payload);
			if (i === -1) state.features.push(payload);
			else state.features.splice(i, 1);
		},
		resetFilters() {
			return initialState;
		},
	},
});

export const { setLocation, setForm, toggleFeature, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
