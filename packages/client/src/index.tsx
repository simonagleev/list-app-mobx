import App from './components/App';
import { ModalProvider } from 'react-declarative';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import ioc from './lib/ioc';

const wrappedApp = (
  <SnackbarProvider
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
  >
    <ModalProvider>
      <Provider {...ioc}>
        <App />
      </Provider>
    </ModalProvider>
  </SnackbarProvider>
);

ReactDOM.render(wrappedApp, document.getElementById('root'));
