import BarChart from '@/app/components/bar-chart';
import Image from 'next/image';

import { Heading, DetailList, DetailListItem, Label } from './pokemon.styled';

async function getData(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return await res.json();
}

async function Page({ params }) {
  const { id } = params;
  const conversion = 3.281;
  const pokemon = await getData(id);

  return (
    <>
      <Heading>Pokemon Details</Heading>

      <DetailList>
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon?.name}
          width='300'
          height='300'
        />

        <div>
          <DetailListItem>
            <Label>Name:</Label> {pokemon?.name}
          </DetailListItem>
          <DetailListItem>
            <Label>Ability:</Label>{' '}
            {pokemon?.abilities.map((item) => item.ability.name + ', ')}
          </DetailListItem>

          <DetailListItem>
            <Label>Types: </Label>
            {pokemon?.types.map((item) => item.type.name + ', ')}
          </DetailListItem>
          <DetailListItem>
            <Label>Height:</Label> {(pokemon?.height / conversion).toFixed(2)}m
          </DetailListItem>
          <DetailListItem>
            <Label>Weight:</Label> {pokemon?.weight}lbs
          </DetailListItem>

          <BarChart pokemon={pokemon} />
        </div>
      </DetailList>
    </>
  );
}

export default Page;
