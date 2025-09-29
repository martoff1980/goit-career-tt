/** @format */

import React from 'react';
import { Box, List, Grid, Typography } from '@mui/material';

const getStyleImage = (thumb) => {
	return {
		width: '292px',
		height: '320px',
		borderRadius: '10px',
		border: '1px solid #DADDE1',
		backgroundImage: `url(${thumb})`,
		backgroundSize: 'cover',
	};
};

const styleDescription = {
	height: '48px',
	whiteSpace: 'wrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	fontSize: '16px',
	fontWeight: 400,
	lineHeight: 1.5,
};

export default function Gallery({ camper }) {
	return (
		<>
			<Grid container className="Camper-Images" sx={{ mt: '28px' }}>
				<List sx={{ display: 'flex', gap: 2 }}>
					{camper.gallery.map((c) => {
						const styleImage = getStyleImage(c.thumb);
						return <Box key={c.thumb || index} className="Camper-Image" sx={styleImage}></Box>;
					})}
				</List>
			</Grid>
			<Grid sx={{ mt: 2, height: '100hv', overflow: 'hidden' }}>
				<Typography className="camper-description" sx={styleDescription}>
					{camper.description}
				</Typography>
			</Grid>
		</>
	);
}
