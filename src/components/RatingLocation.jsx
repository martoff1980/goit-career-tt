/** @format */
import { Grid, Typography, Rating } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import { colors } from '../styles/GlobalStyle';

const styleBlock = {
	display: 'flex',
	fontSize: '16px',
	fontWeight: 400,
	lineHeight: 1.5,
};

export default function RatingLocation({ camper }) {
	return (
		<Grid container className="camper-rating" gap={0.5}>
			<Rating name="read-only" value={1} max={1} readOnly size="small" precision={1} sx={{ alignItems: 'center', mb: 0, fontSize: '16px' }} />
			<Grid mt={1} sx={styleBlock}>
				<Typography borderBottom={`1px solid ${colors.main} `}>{camper.rating}</Typography>
				<Typography borderBottom={`1px solid ${colors.main} `}>({camper.reviews.length} Reviews)</Typography>
				<Typography className="camper-location" display={'flex'} ml={2}>
					<MapIcon fontSize="small" />
					{camper.location}
				</Typography>
			</Grid>
		</Grid>
	);
}
