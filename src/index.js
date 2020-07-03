import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { I18nextProvider } from "react-i18next";
import i18n from './i18n';

ReactDom.render(<I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>, document.getElementById('root'));

