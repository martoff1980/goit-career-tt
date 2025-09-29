/** @format */

import React, { useEffect, useMemo, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box, List, Grid, Typography, SvgIcon } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';

import { loadCampers } from '../features/campers/campersSlice';

const Gallery = React.lazy(() => import('../components/Gallery'));
const TabsPanel = React.lazy(() => import('../components/TabsPanel'));
const Loader = React.lazy(() => import('../components/Loader'));

const stylesDetails = {
	mt: '48px',
	ml: '64px',
	mb: '80px',
	width: '1312px',
	border: '1px solid red',
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
				<Grid
					className="Card-Title"
					sx={{
						display: 'block',
						width: '100%',
					}}>
					<Typography
						className="camper-name"
						variant="h2"
						sx={{
							fontSize: '24px',
							lineHeight: 1.33,
							fontWeight: 600,
						}}>
						{camper.name}
					</Typography>
					<Grid sx={{ mt: 0 }}>
						<Typography
							className="camper-location"
							sx={{
								fontSize: '16px',
								fontWeight: 400,
								lineHeight: 1.5,
								display: 'flex',
							}}>
							<MapIcon fontSize="small" />
							{camper.location}
						</Typography>
						<Typography
							className="camper-price"
							variant="h2"
							sx={{
								mt: 2,
								fontSize: '24px',
								fontWeight: 600,
								lineHeight: 1.33,
							}}>
							€{camper.price}
						</Typography>
					</Grid>
				</Grid>
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
