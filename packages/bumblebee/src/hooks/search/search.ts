import Fuse from 'fuse.js';
import { useCallback, useState } from 'react';

export function useSearch<T>(options: SearchOptions<T>) {
  const { fetch, data } = options;
  const [hits, setHits] = useState<T[]>([]);
  const search = useCallback(
    async (text: string) => {
      const fetchResponse = fetch ? await fetch(text) : data || [];
      const fuse = new Fuse(fetchResponse, {});

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
}
