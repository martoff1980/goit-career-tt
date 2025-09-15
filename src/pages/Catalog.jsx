/** @format */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, startTransition } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Box, useTheme, OutlinedInput, InputAdornment, List, Grid } from '@mui/material';

import CamperCard from '../components/CamperCard';
import CamperFilters from '../components/CamperFilters';
import Loader from '../components/Loader';
import { loadCampers, nextPage, resetList, setLimit } from '../features/campers/campersSlice';
import { use } from 'react';

export default function Catalog() {
	const dispatch = useDispatch();
	const { items, limit, status, hasMore } = useSelector((s) => s.campers);
	const [newLimit, setNewLimit] = useState(limit);

	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(items.length / limit);

	const startIndex = (currentPage - 1) * limit;
	const endIndex = startIndex + limit;
	const visibleItems = items.slice(startIndex, endIndex);

	useEffect(
		() => {
			setLimit(newLimit);
			if (status === 'idle') dispatch(loadCampers());
		},
		[status, dispatch],
		limit
	);

	const loadMore = () => {
		startTransition(() => {
			setCurrentPage(currentPage + 1);
			dispatch(nextPage());
			dispatch(loadCampers());
		});
	};

	const changeLimit = (newLimit) => {
		const numericLimit = Number(newLimit);
		dispatch(setLimit(numericLimit));
	};

	const handleInputChange = (e) => {
		const value = e.target.value;
		console.log('value:', value);
		if (value === '' || /^[0-9]+$/.test(value)) {
			setNewLimit(value);
		}
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
							{items.slice(startIndex, endIndex).map((c, i) => (
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
					</Box>
				)}
			</div>
			<Box className="Service-Box" hidden>
				<input type="text" value={newLimit} onChange={handleInputChange} placeholder="Input integer" />
				<button onClick={() => changeLimit(newLimit)}>changeLimit</button>
			</Box>
			<Outlet />
		</Box>
	);
}
