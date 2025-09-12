/** @format */

// src/components/UntitledSvg.jsx
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Padding } from '@mui/icons-material';
import MapIcon from '@mui/icons-material/Map';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function CamperCard({ camper }) {
	const favorites = useSelector((s) => s.favorites);
	const dispatch = useDispatch();
	const isFav = favorites.includes(camper.id);

	// Перелік характеристик, які потрібно відобразити
	const specs = ['transmission', 'engine', 'AC', 'bathroom', 'kitchen', 'TV', 'radio', 'refrigerator', 'microwave', 'gas', 'water'];

	const formatLabel = (key) => {
		if (!key) return key;
		if (key.length <= 3) return key.toUpperCase();
		return key.charAt(0).toUpperCase() + key.slice(1);
	};

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
							<Grid sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
								<Typography className="camper-price" sx={{ fontWeight: 600 }}>
									€{camper.price}
								</Typography>
								<FavoriteBorderIcon width="26px" height="24px" />
							</Grid>
						</Grid>
						<Grid sx={{ mt: 1 }}>
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
							<Box
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
							</Box>
						</Grid>
					</Grid>
					<Grid sx={{ mt: 'auto' }}>
						<Button
							className="ShowMore-Button"
							style={{
								width: '166px',
								height: '56px',
								color: '#FFF',
								backgroundColor: '#E44848',
								borderRadius: '200px',
							}}>
							Show More
						</Button>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
}
