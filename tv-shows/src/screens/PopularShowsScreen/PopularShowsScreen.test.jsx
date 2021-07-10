import { rest } from 'msw';
import { setupServer } from 'msw/node';
import popularShowsMock from '../../popular-shows.json';
import { render, screen, waitFor } from '@testing-library/react';
import PopularShowsScreen from './PopularShowsScreen';
import { StaticRouter as Router } from 'react-router-dom';

const server = setupServer(
  rest.get('https:/api.themoviedb.org/3/tv/popular', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(popularShowsMock));
  })
);

describe('PopularShowsScreen', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('renders tv shows', async () => {
    render(
      <Router>
        <PopularShowsScreen />
      </Router>
    );
    await waitFor(() => expect(screen.getByText(/superman & lois/i)));
  });
});
