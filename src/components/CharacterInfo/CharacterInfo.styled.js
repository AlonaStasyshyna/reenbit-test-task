import styled from 'styled-components';

export const Img = styled.img`
  width: 150px;
  height: 148px;
  object-fit: cover;
  margin: 0;
  margin-bottom: 34px;

  outline: 5px solid #f2f2f7;
  border-radius: 150px;

  @media screen and (min-width: 548px) {
    width: 300px;
    height: 300px;
    margin-bottom: 16px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 34px;
  text-align: center;
  font-weight: 400;
  line-height: calc(38 / 32);

  @media screen and (min-width: 548px) {
    margin-bottom: 48px;
    font-size: 48px;
    line-height: calc(56 / 48);
  }
`;

export const Text = styled.p`
  margin-bottom: 25px;

  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  letter-spacing: 0.15px;
  color: #8e8e93;

  @media screen and (min-width: 548px) {
    margin-bottom: 57px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 312px;
  padding-left: 16px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(24 / 16);
  letter-spacing: 0.15px;

  @media screen and (min-width: 548px) {
    width: 413px;
  }
`;

export const Item = styled.li`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: -11px;
    right: 0;
    display: block;
    width: 296px;
    height: 1px;

    background-color: rgba(33, 33, 33, 0.08);

    @media screen and (min-width: 548px) {
      width: 397px;
    }
  }
`;

export const Span = styled.span`
  display: block;

  font-weight: 400;
  font-size: 14px;
  line-height: calc(20 / 14);
  letter-spacing: 0.25px;
  color: #6e798c;
`;
