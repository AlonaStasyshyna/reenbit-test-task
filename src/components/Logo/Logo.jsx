import logoImg from '../../images/logo.png';
import { Container } from 'utils/GlobalStyle.styled';
import { Header, ImgLogo, Link } from './Logo.styled';

export const Logo = () => {
  return (
    <Header>
      <Container>
        <Link href="/reenbit-test-task">
          <ImgLogo src={logoImg} alt="Logo" />
        </Link>
      </Container>
    </Header>
  );
};
