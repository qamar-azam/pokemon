'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const ButtonWrap = styled.div`
  width: 100%;
`;
const Button = styled.button`
  border-radius: 5px;
  background-color: #000;
  color: #fff;

  padding: 8px 15px;
`;

function BackButton() {
  const router = useRouter();
  return (
    <ButtonWrap>
      <Button type='button' onClick={() => router.back()}>
        {'<- Back'}
      </Button>
    </ButtonWrap>
  );
}

export default BackButton;
