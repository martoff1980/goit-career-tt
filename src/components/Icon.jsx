/** @format */
import React from 'react';

function Icon({ name, className = '', width = '20', height = '20', ...props }) {
	return (
		<>
			<svg className={className} width={width} height={height} {...props}>
				<use href={`/sprite.svg#${name}`} />
			</svg>
		</>
	);
}

export default Icon;
