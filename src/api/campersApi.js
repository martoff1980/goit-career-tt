/** @format */

import { axiosClient } from './axiosClient';

export const fetchCampers = async ({ location, form, features = [], page = 1, limit = 8 } = {}) => {
	console.log('fetchCampers features:', features);

	const params = new URLSearchParams();
	if (location) params.set('location', location);
	if (form) params.set('form', form);
	features.forEach((f) => {
		//  'automatic'='transmission'
		f === 'automatic' ? params.append('transmission', f) : params.append(f, true);
		// params.append(f, true);
	});
	params.set('page', page);
	params.set('limit', limit);
	const { data } = await axiosClient.get('/campers?' + params.toString());
	return data['items'];
};

export const fetchCamperById = async (id) => {
	const { data } = await axiosClient.get(`/campers/${id}`);
	return data;
};
