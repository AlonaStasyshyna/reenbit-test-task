import styled from 'styled-components';
import searchIcon from '../../images/search-icon.svg';

export const Form = styled.form`
  position: relative;
  text-align: center;
  margin-bottom: 32px;

  @media screen and (min-width: 1068px) {
    max-width: 1020px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 61px;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 1020px;
  padding: 16px;
  padding-left: 48px;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;

  font-family: inherit;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: inherit;
`;

export const Button = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;

  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  background-image: url(${searchIcon});

  transition: all 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
