import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const BodyText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray};
`;
