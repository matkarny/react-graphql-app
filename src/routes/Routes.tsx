import { Route, Switch} from 'react-router-dom'
import PostView from '../views/PostView.css/PostView';
import UsersDetails from '../views/UserDetails/UserDetails';
import UsersView from '../views/UsersView/UsersView';

export const USER_ROUTE = '/user'

const Routes = ()  =>
    <Switch>
        <Route path={`${USER_ROUTE}/:userId/:postId`} component={PostView} />
        <Route path={`${USER_ROUTE}/:userId`} component={UsersDetails} />
        <Route path='/' component={UsersView} />
    </Switch>

  ;


export default Routes