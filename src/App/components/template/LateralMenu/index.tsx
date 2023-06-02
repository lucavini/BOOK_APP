import { Container, MenuNavigation, Buttom } from './styles';

import logo from '@Assets/images/logo_small.svg';

function LateralMenu() {
  return (
    <Container>
      <img src={logo} alt="logo" />

      <MenuNavigation>
        <Buttom to="/">Vendas</Buttom>
        <Buttom to="/books">Livros</Buttom>
      </MenuNavigation>

      <MenuNavigation>
        <Buttom to="/">Meu Perfil</Buttom>
        <Buttom to="/">Sair</Buttom>
      </MenuNavigation>
    </Container>
  );
}

export default LateralMenu;
