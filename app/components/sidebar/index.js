import Nav from '../nav';
import { SidebarWrap } from './sidebar.styled';

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/type/');
  const data = await res.json();

  return { categories: data.results };
}
export default async function Sidebar() {
  const categories = await getData();

  return (
    <SidebarWrap>
      <Nav {...categories} />
    </SidebarWrap>
  );
}
