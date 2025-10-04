/** @format */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, startTransition } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Box, useTheme, OutlinedInput, InputAdornment, List, Grid } from '@mui/material';
import { colors, styleGreyButton } from '../styles/GlobalStyle';

import CamperCard from '../components/CamperCard';
import CamperFilters from '../components/CamperFilters';
import Loader from '../components/Loader';
import { loadCampers, backPage, nextPage, resetList, setLimit } from '../features/campers/campersSlice';

const styleCatalog = {
	width: '1440px',
	ml: '64px',
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	gap: '64px',
};

const styleCatalogList = {
	display: 'grid',
	gap: '12px',
	width: '888px',
	// 1568px
	height: 'auto', //має бути автоматичною,
	marginTop: '48px',
	padding: '0',
};

const styleButtonLoadMore = {
	width: '145px',
	height: '56px',
	...styleGreyButton,
};

const styleButtonBack = {
	width: '145px',
	height: '56px',
	...styleGreyButton,
};

const styleButtonBackBox = {
	width: '145px',
	height: '56px',
	ml: '336px',
	mt: '40px',
	p: 0,
};

const styleButtonLoadMoreBox = {
	p: 0,
	width: '145px',
	height: '56px',
	ml: '336px',
	mt: '40px',
};
export default function Catalog() {
	const dispatch = useDispatch();
	const { items, totalCount: totalCampers, limit, status, hasMore } = useSelector((s) => s.campers);
	const [newLimit, setNewLimit] = useState(limit);

	useEffect(
		() => {
			setLimit(newLimit);

			if (status === 'idle') dispatch(loadCampers());
		},
		[status, dispatch],
		limit
	);

	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(totalCampers / limit);

	const startIndex = (currentPage - 1) * limit;
	const endIndex = startIndex + limit;
	// const visibleItems = items.slice(startIndex, endIndex);

	const loadMore = () => {
		startTransition(() => {
			setCurrentPage(currentPage + 1);
			dispatch(nextPage());
			dispatch(loadCampers());
		});
	};

	const loadBack = () => {
		startTransition(() => {
			setCurrentPage(1);
			dispatch(backPage());
			dispatch(loadCampers());
		});
	};

	const changeLimit = (newLimit) => {
		const numericLimit = Number(newLimit);
		dispatch(setLimit(numericLimit));
	};

	const handleInputChange = (e) => {
		const value = e.target.value;
		if (value === '' || /^[0-9]+$/.test(value)) {
			setNewLimit(value);
		}
	};

	return (
		<Box className="Camper-Catalog" sx={styleCatalog}>
			<CamperFilters />
			<div>
				{status === 'loading' && items.length === 0 ? (
					<Loader />
				) : (
					<>
						<List className="Camper-Catalog-List" sx={styleCatalogList}>
							{items.slice(startIndex, endIndex).map((c, i) => (
								// повторний рендеринг - виправити
								<CamperCard key={`${c.id}-${i}`} camper={c} />
							))}
						</List>
					</>
				)}
				{status === 'failed' && <p style={{ color: 'crimson' }}>Failed to load campers.</p>}
				{hasMore && (
					<Box sx={styleButtonLoadMoreBox} hidden={currentPage === totalPages}>
						<Button sx={styleButtonLoadMore} onClick={loadMore} disabled={currentPage === totalPages || status === 'failed'}>
							Load More
						</Button>
					</Box>
				)}
				{hasMore && currentPage === totalPages && (
					<Box className="ButtonBack-Box" sx={styleButtonBackBox}>
						<Button sx={styleButtonBack} onClick={loadBack} disabled={currentPage === 1}>
							Back
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
