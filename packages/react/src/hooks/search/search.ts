import Fuse from 'fuse.js';
import { useCallback, useState } from 'react';

export function useSearch<T>(searchOptions: SearchOptions<T>) {
  const { fetch, data, options } = searchOptions;
  const [hits, setHits] = useState<T[]>([]);
  const search = useCallback(
    async (text: string) => {
      const fetchResponse = fetch ? await fetch(text) : data || [];
      const fuse = new Fuse(fetchResponse, options);

      const results = fuse.search(text);
      setHits(results.map(({ item }) => item));
    },
    [fetch, data]
  );

  return { hits, search };
}

interface SearchOptions<T> {
  fetch?(text: string): T[] | Promise<T[]>;
  data?: T[];
  options?: Fuse.IFuseOptions<T>;
}
