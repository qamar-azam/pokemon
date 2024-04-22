'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin-bottom: 50px;
`;

function PageTitle({ text }) {
  return (
    <Title>
      <Link href='/'>{text}</Link>
    </Title>
  );
}

export default PageTitle;
