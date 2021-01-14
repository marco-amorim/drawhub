import { Route } from 'react-router-dom';
import CreateDrawing from '../../pages/CreateDrawing';
import Drawings from '../../pages/Drawings';
import Landing from '../../pages/Landing';

const Routes = () => {
	return (
		<>
			<Route component={Landing} exact path="/" />
			<Route component={Drawings} path="/drawings" />
			<Route component={CreateDrawing} path="/post/new" />
		</>
	);
};

export default Routes;
