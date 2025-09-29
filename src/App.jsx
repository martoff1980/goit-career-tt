/** @format */

import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
// const CamperDetailsOld = lazy(() => import('./pages/CamperDetails_old'));
const CamperDetails = lazy(() => import('./pages/CamperDetails'));

export default function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/" element={<AppBar />}>
					<Route index element={<Home />} />
					<Route path="catalog">
						<Route index element={<Catalog />} />
						<Route path=":id" element={<CamperDetails />} />
						{/* <Route path=":id" element={<CamperDetailsOld />} /> */}
					</Route>
				</Route>
			</Routes>
		</Suspense>
	);
}
