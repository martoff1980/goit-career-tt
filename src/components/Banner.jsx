/** @format */
import { Button, Box, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bgImage from '../img/hero.jpg';
import { colors, styleH1, styleH2, styleRedButton } from '../styles/GlobalStyle';

const styleHeroSection = {
	ml: '60px',
	p: '256px 0 256px 0',
	width: '571px',
};

const getStyleBanner = (Image) => {
	return {
		m: 0,
		p: 0,
		minWidth: '1440px',
		minHeight: '696px',
		backgroundImage: `url(${Image})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		color: `${colors.inputs}`,
	};
};

const styleHeroTitle = {
	...styleH1,
	letterSpacing: '0.2px',
};

const styleHeroTitle2 = {
	mt: 2,
	width: '96.3%',
	...styleH2,
	letterSpacing: '0.2px',
};

const styleButtonViewNow = {
	mt: '40px',
	height: '56px',
	width: '173px',
	...styleRedButton,
};
export default function Banner() {
	const nav = useNavigate();
	return (
		<>
			<Box className="Bunner" sx={getStyleBanner(bgImage)}>
				<Box className="Hero-Section" sx={styleHeroSection}>
					<Box className="Hero-Title">
						<Typography variant="h1" sx={styleHeroTitle}>
							Campers of your dreams
						</Typography>
						<Typography variant="h2" sx={styleHeroTitle2}>
							You can find everything you want in our catalog
						</Typography>
						<Button sx={styleButtonViewNow} onClick={() => nav('/catalog')}>
							View Now
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
}
