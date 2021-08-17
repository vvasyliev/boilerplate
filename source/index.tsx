import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import './index.css';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	</BrowserRouter>
);

const root = document.querySelector('main#root');

render(<App />, root);
