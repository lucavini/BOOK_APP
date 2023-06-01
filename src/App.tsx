import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import styledTheme from './styles/Themes/defaults';

function App() {
  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyles />
      <div>hello world</div>
    </ThemeProvider>
  );
}

export default App;
