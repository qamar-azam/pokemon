'use client';

import styled from 'styled-components';

export const Heading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 15px;
`;

export const DetailList = styled.div`
  margin-top: 40px;
`;

export const DetailListItem = styled.div`
  margin-bottom: 8px;
  text-transform: capitalize;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const NotFoundText = styled.p`
  font-size: 28px;
`;

export const Button = styled.div`
  margin-top: 20px;
  a {
    background: black;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    margin-top: 10px;
    padding: 10px;
  }
`;
