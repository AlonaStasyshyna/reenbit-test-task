import styled from 'styled-components';
import { Container } from 'utils/GlobalStyle.styled';

export const CharacterPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 85px;

  @media screen and (min-width: 1068px) {
    padding-bottom: 142px;
  }
`;
