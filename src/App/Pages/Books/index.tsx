import Template from '@Components/template';
import { ReactComponent as Book } from '@Assets/icons/book.svg';

function Books() {
  return (
    <Template
      Icon={Book}
      title="Livros"
      subtitle="Gerencie os livros do seu estabelecimento"
    >
      Livros
    </Template>
  );
}

export default Books;
