import PropTypes from 'prop-types';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TvShowItem = ({
  id,
  favorited,
  name,
  rating,
  posterSrc,
  overview,
  releaseDate,
  onClick,
  ...rest
}) => {
  return (
    <Card {...rest}>
      <Image
        as={Link}
        to={`/details/${id}`}
        wrapped
        width={50}
        src={`https://image.tmdb.org/t/p/w500/${posterSrc}`}
        alt={name}
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{releaseDate}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <Icon name="star" />
        {rating}
      </Card.Content>
      <Card.Content>
        <Button onClick={onClick} fluid color="green" basic={!favorited}>
          Add to favorites
        </Button>
      </Card.Content>
    </Card>
  );
};

TvShowItem.propTypes = {
  id: PropTypes.number,
  favorited: PropTypes.bool,
  name: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  rating: PropTypes.number,
  posterSrc: PropTypes.string,
  onClick: PropTypes.func,
};

export default TvShowItem;
