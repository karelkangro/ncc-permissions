import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { GlobalStylesComponent, device, size } from 'theme';
import { Router } from 'modules';
import { AppContainer } from 'components';
import { ThemeModeProvider, useTheme } from 'context';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ device, size }}>
        <ThemeModeProvider>
          <AppContent />
        </ThemeModeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStylesComponent theme={theme} />
      <AppContainer>
        <Router />
      </AppContainer>
    </>
  );
};
