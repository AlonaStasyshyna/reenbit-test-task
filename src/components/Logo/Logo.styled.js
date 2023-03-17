import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: 32px;
  padding-top: 92px;

  @media screen and (min-width: 1068px) {
    margin-bottom: 16px;
    padding-top: 86px;
  }
`;

export const Link = styled.a`
  display: block;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const ImgLogo = styled.img`
  width: 100%;
  max-width: 600px;

  margin: 0 auto;
`;
