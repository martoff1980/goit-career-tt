/** @format */

import React, { useEffect, useMemo, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';

import { loadCampers } from '../features/campers/campersSlice';

const Gallery = React.lazy(() => import('../components/Gallery'));
const TabsPanel = React.lazy(() => import('../components/TabsPanel'));
const Loader = React.lazy(() => import('../components/Loader'));
const Title = React.lazy(() => import('../components/CamperTitle'));

const stylesDetails = {
	mt: '48px',
	ml: '64px',
	mb: '80px',
	width: '1312px',
};
export default function TestDetails() {
	const dispatch = useDispatch();
	const { id } = useParams();

	// лист увсіх кемперів
	const campers = useSelector((state) => state.campers.items);
	const status = useSelector((state) => state.campers.status);

	// завантаження всіх, якщо ще не завантажені
	useEffect(() => {
		if (status === 'idle') {
			dispatch(loadCampers());
		}
	}, [status]);

	if (status === 'loading' || status === 'idle') return <Loader />;

	const camper = campers.find((c) => String(c.id) === id);
	if (!camper) return <Typography>No camper found</Typography>;

	return (
		<Box className="Card-Details" sx={stylesDetails}>
			<Grid container>
				<Suspense fallback={<div>Loading form...</div>}>
					<Title camper={camper} layoutMode={'block'} />
				</Suspense>
				<Suspense fallback={<div>Loading form...</div>}>
					<Gallery camper={camper} />
				</Suspense>
			</Grid>
			<Suspense fallback={<div>Loading form...</div>}>
				<TabsPanel />
			</Suspense>
		</Box>
	);
}
