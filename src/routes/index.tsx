import { Route, Switch } from 'react-router-dom';
import Drawings from '../pages/Drawings';
import EditDrawing from '../pages/EditDrawing';
import Landing from '../pages/Landing';
import NewDrawing from '../pages/NewDrawing';
import UserDrawings from '../pages/UserDrawings';

const Routes = () => {
	return (
		<Switch>
			<Route component={Landing} exact path="/" />
			<Route component={Drawings} exact path="/posts/view" />
			<Route component={NewDrawing} exact path="/posts/new" />
			<Route component={UserDrawings} exact path="/posts/edit" />
			<Route exact component={EditDrawing} path="/posts/edit/:id" />
		</Switch>
	);
};

export default Routes;
