import { Route } from 'react-router-dom';
import DrawingForm from '../../pages/CreateDrawing/DrawingForm';
import Drawings from '../../pages/Drawings';
import Landing from '../../pages/Landing';

const Routes = () => {
	return (
		<>
			<Route component={Landing} exact path="/" />
			<Route component={Drawings} path="/drawings" />
			<Route component={DrawingForm} path="/post/new" />
		</>
	);
};

export default Routes;
