import { Link } from 'react-router-dom';

const FavoritesScreen = () => {
  return (
    <div>
      List of favorites, there's nothing to see here, go back to{' '}
      <Link to="/popular">About</Link>
    </div>
  );
};

export default FavoritesScreen;
