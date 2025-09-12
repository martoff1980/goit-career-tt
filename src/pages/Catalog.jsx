/** @format */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, startTransition } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Box, useTheme, OutlinedInput, InputAdornment, List, Grid } from '@mui/material';

import CamperCard from '../components/CamperCard';
import CamperFilters from '../components/CamperFilters';
import Loader from '../components/Loader';
import { loadCampers, nextPage, setLimit } from '../features/campers/campersSlice';

export default function Catalog() {
	const dispatch = useDispatch();
	const { items, status, hasMore } = useSelector((s) => s.campers);
	console.log('Catalog items', items);

	useEffect(() => {
		if (status === 'idle') dispatch(loadCampers());
	}, [status, dispatch]);

	const loadMore = () => {
		startTransition(() => {
			dispatch(nextPage());
			dispatch(loadCampers());
		});
	};

	const changeLimit = (e) => {
		const limit = useSelector((state) => state.campers.limit);
		console.log('Catalog default limit', limit);

		// змінна для зберігання нового значення ліміту
		const [newLimit, setNewLimit] = useState(e.target.value);
		console.log('Catalog new limit', newLimit);

		useEffect(() => {
			dispatch(setLimit(newLimit));
			dispatch(loadCampers());
		}, [limit, dispatch]);
		console.log('Catalog new value limit', limit);
	};

	return (
		<Box
			className="Camper-Catalog"
			sx={{
				width: '1440px',
				marginLeft: '64px',
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
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
								// 1568px
								height: 'auto', //має бути автоматичною,
								marginTop: '48px',
								padding: '0',
							}}>
							{items.map((c, i) => (
								// повторний рендеринг - виправити
								<CamperCard key={`${c.id}-${i}`} camper={c} />
							))}
						</List>
					</>
				)}
				{status === 'failed' && <p style={{ color: 'crimson' }}>Failed to load campers.</p>}
				{hasMore && (
					<Box
						sx={{
							width: '145px',
							height: '56px',
							marginLeft: '336px',
							marginTop: '40px',
							padding: 0,
						}}>
						<Button
							sx={{
								width: '145px',
								height: '56px',
								borderRadius: '200px',
								fontSize: '16px',
								lineHeight: 1.5,
								color: '#101828',
								border: '1px solid #DADDE1',
							}}
							onClick={loadMore}>
							Load More
						</Button>
						{/* <button onClick={loadMore}>Load More</button> */}
					</Box>
				)}
			</div>
			<Outlet />
		</Box>
	);
}
