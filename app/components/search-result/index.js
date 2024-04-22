'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Heading,
  DetailList,
  DetailListItem,
  Label,
  NotFoundText,
  Button
} from './search-result.styled';

function SearchResult({ result }) {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('q');

  if (!result.success) {
    return (
      <NotFoundText>Search result for {searchTerm} not found!!</NotFoundText>
    );
  }

  const pokemon = result.data;
  return (
    <>
      <Heading>Search Result</Heading>
      <DetailList>
        <Image
          src={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
          width='300'
          height='300'
        />
        <DetailListItem>
          <Label>Name:</Label> {pokemon?.name}
        </DetailListItem>

        <DetailListItem>
          <Label>Types: </Label>
          {pokemon?.types.map((item) => item.type.name + ', ')}
        </DetailListItem>

        <Button>
          <Link href={`/pokemon/${pokemon.id}`}>More Details</Link>
        </Button>
      </DetailList>
    </>
  );
}

export default SearchResult;
