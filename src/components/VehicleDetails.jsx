/** @format */
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { colors } from '../styles/GlobalStyle';

const stylesTitle = {
	fontSize: '20px',
	fontWeight: 600,
	lineHeight: 1.2,
	color: `${colors.main}`,
};

const stylesVechile = {
	display: 'flex',
	width: '100%',
	m: 0,
	p: 0,
	flexDirection: 'row',
	justifyContent: 'space-between',
	fontSize: '16px',
	fontWeight: 500,
	lineHeight: 1.5,
};
export default function VehicleDetails({ vechils, camper }) {
	return (
		<Box className="Items-Vechile" width={'100%'} height={'296px'}>
			<Typography className="vechile-title" variant="h3" sx={stylesTitle}>
				Vehicle details
			</Typography>
			<hr style={{ marginTop: '16px', border: `1px solid ${colors.grey_light}` }} />
			<Grid
				container
				className="Vehicle-Info"
				sx={{
					mt: 4,
					width: '100%',
					height: '224px',
					gap: 2,
				}}>
				{vechils
					.filter((k) => camper[k.alt])
					.map((k) => {
						return (
							<React.Fragment key={k.alt}>
								<Box className="Vechile" sx={stylesVechile}>
									<Typography>{k.label}</Typography>
									<Typography>{camper[k.alt]}</Typography>
								</Box>
							</React.Fragment>
						);
					})}
			</Grid>
		</Box>
	);
}
