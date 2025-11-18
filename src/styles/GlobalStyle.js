/** @format */

import { blue } from '@mui/material/colors';

export const colors = {
	main: '#101828',
	text: '#475467',
	grey: '#6C717B',
	button: '#E44848',
	button_hover: '#D84343',
	rating: '#FFC531',
	grey_light: '#DADDE1',
	bages: '#F2F4F7',
	inputs: '#F7F7F7',
	white: '#FFFFFF',
};

export const styleH1 = { fontSize: '48px', fontWeight: 600, lineHeight: 0.67 };
export const styleH2 = { fontSize: '24px', fontWeight: 600, lineHeight: 1.33 };
export const styleH3 = { fontSize: '20px', fontWeight: 600, lineHeight: 1.2 };
export const styleBody = { fontSize: '24px', lineHeight: 1.33 };
export const styleBody2 = { fontSize: '16px', fontWeight: 400, lineHeight: 1.5 };
export const styleMediumBody2 = { fontSize: '16px', fontWeight: 500, lineHeight: 1.5 };
export const styleButton = { fontSize: '16px', fontWeight: 500, lineHeight: 1.5 };
export const styleBodyUnderLine = {
	fontSize: '16px',
	fontWeight: 400,
	lineHeight: 1.5,
	'& :not(.camper-location):not(.camper-location *)': { borderBottom: `1px solid ${colors.main}` },
};

export const styleRedButton = {
	styleButton,
	fontWeight: 500,
	textTransform: 'capitalize',
	textAlign: 'center',
	borderRadius: '200px',
	color: `${colors.white}`,
	backgroundColor: `${colors.button}`,
	'&:hover': {
		backgroundColor: `${colors.button_hover}`,
	},
};

export const styleGreyButton = {
	styleButton,
	fontWeight: 500,
	textTransform: 'capitalize',
	textAlign: 'center',
	borderRadius: '200px',
	color: `${colors.main}`,
	border: `1px solid ${colors.grey_light}`,
	'&:hover': {
		borderColor: `${colors.button_hover}`,
	},
};

export const styleInputs = {
	styleBody,
	fontWeight: 400,
	borderRadius: '12px',
	bgcolor: `${colors.inputs}`,
};
