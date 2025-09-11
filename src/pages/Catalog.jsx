/** @format */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, startTransition } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Box, useTheme, OutlinedInput, InputAdornment, List, Grid } from '@mui/material';

import CamperCard from '../components/CamperCard';
import CamperFilters from '../components/CamperFilters';
import Loader from '../components/Loader';
import { loadCampers, nextPage } from '../features/campers/campersSlice';

export default function Catalog() {
	const dispatch = useDispatch();
	const { items, status, hasMore } = useSelector((s) => s.campers);
	useEffect(() => {
		if (status === 'idle') dispatch(loadCampers());
	}, [status, dispatch]);

	const loadMore = () => {
		startTransition(() => {
			dispatch(nextPage());
			dispatch(loadCampers());
		});
	};

	return (
		<Box
			className="Camper-Catalog"
			sx={{
				marginLeft: '64px',
				display: 'flex',
				flexDirection: 'row',
				gap: '64px',
			}}>
			<CamperFilters />
			<div>
				{status === 'loading' && items.length === 0 ? (
					<Loader />
				) : (
					<>
						<List
							className="Camper-Catalog"
							sx={{
								display: 'grid',
								gap: '12px',
								width: '888px',
								height: '1568px',
								marginTop: '48px',
								padding: '0',
							}}>
							{items.map((c) => (
								<CamperCard key={c.id} camper={c} />
							))}
						</List>
					</>
				)}
			</div>
			<Outlet />
		</Box>
	);
}
