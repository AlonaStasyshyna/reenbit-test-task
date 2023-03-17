import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'utils/GlobalStyle.styled';
import { Button, Header } from './BackButton.styled';

export const BackButton = () => {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <Header>
      <Container>
        <Button
          type="button"
          onClick={() => navigation(location?.state?.from || '/characters')}
        >
          GO BACK
        </Button>
      </Container>
    </Header>
  );
};
