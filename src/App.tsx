import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'routing/routes';
import './App.scss';

const App = () => {
	return (
		<div className="appContainer">
			<div className="app__header"></div>
			<div className="app__body">
				<BrowserRouter>
					<Routes>
						{routes.map(({ path, component }) => (
							<Route path={path} element={component} key={path} />
						))}
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
};

export default App;
