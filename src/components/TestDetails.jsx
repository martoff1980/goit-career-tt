/** @format */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box, List, Grid, Typography, SvgIcon } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';

import { loadCampers } from '../features/campers/campersSlice';
import Loader from './Loader';
export default function TestDetails() {
	const { id } = useParams();
	const dispatch = useDispatch();
	// лист увсіх кемперів
	const campers = useSelector((state) => state.campers.items);
	const status = useSelector((state) => state.campers.status);
	// завантаження всіх, якщо ще не завантажені
	useEffect(() => {
		if (status === 'idle') {
			dispatch(loadCampers());
		}
	}, [status, dispatch]);

	if (status === 'loading' || status === 'idle') {
		return <Loader />;
	}
	const camper = campers.find((c) => String(c.id) === id);
	console.log('campers', campers);
	console.log('id:', id);
	console.log('camper', camper);
	// console.log(camper.gallery.map((c) => c.thumb));
	camper.gallery.map((c) => console.log(c.thumb));
	return (
		<Box
			className="Card-Details"
			sx={{
				marginTop: '48px',
				width: '1312px',
				border: '1px solid red',
			}}>
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
				<Grid container className="Camper-Images" sx={{ mt: '28px' }}>
					<List sx={{ display: 'flex', gap: 2 }}>
						{camper.gallery.map((c) => {
							return (
								<Box
									key={c.thumb || index}
									className="Camper-Image"
									sx={{
										width: '292px',
										height: '320px',
										borderRadius: '10px',
										border: '1px solid #DADDE1',
										backgroundImage: `url(${c.thumb})`,
										backgroundSize: 'cover',
									}}></Box>
							);
						})}
					</List>
				</Grid>

				<Grid sx={{ mt: 2, height: '100hv', overflow: 'hidden' }}>
					<Typography
						className="camper-description"
						fontWeight={700}
						sx={{
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
						}}>
						{camper.description}
					</Typography>
					{/* <Box
						className="camper-specs"
						sx={{
							paddingTop: '12px',
							width: '100%',
							height: '104px',
							display: 'flex',
							flexWrap: 'wrap',
							gap: '8px',
						}}>
						{specs
							.filter((k) => camper[k])
							.map((k) => {
								const val = camper[k];
								const label = formatLabel(k);
								const isBooleanTrue = typeof val === 'boolean' && val === true;
								return (
									<React.Fragment key={k}>
										<span
											className="Types-Item"
											style={{
												display: 'flex',
												minWidth: '50px',
												alignItems: 'center',
												height: '48px',
												justifyContent: 'center',
												borderRadius: '10px',
												fontSize: '16px',
												lineHeight: 1.5,
												fontWeight: 500,
												border: '1px solid #F2F4F7',
												backgroundColor: '#F2F4F7',
											}}>
											{isBooleanTrue ? (
												// тільки ключ для boolean true
												<span className="Bool-Type">{label}</span>
											) : (
												// ключ: значенння для інших типів
												<span className="Types">{val}</span>
											)}
										</span>
									</React.Fragment>
								);
							})}
					</Box> */}
				</Grid>
			</Grid>
		</Box>
	);
}
