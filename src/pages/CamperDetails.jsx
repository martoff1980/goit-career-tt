/** @format */

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadCamperById, clearCamper } from '../features/camperDetails/camperDetailsSlice';
import Loader from '../components/Loader';
import Gallery from '../components/Gallery';
import RatingStars from '../components/RatingStars';
import { styled } from '@mui/material/styles'; //'styled-components';
import { formatPrice } from '../utils/formatPrice';
import { showNotify } from '../features/ui/uiSlice';

const Wrap = styled.div`
	max-width: 1000px;
	margin: 24px auto;
	padding: 0 16px;
`;
const Card = styled.div`
	background: #fff;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: ${({ theme }) => theme.radius};
	box-shadow: ${({ theme }) => theme.shadow};
	padding: 16px;
	margin-bottom: 16px;
`;

function BookingForm({ camperName }) {
	const dispatch = useDispatch();
	const [values, setValues] = useState({ name: '', email: '', date: '', comment: '' });
	const [submitting, setSubmitting] = useState(false);
	const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
	const onSubmit = (e) => {
		e.preventDefault();
		if (!values.name || !values.email || !values.date) {
			dispatch(showNotify({ type: 'error', message: "Будь ласка, заповніть обов'язкові поля." }));
			return;
		}
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			dispatch(showNotify({ type: 'success', message: `Кемпер "${camperName}" заброньовано!` }));
			setValues({ name: '', email: '', date: '', comment: '' });
		}, 800);
	};
	return (
		<Card as="form" onSubmit={onSubmit}>
			<h3>Бронювання</h3>
			<div style={{ display: 'grid', gap: 8 }}>
				<input name="name" placeholder="Ім'я*" value={values.name} onChange={onChange} />
				<input name="email" placeholder="Email*" value={values.email} onChange={onChange} />
				<input name="date" type="date" placeholder="Дата*" value={values.date} onChange={onChange} />
				<textarea name="comment" placeholder="Коментар" value={values.comment} onChange={onChange} />
			</div>
			<button disabled={submitting} style={{ marginTop: 10 }}>
				{submitting ? 'Відправлення...' : 'Забронювати'}
			</button>
		</Card>
	);
}

export default function CamperDetails() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { data, status } = useSelector((s) => s.camperDetails);
	useEffect(() => {
		dispatch(loadCamperById(id));
		return () => dispatch(clearCamper());
	}, [dispatch, id]);
	if (status === 'loading' || !data) return <Loader />;
	const specs = ['transmission', 'engine', 'AC', 'bathroom', 'kitchen', 'TV', 'radio', 'refrigerator', 'microwave', 'gas', 'water'];
	const details = ['form', 'length', 'width', 'height', 'tank', 'consumption'];
	return (
		<Wrap>
			<Card>
				<h2 style={{ marginTop: 0 }}>{data.name}</h2>
				<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
					<RatingStars value={data?.rating || 0} />
					<span style={{ color: '#6b7280' }}>({data?.reviews?.length || 0} reviews)</span>
					<strong style={{ marginLeft: 'auto' }}>{formatPrice(data.price)}</strong>
				</div>
				<p style={{ color: '#6b7280' }}>{data.location}</p>
				<Gallery images={data.gallery || (data.image ? [data.image] : [])} />
			</Card>

			<Card>
				<h3>Характеристики</h3>
				<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
					{specs
						.filter((k) => data[k])
						.map((k) => (
							<span key={k} style={{ border: '1px solid #e5e7eb', padding: '4px 8px', borderRadius: 10 }}>
								{k}: {String(data[k])}
							</span>
						))}
				</div>
				т
			</Card>

			<Card>
				<h3>Деталі</h3>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
					{details
						.filter((k) => data.details?.[k] ?? data[k])
						.map((k) => {
							const val = data.details?.[k] ?? data[k];
							return (
								<div key={k}>
									<strong>{k}</strong>: {val}
								</div>
							);
						})}
				</div>
			</Card>

			<Card>
				<h3>Відгуки</h3>
				{data.reviews && data.reviews.length > 0 ? (
					<div style={{ display: 'grid', gap: 10 }}>
						{data.reviews.map((r, idx) => (
							<div key={idx} style={{ borderBottom: '1px solid #eee', paddingBottom: 8 }}>
								<strong>{r.reviewer_name || 'Anonymous'}</strong> <RatingStars value={r.reviewer_rating || r.rating || 0} />
								<div style={{ color: '#374151' }}>{r.comment || r.text}</div>
							</div>
						))}
					</div>
				) : (
					<p>Поки що немає відгуків.</p>
				)}
			</Card>

			<BookingForm camperName={data.name} />
		</Wrap>
	);
}
