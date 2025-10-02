/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { colors } from '../styles/GlobalStyle';

const Title = React.lazy(() => import('./CamperTitle'));
const CamperSpecs = React.lazy(() => import('./CamperSpecsList'));

const styleCard = {
	height: '368px',
	border: `1px solid ${colors.grey_light}`,
	borderRadius: '20px',
	overflow: 'hidden',
};

const getStyleImage = (camper) => {
	return {
		width: '292px',
		height: '320px',
		borderRadius: '10px',
		bgcolor: `${colors.grey_light}`,
		backgroundImage: `url(${camper.gallery[0].thumb})`,
		backgroundSize: 'cover',
	};
};

const styleInfoTop = {
	display: 'flex',
	width: '100%',
};

const stylesSpecs = {
	paddingTop: '12px',
	width: '100%',
	height: '104px',
	display: 'flex',
	flexWrap: 'wrap',
	gap: '8px',
};

const styleButtonShowMore = {
	width: '166px',
	height: '56px',
	color: `${colors.white}`,
	backgroundColor: `${colors.button}`,
	borderRadius: '200px',
};
export default function CamperCard({ camper }) {
	const navigate = useNavigate();
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
		<Box className="Camper-Card" sx={styleCard}>
			<Box
				className="Card-Item"
				sx={{
					padding: '24px',
					display: 'flex',
					gap: '24px',
				}}>
				{/* Ліва картинка */}
				<Box className="Camper-Image" sx={getStyleImage(camper)}></Box>
				{/* Права частина */}
				<Box
					className="Camper-Info"
					sx={{
						width: '524px',
						display: 'flex',
						flexDirection: 'column',
					}}>
					<Grid container>
						<Grid className="Camper-Info-Top" sx={styleInfoTop}>
							<Title camper={camper} layoutMode={'flex'} />
							<Box pt={0.5} pl={1.5}>
								<FavoriteBorderIcon width="26px" height="24px" />
							</Box>
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
							<Box className="camper-specs" sx={stylesSpecs}>
								<CamperSpecs camper={camper} specs={specs} />
							</Box>
						</Grid>
					</Grid>
					<Grid sx={{ mt: 'auto' }}>
						<Button className="ShowMore-Button" style={styleButtonShowMore} onClick={() => navigate(`/catalog/${camper.id}`)}>
							Show More
						</Button>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
}
