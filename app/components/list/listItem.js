import { Item } from './list.styled';

function ListItem({ item }) {
  const urlArray = item.pokemon.url.split('/');
  const id = urlArray[urlArray.length - 2];
  return (
    <Item key={item.pokemon.name} href={`/pokemon/${id}`}>
      - {item.pokemon.name}
    </Item>
  );
}

export default ListItem;
