'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const ListWrap = styled.div`
  width: 65%;
`;

export const Heading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 15px;
`;

export const Item = styled(Link)`
  display: inline-block;
  text-transform: capitalize;
  width: 30%;
`;
