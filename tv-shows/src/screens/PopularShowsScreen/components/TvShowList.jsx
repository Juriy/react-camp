import { Card, Segment } from 'semantic-ui-react';

const TvShowList = ({ children }) => {
  return (
    <Segment>
      <Card.Group doubling itemsPerRow={4} style={{ listStyle: 'none' }}>
        {children}
      </Card.Group>
    </Segment>
  );
};

export default TvShowList;
