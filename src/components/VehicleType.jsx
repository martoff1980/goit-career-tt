/** @format */

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Box, useTheme, OutlinedInput, InputAdornment, Grid, SvgIcon } from '@mui/material';
import Typography from '@mui/material/Typography';

import vanIcon from '../img/icons/bi_grid-1x2.svg?import';
import integratedIcon from '../img/icons/bi_grid-2x2.svg?import';
import alcoveIcon from '../img/icons/bi_grid-3x3-gap.svg?import';

export default function VehicleType() {
	const items = [
		{ label: 'Van', icon: <img src={vanIcon} alt="Van" width={32} height={32} /> },
		{ label: 'Fully Integrated', icon: <img src={integratedIcon} alt="Fully Integrated" width={32} height={32} /> },
		{ label: 'Alcove', icon: <img src={alcoveIcon} alt="Alcove" width={32} height={32} /> },
	];

	const [selected, setSelected] = useState([]);
	const handleToggle = (label) => {
		setSelected((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]));
	};

	return (
		<>
			<Box
				className="VehicleType-Box"
				sx={{
					marginTop: '32px',
					height: '168px',
				}}>
				<Typography
					variant="h6"
					sx={{
						width: '120px',
						fontSize: '20px',
						fontWeight: '600',
						fontStyle: 'normal',
						lineHeight: 1.2,
					}}>
					Vehicle type
				</Typography>
				<hr style={{ marginTop: '16px', border: '1px solid #DADDE1' }} />
				<Grid container spacing={'10px'} sx={{ marginTop: '30px' }}>
					{items.map((item, index) => {
						const isActive = selected.includes(item.label);
						return (
							<Button
								variant="outlined"
								key={index}
								item={item}
								onClick={() => handleToggle(item.label)}
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'column',
									gap: 1,
									borderColor: isActive ? '#E44848' : '#DADDE1',
									'&:hover': {
										borderColor: isActive ? '#E44848' : '#DADDE1',
									},
									borderRadius: '12px',
									width: '112px',
									height: '96px',
								}}>
								{item.icon}
								<Typography
									sx={{
										fontSize: '16px',
										fontWeight: 500,
										color: ' #101828',
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
