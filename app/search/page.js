import SearchResult from '../components/search-result';
import { Suspense } from 'react';

async function getData(q) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);
  if (!res.ok) {
    return { success: false, msg: 'Not Found' };
  }
  return { success: true, data: await res.json() };
}

export default async function Page({ searchParams }) {
  const { q } = searchParams;
  const result = await getData(q);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <SearchResult result={result} />
      </Suspense>
    </>
  );
}
