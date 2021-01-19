import { Route } from 'react-router-dom';
import Drawings from '../../pages/Drawings';
import Landing from '../../pages/Landing';
import NewDrawing from '../../pages/NewDrawing';
import UserDrawings from '../../pages/UserDrawings';

const Routes = () => {
	return (
		<>
			<Route component={Landing} exact path="/" />
			<Route component={Drawings} path="/posts/view" />
			<Route component={NewDrawing} path="/posts/new" />
			<Route component={UserDrawings} path="/posts/edit" />
		</>
	);
};

export default Routes;
