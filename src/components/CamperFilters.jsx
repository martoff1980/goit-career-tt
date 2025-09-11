/** @format */

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Box, useTheme, OutlinedInput, InputAdornment, Grid } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import { useDispatch, useSelector } from 'react-redux';
import { resetList, loadCampers } from '../features/campers/campersSlice';
import VehicleEquipment from './VehicleEquipment';
import VehicleType from './VehicleType';

export default function CamperFilters() {
	const filters = useSelector((s) => s.filters);
	const dispatch = useDispatch();
	const apply = () => {
		dispatch(resetList());
		dispatch(loadCampers());
	};

	return (
		<>
			<Box
				className="Details-Box"
				sx={{
					width: '360px',
					height: '800px',
					border: '1px solid transparent',
				}}>
				<Box
					className="Location-Box"
					sx={{
						paddingTop: '48px',
						width: '360px',
						height: '88px',
					}}>
					<Box
						className="Location-Header"
						sx={{
							fontSize: '16px',
							fontWeight: 400,
							lineHeight: 1.5,
						}}>
						Location
					</Box>
					<OutlinedInput
						sx={{
							width: '360px',
							height: '56px',
							lineHeight: 1.5,
							fontSize: '16px',
							fontWeight: '400',
							fontStyle: 'Regular',
							borderRadius: '12px',
							backgroundColor: '#F7F7F7',
						}}
						placeholder="Kyiv, Ukraine"
						startAdornment={<InputAdornment position="start">{<MapIcon fontSize="small" />}</InputAdornment>}
					/>
				</Box>
				<Box className="Filters-Box" sx={{ paddingTop: '40px' }}>
					<Box
						className="Filters-Title"
						sx={{
							fontSize: '16px',
							fontWeight: 400,
							fontStyle: 'medium',
							lineHeight: 1.5,
						}}>
						Filters
					</Box>
					<Box
						className="Vehicle-Box"
						sx={{
							marginTop: '32px',
							width: '360px',
							color: '#101828',
						}}>
						<VehicleEquipment />
						<VehicleType />
					</Box>
				</Box>
				<Button
					className="Search-Button"
					style={{
						marginTop: '40px',
						width: '166px',
						height: '56px',
						color: '#FFF',
						backgroundColor: '#E44848',
						borderRadius: '200px',
					}}
					onClick={apply}>
					Search
				</Button>
			</Box>
			<Outlet />
		</>
	);
}
