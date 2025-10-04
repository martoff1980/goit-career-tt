/** @format */

import React from 'react';
import { Box, Button, Grid, TextField, Typography, Stack, Paper } from '@mui/material';
import { useFormik } from 'formik';
import { colors, styleH3, styleBody2, styleInputs, styleRedButton } from '../styles/GlobalStyle';

const styleInput = {
	...styleInputs,
};

const styleTitle = {
	width: '100%',
	...styleH3,
};

const styleSupporting = {
	...styleBody2,
	color: `${colors.grey}`,
};

const styleSubmitButton = {
	mt: 1,
	p: 0,
	height: '56px',
	...styleRedButton,
};

const heightInput = { height: '60px' };

const heightComment = { height: '118px' };

export default function CampervanBookingForm() {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			bookingDate: '',
			comment: '',
		},
		validate: (values) => {
			const errors = {};
			if (!values.name.trim()) {
				errors.name = 'Name is required';
			}
			if (!values.email.trim()) {
				errors.email = 'Email is required';
			} else {
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegex.test(values.email)) {
					errors.email = 'Enter a valid email';
				}
			}
			if (!values.bookingDate.trim()) {
				errors.bookingDate = 'Booking date is required';
			}
			return errors;
		},
		onSubmit: (values, { resetForm }) => {
			console.log('Form submitted:', values);
			alert('Booking request sent!');
			resetForm();
		},
	});

	return (
		<Paper
			// elevation={3}
			sx={{
				Width: '100%',
				p: '44px 57px',
				borderRadius: '10px',
				backgroundColor: 'background.paper',
			}}>
			<Grid className="EmailTitle-Grid" container sx={{ gap: 1 }}>
				<Typography variant="h3" sx={styleTitle}>
					Book your campervan now
				</Typography>
				<Typography variant="body2" sx={styleSupporting}>
					Stay connected! We are always ready to help you.
				</Typography>
			</Grid>
			<Box className="InputForm-Box" sx={{ pt: '22px' }} component="form" noValidate onSubmit={formik.handleSubmit} autoComplete="off">
				<Stack spacing={1.8}>
					<Box height={heightInput}>
						<TextField
							className="Name-Input"
							label="Name"
							name="name"
							variant="outlined"
							fullWidth
							sx={styleInput}
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.name && Boolean(formik.errors.name)}
							// helperText={formik.touched.name && formik.errors.name}
							required
						/>
					</Box>
					<Box height={heightInput}>
						<TextField
							className="Email-Input"
							label="Email"
							name="email"
							variant="outlined"
							fullWidth
							sx={styleInput}
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.email && Boolean(formik.errors.email)}
							// helperText={formik.touched.email && formik.errors.email}
							required
						/>
					</Box>
					<Box height={heightInput}>
						<TextField
							className="Date-Input"
							label="Booking date"
							name="bookingDate"
							variant="outlined"
							fullWidth
							type="date"
							sx={styleInput}
							value={formik.values.bookingDate}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.bookingDate && Boolean(formik.errors.bookingDate)}
							// helperText={formik.touched.bookingDate && formik.errors.bookingDate}
							InputLabelProps={{ shrink: true }}
							// placeholder="Booking date*"
							required
						/>
					</Box>
					<Box height={heightComment}>
						<TextField
							className="Comment-Input"
							label="Comment"
							name="comment"
							variant="outlined"
							sx={styleInput}
							fullWidth
							multiline
							minRows={4}
							value={formik.values.comment}
							onChange={formik.handleChange}
						/>
					</Box>
					<Box sx={{ width: '166px', px: '180px' }}>
						<Button type="submit" variant="contained" color="error" sx={styleSubmitButton} fullWidth>
							Send
						</Button>
					</Box>
				</Stack>
			</Box>
		</Paper>
	);
}
