/** @format */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Button, Box, useTheme, OutlinedInput, InputAdornment, Grid, SvgIcon } from '@mui/material';
import Typography from '@mui/material/Typography';
import { setLocation, setForm, toggleFeature } from '../features/filters/filtersSlice';
import windIcon from '../img/icons/wind.svg?import';
import diagramIcon from '../img/icons/diagram.svg?import';
import showerIcon from '../img/icons/ph_shower.svg?import';
import cuphotIcon from '../img/icons/cup-hot.svg?import';
import tvIcon from '../img/icons/tv.svg?import';
import { colors } from '../styles/GlobalStyle';

const styleVehicleEqBox = {
	width: '181px',
	fontSize: '20px',
	fontWeight: '600',
	fontStyle: 'normal',
	lineHeight: 1.2,
};

const getStyleVehicleEqButton = (isActive) => {
	return {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		gap: 1,
		border: `1px solid ${colors.grey_light}`,
		borderColor: isActive ? `${colors.button}` : `${colors.grey_light}`,
		'&:hover': {
			borderColor: isActive ? `${colors.button}` : `${colors.grey_light}`,
		},
		borderRadius: '12px',
		width: '112px',
		height: '96px',
	};
};
export default function VehicleEquipment() {
	const items = [
		{ label: 'AC', alt: 'AC', icon: <img src={windIcon} alt="Wind" width={32} height={32} /> },
		{ label: 'Automatic', alt: 'automatic', icon: <img src={diagramIcon} alt="Automatic" width={32} height={32} /> },
		{ label: 'Kitchen', alt: 'kitchen', icon: <img src={cuphotIcon} alt="Cup-hot" width={32} height={32} /> },
		{ label: 'TV', alt: 'TV', icon: <img src={tvIcon} alt="TV" width={32} height={32} /> },
		{ label: 'Bathroom', alt: 'bathroom', icon: <img src={showerIcon} alt="Shower" width={32} height={32} /> },
	];

	const [selected, setSelected] = useState([]);
	const dispatch = useDispatch();
	const handleToggle = (label) => {
		setSelected((prev) => {
			let newSelected;

			if (prev.includes(label)) {
				newSelected = prev.filter((item) => item !== label);
			} else {
				newSelected = [...prev, label];
			}

			dispatch(toggleFeature(label));
			return newSelected;
		});
	};

	return (
		<>
			<Box className="VehicleEquipment-Box">
				<Typography variant="h6" sx={styleVehicleEqBox}>
					Vehicle equipment
				</Typography>
				<hr style={{ marginTop: '16px', border: `1px solid ${colors.grey_light}` }} />
				<Grid container spacing={'10px'} sx={{ marginTop: '30px' }}>
					{items.map((item, index) => {
						const isActive = selected.includes(item.alt);
						return (
							<Button variant="outlined" key={index} item={item} onClick={() => handleToggle(item.alt)} sx={getStyleVehicleEqButton(isActive)}>
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
