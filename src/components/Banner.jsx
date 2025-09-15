/** @format */
import { Button, Box, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bgImage from '../img/hero.jpg';

export default function Banner() {
	const nav = useNavigate();
	return (
		<>
			<Box
				className="Bunner"
				style={{
					margin: '0 0 0 0',
					padding: '0 0 0 0',
					minWidth: '1440px',
					minHeight: '696px',
					backgroundImage: `url(${bgImage})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
				<Box
					className="Hero-Section"
					style={{
						marginLeft: '60px',
						padding: '256px 0 256px 0',
						width: '571px',
					}}>
					<Box className="Hero-Title">
						<h1
							style={{
								fontWeight: '600',
								fontSize: '32px',
								fontStyle: 'Semibold',
								letterSpacing: '9.5px',
								lineHeight: '1.00',
								textAlign: 'start',
								color: '#F7F7F7',
							}}>
							Campers of your dreams
						</h1>
						<h2
							style={{
								// letterSpacing: '9.5px',
								fontweight: '600',
								fontSize: '24px',
								fontStyle: 'Semibold',
								lineHeight: '1.00',
								paragraphSpacing: '20px',
								textAlign: 'start',
								letterSpacing: '0.17px',
								color: '#F7F7F7',
							}}>
							You can find everything you want in our catalog
						</h2>
						<Button
							style={{
								margin: '16px 0 16px 0',
								padding: '16px 24px',
								height: '48px',
								width: '173px',
								fontweight: '500',
								fontSize: '16px',
								lineHeight: '1.50',
								textAlign: 'center',
								borderRadius: '200px',
								color: '#FFFFFF',
								backgroundColor: '#E44848',
							}}
							onClick={() => nav('/catalog')}>
							View Now
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
}
