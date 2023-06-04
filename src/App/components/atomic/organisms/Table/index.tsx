import Text from '@Components/atomic/atoms/Text';
import { Body, Header, Row, TableComponent } from './styles';

type IActionButtonsProps = {
  icon: string;
  onClick: () => void;
};

type Iprops = {
  actionButtons?: IActionButtonsProps[];
};

function Table({ actionButtons }: Iprops) {
  return (
    <TableComponent>
      <Header>
        <Row>
          <th>ID</th>
          <th>Data</th>
          <th>Título</th>
          <th>Gênero</th>
          <th>Preço</th>
          <th>Ações</th>
        </Row>
      </Header>

      <Body>
        <Row>
          <td>
            <Text size="small" font="regular">
              123
            </Text>
          </td>
          <td>
            <Text size="small" font="regular">
              07/12/2022
            </Text>
          </td>
          <td>
            <Text size="small" font="regular">
              A menina que roubava livros
            </Text>
          </td>
          <td>
            <Text size="small" font="regular">
              Romance, Historico, Aventura
            </Text>
          </td>
          <td>
            <Text size="small" font="regular">
              R$ 40,00
            </Text>
          </td>
          <td>
            <div className='action-buttoms'>
              {actionButtons?.map((buttom) => (
                <div key={Math.random()} onClick={buttom.onClick}>
                  <img src={buttom.icon} alt="icon" />
                </div>
              ))}
            </div>
          </td>
        </Row>
      </Body>
    </TableComponent>
  );
}

export default Table;
