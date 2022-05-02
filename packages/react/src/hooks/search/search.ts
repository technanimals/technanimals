import Fuse from 'fuse.js';
import { useCallback, useState } from 'react';

/**
 *
 * @param searchOptions
 * @returns
 */
export function isFetch<T>(
  searchOptions: SearchOptions<T>
): searchOptions is FetchSearchOptions<T> {
  return Boolean((searchOptions as FetchSearchOptions<T>).fetch);
}

/**
 *
 * @param searchOptions
 * @returns
 */
export function useSearch<T>(searchOptions: SearchOptions<T>) {
  const { options } = searchOptions;
  const [hits, setHits] = useState<T[]>([]);
  const search = useCallback(
    async (text: string) => {
      const fetchResponse = isFetch(searchOptions)
        ? await searchOptions.fetch(text)
        : searchOptions.data;
      const fuse = new Fuse(fetchResponse, options);

      const results = fuse.search(text);
      setHits(results.map(({ item }) => item));
    },
    [searchOptions]
  );

  return { hits, search };
}

interface BaseSearchOptions<T> {
  /**
   *
   */
  options?: Fuse.IFuseOptions<T>;
}
interface FetchSearchOptions<T> extends BaseSearchOptions<T> {
  /**
   *
   * @param text
   */
  fetch(text: string): T[] | Promise<T[]>;
}
interface DataSearchOptions<T> extends BaseSearchOptions<T> {
  /**
   *
   */
  data: T[];
}

type SearchOptions<T> = FetchSearchOptions<T> | DataSearchOptions<T>;
