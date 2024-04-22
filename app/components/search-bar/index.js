'use client';

import { useRouter } from 'next/navigation';
import { SearchForm, SearchField } from './search-bar.styled';

function SearchBar() {
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    router.push(`/search?q=${value}`);
  };
  return (
    <SearchForm onSubmit={handleSearch}>
      <SearchField type='text' placeholder='Search...' name='search' />
    </SearchForm>
  );
}

export default SearchBar;
