/** @format */

import React from 'react';
import { Grid } from '@mui/material';
import { colors } from '../styles/GlobalStyle';
import Icon from './Icon';

const icons = {
	automatic: 'icon-diagram',
	manual: 'icon-manual',
	AC: 'icon-wind',
	petrol: 'icon-fuel-pump',
	diesel: 'icon-barrel_oil',
	hybrid: 'icon-hybrid',
	Kitchen: 'icon-cup-hot',
	TV: 'icon-tv',
	Radio: 'icon-ui-radios',
	Bathroom: 'icon-ph_shower',
	Refrigerator: 'icon-solar_fridge-outline',
	Microwave: 'icon-lucide_microwave',
	GAS: 'icon-hugeicons_gas-stove',
	Water: 'icon-ion_water-outline',
};

const stylesBage = {
	display: 'flex',
	minWidth: '80px',
	height: '48px',
	gap: 2,
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '10px',
	fontSize: '16px',
	lineHeight: 1.5,
	fontWeight: 500,
	border: `1px solid ${colors.bages}`,
	backgroundColor: `${colors.bages}`,
};

const formatLabel = (key) => {
	if (!key) return key;
	if (key.length <= 3) return key.toUpperCase();
	return key.charAt(0).toUpperCase() + key.slice(1);
};

export default function CamperSpecsList({ specs, camper }) {
	return (
		<Grid
			container
			className="Items-Bedges"
			columnSpacing={'24px'}
			rowSpacing={'8px'}
			sx={{
				width: '100%',
				height: '104px',
			}}>
			{specs
				.filter((k) => camper[k])
				.map((k) => {
					const val = camper[k];
					const label = formatLabel(k);
					const isBooleanTrue = typeof val === 'boolean' && val === true;
					return (
						<React.Fragment key={k}>
							<span className="Bedge" style={stylesBage}>
								{isBooleanTrue ? <Icon name={icons[label]} /> : <Icon name={icons[val]} />}
								{isBooleanTrue ? <span>{label}</span> : <span>{val}</span>}
							</span>
						</React.Fragment>
					);
				})}
		</Grid>
	);
}
