import { Container, MenuNavigation, Buttom } from './styles';

import logo from '@Assets/images/logo_small.svg';
import { ReactComponent as Home } from '@Assets/icons/home.svg';
import { ReactComponent as Book } from '@Assets/icons/book.svg';
import { ReactComponent as Profile } from '@Assets/icons/profile.svg';
import { ReactComponent as Log_off } from '@Assets/icons/log-off.svg';

function LateralMenu() {
  return (
    <Container>
      <img src={logo} alt="logo" />

      <MenuNavigation>
        <Buttom to="/">
          <Home />
          Vendas
        </Buttom>

        <Buttom to="/books">
          <Book />
          Livros
        </Buttom>
      </MenuNavigation>

      <MenuNavigation>
        <Buttom to="/profile">
          <Profile />
          Meu Perfil
        </Buttom>
        <Buttom to="/logout">
          <Log_off />
          Sair
        </Buttom>
      </MenuNavigation>
    </Container>
  );
}

export default LateralMenu;
