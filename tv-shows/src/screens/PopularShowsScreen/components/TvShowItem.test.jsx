import TvShowItem from './TvShowItem';
import { StaticRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('renders a tv show item with a label "add to favorites"', () => {
  const TestComponent = () => (
    <Router>
      <TvShowItem />
    </Router>
  );
  render(<TestComponent />);
  // screen.debug();
  const button = screen.getByText(/add to favorites/i);
  expect(button).toHaveAttribute('type', 'button');
});

test('renders a tv show item with a label "remove from favorites" when already favorited', () => {
  const TestComponent = () => (
    <Router>
      <TvShowItem favorited />
    </Router>
  );
  render(<TestComponent />);
  //screen.debug();
  const button = screen.getByText(/remove from favorites/i);
  expect(button).toHaveAttribute('type', 'button');
});

test('calls onClick when being clicked', () => {
  const onClickMock = jest.fn(() => {});
  const TestComponent = () => (
    <Router>
      <TvShowItem onClick={onClickMock} />
    </Router>
  );
  render(<TestComponent />);

  const button = screen.getByRole('button');
  userEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});

test('toggle favorites button when the component is being clicked', () => {
  const onClickMock = jest.fn(() => {});
  const TestComponent = (props) => (
    <Router>
      <TvShowItem {...props} onClick={onClickMock} />
    </Router>
  );

  const { rerender } = render(<TestComponent />);

  const button = screen.getByRole('button');
  userEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);

  //rerender(<TestComponent favorited />);
});

test('matches snapshot', () => {
  const TestComponent = () => (
    <Router>
      <TvShowItem
        id={2}
        name="Game of Thrones"
        posterSrc="/path/to/poster.png"
        rating={8.5}
        overview="some overview here"
        releaseDate="11.11.2011"
      />
    </Router>
  );
  const { container } = render(<TestComponent />);
  expect(container).toMatchSnapshot();
});

test('matches snapshot for favorited', () => {
  const TestComponent = () => (
    <Router>
      <TvShowItem
        favorited
        id={2}
        name="Game of Thrones"
        posterSrc="/path/to/poster.png"
        rating={8.5}
        overview="some overview here"
        releaseDate="11.11.2011"
      />
    </Router>
  );
  const { container } = render(<TestComponent />);
  expect(container).toMatchSnapshot();
});
