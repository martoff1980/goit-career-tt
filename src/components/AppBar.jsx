/** @format */
import { Outlet } from 'react-router-dom';
import { AppBar as MuiAppBar, Toolbar, Typography, Link, useTheme, Box } from '@mui/material';
import Navigation from './Navigation';
export default function AppBar() {
	return (
		<>
			<MuiAppBar
				className="AppBar"
				style={{
					margin: '0 0 0 0',
					padding: '0 0 0 0',
					width: '1440px',
					height: '72px',
					didsplay: 'flex',
					background: '#F2F4F7',
				}}
				position="static">
				<Toolbar className="AppBar-ToolBar" sx={{ margin: '0 0 0 0', paddingLeft: '0px' }}>
					<Typography
						className="Logo"
						component="div"
						sx={{
							width: '136px',
							marginLeft: '44px',
							color: '#101828',
							letterSpacing: '3.5px',
							fontSize: '14px',
							fontWeight: 900,
							lineHeight: 1.2,
						}}>
						Travel
						<span
							style={{
								color: '#475467',
								fontSize: '14px',
								lineHeight: 1.2,
								fontWeight: 900,
							}}>
							Tucks
						</span>
					</Typography>
					<Navigation />
				</Toolbar>
			</MuiAppBar>
			<Outlet />
		</>
	);
}
