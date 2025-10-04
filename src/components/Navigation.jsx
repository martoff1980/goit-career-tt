/** @format */

import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { colors, styleMediumBody2 } from '../styles/GlobalStyle';

const Navigation = () => {
	const getNavLinkSx = (isActive) => ({
		...styleMediumBody2,
		border: 'none',
		color: isActive ? `${colors.button_hover}` : `${colors.main}`,
		textDecoration: 'none',
		// '&:hover': {
		// 	color: isActive ? '#D84343' : '#101828',
		// },
	});
	return (
		<Box
			component="nav"
			sx={{
				display: 'flex',
				paddingLeft: '430px',
				gap: '32px',
			}}>
			<NavLink to="/" style={({ isActive }) => getNavLinkSx(isActive)}>
				{({ isActive }) => (
					<Box sx={getNavLinkSx(isActive)} component="span">
						Home
					</Box>
				)}
			</NavLink>
			<NavLink to="/catalog" style={({ isActive }) => getNavLinkSx(isActive)}>
				{({ isActive }) => (
					<Box sx={getNavLinkSx(isActive)} component="span">
						Catalog
					</Box>
				)}
			</NavLink>
		</Box>
	);
};

export default Navigation;
