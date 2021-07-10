import { renderHook } from '@testing-library/react-hooks';
import usePopularApi from './usePopularApi';

test('returns the initial state', () => {
  const { result } = renderHook(usePopularApi);
  const { popularShows, isLoaded, error } = result.current;
  expect(popularShows).toEqual(null);
  expect(isLoaded).toEqual(false);
  expect(error).toEqual(null);
});
