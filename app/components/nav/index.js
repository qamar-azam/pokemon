import { ItemWrapper, Heading, Item } from './nav.styled';

function Nav({ categories }) {
  return (
    <ItemWrapper>
      <Heading>Categories</Heading>
      {categories
        ? categories.map((cat) => {
            const urlArray = cat.url.split('/');
            return (
              <Item
                href={`/pokemon/list/${urlArray[urlArray.length - 2]}`}
                key={cat.name}
                className='block'
              >
                - {cat.name}
              </Item>
            );
          })
        : null}
    </ItemWrapper>
  );
}

export default Nav;
