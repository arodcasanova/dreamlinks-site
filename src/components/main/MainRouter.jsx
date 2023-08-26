import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Product from 'components/main/product/Product';
import Resume from 'components/main/story/Story';
import Story from './story/Story';

const MainRouter = () => (
	<Switch>
		<Route 
			exact path={['/', '/product']}
			component={Product} />
		<Route 
			exact path="/story"
			component={Story} />
	</Switch>
);

export default MainRouter;
