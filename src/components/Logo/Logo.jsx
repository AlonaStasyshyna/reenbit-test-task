import logoImg from '../../images/logo.png';

export const Logo = () => {
  return (
    <header>
      <a href="/">
        <img src={logoImg} alt="Logo" width="312px" height="104px" />
      </a>
    </header>
  );
};
