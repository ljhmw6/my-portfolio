import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import { theme, darkTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import ThemeToggle from './components/ThemeToggle';
import useThemeStore from './store/useThemeStore';

function App() {
  const { isDarkMode } = useThemeStore();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ThemeToggle />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
