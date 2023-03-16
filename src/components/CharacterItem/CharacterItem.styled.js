import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  max-width: 312px;

  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  overflow: hidden;

  @media screen and (max-width: 547px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 548px) {
    max-width: 240px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 232px;
  object-fit: cover;
  margin: 0;

  @media screen and (min-width: 548px) {
    height: 168px;
  }
`;

export const Wrapper = styled.div`
  padding: 12px 16px;
`;

export const Title = styled.h1`
  margin-bottom: 1px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(30 / 20);
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(21 / 14);
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;
