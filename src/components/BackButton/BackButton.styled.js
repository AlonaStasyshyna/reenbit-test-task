import styled from 'styled-components';
import arrowBack from '../../images/arrowBack.svg';

export const Header = styled.header`
  margin-bottom: 77px;
  padding-top: 23px;

  @media screen and (min-width: 1068px) {
    margin-bottom: 31px;
    padding-top: 21px;
    padding-left: 2%;
  }
`;

export const Button = styled.button`
  display: flex;
  border: none;
  background-color: transparent;

  font-family: inherit;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(21 / 18);
  color: #000000;

  ::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 8px;

    background-image: url(${arrowBack});
  }
`;
