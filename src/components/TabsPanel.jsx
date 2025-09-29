/** @format */
import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const FeaturesPanel = React.lazy(() => import('./FeaturesPanel'));
const ReviewsPanel = React.lazy(() => import('./ReviewsPanel'));

const tabsStyles = {
	pl: 0,
	fontSize: '20px',
	fontWeight: 600,
	lineHeight: 1.2,
	textTransform: 'capitalize',
	color: '#101828',
	'&.Mui-selected': {
		color: '#101828',
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
						borderBottom: '2px solid #DADDE1',
					}}
					value={value}
					onChange={handleChange}
					TabIndicatorProps={{ sx: { backgroundColor: '#E44848' } }}>
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
