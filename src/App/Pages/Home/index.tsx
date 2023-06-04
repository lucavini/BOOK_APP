import Template from '@Components/template';
import { ReactComponent as Order } from '@Assets/icons/order.svg';
import Table from '@Components/atomic/organisms/Table';

import Trash from '@Assets/icons/trash.svg';
import Details from '@Assets/icons/eye.svg';
import Modal from '@Components/atomic/organisms/Modal';
import React from 'react';

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
      />
    </Template>
  );
}

export default Home;
