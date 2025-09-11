/** @format */

// src/components/UntitledSvg.jsx
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Padding } from '@mui/icons-material';
import MapIcon from '@mui/icons-material/Map';

export default function CamperCard({ camper }) {
	const favorites = useSelector((s) => s.favorites);
	const dispatch = useDispatch();
	const isFav = favorites.includes(camper.id);

	return (
		<Box
			className="Camper-Card"
			sx={{
				height: '368px',
				border: '1px solid #DADDE1',
				borderRadius: '20px',
				overflow: 'hidden',
			}}>
			<Box
				className="Card-Item"
				sx={{
					padding: '24px',
					display: 'flex',
					gap: '24px',
				}}>
				{/* Ліва картинка */}
				<Box
					className="Camper-Image"
					sx={{
						width: '292px',
						height: '320px',
						borderRadius: '10px',
						bgcolor: '#DADDE1',
						backgroundImage: `url(${camper.gallery[0].thumb})`,
						backgroundSize: 'cover',
					}}></Box>
				{/* Права частина */}
				<Box
					className="Camper-Info"
					sx={{
						width: '524px',
						display: 'flex',
						flexDirection: 'column',
					}}>
					<Grid container>
						<Grid
							className="Camper-Info-Top"
							item
							sx={{
								display: 'flex',
								width: '100%',
								justifyContent: 'space-between',
								fontSize: '24px',
								lineHeight: 1.33,
							}}>
							<Typography className="camper-name" sx={{ fontWeight: 600 }}>
								{camper.name}
							</Typography>
							<Typography className="camper-price" sx={{ fontWeight: 600 }}>
								€{camper.price}
							</Typography>
						</Grid>
						<Grid item sx={{ mt: 1 }}>
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
						</Grid>
						<Grid item sx={{ mt: 2, height: '100hv', overflow: 'hidden' }}>
							<Typography className="camper-description" fontWeight={700}>
								{camper.description}
							</Typography>
						</Grid>
					</Grid>
					<Grid item sx={{ mt: 'auto' }}>
						<Button
							className="ShowMore-Button"
							style={{
								width: '166px',
								height: '56px',
								color: '#FFF',
								backgroundColor: '#E44848',
								borderRadius: '200px',
							}}
							// onClick={apply}
						>
							Show More
						</Button>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
}
