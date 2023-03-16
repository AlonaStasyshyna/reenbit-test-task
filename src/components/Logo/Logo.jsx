import logoImg from '../../images/logo.png';
import { Container } from 'utils/GlobalStyle.styled';
import { Header, ImgLogo } from './Logo.styled';

export const Logo = () => {
  return (
    <Header>
      <Container>
        <a href="/reenbit-test-task">
          <ImgLogo src={logoImg} alt="Logo" />
        </a>
      </Container>
    </Header>
  );
};
