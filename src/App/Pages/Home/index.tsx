import Template from '@Components/template';
import Text from '@Atoms/Text';
import Buttom from '@Atoms/Buttom';

function Home() {
  return (
    <Template title="Vendas realizadas" subtitle="Visualize todas as vendas">
      <Text font='thin' size='small'>texto</Text>
      <Text font='regular' size='medium'>texto</Text>
      <Text font='regular' size='large'>texto</Text>
      <Text font='semibold' size='large'>texto</Text>
      <Text font='bold' size='large'>texto</Text>
      <Text type='span' font='semibold'>texto</Text>

      <Buttom>click</Buttom>
      <Buttom variation='secondary'>click</Buttom>
      <Buttom variation='tertiary'>click</Buttom>
      <Buttom variation='smallPrimary'>click</Buttom>
      <Buttom variation='smallSecondary'>click here</Buttom>

      <Buttom danger>click</Buttom>
      <Buttom variation='secondary' danger>click</Buttom>
      <Buttom variation='tertiary' danger>click</Buttom>

      <Buttom variation='smallPrimary' danger>click</Buttom>
      <Buttom variation='smallSecondary' danger>click</Buttom>
    </Template>
  );
}

export default Home;
