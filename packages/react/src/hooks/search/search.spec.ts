import { renderHook, act } from '@testing-library/react-hooks';

import { useSearch } from './search';

describe('hooks.useSearch()', () => {
  it('Should return matching string for basic config', () => {
    const text = 'Napoleon';
    const { result } = renderHook(() =>
      useSearch({
        data: [text, 'Netflix'],
      })
    );

    act(() => {
      result.current.search(text);
    });
    const { hits } = result.current;
    expect(result.current.hits).toHaveLength(1);
    const [match] = hits;

    expect(match).toBe(text);
  });
});
