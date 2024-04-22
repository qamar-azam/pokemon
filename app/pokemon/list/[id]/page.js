import List from '@/app/components/list';

async function getPokemonList(q) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${q}`);
  if (!res.ok) {
    //throw new Error('Not Found');
    return { success: false, msg: 'Not Found' };
  }
  return { success: true, data: await res.json() };
}
export default async function Page({ params }) {
  const { id } = params;
  const list = await getPokemonList(id);

  return (
    <div>
      <List list={list.data} />
    </div>
  );
}
