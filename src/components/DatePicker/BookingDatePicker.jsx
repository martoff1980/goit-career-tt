/** @format */

// CustomDatePicker.jsx
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker-custom.css';

const CustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
	<input
		ref={ref}
		value={value}
		onClick={onClick}
		onChange={onChange}
		placeholder="Booking date*"
		style={{
			width: '527px',
			height: '60px',
			fontSize: '16px',
			lineHeight: 1.5,
			fontWeight: 400,
			borderRadius: '12px',
			border: 'none',
			backgroundColor: '#F7F7F7',
		}}
	/>
));
const CustomDatePicker = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	return (
		<DatePicker
			selected={selectedDate}
			onChange={(date) => setSelectedDate(date)}
			calendarStartDay={0} // Sunday first
			dayClassName={(date) => (selectedDate && date.toDateString() === selectedDate.toDateString() ? 'highlighted-day' : undefined)}
			// dayClassName={(date) => (date.getDay() === selectedDate?.getDay() ? 'highlighted-day' : undefined)}
			formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)} // Сокращения дней недели
			customInput={<CustomInput />}
			placeholderText="Booking date*"
		/>
	);
};

export default CustomDatePicker;
