import { ListWrap, Heading } from './list.styled';
import ListItem from './listItem';

function List({ list }) {
  return (
    <ListWrap>
      <Heading>Pokemon List</Heading>
      {list &&
        list.pokemon.map((item) => {
          return <ListItem key={item.pokemon.name} item={item} />;
        })}
    </ListWrap>
  );
}

export default List;
