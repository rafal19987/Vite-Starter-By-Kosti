import React from 'react';
import { MainPage } from 'pages';

interface IRoute {
	path: string;
	exact: boolean;
	component: JSX.Element;
}

const routes: IRoute[] = [
	{
		path: '/',
		exact: true,
		component: <MainPage />,
	},
];

export { routes };
