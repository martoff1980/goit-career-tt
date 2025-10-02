/** @format */

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Button, Box, useTheme, OutlinedInput, InputAdornment, Grid, SvgIcon } from '@mui/material';
import Typography from '@mui/material/Typography';
import { setLocation, setForm, toggleFeature } from '../features/filters/filtersSlice';
import vanIcon from '../img/icons/bi_grid-1x2.svg?import';
import integratedIcon from '../img/icons/bi_grid-2x2.svg?import';
import alcoveIcon from '../img/icons/bi_grid-3x3-gap.svg?import';
import { colors } from '../styles/GlobalStyle';

const getStyleVehicleTypeButton = (isActive) => {
	return {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		gap: 1,
		borderColor: isActive ? `${colors.button}` : `${colors.grey_light}`,
		'&:hover': {
			borderColor: isActive ? `${colors.button}` : `${colors.grey_light}`,
		},
		borderRadius: '12px',
		width: '112px',
		height: '96px',
	};
};

const styleVehicleType = {
	width: '120px',
	fontSize: '20px',
	fontWeight: '600',
	fontStyle: 'normal',
	lineHeight: 1.2,
};
export default function VehicleType() {
	const items = [
		{ label: 'Van', alt: 'panelTruck', icon: <img src={vanIcon} alt="Van" width={32} height={32} /> },
		{ label: 'Fully Integrated', alt: 'fullyIntegrated', icon: <img src={integratedIcon} alt="Fully Integrated" width={32} height={32} /> },
		{ label: 'Alcove', alt: 'alcove', icon: <img src={alcoveIcon} alt="Alcove" width={32} height={32} /> },
	];

	const [selected, setSelected] = useState(null);
	const dispatch = useDispatch();

	const handleToggle = (label) => {
		// setSelected((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]));
		setSelected((prev) => (prev === label ? null : label));
		const action = label !== null && selected === null ? setForm(label) : label === selected ? setForm(null) : setForm(label);
		dispatch(action);
	};

	return (
		<>
			<Box
				className="VehicleType-Box"
				sx={{
					marginTop: '32px',
					height: '168px',
				}}>
				<Typography variant="h6" sx={styleVehicleType}>
					Vehicle type
				</Typography>
				<hr style={{ marginTop: '16px', border: `1px solid ${colors.grey_light}` }} />
				<Grid container spacing={'10px'} sx={{ marginTop: '30px' }}>
					{items.map((item, index) => {
						// const isActive = selected.includes(item.label);
						const isActive = selected === item.alt;
						return (
							<Button variant="outlined" key={index} item={item} onClick={() => handleToggle(item.alt)} sx={getStyleVehicleTypeButton(isActive)}>
								{item.icon}
								<Typography
									sx={{
										fontSize: '16px',
										fontWeight: 500,
										color: `${colors.main}`,
									}}>
									{item.label}
								</Typography>
							</Button>
						);
					})}
				</Grid>
			</Box>
			<Outlet />
		</>
	);
}
