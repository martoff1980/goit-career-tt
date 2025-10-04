/** @format */

import React, { useState } from 'react';
import { Box, Typography, Avatar, Rating, Grid } from '@mui/material';
import { colors, styleBody2, styleH2, styleMediumBody2 } from '../styles/GlobalStyle';

const styleAvatar = {
	width: 60,
	height: 60,
	...styleH2,
	textTransform: 'uppercase',
	color: `${colors.button}`,
	bgcolor: `${colors.bages}`,
};

const stylePerson = {
	m: 0,
	p: 0,
	...styleMediumBody2,
	color: `${colors.main}`,
};

const styleComment = {
	m: 0,
	pb: 0,
	height: '72px',
	...styleBody2,
	color: `${colors.text}`,
};

function Review({ name, rating, comment }) {
	const avatar = name[0];
	return (
		<Box className="Review-Box">
			<Grid className="Person" container pb={2} spacing={2} width={'172px'}>
				<Avatar sx={styleAvatar}>{avatar}</Avatar>
				<Box className="Person-Title" alignSelf={'center'}>
					<Typography variant="subtitle1" sx={stylePerson} gutterBottom>
						{name}
					</Typography>
					<Rating name="read-only" value={rating} readOnly size="small" precision={1} sx={{ mb: 0, fontSize: '16px' }} />
				</Box>
			</Grid>
			<Typography variant="body2" sx={styleComment}>
				{comment}
			</Typography>
		</Box>
	);
}

export default function CampervanReviews({ reviews }) {
	return (
		<Grid container spacing={'44px'} sx={{}}>
			{/* Reviews Section */}
			<Grid container>
				{reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
					<Review key={index} name={reviewer_name} rating={reviewer_rating} comment={comment} />
				))}
			</Grid>
		</Grid>
	);
}
