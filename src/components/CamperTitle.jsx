/** @format */

import React from 'react';
import { Grid, Typography } from '@mui/material';

const RatingLocation = React.lazy(() => import('./RatingLocation'));

const styleElement = {
	fontSize: '24px',
	fontWeight: 600,
	lineHeight: 1.33,
};

export default function TestCamperTitle({ camper, layoutMode }) {
	const isFlex = layoutMode === 'flex';
	return (
		<Grid
			container
			justifyContent={'space-between'}
			className="Card-Title"
			direction={isFlex ? 'row' : 'column'}
			sx={{
				width: '100%',
			}}>
			<Grid>
				<Typography className="camper-name" variant="h2" sx={styleElement}>
					{camper.name}
				</Typography>
				<RatingLocation camper={camper} />
			</Grid>
			<Typography mt={isFlex ? 0 : 2} className="camper-price" variant="h2" sx={styleElement}>
				€{camper.price}
			</Typography>
		</Grid>
	);
}
