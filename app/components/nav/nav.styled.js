'use client';
import Link from 'next/link';

import styled from 'styled-components';

export const ItemWrapper = styled.div``;
export const Item = styled(Link)`
  cursor: pointer;
  text-transform: capitalize;
  border-right: 1px solid #c1c1c1;
`;
export const Heading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 15px;
`;
