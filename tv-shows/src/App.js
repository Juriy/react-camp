import { Route, HashRouter, Switch } from 'react-router-dom';
import PopularShowsScreen from './screens/PopularShowsScreen/PopularShowsScreen';
import FavoritesScreen from './screens/FavoritesScreen/FavoritesScreen';
import DetailsScreen from './screens/DetailsScreen/DetailsScreen';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/popular">
          <PopularShowsScreen />
        </Route>
        <Route path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route path="/details/:id">
          <DetailsScreen />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
