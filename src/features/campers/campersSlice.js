/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampers } from '../../api/campersApi';

const savedLimit = localStorage.getItem('limit');
export const loadCampers = createAsyncThunk('campers/load', async (_, { getState }) => {
	const { filters, campers } = getState();
	const data = await fetchCampers({
		location: filters.location || undefined,
		form: filters.form || undefined,
		features: filters.features,
		page: campers.page,
		limit: campers.limit,
	});
	return data;
});

const campersSlice = createSlice({
	name: 'campers',
	initialState: {
		items: [],
		page: 1,
		totalCount: 0,
		limit: savedLimit ? Number(savedLimit) : 4, //дефолтне значення
		hasMore: true,
		status: 'idle',
		error: null,
	},
	reducers: {
		resetList(state) {
			state.items = [];
			state.page = 1;
			state.totalCount = 0;
			state.hasMore = true;
			state.status = 'idle';
			state.error = null;
		},
		nextPage(state) {
			state.page += 1;
		},
		backPage(state) {
			state.page = 1;
		},
		setLimit: (state, action) => {
			state.limit = action.payload;
			localStorage.setItem('limit', String(action.payload));
		},
	},
	extraReducers: (b) => {
		b.addCase(loadCampers.pending, (s) => {
			s.status = 'loading';
			s.error = null;
		});
		b.addCase(loadCampers.fulfilled, (s, { payload }) => {
			s.status = 'succeeded';
			s.totalCount = payload.length;
			if (!Array.isArray(payload) || payload.length === 0) s.hasMore = false;
			else s.items = [...s.items, ...payload];
		});
		b.addCase(loadCampers.rejected, (s, { error }) => {
			s.status = 'failed';
			s.error = error?.message;
		});
	},
});
export const { resetList, backPage, nextPage, setLimit } = campersSlice.actions;
export default campersSlice.reducer;
