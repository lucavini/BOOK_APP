import GlobalStyles from './Styles/global';
import { ThemeProvider } from 'styled-components';
import styledTheme from '~Styles/Themes/defaults';

function App() {
  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyles />
      <div>hello world</div>
    </ThemeProvider>
  );
}

export default App;
