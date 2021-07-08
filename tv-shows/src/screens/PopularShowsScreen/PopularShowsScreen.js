import { useState } from 'react';
import {
  Container,
  Dimmer,
  Divider,
  Header,
  Input,
  Loader,
  Message,
} from 'semantic-ui-react';
import { xor } from 'lodash';
import TvShowList from './components/TvShowList';
import TvShowItem from './components/TvShowItem';
import usePopularApi from './usePopularApi';

const PopularShowsScreen = () => {
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [favorites, setFavorites] = useState([69050, 97513]);

  const { popularShows, error, isLoaded } = usePopularApi(searchFieldValue);

  const handleShowClick = (id) => () => {
    setFavorites(xor(favorites, [id]));
  };

  const handleSearchFieldChange = (element) => {
    setSearchFieldValue(element.target.value);
  };

  const filterShows = () => {
    const { results } = popularShows;

    if (!results) {
      return [];
    }

    return results.filter((show) =>
      show.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    );
  };

  if (!isLoaded) {
    return (
      <Dimmer active inverted>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }

  if (error) {
    return (
      <Message negative>
        <Message.Header>
          We're sorry we can't display the tv shows at the moment
        </Message.Header>
        <p>Please try to call the support</p>
      </Message>
    );
  }

  return (
    <Container style={{ paddingTop: '20px' }}>
      <Header as="h1">TV Shows</Header>
      <Input
        value={searchFieldValue}
        onChange={handleSearchFieldChange}
        placeholder="Search by name..."
      />
      <Divider />
      <TvShowList>
        {filterShows().map(
          ({ id, name, vote_average, poster_path, first_air_date }) => (
            <TvShowItem
              key={id}
              id={id}
              name={name}
              rating={vote_average}
              posterSrc={poster_path}
              favorited={favorites.some((favoriteId) => favoriteId === id)}
              releaseDate={first_air_date}
              onClick={handleShowClick(id)}
            />
          )
        )}
      </TvShowList>
    </Container>
  );
};

export default PopularShowsScreen;
