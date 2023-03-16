import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 548px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px 20px;
    justify-content: center;
    max-width: 1020px;
  }
`;
