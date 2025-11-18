/** @format */
import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { colors, styleH3 } from '../styles/GlobalStyle';

const FeaturesPanel = React.lazy(() => import('./FeaturesPanel'));
const ReviewsPanel = React.lazy(() => import('./ReviewsPanel'));

const tabsStyles = {
	pl: 0,
	...styleH3,
	textTransform: 'capitalize',
	color: `${colors.main}`,
	'&.Mui-selected': {
		color: `${colors.main}`,
	},
};

function TabPanel({ children, value, index, ...other }) {
	return (
		<div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && index == 0 && <FeaturesPanel />}
			{value === index && index == 1 && <ReviewsPanel />}
		</div>
	);
}

export default function TabsPanel() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box
			className="Tabs-Box"
			sx={{
				mt: '60px',
				display: 'flex',
				direction: 'row',
			}}
			position="static">
			<Box className="Tabs-Case">
				<Tabs
					sx={{
						borderBottom: `2px solid ${colors.grey_light}`,
					}}
					value={value}
					onChange={handleChange}
					TabIndicatorProps={{ sx: { backgroundColor: `${colors.button}` } }}>
					<Tab sx={tabsStyles} label="Features" />
					<Tab sx={tabsStyles} label="Reviews" />
				</Tabs>
				<TabPanel value={value} index={0}>
					Content first Tab
				</TabPanel>
				<TabPanel value={value} index={1}>
					Content second Tab
				</TabPanel>
			</Box>
		</Box>
	);
}
