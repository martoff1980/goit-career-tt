/** @format */
import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';

import CamperSpecsList from './CamperSpecsList';
import VehicleDetails from './VehicleDetails';

const Email = React.lazy(() => import('./Email'));

export default function FeaturesPanel() {
	const dispatch = useDispatch();
	const { id } = useParams();

	const specs = ['transmission', 'engine', 'AC', 'bathroom', 'kitchen', 'TV', 'radio', 'refrigerator', 'microwave', 'gas', 'water'];
	const vechils = [
		{ label: 'Form', alt: 'form' },
		{ label: 'Length', alt: 'length' },
		{ label: 'Width', alt: 'width' },
		{ label: 'Height', alt: 'height' },
		{ label: 'Tank', alt: 'tank' },
		{ label: 'Consumption', alt: 'consumption' },
	];

	// лист усіх кемперів
	const campers = useSelector((state) => state.campers.items);
	const status = useSelector((state) => state.campers.status);

	// завантаження всіх, якщо ще не завантажені
	useEffect(() => {
		if (status === 'idle') {
			dispatch(loadCampers());
		}
	}, [status]);

	if (status === 'loading' || status === 'idle') return <Loader />;

	const camper = useMemo(() => campers.find((c) => String(c.id) === id), [campers, id]);
	if (!camper) return <Typography>No camper found</Typography>;

	return (
		<Box
			className="FeaturesPanel-Box"
			sx={{
				mt: '44px',
				display: 'flex',
				gap: '40px',
			}}>
			<Box
				className="Details-Box"
				sx={{
					width: '631px',
					height: '588px',
					bgcolor: '#F7F7F7',
					borderRadius: '10px',
				}}>
				<Grid
					container
					className="Details-Items"
					sx={{
						p: '44px 52px',
						gap: '100px',
					}}>
					<CamperSpecsList specs={specs} camper={camper} />
					<VehicleDetails vechils={vechils} camper={camper} />
				</Grid>
			</Box>
			<Box
				className="Form-Box"
				sx={{
					width: '641px',
					// height: '588px',
					border: '1px solid #DADDE1',
					borderRadius: '10px',
				}}>
				<Suspense fallback={<div>Loading form...</div>}>
					<Email />
				</Suspense>
			</Box>
		</Box>
	);
}
