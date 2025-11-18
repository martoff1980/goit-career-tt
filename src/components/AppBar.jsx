/** @format */
import { Outlet } from 'react-router-dom';
import { AppBar as MuiAppBar, Toolbar, Typography, Link, useTheme, Box } from '@mui/material';
import Navigation from './Navigation';
import { colors } from '../styles/GlobalStyle';

const styleAppBar = {
	m: 0,
	p: 0,
	width: '1440px',
	height: '72px',
	didsplay: 'flex',
	background: `${colors.bages}`,
};

const styleLogo = {
	width: '136px',
	display: 'flex',
	ml: '44px',
	color: `${colors.main}`,
	letterSpacing: '1px',
	fontSize: '18px',
	fontWeight: 900,
	lineHeight: 0.88,
};

const styleSpan = {
	fontSize: '18px',
	fontWeight: 900,
	lineHeight: 0.88,
	letterSpacing: '1px',
	color: `${colors.text}`,
};
export default function AppBar() {
	return (
		<>
			<MuiAppBar className="AppBar" sx={styleAppBar} position="static">
				<Toolbar className="AppBar-ToolBar" sx={{ m: 0, pl: 0 }}>
					<Typography className="Logo" component="div" sx={styleLogo}>
						Travel
						<span style={styleSpan}>Tucks</span>
					</Typography>
					<Navigation />
				</Toolbar>
			</MuiAppBar>
			<Outlet />
		</>
	);
}
