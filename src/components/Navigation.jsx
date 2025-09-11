/** @format */

import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Box, useTheme } from '@mui/material';

const Navigation = () => {
	const getNavLinkSx = (isActive) => ({
		fontSize: '16px',
		lineHeight: 1.5,
		border: 'none',
		color: isActive ? '#101828' : '#D84343',
		textDecoration: 'none',
		'&:hover': {
			color: isActive ? '#D84343' : '#101828',
		},
	});
	return (
		<Box
			component="nav"
			sx={{
				display: 'flex',
				paddingLeft: '430px',
				gap: '32px',
			}}>
			<Box sx={getNavLinkSx} component={NavLink} to="/">
				Home
			</Box>

			<Box sx={getNavLinkSx} component={NavLink} to="/catalog">
				Catalog
			</Box>
		</Box>
	);
};

export default Navigation;
