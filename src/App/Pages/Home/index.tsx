import Template from '@Components/template';
import { ReactComponent as Order } from '@Assets/icons/order.svg';
import Table from '@Components/atomic/organisms/Table';

import Trash from '@Assets/icons/trash.svg';
import Details from '@Assets/icons/eye.svg';
import Modal from '@Components/atomic/organisms/Modal';
import React from 'react';
import { BookDetailContainer, Footer, Info } from './styles';
import Text from '@Components/atomic/atoms/Text';
import Subtitle from '@Components/atomic/atoms/Subtitle';

function Home() {
  const [detailModal, setDetailModal] = React.useState(false);
  return (
    <Template
      Icon={Order}
      title="Vendas realizadas"
      subtitle="Visualize todas as vendas"
    >
      <Table
        actionButtons={[
          {
            icon: Details,
            onClick: () => {
              setDetailModal(true);
            },
          },
          {
            icon: Trash,
            onClick: () => console.log('teste'),
          },
        ]}
      />

      <Modal
        visible={detailModal}
        setVisible={setDetailModal}
        title="A menina que roubava livros"
        cancelButtonProps={{
          label: 'Excluir Registro',
          onClick: () => console.log('excluir'),
        }}
      >
        <BookDetailContainer>
          <Info>
            <Subtitle>Data de venda</Subtitle>
            <Text font="semibold" size="large">
              07/12/2022
            </Text>
          </Info>

          <Info>
            <Subtitle>Sinopse</Subtitle>
            <Text font="thin" size="medium">
              Durante a Segunda Guerra Mundial, uma jovem garota chamada Liesel
              Meminger sobrevive fora de Munique lendo os livros que ela rouba.
              Ajudada por seu pai adotivo, ela aprende a ler e partilhar livros
              com seus amigos, incluindo um judeu que vive na clandestinidade em
              sua casa. Enquanto não está lendo ou estudando, ela faz algumas
              tarefas para a mãe e brinca com o amigo Rudy.
            </Text>
          </Info>

          <Footer>
            <Subtitle>Total</Subtitle>
            <Text font="semibold" size="large">
              R$ 40,00
            </Text>
          </Footer>
        </BookDetailContainer>
      </Modal>
    </Template>
  );
}

export default Home;
