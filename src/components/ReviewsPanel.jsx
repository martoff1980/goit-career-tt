/** @format */
import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

const Email = React.lazy(() => import('./Email'));
const Blocks = React.lazy(() => import('./ReviewBlocks'));

export default function ReviewsPanel() {
	const dispatch = useDispatch();
	const { id } = useParams();

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
			className="ReviewsPanel-Box"
			sx={{
				mt: '44px',
				display: 'flex',
				gap: '40px',
			}}>
			<Box
				className="Bloks-Box"
				sx={{
					width: '631px',
					height: '340px',
				}}>
				<Blocks reviews={camper.reviews} />
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
