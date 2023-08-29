import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from 'components/navigation/Navigation';
import MainRouter from 'components/main/MainRouter';
import './index.css';

const Index = () => {
	useEffect(() => {
		document.title = 'Dreamlinks'
	}, [])

	return (
		<React.StrictMode> 
			<Router>
				<Navigation />
				<MainRouter />
			</Router>
		</React.StrictMode>
	)
};

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
