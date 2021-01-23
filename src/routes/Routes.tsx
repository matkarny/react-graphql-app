import { Route, Switch} from 'react-router-dom'
import PostView from '../views/PostView.css/PostView';
import UsersDetails from '../views/UserDetails/UserDetails';
import UsersView from '../views/UsersView/UsersView';


const Routes = ()  =>
    <Switch>
        <Route path='/user/:id/:postId' component={PostView} />
        <Route path='/user/:id' component={UsersDetails} />
        <Route path='/' component={UsersView} />
    </Switch>

  ;


export default Routes