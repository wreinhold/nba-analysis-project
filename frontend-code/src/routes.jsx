import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {MLAnalytics} from './pages/MLAnalytics';
import {Analysis} from './pages/Analysis';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Analysis/>
                </Route>
            </Switch>
            <Switch>
                <Route path='/'>
                    <MLAnalytics/>
                </Route>
            </Switch>
        </Router>
    )
}